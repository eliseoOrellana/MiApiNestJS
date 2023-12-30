import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {

    // https://docs.nestjs.com/techniques/database
    constructor(@InjectRepository(Category) private categoryRepository:Repository<Category> ) {}

    createCategory(category: CreateCategoryDto) {
        const newCategory = this.categoryRepository.create(category);
        return this.categoryRepository.save(newCategory);
    }

}
