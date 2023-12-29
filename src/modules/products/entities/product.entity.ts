import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}