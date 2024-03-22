import type { ModalType } from '@/shared/hooks/useModal'

import type { RpFormProps } from '../RpForm'
import type { RpBasicFormItemProps } from '../RpFormItem/types'

export type RpDynamicFormProps<T extends Record<string, any>> = RpFormProps<T> & {
  /**
   * 表单配置项
   */
  items?: RpBasicFormItemProps<T>[]
  /**
   * 展示模式
   */
  mode?: ModalType
}

function RpDynamicForm<T extends Record<string, any>>(props: RpDynamicFormProps<T>) {
  const { items, mode, ...formProps } = props
  return (
    <RpForm<T> {...formProps}>
      <RpRow>
        {items?.map((item, index) => (
          <RpFormItem<T>
            key={index}
            mode={mode}
            form={formProps.form}
            {...item}
          />
        ))}
      </RpRow>
    </RpForm>
  )
}
export default RpDynamicForm
