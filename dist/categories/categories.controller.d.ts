import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    createCategory(NewCategory: CreateCategoryDto): Promise<Category>;
    deteleCategory(id: number): Promise<import("typeorm").DeleteResult>;
    updateCategory(id: number, category: CreateCategoryDto): Promise<import("typeorm").UpdateResult>;
}
