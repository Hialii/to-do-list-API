import { Task } from "../../entities/Task";

export interface UpdateTaskProps{
   status : 'Do' | 'Done' | 'Finish'
}

export interface IUpdateTaskRepository {
   updateTask(id: string, props: UpdateTaskProps): Promise<Task>
}