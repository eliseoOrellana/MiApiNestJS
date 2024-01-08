
import { Category } from "src/modules/categories/entities/category.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, } from "typeorm";

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'datetime', nullable: true })
    deletedAt: Date;



    @ManyToMany(() => Category, category => category.products)
    @JoinTable()
    categories: Category[];

}