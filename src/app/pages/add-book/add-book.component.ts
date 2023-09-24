import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTitleComponent} from "../../components/page-title/page-title.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";
import {Book} from "../../models/book";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, PageTitleComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {

  router = inject(Router)
  bookService = inject(BookService)
  error?: string;

  submitted = false;

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    coverImageUrl: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  save() {
    this.submitted = true;
    if (this.form.invalid) return;

    const formData = this.form.value;
    const book = new Book({
      title: formData.title ?? '',
      author: formData.author ?? '',
      category: formData.category ?? '',
      coverImageUrl: formData.coverImageUrl ?? '',
      description: formData.description ?? '',
    })

    this.bookService.add(book).subscribe({
      next: () => {
        // return back to books after save
        this.router.navigate(['/']);
      },
      error: (err: HttpErrorResponse) => {
        this.error = 'Cannot save data to server'
      }
    })
  }
}
