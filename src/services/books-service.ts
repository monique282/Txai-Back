import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BooksRepository } from 'src/repositories/books-repository';

@Injectable()
export class BooksService {
  constructor(private readonly BooksRepository: BooksRepository) {}
  async BooksAll() {
    const allBooks = await this.BooksRepository.BooksAll();
    if (!allBooks) {
      throw new HttpException(
        'Erro ao buscar os livros',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return allBooks;
  }

  async DeleteItem(id: number) {
    const bookDelet = await this.BooksRepository.DeleteItem(id);
    if (!bookDelet) {
      throw new HttpException(
        'Erro ao deletar item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return bookDelet;
  }

  async UpdateItem(id: number, body: any) {
    const bookUpdate = await this.BooksRepository.UpdateItem(id, body);
    if (!bookUpdate) {
      throw new HttpException(
        'Erro ao alterar dados do item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return bookUpdate;
  }

  async CreateBook(body: any) {
    const { name, value, amount, userId } = body;

    const book = await this.BooksRepository.CreateBook(
      name,
      value,
      amount,
      userId,
    );
    if (!book) {
      throw new HttpException(
        'Erro ao alterar dados do item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return book;
  }
}
