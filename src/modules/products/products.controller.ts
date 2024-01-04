import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductDto } from './productDTO/productDTO';


@Controller('products')

export class ProductsController { //Inyecta una instancia de ProductService en el controlador. Esto permite que el controlador utilice los métodos y la lógica de ProductService.
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {//Utiliza el decorador @Param para extraer el parámetro id de la URL y aplica el ParseIntPipe para asegurarse de que el valor de id sea un número entero.
    return this.productsService.findOne(id);
  }

  @Post()
  async create(@Body() createProductDto: ProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: ProductDto): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}