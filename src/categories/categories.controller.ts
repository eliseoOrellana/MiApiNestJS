import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Post()
    createCategory(@Body() NewCategory: CreateCategoryDto ) {
        return this.categoriesService.createCategory(NewCategory);
    }

    @Get()
    getAllCategories() {
        return this.categoriesService.getAllCategories();
    }

    
}
