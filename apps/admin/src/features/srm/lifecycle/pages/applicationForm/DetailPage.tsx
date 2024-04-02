import type { LifecycleSupplierApplyVO } from '@raipiot-2f/api'

import { CreateFormTabs } from '../../components'
import { useCreateForm } from '../../hooks/useCreateForm'

export function DetailPage() {
  const { id } = useParams({
    from: '/_base/srm/lifecycle/supplier/application-form/$id'
  })
  const { data } = useSuspenseQuery(LifeCycle.applyInfoQO({ applyCode: id }))
  console.log(data)
  console.log(data.createTime)
  const { form, formItems } = useCreateForm({
    isDetail: true,
    targetStage: data.targetStage
  })

  const nav = useNavigate()

  const onSave = async () => {
    const values = await form.validateFields()
    console.log(values)
    nav({
      to: '/srm/lifecycle/supplier/record'
    })
  }

  return (
    <RpPageContainer
      pageHeaderProps={{
        backBtn: true,
        operate: (
          <AFlex>
            <RpButton variant="save" />
          </AFlex>
        ),
        title: `${data.currentStage! < data.targetStage! ? '升级' : '降级'}申请`
      }}
    >
      <RpDynamicForm<LifecycleSupplierApplyVO>
        form={form}
        initialValues={data}
        items={formItems}
      />
      <CreateFormTabs />
    </RpPageContainer>
  )
}
