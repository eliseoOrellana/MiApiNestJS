import { Product } from "src/modules/products/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,} from "typeorm";

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;

    @ManyToMany(() => Product, product => product.categories)
    products: Product[];

}