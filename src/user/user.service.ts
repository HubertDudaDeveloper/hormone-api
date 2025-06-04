import { IUser } from './user.controller';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public users: IUser[] = [];

  public createUser(user: IUser): IUser {
    this.users.push(user);
    return user;
  }

  public getUsers(): IUser[] {
    return this.users;
  }
}
