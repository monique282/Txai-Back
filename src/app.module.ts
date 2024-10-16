import { Module } from '@nestjs/common';
import { HealthController } from './controllers/user-controller';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
