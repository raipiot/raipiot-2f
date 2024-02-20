import { IsNotEmpty, IsNumberString, Length } from 'class-validator'

export class VerificationCodeDto {
  @IsNumberString()
  @IsNotEmpty()
  @Length(11, 11)
  phone: string
}
