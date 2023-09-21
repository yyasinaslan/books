import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Book} from "../../models/book";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {PageTitleComponent} from "../../components/page-title/page-title.component";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PageTitleComponent, NgOptimizedImage],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book?: Book;
  private title = inject(Title)
  private activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.activatedRoute.data.pipe(takeUntilDestroyed()).subscribe(routeData => {
      if (routeData['bookDetail']) {
        this.book = new Book(routeData['bookDetail'])
        this.title.setTitle(this.book.title);
      }
    })
  }

  ngOnInit() {

  }
}
