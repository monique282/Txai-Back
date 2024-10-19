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

@Module({
  imports: [],
  controllers: [
    HealthController,
    UsersLoginController,
    UsersRegisterController,
  ],
  providers: [
    UserloginService,
    UserRegisterService,
    UserRegisterRepository,
    UserLoginRepository,
  ],
})
export class AppModule {}
