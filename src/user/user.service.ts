import { MessagePattern } from '@nestjs/microservices';
import { IUser } from './user.controller';

export class UserService {
  public users: IUser[] = [];

  @MessagePattern('create-user')
  public createUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }

  @MessagePattern('get-users')
  public getUsers(): IUser[] {
    return this.users;
  }
}
