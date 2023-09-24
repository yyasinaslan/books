import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookCardComponent} from './book-card.component';
import {activateRouteProvider} from "../../../test/activate-route-provider";
import {Book} from "../../models/book";

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [activateRouteProvider],
      imports: [BookCardComponent]
    });
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = new Book({
      id: '1',
      title: 'Test book 1',
      author: 'Yasin Aslan',
      category: 'category1',
      coverImageUrl: '',
      description: 'test1description'
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
