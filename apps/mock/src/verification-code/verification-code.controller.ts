import { Controller, Post } from '@nestjs/common';

@Controller('verification-code')
export class VerificationCodeController {
  @Post()
  sendVerificationCode() {
    return {
      message: 'Hello World!',
    };
  }
}
