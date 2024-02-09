import { Response } from 'express';
import { GetTaskRepository } from '../../repositories/getTask/GetTasksRepository';

export class GetTasksController {
  constructor(private getTasksRepository: GetTaskRepository) {}

  async handle(response: Response) {
    try {
      const tasks = await this.getTasksRepository.getTasks();
      return response.status(200).send(tasks);
    } catch (err) {
      return response.status(500).json({ message: err });
    }
  }
}
