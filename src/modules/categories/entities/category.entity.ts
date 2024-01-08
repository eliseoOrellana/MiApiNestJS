import { Product } from "src/modules/products/entities/product.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, CreateDateColumn, DeleteDateColumn,} from "typeorm";

@Entity({ name: 'categories' })
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @DeleteDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'datetime', nullable: true })
    deletedAt: Date;

    @ManyToMany(() => Product, product => product.categories)
    products: Product[];

}