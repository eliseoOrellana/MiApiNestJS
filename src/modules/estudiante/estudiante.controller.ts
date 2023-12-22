import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EstudianteEntity } from '../entities/estudiante.entity';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
export class EstudianteController {
    constructor(private readonly estudianteService: EstudianteService) {}

    @Get()
    async findAll(): Promise<EstudianteEntity[]> {
        return this.estudianteService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<EstudianteEntity> {
        return this.estudianteService.findOne(id);
    }

    @Post()
    async create(@Body() estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        return this.estudianteService.create(estudiante);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        return this.estudianteService.update(id, estudiante);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.estudianteService.remove(id);
    }
}
