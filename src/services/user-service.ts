import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async loginUser({ cpf, password }: { cpf: string; password: string }) {
    const login = await this.userRepository.findByCPFPassword(cpf);

    if (!login) {
      throw new UnauthorizedException('CPF não cadastrado');
    }

    const passwordMatch = await bcrypt.compare(password, login.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('senha não corresponde');
    }

    const list = {
      email: login.email,
      nameUser: login.nameUser,
    };

    return [list];
  }
}
