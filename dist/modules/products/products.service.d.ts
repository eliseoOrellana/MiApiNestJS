import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './productDTO/productDTO';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(createProductDto: ProductDto): Promise<Product>;
    update(id: number, updateProductDto: ProductDto): Promise<Product>;
    remove(id: number): Promise<void>;
}
