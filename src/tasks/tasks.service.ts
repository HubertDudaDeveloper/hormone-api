import type { Task } from '@/types/tasks';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const fTask = this.tasks.find((task) => task.id === id);

    if (!fTask) {
      throw new NotFoundException(`Task ${id} not found`);
    }

    return fTask;
  }

  create(data: { title: string; description: string }): Task {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const id: string = uuidv4() as string;
    const newTask: Task = { id, ...data };
    this.tasks.push(newTask);
    return newTask;
  }

  update(task: Task): void {
    const { id, title, description } = task;
    const fTask: Task = this.findOne(id);
    Object.assign(fTask, { title, description });
  }

  delete(id: string): Record<string, boolean> {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (!taskIndex) {
      throw new NotFoundException(`Task ${id} not found`);
    }

    this.tasks.splice(taskIndex, 1);

    return { delete: true };
  }
}
