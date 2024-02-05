import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ProductsModules } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(ProductsModules);
  const config = new DocumentBuilder() 
   .setTitle('Usuário e Perfil')
   .setDescription('descrição da API usuario e perfil')
   .setVersion('1.0')
   .addTag('users/perfil')
   .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
