export class Book {

  id: number = 0
  title: string = ''
  author: string = ''
  category: string = ''
  coverImageUrl: string = ''
  description: string = ''

  constructor(book: Book) {
    Object.assign(this, book)
  }
}
