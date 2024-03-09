import type { FormProps } from 'antd'
import { merge } from 'lodash-es'
import type { PropsWithChildren } from 'react'

interface RpBaseFormProps<T extends Record<string, any>>
  extends Omit<FormProps<T>, 'children' | 'initialValues'>,
    PropsWithChildren {}

export type RpFormProps<T extends Record<string, any>> = RpBaseFormProps<T> & {
  initialValues?: T
}

function RpForm<T extends Record<string, any>>(props: RpFormProps<T>) {
  const { children, ...formProps } = props
  const defaultFormProps = useMemo<FormProps>(
    () => ({
      layout: 'horizontal',
      labelCol: { span: 8 },
      labelWrap: true,
      initialValues: {}
    }),
    []
  )

  return <AForm<T> {...merge({}, defaultFormProps, formProps)}>{children}</AForm>
}
export default RpForm
