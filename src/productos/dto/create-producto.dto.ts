import { IsString, MinLength, IsOptional} from "class-validator";
import { Categoria } from "src/categorias/entities/categoria.entity";
import { ManyToMany } from "typeorm";


export class CreateProductoDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    categorias: Categoria[];

    @ManyToMany(() => Categoria, Categoria => Categoria.productos, {})
    categoria: Categoria[];



}
