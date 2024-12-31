import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('uniConnectMalawi ')
    .setDescription('Apis for university business connections')
    .setVersion('1.0')
    .addBearerAuth()  // Optional if you use authentication
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // 'api' is the Swagger UI endpoint

  await app.listen(3000);
}
bootstrap();
