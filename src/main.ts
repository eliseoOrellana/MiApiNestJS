import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.enableCors();// Habilitar CORS (Cross-Origin Resource Sharing) para todas las rutas
}
bootstrap();
