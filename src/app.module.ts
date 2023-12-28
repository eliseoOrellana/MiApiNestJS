import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ConfigModule, ConfigService } from '@nestjs/config';


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'mysql',
//       port: 3306,
//       username: 'user_crud',
//       password: 'root',
//       database: 'db_crud',
//       autoLoadEntities: true,
//       synchronize: true,
//       logging: true,

//     }),

//     ProductosModule,
//     CategoriasModule,
//   ],

//   controllers: [],
//   providers: [],
// })

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configServices:ConfigService) => ({
      type: 'mysql',
      host: configServices.get("DATABASE_HOST"),
      port: parseInt(configServices.get("DATABASE_PORT")),
      username: configServices.get("DATABASE_USER"),
      password: configServices.get("DATABASE_PASSWORD"),
      database: configServices.get("DATABASE_NAME"),
      autoLoadEntities: true,
      synchronize: true,
      logging: true,

    })
    
  }),
  ProductosModule,
  CategoriasModule,

  ConfigModule.forRoot({
    isGlobal:true

  }),

  ],
  controllers: [],
  providers: [],
})


export class AppModule {}

