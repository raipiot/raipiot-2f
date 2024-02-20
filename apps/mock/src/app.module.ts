import { Module } from '@nestjs/common';
import { VerificationCodeController } from './verification-code/verification-code.controller';
import { RegisterController } from './register/register.controller';

@Module({
  imports: [],
  controllers: [VerificationCodeController, RegisterController],
  providers: [],
})
export class AppModule {}
