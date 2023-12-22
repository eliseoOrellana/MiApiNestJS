import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteEntity } from '../entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly estudianteRepository: Repository<EstudianteEntity>,
      ) {}
    
      async findAll(): Promise<EstudianteEntity[]> {
        return this.estudianteRepository.find();
      }
    
      //manejo de respuesta undefined
      async findOne(id: number): Promise<EstudianteEntity | undefined> {
        const estudiante = await this.estudianteRepository.findOneBy({id});

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }

    return estudiante;
  
      }
    
      async create(estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        const newEstudiante = this.estudianteRepository.create(estudiante);
        return this.estudianteRepository.save(newEstudiante);
      }
    
      async update(id: number, estudiante: EstudianteEntity): Promise<EstudianteEntity>| null {
        await this.estudianteRepository.update(id, estudiante);
        return this.estudianteRepository.findOneBy({id});
      }
    
      async remove(id: number): Promise<void> {
        await this.estudianteRepository.delete(id);
      }
    }
