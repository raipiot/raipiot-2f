import { QuestionnaireState } from '@raipiot-2f/api'

export const tabStateMap = new Map<QuestionnaireState, string>([
  [QuestionnaireState.NEW, '创建'],
  [QuestionnaireState.TO_FILL, '待填写'],
  [QuestionnaireState.TO_APPROVE, '待审批'],
  [QuestionnaireState.APPROVED, '审批通过'],
  [QuestionnaireState.NOT_APPROVED, '审批未通过']
])
