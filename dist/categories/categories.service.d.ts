import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    createCategory(category: CreateCategoryDto): Promise<Category>;
    getAllCategories(): Promise<Category[]>;
    getCategory(id: number): Promise<Category>;
    deleteCategory(id: number): Promise<import("typeorm").DeleteResult>;
    updateCategory(id: number, category: CreateCategoryDto): Promise<import("typeorm").UpdateResult>;
}
