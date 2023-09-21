import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() title = '';
  @Input() backRoute?: string;
}
