import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPostsByCategory(categoryId: bigint) {
    const categoryMap = new Map<BigInt, CategoryTree>();

    const allCategories = await this.prisma.category.findMany();

    allCategories.forEach(({ categoryId, name, parentId }) => {
      const categoryIdLong = BigInt(categoryId);

      if (!categoryMap.has(categoryIdLong)) {
        categoryMap.set(categoryIdLong, new CategoryTree());
      }
      const currentNode: CategoryTree = categoryMap.get(categoryIdLong);
      currentNode.fillNode(categoryIdLong, name);

      const parentIdLong = BigInt(parentId);
      if (!categoryMap.has(parentIdLong)) {
        categoryMap.set(parentIdLong, new CategoryTree());
      }
      const parentNode: CategoryTree = categoryMap.get(parentIdLong);

      parentNode.addChild(currentNode);
    });

    const searchCategory: CategoryTree = categoryMap.get(categoryId);

    return this.prisma.post.findMany({
      where: {
        categoryId: {
          in: searchCategory.getAllDescendantIds(),
        },
      },
    });
  }

  async getAllPosts() {
    return this.prisma.post.findMany();
  }
}

class CategoryTree {
  private id: bigint;
  private name: String;
  private children: CategoryTree[] = [];

  public fillNode(id: bigint, name: string) {
    this.id = id;
    this.name = name;
  }

  public addChild(childNode: CategoryTree) {
    this.children.push(childNode);
  }

  public getAllDescendantIds(): bigint[] {
    const idList: bigint[] = [this.id];

    this.children.forEach((child: CategoryTree) => {
      idList.push(...child.getAllDescendantIds());
    });

    return idList;
  }
}
