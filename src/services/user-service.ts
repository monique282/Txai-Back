import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  UserLoginRepository,
  UserRegisterRepository,
} from 'src/repositories/user-repository';

@Injectable()
export class userloginService {
  constructor(private readonly UserLoginRepository: UserLoginRepository) {}

  async loginUser({ cpf, password }: { cpf: string; password: string }) {
    const login = await this.UserLoginRepository.findByCPFPassword(cpf);

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

@Injectable()
export class userRegisterService {
  constructor(
    private readonly UserRegisterRepository: UserRegisterRepository,
  ) {}
  async registerUser(
    cpf: string,
    password: string,
    email: string,
    name: string,
    nameUser: string,
    administrator?: boolean,
  ) {
    const thereIsRegistrationCpf =
      await this.UserRegisterRepository.findByCpf(cpf);

    if (thereIsRegistrationCpf) {
      throw new UnauthorizedException('CPF já cadastrado');
    }
    const thereIsRegistrationEmail =
      await this.UserRegisterRepository.findByEmail(email);

    if (thereIsRegistrationEmail) {
      throw new UnauthorizedException('email já cadastrado');
    }
    const encryptedPassword = bcrypt.hashSync(password, 2);
    const register = await this.UserRegisterRepository.registerUser(
      cpf,
      encryptedPassword,
      email,
      name,
      nameUser,
      administrator,
    );

    return [register];
  }
}
