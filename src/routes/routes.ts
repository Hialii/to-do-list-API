import { Router } from 'express';
import { CreateTaskRepository } from '../repositories/createTask/CreateTaskRepository';
import { CreateTaskController } from '../controllers/createTask/CreateTaskController';
import { GetTaskRepository } from '../repositories/getTask/GetTasksRepository';
import { GetTasksController } from '../controllers/getTask/getTasksController';
import { DeleteTaskRepository } from '../repositories/deleteTask/DeleteTaskRepository';
import { DeleteTaskController } from '../controllers/deleteTask/DeleteTaskController';
import { UpdateTaskRepository } from '../repositories/updateTask/UpdateTaskRepository';
import { UpdateTaskController } from '../controllers/updateTask/UpdateTaskController';

const router = Router();

router.post('/tasks', (req, res) => {
  const createTaskRepository = new CreateTaskRepository();
  const createTaskController = new CreateTaskController(createTaskRepository);

  return createTaskController.handle(req, res);
});

router.get('/tasks', (req, res) => {
  const getTasksRepository = new GetTaskRepository();
  const getTasksController = new GetTasksController(getTasksRepository);

  return getTasksController.handle(res);
});

router.delete('/tasks/:id', (req, res) => {
  const deleteTaskRepository = new DeleteTaskRepository();
  const deleteTaskController = new DeleteTaskController(deleteTaskRepository);

  return deleteTaskController.handle(req, res);
});

router.patch('/tasks/:id', (req, res) => {
  const updateTaskRepository = new UpdateTaskRepository();
  const updateTaskController = new UpdateTaskController(updateTaskRepository);

  return updateTaskController.handle(req, res);
});

export { router };
