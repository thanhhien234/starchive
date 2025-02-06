export interface PostParams {
  categoryHier: {
      categoryId: number,
      categoryName: string
  }[]
  postId: number,
  title: string,
  author: string,
  createdAt: string,
  content: string,
  hashTags: {
    hashTagId: number,
    name: string
  }[]
}

export interface CreatePostParams {
  title: string,
  content: string,
  author: string,
  password: string,
  categoryId: number,
  hashTagIds: number[],
  imageIds: number[]
}

export interface EditPostParams {
  postId: number,
  title: string,
  content: string,
  categoryId: number,
  hashTagIds: number[],
  imageIds: number[]
}