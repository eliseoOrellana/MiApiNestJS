import { Category } from "src/categories/category.entity";
export declare class Product {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    category: Category;
}
