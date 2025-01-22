import * as dotenv from 'dotenv'; // Import dotenv to load environment variables
import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Load environment variables from the .env file
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Helmet middleware for enhanced security
  app.use(helmet());

  // Enable CORS and configure allowed origins
  app.enableCors({
    origin: [
      'http://localhost:45587',
      'http://127.0.0.1:3000',
      'http://10.0.2.2:3000',
      'http://localhost:34201',
      // Add additional frontend origins as needed
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // Swagger setup for API documentation
  const config = new DocumentBuilder()
    .setTitle('uniConnectMalawi')
    .setDescription('APIs for university business connections')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Start the application on port 3000
  await app.listen(3000);
}
bootstrap();
