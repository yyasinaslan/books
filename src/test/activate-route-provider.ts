import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {Book} from "../app/models/book";

export const activateRouteProvider = {
  provide: ActivatedRoute,
  useValue: {
    data: of({
      bookDetail: new Book({
        id: '1',
        title: 'Test book 1',
        author: 'Yasin Aslan',
        category: 'category1',
        coverImageUrl: '',
        description: 'test1description'
      })
    })
  }
}
