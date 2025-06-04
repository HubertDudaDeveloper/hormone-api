import { Body, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  public getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @Post('/user')
  public createUser(@Body() dto: CreateUserDto): IUser {
    return this.userService.createUser(dto);
  }
}
