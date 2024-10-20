import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Put,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/middlewares/AuthJwt';
import { UpdateBookDto } from 'src/schemas/user-schema';
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
export class ItemsDeleteController {
  constructor(private readonly BooksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteItem(@Param('id') id: number, @Res() res: Response) {
    await this.BooksService.DeleteItem(id);
    return res.sendStatus(HttpStatus.OK);
  }
}

@Controller('booksupdate')
export class ItemsUpdateController {
  constructor(private readonly BooksService: BooksService) {}

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async UpdateItem(
    @Param('id') id: string,
    @Body(new ValidationPipe()) body: UpdateBookDto,
    @Res() res: Response,
  ) {
    const updatedBook = await this.BooksService.UpdateItem(Number(id), body);
    return res.status(HttpStatus.OK).send(updatedBook);
  }
}
