import type { LifecycleSupplierApplyVO } from '@raipiot-2f/api'

import { lifecycleApplicationFormOptions } from '../../const'
import { useSearchForm } from '../../hooks'
import type { ApplicationFormSearchFormModel } from '../../types'

export function ListPage() {
  const { form, formItems } = useSearchForm(true)
  const { createColumns } = useTableCreator<LifecycleSupplierApplyVO>()
  const { keyword } = useSearch({
    from: '/_base/srm/lifecycle/supplier/record'
  })
  const { pageParams, pagination } = usePagination<ApplicationFormSearchFormModel>({ keyword })
  const {
    data: { records, total }
  } = useSuspenseQuery(LifeCycle.applicationFormListQO(PageUtils.mergeParams(pageParams)))

  const columns = createColumns([
    {
      title: '申请单号',
      dataIndex: 'applyCode',
      key: 'applyCode',
      custom: (id) => ({
        link: {
          to: '/srm/lifecycle/supplier/application-form/$id',
          params: {
            id
          }
        },
        value: id
      })
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (value) => {
        const status = lifecycleApplicationFormOptions.find((i) => i.value === value)
        return status?.label ?? '-'
      }
    },
    {
      title: '公司名',
      dataIndex: 'companyName',
      key: 'companyName'
    },
    {
      title: '单据类型',
      dataIndex: 'companyName',
      key: 'companyName1'
    },
    {
      title: '当前阶段',
      dataIndex: 'currentStage',
      key: 'currentStage'
    },
    {
      title: '目标阶段',
      dataIndex: 'targetStage',
      key: 'targetStage'
    },
    {
      title: '说明',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: '公司编码',
      dataIndex: 'description',
      key: 'description2'
    },
    {
      title: '创建人',
      dataIndex: 'creatorName',
      key: 'creatorName'
    },
    {
      title: '创建时间',
      dataIndex: 'createDTime',
      key: 'createDTime'
    }
  ])
  return (
    <RpPageContainer
      pageHeaderProps={{
        backBtn: true
      }}
    >
      <RpSearchBar
        formProps={{
          form,
          initialValues: {
            keyword
          }
        }}
        formItems={formItems}
      />
      <RpBasicTable
        dataSource={records}
        pagination={pagination({ total })}
        columns={columns}
      />
    </RpPageContainer>
  )
}
