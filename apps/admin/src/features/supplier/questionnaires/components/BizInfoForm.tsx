import { useBaseModalContext } from '../context'
import type { QuestionnaireSubmitFormModel } from '../types'

export function BizInfoForm() {
  const { modal, form, formItems } = useBaseModalContext()

  return (
    <RpDynamicForm<QuestionnaireSubmitFormModel>
      name="basic-detail"
      form={form}
      items={formItems}
      mode={modal.type}
      initialValues={{}}
      onFinish={async () => {
        const values = form.getFieldsValue(true)
        console.log(values)
      }}
    />
  )
}
