import type { QuestionnairePageDto, QuestionnaireSubmitDto } from '@raipiot-2f/api'
import type dayjs from 'dayjs'

export interface QuestionnaireSearchFormModel
  extends Omit<QuestionnairePageDto, 'size' | 'current'> {
  createdTime?: [dayjs.Dayjs, dayjs.Dayjs]
  keyword?: string
}

export interface QuestionnaireSubmitFormModel extends QuestionnaireSubmitDto {}
