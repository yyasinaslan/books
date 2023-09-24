import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, tap} from "rxjs";
import {Book} from "../models/book";
import {ApiBook} from "../models/api-book";
import {environment} from "../../environments/environment";

export interface IBookService {
  getBooks: () => Observable<Book[]>
  add: (book: Book) => Observable<any>
}

@Injectable({
  providedIn: 'root'
})
export class BookService implements IBookService {
  private query = {
    search: 'fiction:subject',
    apiKey: environment.apiKey,
    maxResults: 30,
    projection: 'full',
  }
  private http = inject(HttpClient);
  apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.query.search}&key=${this.query.apiKey}&maxResults=${this.query.maxResults}&projection=${this.query.projection}`;

  // Storing books for caching
  books: Book[] = [];

  getBooks() {
    // Return already stored books
    if (this.books.length > 0) return of(this.books);

    return this.http.get<ApiBook>(this.apiUrl).pipe(map(result => {
      // Mapping api data to book list
      return result.items.map(b => new Book({
        id: b.id,
        title: b.volumeInfo.title ?? '',
        author: b.volumeInfo.authors ? b.volumeInfo.authors[0] : '',
        category: b.volumeInfo.categories ? b.volumeInfo.categories[0] : 'fiction',
        coverImageUrl: b.volumeInfo.imageLinks?.thumbnail ?? '',
        description: b.volumeInfo.description ?? ''
      }))
    }), tap(books => this.books = books));
  }

  add(book: Book) {
    this.books.unshift(book);
    return this.http.post(this.apiUrl, book);
  }
}
