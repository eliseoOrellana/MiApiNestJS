import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { ProductDto } from './productDTO/productDTO';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find({ where: { deletedAt: IsNull() } });
  }

 
  async findOne(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne({where:{id}});
          

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  async create(createProductDto: ProductDto): Promise<Product> {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }

  async update(id: number, updateProductDto: ProductDto): Promise<Product> {
    await this.productsRepository.update(id, updateProductDto);
    return this.productsRepository.findOne({where:{id}});
  }

  async remove(id: number): Promise<void> {
    const result = await this.productsRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    
  }
}