import { Controller, Post, Get, Body, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../services/user-service';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth(@Res() res: Response) {
    return res.status(HttpStatus.OK).send("I'm ok!");
  }
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async usersPost(
    @Body('cpf') cpf: number,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    const user = await this.userService.loginUser({ cpf, password });

    return res.status(HttpStatus.OK).send(user);
  }
}
