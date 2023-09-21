import {Component, HostBinding, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Book} from "../../models/book";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input({required: true}) book!: Book;
}
