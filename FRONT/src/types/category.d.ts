export type CategoryId = number | undefined;

export interface Category {
  id: CategoryId;
  name: string;
  children: Category[];
}