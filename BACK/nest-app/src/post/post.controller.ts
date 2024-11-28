import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPostsByCategory(
    @Query('category') categoryId: string,
    @Query('tag') hashTagId: string,
  ) {
    return this.postService.getPosts(
      categoryId ? BigInt(categoryId) : null,
      hashTagId ? BigInt(hashTagId) : null,
    );
  }
}
