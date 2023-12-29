import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}