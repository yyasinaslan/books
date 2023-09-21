import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageTitleComponent} from "../../components/page-title/page-title.component";

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, PageTitleComponent],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {

}
