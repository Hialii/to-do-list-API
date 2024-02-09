import { Request, Response } from 'express';
import { CreateTaskRepository } from '../../repositories/createTask/CreateTaskRepository';

export class CreateTaskController {
  constructor(private createTaskRepository: CreateTaskRepository) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
    const requireFiels = ['  title', 'description', 'status'];
    for(const field of requireFiels) {
      if(!field) {
        return response.status(400).send(`Field ${field} are require`)
      }
    }
      const task = await this.createTaskRepository.createTask(request.body);
     return response.status(201).send(task)
    } catch (err) {
      return response.status(500).json({message: err})
    }
  }
}
