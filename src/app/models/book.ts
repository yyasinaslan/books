export class Book {

  id?: string = ''
  title: string = ''
  author: string = ''
  category: string = ''
  coverImageUrl: string = ''
  description: string = ''

  constructor(book: Book) {
    Object.assign(this, book)
  }
}
