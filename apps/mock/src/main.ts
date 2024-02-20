import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidationFailedException } from './validation-failed.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: false,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        console.log(errors);
        const messages = errors.map((error) => {
          return `${error.property} has wrong value ${error.value}, ${Object.values(error.constraints).join(', ')}`;
        });
        return new ValidationFailedException(messages);
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
