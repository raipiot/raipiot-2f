import { usePlatformModalContext } from '../context'
import { useUserPlatformSubmitMutation } from '../mutations'
import type { UserPlatformFormModel } from '../types'

export function PlatformModal() {
  const { modal, form, formItems } = usePlatformModalContext()

  const { t } = useTranslation('SYSTEM/USERS')

  const width = useResponsiveModalWidth(modal?.type, {
    edit: '600px'
  })

  const { mutateAsync, isPending } = useUserPlatformSubmitMutation()

  return (
    <RpModal // 模态框类型
      type={modal.type}
      // 打开状态
      open={modal.open}
      // 标题
      title={t('PLATFORM.CONFIG')}
      // 确认按钮加载
      confirmLoading={isPending}
      // 事件：确认
      onOk={form.submit}
      // 事件：取消
      onCancel={modal.close}
      width={width}
    >
      <RpDynamicForm<UserPlatformFormModel>
        name="setting"
        // 表单
        form={form}
        // 表单配置项
        items={formItems}
        // 表单模式
        mode={modal.type}
        // 表单初始值
        initialValues={{}}
        // 表单提交
        onFinish={async () => {
          const values = form.getFieldsValue(true)
          await mutateAsync(values, {
            onSuccess: modal.close
          })
        }}
        labelCol={{
          style: {
            width: '100px'
          }
        }}
      />
    </RpModal>
  )
}
