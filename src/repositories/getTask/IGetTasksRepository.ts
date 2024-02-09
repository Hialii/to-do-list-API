import { Task } from "../../entities/Task";

 export interface IGetTasksRepository {
   getTasks() : Promise<Task[]>
 }