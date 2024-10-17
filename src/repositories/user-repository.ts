import { Injectable, NotFoundException } from '@nestjs/common';
import prisma from 'src/dataBase';

@Injectable()
export class UserRepository {
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
