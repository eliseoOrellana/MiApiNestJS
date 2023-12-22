import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()

export class CategoriasService {

  constructor(
    @InjectRepository(Categoria) 
    private readonly categoriesRepository: Repository<Categoria>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
    
    ) {}


  async create(createCategoriaDto: CreateCategoriaDto) {
    const producto = this.categoriesRepository.create(createCategoriaDto);

    return await this.categoriesRepository.save(producto);
  }

  //hola

  async findAll() {
    return await this.categoriesRepository.find({
      relations: ['productos']});
  }

  async findOne(id: number) {
    return await this.categoriesRepository.find({
      relations: ['productos'],
      where: { id },
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.categoriesRepository.update(id, updateCategoriaDto);
  }

  async remove(id: number) {
    return await this.categoriesRepository.delete({id});
  }
}
