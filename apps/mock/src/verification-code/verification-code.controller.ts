import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { VerificationCodeDto } from './verification-code.dto';
@Controller('verification-code')
export class VerificationCodeController {
  @Post()
  @HttpCode(200)
  sendVerificationCode(@Body() sendVerificationCodeDto: VerificationCodeDto) {
    // Use VerificationCodeDto as the type for sendVerificationCodeDto
    try {
      console.log(sendVerificationCodeDto);
      return {
        message: 'Hello World!',
      };
    } catch (error) {
      console.log(error);
      throw new HttpException('Invalid phone number', HttpStatus.BAD_REQUEST);
    }
  }
}
