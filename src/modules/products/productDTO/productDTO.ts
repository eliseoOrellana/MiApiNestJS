//se utiliza para definir la estructura de los datos que se transfieren entre el cliente y el servidor.

export class ProductDto {

    readonly name: string;
    readonly description: string;
    readonly createdAt: Date;
}