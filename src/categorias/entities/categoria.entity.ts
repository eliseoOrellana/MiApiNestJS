import { Producto } from "src/productos/entities/producto.entity";
import { Column, Entity, ManyToMany } from "typeorm";

@Entity()
export class Categoria {

    @Column( {primary: true, generated: true})
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;


    @ManyToMany(() => Producto, producto => producto.categorias, {})
    productos: Producto[];

    


}
