import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddBookComponent} from './add-book.component';
import {testBookProvider} from "../../../test/test-book-service";
import {Router} from "@angular/router";
import {activateRouteProvider} from "../../../test/activate-route-provider";

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  const routeProvider = {
    provide: Router, useValue: {
      navigate: (route: string[]) => {
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [routeProvider, testBookProvider, activateRouteProvider],
      imports: [AddBookComponent]
    });
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
