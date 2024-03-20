import { QuestionnaireStatus } from '@raipiot-2f/api'

export const tabStateMap = new Map<QuestionnaireStatus, string>([
  [QuestionnaireStatus.NEW, '创建'],
  [QuestionnaireStatus.TO_FILL, '待填写'],
  [QuestionnaireStatus.TO_APPROVE, '待审批'],
  [QuestionnaireStatus.APPROVED, '审批通过'],
  [QuestionnaireStatus.NOT_APPROVED, '审批未通过']
])
