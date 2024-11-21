import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPostsByCategory(@Query('category') categoryId: string) {
    // 카테고리 ID가 전달되지 않은 경우 전체 조회
    if (!categoryId) {
      return this.postService.getAllPosts();
    }

    return this.postService.getPostsByCategory(BigInt(categoryId));
  }
}
