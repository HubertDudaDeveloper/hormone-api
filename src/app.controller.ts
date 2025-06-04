import { Body, Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    @Inject('USER_SERVICE')
    private userClient: ClientProxy,

    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/user')
  createUser(
    @Body() body: { id: string; mail: string; name: string },
    @Res() res: Response,
  ) {
    const newUser = this.userClient.send('create-user', body);
    return res.status(201).json(newUser);
  }
}
