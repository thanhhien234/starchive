import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPosts(
    categoryId: bigint | null,
    hashTagId: bigint | null,
    page: number = 1,
    pageSize: number = 10,
  ) {
    const categoryTreeMap = await this.makeCategoryTreeMap();

    let queryingObject = {
      include: {
        postHashTags: {
          include: {
            hashTag: true,
          },
        },
      },
      where: {},
      skip: (page - 1) * pageSize,
      take: pageSize,
    };

    if (categoryId) {
      const searchCategory: CategoryTree = categoryTreeMap.get(categoryId);

      queryingObject.where = {
        ...queryingObject.where,
        categoryId: {
          in: searchCategory?.getAllDescendantIds() ?? [],
        },
      };
    }

    if (hashTagId) {
      queryingObject.where = {
        ...queryingObject.where,
        postHashTags: {
          some: {
            hashTagId: hashTagId,
          },
        },
      };
    }

    const [posts, totalCount] = await Promise.all([
      this.prisma.post.findMany(queryingObject),
      this.prisma.post.count({ where: queryingObject.where }),
    ]);

    return this.toResponse(posts, categoryTreeMap, page, pageSize, totalCount);
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
    page: number,
    pageSize: number,
    totalCount: number,
  ) {
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      currentPage: page,
      totalPages: totalPages,
      totalCount: totalCount,
      posts: posts.map((post) => {
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
      }),
    };
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
    return [
      this.id,
      ...this.children.flatMap((child) => child.getAllDescendantIds()),
    ];
  }

  public getHierList(): categoryResponse[] {
    const list = this.parent ? this.parent.getHierList() : [];
    return [
      ...list,
      {
        categoryId: Number(this.id),
        categoryName: this.name,
      },
    ];
  }
}
