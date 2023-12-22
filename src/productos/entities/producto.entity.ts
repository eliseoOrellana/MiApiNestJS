import { Categoria } from "src/categorias/entities/categoria.entity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany} from "typeorm";

@Entity()
export class Producto {

    @Column( {primary: true, generated: true})
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToMany(() => Categoria, categoria => categoria.productos, {cascade: true})
    @JoinTable()
    categorias: Categoria[];

  

}

