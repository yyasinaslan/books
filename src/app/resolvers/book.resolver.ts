import {ResolveFn} from '@angular/router';
import {Book} from "../models/book";
import {inject} from "@angular/core";
import {BookService} from "../services/book.service";
import {firstValueFrom} from "rxjs";

export const bookResolver: ResolveFn<Book | null> = async (route, state) => {
  const bookService = inject(BookService);

  const id = route.paramMap.get('id');
  if (!id) return null;

  const books = await firstValueFrom(bookService.getBooks());

  const book = books.find(b => b.id == Number(id));

  if (!book) return null;

  return book;
};
