import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Open API Test Dansmultipro')
    .setDescription('API Test Dansmultipro')
    .setVersion('1.0')
    .addTag('dansmultipro')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('openapi', app, document);


  await app.listen(3000);
}
bootstrap();
