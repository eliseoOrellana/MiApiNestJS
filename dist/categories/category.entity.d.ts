import { Product } from "src/modules/products/entities/product.entity";
export declare class Category {
    id: number;
    name: string;
    description: string;
    createAt: Date;
    products: Product[];
}
