import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
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
import {
  BooksControllers,
  ItemsDeleteController,
  ItemsUpdateController,
} from './controllers/books-controller';
import { BooksService } from './services/books-service';
import { BooksRepository } from './repositories/books-repository';
import { JwtStrategy } from './middlewares/validationToken-middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  controllers: [
    HealthController,
    UsersLoginController,
    UsersRegisterController,
    BooksControllers,
    ItemsDeleteController,
    ItemsUpdateController,
  ],
  providers: [
    UserloginService,
    UserRegisterService,
    UserRegisterRepository,
    UserLoginRepository,
    BooksService,
    BooksRepository,
    JwtStrategy,
  ],
})
export class AppModule {}
