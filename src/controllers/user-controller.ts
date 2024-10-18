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
import { CreateUserDto, CreateUserRegisterDto } from 'src/schemas/user-schema';
import {
  userRegisterService,
  userloginService,
} from 'src/services/user-service';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth(@Res() res: Response) {
    return res.status(HttpStatus.OK).send("I'm ok!");
  }
}

@Controller('user')
export class UsersLoginController {
  constructor(private readonly userloginService: userloginService) {}

  @Post()
  async usersLoginPost(
    @Body(new ValidationPipe()) body: CreateUserDto,
    @Res() res: Response,
  ) {
    const user = await this.userloginService.loginUser(body);

    return res.status(HttpStatus.OK).send(user);
  }
}

@Controller('register')
export class UsersRegisterController {
  constructor(private readonly userRegisterService: userRegisterService) {}

  @Post()
  async usersRegisterPost(
    @Body(new ValidationPipe()) body: CreateUserRegisterDto,
    @Res() res: Response,
  ) {
    const { cpf, password, email, name, nameUser, administrator } = body;

    const user = await this.userRegisterService.registerUser(
      cpf,
      password,
      email,
      name,
      nameUser,
      administrator,
    );
    return res.status(HttpStatus.OK).send(user);
  }
}
