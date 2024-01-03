import { Product } from "src/modules/products/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, } from "typeorm";

@Entity({name: 'categories'})
export class Category {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()    
    name: string;
    @Column()
    description: string;
    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createAt: Date;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
}