import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('get-users')
  @Get()
  public getUsers(): IUser[] {
    console.log('read users');
    return this.userService.getUsers();
  }

  @MessagePattern('create-user')
  @Post('/user')
  public createUser(@Body() dto: CreateUserDto): IUser {
    console.log('user', dto);
    return this.userService.createUser(dto);
  }
}
