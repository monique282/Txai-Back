import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  Inject,
  Scope,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable({ scope: Scope.REQUEST })
export class ValidationMiddleware implements NestMiddleware {
  constructor(@Inject('VALIDATION_SCHEMA') private schema: ObjectSchema) {}

  use(req: any, res: any, next: () => void) {
    const { error } = this.schema.validate(req.body);
    if (error) {
      throw new BadRequestException(error.details[0].message);
    }
    next();
  }
}
