import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { CategoriesModule } from './categories/categories.module';
=======
import { ProductosModule } from './modules/productos/productos.module';
import { ProductsModule } from './modules/products/products.module';
import { ProductController } from './modules/product/product.controller';
import { ProductService } from './modules/product/product.service';
import { ProductsModule } from './modules/products/products.module';
>>>>>>> 3d46a74a4697d108122464b47074dc5fbbec4e66

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '123456',
      database: 'api-product-category',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
<<<<<<< HEAD
    CategoriesModule,
=======
    ProductosModule,
    ProductsModule,
>>>>>>> 3d46a74a4697d108122464b47074dc5fbbec4e66
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
