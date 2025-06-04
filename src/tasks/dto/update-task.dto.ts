import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from '@/tasks/dto/create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
