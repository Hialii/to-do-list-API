export interface CreateTaskDTO{
   title: string;
   description: string;
   status: 'Do' | 'Done' | 'Finish';
}