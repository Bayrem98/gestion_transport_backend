import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
    },
  });
  
  // Use Render.com's port or fallback to 3003
  const port = process.env.PORT || 3003;
  await app.listen(port);
  console.log(`Application running on port ${port}`);
}
bootstrap();