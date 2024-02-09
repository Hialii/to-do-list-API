import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo';
import { Task } from '../../entities/Task';
import {
  IUpdateTaskRepository,
  UpdateTaskProps,
} from './IUpdateTaskRepository';

export class UpdateTaskRepository implements IUpdateTaskRepository {
  async updateTask(id: string, props: UpdateTaskProps): Promise<Task> {
    await MongoClient.db.collection('tasks').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { ...props },
      }
    );

    const task = await MongoClient.db
      .collection<Omit<Task, 'id'>>('tasks')
      .findOne({ _id: new ObjectId(id) });

    if (!task) {
      throw new Error('Task not updated');
    }

    const { _id, ...rest } = task;

    return { id: _id.toHexString(), ...rest };
  }
}
