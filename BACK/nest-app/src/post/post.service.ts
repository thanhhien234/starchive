import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPostsByCategory(categoryId: bigint) {
    // TODO: 하위 카테고리까지 포함하여 조회하려면 추가 로직 필요
    return this.prisma.post.findMany({
      where: {
        categoryId: categoryId,
      },
    });
  }

  async getAllPosts() {
    return this.prisma.post.findMany();
  }
}
