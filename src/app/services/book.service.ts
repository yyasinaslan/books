import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, of, tap} from "rxjs";
import {Book} from "../models/book";
import {ApiBook} from "../models/api-book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);

  // Storing books
  private books: Book[] = [];

  private apiUrl = "https://fakerapi.it/api/v1/books?_quantity=50&_seed=1";

  getBooks() {
    // return already stored books
    if (this.books.length > 0) return of(this.books);

    return this.http.get<ApiBook>(this.apiUrl).pipe(map(result => {
      // Mapping to book class
      return result.data.map(b => new Book({
        id: b.id,
        title: b.title,
        author: b.author,
        category: b.genre,
        coverImageUrl: `https://loremflickr.com/300/400/book/all?lock=4${b.id}`,
        description: b.description
      }))
    }), tap(books => this.books = books));
  }

}
