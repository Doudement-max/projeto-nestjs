import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API do meu projeto')
  .setDescription('Descrição da API')
  .setVersion('1.0') 
  .addTag('perfil')
  .addTag('users')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('docs', app, document);

await app.listen(3000);
}
bootstrap();