import { IsOptional, IsString, MinLength } from "class-validator";
import { Categoria } from "../entities/categoria.entity";




export class CreateCategoriaDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    categorias: Categoria[];

}
