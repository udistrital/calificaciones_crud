import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/configuration';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('registro_notas_crud')
    .setDescription('API CRUD para el registro de notas')
    .setVersion('1.0')
    .addTag('registro_nota')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  fs.writeFileSync("./swagger.json", JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(environment.HTTP_PORT,10) || 8080);

}
bootstrap();
