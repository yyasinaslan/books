import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from "../../services/book.service";
import {Book} from "../../models/book";
import {RouterLink} from "@angular/router";
import {BookCardComponent} from "../../components/book-card/book-card.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink, BookCardComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookService = inject(BookService)

  books = signal<Book[]>([]);
  selectedCategory = signal<string>("");

  categories = computed(() => {
    return this.books()
      .map(b => b.category)
      .reduce((cats, b) => {
        if (cats.includes(b)) return cats;
        return [...cats, b];
      }, <string[]>[]);
  });

  filteredBooks = computed(() => {
    const books = this.books();
    const selectedCategory = this.selectedCategory();
    // Return all books if category is not selected
    if (selectedCategory == "") return books;

    return books.filter(b => b.category == selectedCategory);
  })

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books.set(books);
    })
  }

  selectCategory(event: Event) {
    const target = event.target as HTMLSelectElement;

    this.selectedCategory.set(target.value);
  }
}
