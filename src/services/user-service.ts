import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {
  UserLoginRepository,
  UserRegisterRepository,
} from 'src/repositories/user-repository';

@Injectable()
export class UserloginService {
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
    const token = jwt.sign(
      { userId: login.id, email: login.email },
      process.env.JWT_SECRET,
    );
    const session = await this.UserLoginRepository.sessionToken(
      token,
      login.id,
    );

    const list = {
      email: login.email,
      nameUser: login.nameUser,
      id: login.id,
    };
    return [list, session];
  }
}

@Injectable()
export class UserRegisterService {
  constructor(
    private readonly UserRegisterRepository: UserRegisterRepository,
  ) {}
  async registerUser(
    cpf: string,
    password: string,
    email: string,
    name: string,
    nameUser: string,
    administrator: boolean,
    photo?: string,
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
      photo,
    );

    return [register];
  }
}
