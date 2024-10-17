import { Module } from '@nestjs/common';
import {
  HealthController,
  UsersController,
} from './controllers/user-controller';
import { UserService } from './services/user-service';
import { UserRepository } from './repositories/user-repository';

@Module({
  imports: [],
  controllers: [HealthController, UsersController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
