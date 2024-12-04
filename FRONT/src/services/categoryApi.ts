import { Category } from "../types/category";
import { getRequest } from "./api";

export const fetchCategories = () => getRequest<Category[]>('/categorys');