import { useBaseModalContext } from '../context'
import type { QuestionnaireSubmitFormModel } from '../types'

export function BasicDetail() {
  const { modal, form, formItems } = useBaseModalContext()

  return (
    <ACard>
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
    </ACard>
  )
}
