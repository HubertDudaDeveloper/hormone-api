import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { IUser } from './user/user.controller';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE')
    private userClient: ClientProxy,

    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): Observable<IUser[]> {
    return this.userClient.send('get-users', {}) as unknown as Observable<
      IUser[]
    >;
  }

  @Post('/user')
  createUser(
    @Body() body: { id: string; mail: string; name: string },
  ): Observable<any> {
    return this.userClient.send('create-user', body);
  }
}
