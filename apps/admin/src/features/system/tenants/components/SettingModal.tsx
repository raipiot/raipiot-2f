import type { FormInstance } from 'antd'
import type { Key } from 'react'

import type { RpBasicFormItem } from '@/shared/components/RpDynamicForm/types'
import type { UseModal } from '@/shared/hooks/useModal'

import { useTanantSettingMutation } from '../mutations'
import type { TenantSettingFormModel } from '../types'

interface SettingModalProps {
  modal: UseModal<string>
  form: FormInstance
  formItems: RpBasicFormItem<TenantSettingFormModel>[]
  selectedRowKeys: Key[]
  clearSelectedRowKeys: () => void
}

export function SettingModal(props: SettingModalProps) {
  const { modal, form, formItems, selectedRowKeys, clearSelectedRowKeys } = props

  const { t } = useTranslation('SYSTEM/TENANTS')

  const width = useResponsiveModalWidth(modal.type, {
    edit: '500px'
  })

  const { mutateAsync, isPending } = useTanantSettingMutation()

  return (
    <RpModal
      // 模态框类型
      type={modal.type}
      // 打开状态
      open={modal.open}
      // 标题
      title={t('AUTH.CONFIG')}
      // 底部区域
      footer={
        <ASpace>
          <RpButton
            variant="cancel"
            disabled={isPending}
            onClick={modal.close}
          />
          <RpButton
            variant="reset"
            disabled={isPending}
            onClick={() => form.resetFields()}
          />
          <RpButton
            variant="confirm"
            loading={isPending}
            onClick={form.submit}
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
        mode={modal.type}
        // 表单初始值
        initialValues={{
          accountNumber: 0,
          expireTime: ''
        }}
        // 表单提交
        onFinish={async () => {
          const values = form.getFieldsValue(true)
          await mutateAsync(
            {
              ids: selectedRowKeys.join(),
              data: {
                ...values,
                expireTime: DateUtils.formatTime(values.expireTime)
              }
            },
            {
              onSuccess: () => {
                clearSelectedRowKeys()
                modal.close()
              }
            }
          )
        }}
        labelCol={{
          style: { width: '100px' }
        }}
      />
    </RpModal>
  )
}
