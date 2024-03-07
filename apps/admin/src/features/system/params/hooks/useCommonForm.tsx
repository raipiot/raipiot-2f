import type { FormProps } from 'antd/lib'
import { Fragment, type ReactNode } from 'react'

interface UseCommonForm {
  items: ReactNode[]
  formProps?: FormProps
  renderActionComponent?: React.ReactNode
}

export function useCommonForm({ items, renderActionComponent, formProps }: UseCommonForm) {
  const [form] = AForm.useForm()
  return {
    form,
    component: (
      <AForm
        form={form}
        {...formProps}
      >
        <ARow gutter={24}>
          {items.map((item, idx) => (
            <Fragment key={idx}>{item}</Fragment>
          ))}

          {renderActionComponent || (
            <AForm.Item rootClassName="!mb-4">
              <AFlex gap={8}>
                <AButton
                  htmlType="submit"
                  type="primary"
                >
                  查询
                </AButton>
                <AButton htmlType="reset">重置</AButton>
              </AFlex>
            </AForm.Item>
          )}
        </ARow>
      </AForm>
    )
  }
}
