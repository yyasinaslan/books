import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookDetailComponent} from './book-detail.component';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {Book} from "../../models/book";
import {activateRouteProvider} from "../../../test/activate-route-provider";

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  const titleProvider = {
    provide: Title, useValue: {
      setTitle: (title: string) => {
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [titleProvider, activateRouteProvider],
      imports: [BookDetailComponent]
    });
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
