import { Request, Response } from 'express';
import { UpdateTaskRepository } from '../../repositories/updateTask/UpdateTaskRepository';
import { UpdateTaskProps } from '../../repositories/updateTask/IUpdateTaskRepository';

export class UpdateTaskController {
  constructor(private updateTaskRepository: UpdateTaskRepository) {}
  async handle(request: Request, response: Response) {
    try {
      const id = request.params.id;
      const body = request.body;

      if (!id) {
        throw new Error('Missind task id');
      }

      type AllowedField = keyof UpdateTaskProps
      const allowedFieldToUpdate:AllowedField  = 'status';
      const fieldNotAllowedToUpdate = Object.keys(body).some(
        (key) => !(key as keyof UpdateTaskProps === allowedFieldToUpdate)
      );

      if (fieldNotAllowedToUpdate) {
        return response.status(400).json({ message: 'Fields not allowed' });
      }
      const task = await this.updateTaskRepository.updateTask(id, body);

      return response.status(200).send(task);
    } catch (err) {
      return response.status(500).json({ message: 'Something went wrong' });
    }
  }
}
