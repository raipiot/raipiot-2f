import { IsOptional, IsString } from 'class-validator'

import { PageDto } from '@/class'

export class PageQuestionnaireDto extends PageDto {
  @IsString()
  @IsOptional()
  code?: string
}
