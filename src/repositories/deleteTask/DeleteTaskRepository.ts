import { ObjectId } from 'mongodb';
import { MongoClient } from '../../database/mongo';
import { Task } from '../../entities/Task';
import { IDeleteTaskRepository } from './IDeleteTaskRepository';

export class DeleteTaskRepository implements IDeleteTaskRepository {
  async deleteTask(id: string): Promise<Task> {
    const task = await MongoClient.db
      .collection<Omit<Task, 'id'>>('tasks')
      .findOne({ _id: new ObjectId(id) });

    if (!task) {
      throw new Error('Task not found');
    }

    const { deletedCount } = await MongoClient.db
      .collection('tasks')
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error('Task not deleted ');
    }

     const {_id, ...rest} =  task;

     return {id: _id.toHexString(), ...rest}

  }
}
