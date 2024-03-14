import { SettingModalContext } from '../context'
import { useTanantSettingMutation } from '../mutations'
import type { TenantSettingFormModel } from '../types'

export function SettingModal() {
  const { modal, form, formItems, selectedRowKeys, clearSelectedRowKeys } =
    useContext(SettingModalContext)

  const { t } = useTranslation('SYSTEM/TENANTS')

  const width = useResponsiveModalWidth(modal?.type, {
    edit: '500px'
  })

  const { mutateAsync, isPending } = useTanantSettingMutation()

  return (
    <RpModal
      // 模态框类型
      type={modal?.type}
      // 打开状态
      open={modal?.open}
      // 标题
      title={t('AUTH.CONFIG')}
      // 事件：取消
      onCancel={modal?.close}
      // 底部区域
      footer={
        <ASpace>
          <RpButton
            variant="cancel"
            disabled={isPending}
            onClick={modal?.close}
          />
          <RpButton
            variant="reset"
            disabled={isPending}
            onClick={() => form?.resetFields()}
          />
          <RpButton
            variant="confirm"
            loading={isPending}
            onClick={form?.submit}
          />
        </ASpace>
      }
      width={width}
    >
      <RpDynamicForm<TenantSettingFormModel>
        name="setting"
        // 表单
        form={form}
        // 表单配置项
        items={formItems}
        // 表单模式
        mode={modal?.type}
        // 表单初始值
        initialValues={{
          accountNumber: 0,
          expireTime: ''
        }}
        // 表单提交
        onFinish={async () => {
          const values = form?.getFieldsValue(true)
          await mutateAsync(
            {
              ids: selectedRowKeys ? selectedRowKeys.join() : '',
              data: {
                ...values,
                expireTime: DateUtils.formatTime(values.expireTime)
              }
            },
            {
              onSuccess: () => {
                clearSelectedRowKeys?.()
                modal?.close()
              }
            }
          )
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
