import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BooksComponent} from './books.component';
import {testBookProvider} from "../../../test/test-book-service";
import {activateRouteProvider} from "../../../test/activate-route-provider";

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [testBookProvider, activateRouteProvider],
      imports: [BooksComponent]
    });
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have books', () => {
    expect(component.books().length).toBeGreaterThan(0)
  });

  it('should have categories', () => {
    expect(component.categories().length).toBeGreaterThan(0)
  });

  it('select category', () => {
    const category: string = 'category1'

    component.selectCategory({target: {value: category}} as any);

    expect(component.selectedCategory()).toEqual(category)
  });

  it('should list only selected categories', () => {
    const category: string = 'category1';

    component.selectedCategory.set(category);

    const filtered = component.filteredBooks();

    const hasAnotherCategory = filtered.some(b => b.category !== category)

    expect(hasAnotherCategory).toBeFalse()
  });
});
