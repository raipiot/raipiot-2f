import type { ResourcePoolScopeCreateDto } from '@raipiot-2f/api'

export const Route = createLazyFileRoute('/_base/srm/resource-pool-scopes/create')({
  component: Component
})

function Component() {
  const navigate = useNavigate()
  const { form, formItems } = ResourcePoolScopes.useCreateForm()
  const { mutateAsync, isPending } = ResourcePoolScopes.useCreateMutation()

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <RpSubmitPopconfirm
            okBtnLoading={isPending}
            onConfirm={async () => {
              await mutateAsync(form.getFieldsValue(true), {
                onSuccess: () => navigate({ to: '/srm/resource-pool-scopes', replace: true })
              })
            }}
          >
            <RpButton variant="submit" />
          </RpSubmitPopconfirm>
        ),
        backBtn: true
      }}
    >
      <ACard>
        <RpDynamicForm<ResourcePoolScopeCreateDto>
          form={form}
          items={formItems}
          labelAlign="left"
          labelCol={{
            style: {
              width: 100
            }
          }}
          mode="edit"
        />
      </ACard>
    </RpPageContainer>
  )
}
