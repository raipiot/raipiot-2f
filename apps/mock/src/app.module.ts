import { Module } from '@nestjs/common'

import { PortalController } from './portal/portal.controller'
import { RegisterController } from './register/register.controller'
import { VerificationCodeController } from './verification-code/verification-code.controller'

@Module({
  imports: [],
  controllers: [VerificationCodeController, RegisterController, PortalController],
  providers: []
})
export class AppModule {}
