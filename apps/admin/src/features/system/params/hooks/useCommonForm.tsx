import { useForm } from 'antd/es/form/Form'
import type { FormProps } from 'antd/lib'
import { Fragment, type ReactNode } from 'react'

interface UseCommonForm {
  items: ReactNode[]
  formProps?: FormProps
  renderActionComponent?: React.ReactNode
}

const { Item } = AForm

export function useCommonForm({ items, renderActionComponent, formProps }: UseCommonForm) {
  const [form] = useForm()
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
            <Item rootClassName="!mb-4">
              <AFlex gap={8}>
                <AButton
                  htmlType="submit"
                  type="primary"
                >
                  查询
                </AButton>
                <AButton htmlType="reset">重置</AButton>
              </AFlex>
            </Item>
          )}
        </ARow>
      </AForm>
    )
  }
}
