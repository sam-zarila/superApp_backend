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
     origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true, // Allow cookies or authentication credentials
  });

  // Swagger setup for API documentation
  const config = new DocumentBuilder()
    .setTitle('uniConnectMalawi')
    .setDescription('APIs for university business connections')
    .setVersion('1.0')
    .addBearerAuth() // Add Bearer Authentication to Swagger
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Log the running port
  const PORT = process.env.PORT || 3000;
  console.log(`Application is running on: http://localhost:${PORT}`);

  // Start the application
  await app.listen(PORT);
}
bootstrap();
