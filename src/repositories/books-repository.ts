import { Injectable } from '@nestjs/common';
import prisma from 'src/dataBase';

@Injectable()
export class BooksRepository {
  async BooksAll() {
    const book = await prisma.items.findMany();
    return book;
  }

  async DeleteItem(id: number) {
    const book = await prisma.items.delete({
      where: {
        id: Number(id),
      },
    });
    return book;
  }
}
