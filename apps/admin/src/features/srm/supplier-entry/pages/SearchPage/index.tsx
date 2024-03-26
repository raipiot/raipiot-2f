import type { InvitationPageDto, SupplierEntryVo } from '@raipiot-2f/api'

import { useCheckSocialCodeMutation } from '../../mutations'
import { listQO } from '../../queries'
import type { SupplierEntryPreCreateFormModel, SupplierEntrySearchFormModel } from '../../types'
import { useColumns, useSearchForm } from './hooks'

export function SearchPage() {
  const navigate = useNavigate()
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<InvitationPageDto>()
  const { form, formItems } = useSearchForm()
  const columns = useColumns()
  const modal = useModal()
  const [createForm] = AForm.useForm()
  const width = useResponsiveModalWidth(modal.type, {
    create: '500px'
  })
  const { createModalForm } = useFormCreator<SupplierEntryPreCreateFormModel>()

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(listQO(PageUtils.mergeParams(pageParams)))

  const { mutateAsync, isPending: isCheckCodeLoading } = useCheckSocialCodeMutation()

  const formatPageParams = (values: SupplierEntrySearchFormModel) =>
    PageUtils.mergeParams(pageParams, values)

  const createFormItems = createModalForm([
    {
      type: 'input',
      colProps: { span: 24 },
      formItemProps: {
        name: 'area',
        label: '认证地区',
        rules: [{ required: true }]
      }
    },
    {
      type: 'input',
      colProps: { span: 24 },
      formItemProps: {
        name: 'name',
        label: '企业名称',
        rules: [{ required: true }]
      }
    },
    {
      type: 'input',
      colProps: { span: 24 },
      formItemProps: {
        name: 'unifiedSocialCode',
        label: '统一社会信用代码',
        rules: [{ required: true }]
      }
    }
  ])

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <RpButton
            variant="create"
            onClick={modal.openCreate}
          />
        )
      }}
    >
      <RpSearchBar
        formProps={{ form }}
        formItems={formItems}
        onSearch={(values) => startTransition(() => setPageParams(formatPageParams(values)))}
        onPrefetch={(values) => queryClient.prefetchQuery(listQO(formatPageParams(values)))}
      />
      <RpBasicTable<SupplierEntryVo>
        rowKey={(record) => record.id!}
        columns={columns}
        dataSource={records}
        pagination={pagination({
          total,
          onPrefetch: (values) => queryClient.prefetchQuery(listQO(values))
        })}
        refreshLoading={isPending}
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
        scroll={{ x: 1500 }}
      />
      <RpModal
        type="create"
        title={modal.getTitle()}
        open={modal.open}
        width={width}
        confirmLoading={isCheckCodeLoading}
        onOk={createForm.submit}
        onCancel={modal.close}
      >
        <RpDynamicForm<SupplierEntryPreCreateFormModel>
          name="create-form"
          mode="create"
          form={createForm}
          items={createFormItems}
          onFinish={async (values) => {
            await mutateAsync(values, {
              onSuccess: () => {
                modal.close()
                navigate({
                  to: '/srm/supplier-entry/create'
                })
              }
            })
          }}
        />
      </RpModal>
    </RpPageContainer>
  )
}
