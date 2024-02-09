import { Task } from "../../entities/Task";

export interface IDeleteTaskRepository {
   deleteTask(id: string): Promise<Task>
}