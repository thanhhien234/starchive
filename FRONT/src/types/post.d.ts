export interface Post {
  categoryHier: [
    { 
      categoryId: number, 
      categoryName: string 
    }
  ],
  postId: number,
  title: string,
  author: string,
  createdAt: string,
  content: string
}