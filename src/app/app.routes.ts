import {Routes} from '@angular/router';
import {BookDetailComponent} from "./pages/book-detail/book-detail.component";
import {BooksComponent} from "./pages/books/books.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {bookResolver} from "./resolvers/book.resolver";
import {AddBookComponent} from "./pages/add-book/add-book.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: BooksComponent, title: 'Library'},
  {path: 'book/:id', resolve: {bookDetail: bookResolver}, component: BookDetailComponent},
  {path: 'add-book', component: AddBookComponent, title: 'Add new book'},
  {path: '**', component: NotFoundComponent, title: '404 Not Found'}
];
