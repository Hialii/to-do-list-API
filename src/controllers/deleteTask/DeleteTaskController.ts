import { Request, Response } from 'express';
import { DeleteTaskRepository } from '../../repositories/deleteTask/DeleteTaskRepository';

export class DeleteTaskController {
  constructor(private deleteTaskRepository: DeleteTaskRepository) {}

  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id;

      if (!id) {
        return response.status(400).send('Missing task id');
      }
      const task = await this.deleteTaskRepository.deleteTask(id);

      return response.status(200).json({ taskDeleted: task });
    } catch (err) {
      return response.status(500).json({message: err})
    }
  }
}
