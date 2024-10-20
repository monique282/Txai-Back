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
    const book = await this.BooksRepository.DeleteItem(id);
    if (!book) {
      throw new HttpException(
        'Erro ao deletar item',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return book;
  }
}
