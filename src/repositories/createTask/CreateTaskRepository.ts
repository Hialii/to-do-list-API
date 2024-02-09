import { MongoClient } from '../../database/mongo';
import { CreateTaskDTO } from '../../dtos/CreateTaskDTO';
import { Task } from '../../entities/Task';
import { ICreateTaskReapository } from './ICreateTaskRepository';

export class CreateTaskRepository implements ICreateTaskReapository {
  async createTask(props: CreateTaskDTO): Promise<Task> {
    const { insertedId } = await MongoClient.db
      .collection('tasks')
      .insertOne(props);

    const task = await MongoClient.db
      .collection<Omit<Task, 'id'>>('tasks')
      .findOne({ _id: insertedId });

    if (!task) {
      throw new Error('User not created');
    }

    const { _id, ...rest } = task;

    return { id: _id.toHexString(), ...rest };
  }
}
