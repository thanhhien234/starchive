import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPostsByCategory(
    @Query('category') categoryId: string,
    @Query('tag') hashTagId: string,
    @Query('page') page: string = '1',
    @Query('pageSize') pageSize: string = '10',
  ) {
    return this.postService.getPosts(
      categoryId ? BigInt(categoryId) : null,
      hashTagId ? BigInt(hashTagId) : null,
      parseInt(page, 10),
      parseInt(pageSize, 10),
    );
  }
}
