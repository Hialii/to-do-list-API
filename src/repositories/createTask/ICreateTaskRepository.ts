import { Task } from '../../entities/Task';
import { CreateTaskDTO } from '../../dtos/CreateTaskDTO';

export interface ICreateTaskReapository {
  createTask(props: CreateTaskDTO): Promise<Task>;
}
