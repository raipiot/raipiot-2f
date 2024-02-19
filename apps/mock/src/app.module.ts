import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerificationCodeController } from './verification-code/verification-code.controller';
import { RegisterController } from './register/register.controller';

@Module({
  imports: [],
  controllers: [AppController, VerificationCodeController, RegisterController],
  providers: [AppService],
})
export class AppModule {}
