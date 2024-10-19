import { Module } from '@nestjs/common';
import {
  HealthController,
  UsersLoginController,
  UsersRegisterController,
} from './controllers/user-controller';
import {
  UserLoginRepository,
  UserRegisterRepository,
} from './repositories/user-repository';
import { UserRegisterService, UserloginService } from './services/user-service';
import { BooksControllers } from './controllers/books-controller';
import { BooksService } from './services/books-service';
import { BooksRepository } from './repositories/books-repository';

@Module({
  imports: [],
  controllers: [
    HealthController,
    UsersLoginController,
    UsersRegisterController,
    BooksControllers,
  ],
  providers: [
    UserloginService,
    UserRegisterService,
    UserRegisterRepository,
    UserLoginRepository,
    BooksService,
    BooksRepository,
  ],
})
export class AppModule {}
