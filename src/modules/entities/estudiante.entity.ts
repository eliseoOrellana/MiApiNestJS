import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("estudiante")
export class EstudianteEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length:"80",nullable:false})
    nombre: string

    @Column({type: "varchar", length:"80",nullable:false})
    apellido: string

    @Column({type: "varchar", nullable:false})
    rut: string

}