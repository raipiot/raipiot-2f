/**
 * 提供常用提示和 message 对象
 * @returns 返回 message 对象和内置的提示
 */
export const useMessage = () => {
  const { t } = useTranslation()
  const { message } = AApp.useApp()

  return {
    // 提示操作成功
    operateSuccess: () => {
      message.success(t('OPERATION.SUCCESS'))
    },
    operateFail: () => {
      message.error(t('OPERATION.FAIL'))
    },
    message
  }
}
