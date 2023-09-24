export interface ApiBook {
  items: Array<{
    id: string,
    volumeInfo: {
      title?: string,
      categories?: string[],
      authors?: string[],
      imageLinks?: {
        smallThumbnail: string,
        thumbnail: string
      },
      description?: string
    }
  }>;
  kind: string,
  totalItems: number
}
