import type { QuestionnairePageDto, QuestionnaireSubmitDto } from '@raipiot-2f/api'

export interface QuestionnaireSearchFormModel
  extends Omit<QuestionnairePageDto, 'size' | 'current'> {}

export interface QuestionnaireSubmitFormModel extends QuestionnaireSubmitDto {}
