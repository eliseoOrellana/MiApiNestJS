import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get()
    getAllCategories(): Promise<Category[]> {
        return this.categoriesService.getAllCategories();
    }

    @Get(':id')
    getCategory(@Param('id') id:number): Promise<Category> {
        return this.categoriesService.getCategory(id);
    }

    @Post()
    createCategory(@Body() NewCategory: CreateCategoryDto ): Promise<Category> {
        return this.categoriesService.createCategory(NewCategory);
    }

    @Delete(":id")
    deteleCategory(@Param('id') id:number) {
        return this.categoriesService.deleteCategory(id);
    }



   


}
