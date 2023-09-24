import {TestBed} from '@angular/core/testing';

import {BookService} from './book.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {testApiBooks} from "../../test/test-book-service";
import {Book} from "../models/book";

describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch books', () => {

    service.getBooks().subscribe(data => {
      expect(data).toBeTruthy();
      expect(data.length).withContext('has more than one book').toBeGreaterThan(0)
    })

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).withContext('method is get').toEqual('GET');
    req.flush(testApiBooks);
  });

  it('should be able to add books', () => {

    const book = new Book({
      title: 'book3',
      author: 'book3 author',
      category: 'book3 category',
      description: 'book3 description',
      coverImageUrl: '',
    })

    service.add(book).subscribe(data => {
      expect(data).toBeTruthy();
      expect(service.books.find(b => b.title == 'book3')).withContext('book added').toBeTruthy();
    })

    const req = httpTestingController.expectOne(service.apiUrl);
    expect(req.request.method).withContext('method is post').toEqual('POST');
    req.flush(true);
  });
});
