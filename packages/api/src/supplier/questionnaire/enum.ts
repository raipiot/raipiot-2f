export enum QuestionnaireState {
  /**
   * 新建
   */
  NEW = '1',
  /**
   * 待填写
   */
  TO_FILL = '2',
  /**
   * 待审批
   */
  TO_APPROVE = '3',
  /**
   * 审批通过
   */
  APPROVED = '4',
  /**
   * 审批未通过
   */
  NOT_APPROVED = '5'
}
