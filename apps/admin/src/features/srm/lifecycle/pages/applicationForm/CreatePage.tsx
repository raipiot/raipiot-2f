import { CreateFormTabs } from '../../components'
import { useCreateForm } from '../../hooks/useCreateForm'
import type { UpgradeAndDowngradeFormModel } from '../../types'

export function CreatePage() {
  // 创建升级单和降级单，支持保存
  const {
    supplierId = '',
    upgrade,
    target
  } = useSearch({
    from: '/_base/srm/lifecycle/supplier/application-form/create'
  })
  const { form, formItems } = useCreateForm({
    isDetail: false,
    isUpgrade: upgrade,
    targetStage: target
  })

  const { data } = useSuspenseQuery(LifeCycle.supplierInfoQO({ supplierId }))
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
            <RpButton
              variant="save"
              onClick={onSave}
            />
          </AFlex>
        ),
        title: `${upgrade ? '升级' : '降级'}申请`
      }}
    >
      <RpDynamicForm<UpgradeAndDowngradeFormModel>
        form={form}
        initialValues={data}
        items={formItems}
      />
      <CreateFormTabs />
    </RpPageContainer>
  )
}
