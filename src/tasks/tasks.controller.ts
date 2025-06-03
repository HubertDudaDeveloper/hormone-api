import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { TasksService } from '@/tasks/tasks.service';
import { Task } from '@/types/tasks';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() body: { title: string; description: string }): Task {
    return this.tasksService.create(body);
  }

  @Patch(':id')
  update(@Body() task: Task): void {
    return this.tasksService.update(task);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Record<string, boolean> {
    return this.tasksService.delete(id);
  }
}
