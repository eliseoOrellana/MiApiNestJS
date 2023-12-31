import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Post()
    createCategory(@Body() NewCategory: CreateCategoryDto ) {
        return this.categoriesService.createCategory(NewCategory);
    }



}
