import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { In, Repository } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Injectable()
export class ProductosService {

  constructor(

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    @InjectRepository(Categoria) 
    private readonly categoriasRepository: Repository<Categoria>,


  ) {}

  async create(createProductoDto: CreateProductoDto) {
  
    // const producto = this.productoRepository.create(createProductoDto);

    // return await this.productoRepository.save(producto);

    const categorias = await this.categoriasRepository.find({
      
      
    where: [...createProductoDto.categorias],
    relations: ['productos']
    });
    console.log(categorias);
    if (!categorias) {
      throw new NotFoundException(`categoria ${createProductoDto.categorias} no existe`);
    }

    return await this.productoRepository.save({
      ...createProductoDto,
      categorias,
    });
    
  }




  async findAll() {
    // return await this.productoRepository.find();
    return await this.productoRepository.find({
      relations: ['categorias']
    });
  }

  async findOne(id: number) {
    const product = await this.productoRepository.findOne({ where: { id }, relations: ['categorias']});

    if(!product) throw new NotFoundException(`Product with id ${id} not found`);

    return product;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const product = await this.productoRepository.findOne({ where: { id }, relations: [ 'categorias'] });

    if(!product) throw new NotFoundException(`Product with id ${id} not found`);

    const newCategories = await this.categoriasRepository.find({ where: [...updateProductoDto.categorias]});

    product.categorias = newCategories

    return await this.productoRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productoRepository.findOne({ where: { id }, relations: [ 'categorias'] });

    if(!product) throw new NotFoundException(`Product with id ${id} not found`);

    await this.productoRepository.softDelete({id});

    return `Product with id ${id} as deleted sucessfully`
  }
}
