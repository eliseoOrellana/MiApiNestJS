import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductDto } from './productDTO/productDTO';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(createProductDto: ProductDto): Promise<Product>;
    update(id: string, updateProductDto: ProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
