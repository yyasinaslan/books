import {Injectable} from "@angular/core";
import {BookService, IBookService} from "../app/services/book.service";
import {Book} from "../app/models/book";
import {Observable, of} from "rxjs";

export const testBooks: Book[] = [
  new Book({
    id: '1',
    title: 'Test book 1',
    author: 'Yasin Aslan',
    category: 'category1',
    coverImageUrl: '',
    description: 'test1description'
  }),
  new Book({
    id: '2',
    title: 'Test book 2',
    author: 'Yasin Aslan',
    category: 'category2',
    coverImageUrl: '',
    description: 'test2description'
  }),
]

@Injectable()
export class TestBookService implements IBookService {

  private books: Book[] = testBooks;

  add(book: Book): Observable<any> {
    this.books.unshift(book);
    return of(true);
  }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

}

export const testBookProvider = {provide: BookService, useClass: TestBookService};


export const testApiBooks = {
  "items": [
    {
      volumeInfo: {
        title: 'book1',
        authors: ['book1 author'],
        categories: ['book1 category'],
        imageLinks: {
          thumbnail: '',
        },
        description: 'book1 description'
      }
    },
    {
      volumeInfo: {
        title: 'book2',
        authors: ['book2 author'],
        categories: ['book2 category'],
        imageLinks: {
          thumbnail: '',
        },
        description: 'book2 description'
      }
    },
  ]
}
