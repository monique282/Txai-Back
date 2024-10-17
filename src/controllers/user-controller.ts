import {
  Controller,
  Post,
  Get,
  Body,
  HttpStatus,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../services/user-service';
import { CreateUserDto } from 'src/schemas/user-schema';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth(@Res() res: Response) {
    return res.status(HttpStatus.OK).send("I'm ok!");
  }
}

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async usersPost(
    @Body(new ValidationPipe()) body: CreateUserDto,
    @Res() res: Response,
  ) {
    const user = await this.userService.loginUser(body);

    return res.status(HttpStatus.OK).send(user);
  }
}
