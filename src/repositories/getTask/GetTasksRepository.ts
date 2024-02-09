import { MongoClient } from '../../database/mongo';
import { Task } from '../../entities/Task';
import { IGetTasksRepository } from './IGetTasksRepository';

export class GetTaskRepository implements IGetTasksRepository {
  async getTasks(): Promise<Task[]> {
    const tasks = await MongoClient.db
      .collection<Omit<Task, 'id'>>('tasks')
      .find({})
      .toArray();

    return tasks.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
