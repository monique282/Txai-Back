import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { BooksService } from 'src/services/books-service';

@Controller('books')
export class BooksControllers {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  async BoolsAll(@Res() res: Response) {
    const books = await this.BooksService.BooksAll();
    return res.status(HttpStatus.OK).send(books);
  }
}
