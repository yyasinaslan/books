export interface ApiBook {
  status: string,
  code: number,
  total: number,
  data: Array<{
    id: number,
    title: string,
    author: string,
    genre: string,
    description: string,
    image: string
  }>
}
