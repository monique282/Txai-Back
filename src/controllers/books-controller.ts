import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/middlewares/AuthJwt';
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

@Controller('booksdelet')
export class ItemsController {
  constructor(private readonly BooksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteItem(@Param('id') id: number, @Res() res: Response) {
    console.log('aqui');
    await this.BooksService.DeleteItem(id);

    return res.sendStatus(HttpStatus.OK);
  }
}
