import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Connection } from 'mongoose';
import { getConnectionToken } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown fields
      forbidNonWhitelisted: true, // throws if unknown fields exist
      transform: true, // auto-transform payloads to DTO classes
    }),
  );
  
  await app.listen(process.env.PORT ?? 5002);
  console.log('http://localhost:',process.env.PORT);

  const connection = app.get<Connection>(getConnectionToken());

  connection.once('open', () => {
    console.log('✅ MongoDB connected successfully');
  });

  connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
  });

}
bootstrap();
