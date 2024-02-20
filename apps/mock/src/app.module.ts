import { Module } from '@nestjs/common'

import { RegisterController } from './register/register.controller'
import { VerificationCodeController } from './verification-code/verification-code.controller'

@Module({
  imports: [],
  controllers: [VerificationCodeController, RegisterController],
  providers: []
})
export class AppModule {}
