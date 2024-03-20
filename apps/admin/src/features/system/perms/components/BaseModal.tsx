import type { ScopeSubmitDto, ScopeTypeString } from '@raipiot-2f/api'

import { useScopeConfigContext } from '../contexts'
import { useScopeSubmitMutation } from '../mutations'

interface BaseModalProps {
  menuId: string
}

export function BaseModal({ menuId }: BaseModalProps) {
  const { modal, form, formItems } = useScopeConfigContext()
  const { isPending, mutate } = useScopeSubmitMutation()
  const { type = 'api' } = useSearch({
    from: '/_base/system/perms/$id'
  }) as { type: ScopeTypeString }
  return (
    <RpModal
      // 模态框类型
      type={modal.type}
      // 打开状态
      open={modal.open}
      // 标题
      title={modal.getTitle()}
      // 确认按钮加载
      confirmLoading={isPending}
      // 事件：确认
      onOk={form.submit}
      // 事件：取消
      onCancel={modal.close}
      // 底部区域
      footer={modal.isRead ? null : undefined}
    >
      <RpDynamicForm<Partial<ScopeSubmitDto>>
        name="modal"
        // 表单
        form={form}
        // 表单配置项
        items={formItems}
        // 表单模式
        mode={modal.type}
        // 表单初始值
        initialValues={{
          menuId
        }}
        // 表单提交
        onFinish={() => {
          const values = form.getFieldsValue(true)
          mutate(
            {
              type,
              params: values
            },
            { onSuccess: modal.close }
          )
        }}
      />
    </RpModal>
  )
}
