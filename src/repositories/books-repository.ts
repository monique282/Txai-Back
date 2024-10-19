import { Injectable } from '@nestjs/common';
import prisma from 'src/dataBase';

@Injectable()
export class BooksRepository {
  async BooksAll() {
    const book = await prisma.items.findMany();
    return book;
  }
}
