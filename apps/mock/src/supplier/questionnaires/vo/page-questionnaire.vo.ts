import { Type } from 'class-transformer'

import { Page } from '@/class'

import { QuestionnaireVo } from './questionnaire-vo'

export class PageQuestionnaireVo extends Page<QuestionnaireVo> {
  @Type(() => QuestionnaireVo)
  records: QuestionnaireVo[]
}
