import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPostsByCategory(categoryId: bigint) {
    const categoryTreeMap = await this.makeCategoryTreeMap();

    const searchCategory: CategoryTree = categoryTreeMap.get(categoryId);

    const posts = await this.prisma.post.findMany({
      where: {
        categoryId: {
          in: searchCategory?.getAllDescendantIds() ?? [],
        },
      },
      include: {
        postHashTags: {
          include: {
            hashTag: true,
          },
        },
      },
    });

    return this.toResponse(posts, categoryTreeMap);
  }

  public async getAllPosts() {
    const categoryTreeMap = await this.makeCategoryTreeMap();

    const posts = await this.prisma.post.findMany({
      include: {
        postHashTags: {
          // PostHashTag 관계 로드
          include: {
            hashTag: true, // HashTag 관계 로드
          },
        },
      },
    });

    return this.toResponse(posts, categoryTreeMap);
  }

  private toResponse(
    posts: ({
      postHashTags: ({
        hashTag: {
          name: string;
          hashTagId: bigint;
        };
      } & {
        postId: bigint;
        postHashTagId: bigint;
        hashTagId: bigint;
      })[];
    } & {
      postId: bigint;
      categoryId: bigint;
      title: string;
      content: string;
      author: string;
      password: string;
      createAt: Date;
    })[],
    categoryTreeMap: Map<BigInt, CategoryTree>,
  ) {
    return posts.map((post) => {
      const categoryTree: CategoryTree = categoryTreeMap.get(post.categoryId);

      const hierList: categoryResponse[] = categoryTree.getHierList();

      return {
        categoryHier: hierList,
        postId: Number(post.postId),
        author: post.author,
        title: post.title,
        content: post.content.slice(0, 350),
        createdAt: post.createAt,
        hashTags: post.postHashTags.map(({ hashTag }) => ({
          hashTagId: Number(hashTag.hashTagId),
          name: hashTag.name,
        })),
      };
    });
  }

  private async makeCategoryTreeMap() {
    const categoryMap = new Map<BigInt, CategoryTree>();

    const allCategories = await this.prisma.category.findMany();

    allCategories.forEach(({ categoryId, name, parentId }) => {
      const categoryIdLong = BigInt(categoryId);

      if (!categoryMap.has(categoryIdLong)) {
        categoryMap.set(categoryIdLong, new CategoryTree());
      }
      const currentNode: CategoryTree = categoryMap.get(categoryIdLong);
      currentNode.fillNode(categoryIdLong, name);

      if (!parentId) {
        return;
      }

      const parentIdLong = BigInt(parentId);
      if (!categoryMap.has(parentIdLong)) {
        categoryMap.set(parentIdLong, new CategoryTree());
      }
      const parentNode: CategoryTree = categoryMap.get(parentIdLong);

      parentNode.addChild(currentNode);
      currentNode.addParent(parentNode);
    });
    return categoryMap;
  }
}

export interface categoryResponse {
  categoryId: number;
  categoryName: string;
}

class CategoryTree {
  private id: bigint;
  private name: string;
  private children: CategoryTree[] = [];
  private parent: CategoryTree;
  private hierList: categoryResponse[] = [];

  public fillNode(id: bigint, name: string) {
    this.id = id;
    this.name = name;
  }

  public addChild(childNode: CategoryTree) {
    this.children.push(childNode);
  }

  public addParent(parentNode: CategoryTree) {
    this.parent = parentNode;
  }

  public getAllDescendantIds(): bigint[] {
    const idList: bigint[] = [this.id];

    this.children.forEach((child: CategoryTree) => {
      idList.push(...child.getAllDescendantIds());
    });

    return idList;
  }

  public getHierList(): categoryResponse[] {
    if (this.hierList.length !== 0) {
      return this.hierList;
    }

    if (!!this.parent) {
      this.hierList.push(...this.parent.getHierList());
    }

    this.hierList.push({
      categoryId: Number(this.id),
      categoryName: this.name,
    });

    return this.hierList;
  }
}
