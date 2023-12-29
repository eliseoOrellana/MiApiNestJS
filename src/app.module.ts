import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './modules/productos/productos.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductController } from './modules/product/product.controller';
import { ProductService } from './modules/product/product.service';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '123456',
      database: 'api-product-category',
      entities: [],
      synchronize: true,
    }),
    ProductosModule,
    ProductsModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
