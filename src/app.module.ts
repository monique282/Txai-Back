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
import { userRegisterService, userloginService } from './services/user-service';

@Module({
  imports: [],
  controllers: [
    HealthController,
    UsersLoginController,
    UsersRegisterController,
  ],
  providers: [
    userloginService,
    userRegisterService,
    UserRegisterRepository,
    UserLoginRepository,
  ],
})
export class AppModule {}
