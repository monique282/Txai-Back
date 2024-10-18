import { Injectable, NotFoundException } from '@nestjs/common';
import prisma from 'src/dataBase';

@Injectable()
export class UserLoginRepository {
  async findByCPFPassword(cpf: string) {
    const user = await prisma.txaiUsers.findUnique({
      where: {
        cpf: cpf,
      },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}

@Injectable()
export class UserRegisterRepository {
  async findByCpf(cpf: string) {
    const user = await prisma.txaiUsers.findUnique({
      where: {
        cpf: cpf,
      },
    });
    return user;
  }
  async findByEmail(email: string) {
    const user = await prisma.txaiUsers.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  }
  async registerUser(
    cpf: string,
    encryptedPassword: string,
    email: string,
    name: string,
    nameUser: string,
    administrator: boolean = false,
  ) {
    const newUser = await prisma.txaiUsers.create({
      data: {
        cpf: cpf,
        password: encryptedPassword,
        email: email,
        name: name,
        nameUser: nameUser,
        administrator: administrator,
      },
    });
    return newUser;
  }
}
