import type { LifecycleSupplierVo } from '@raipiot-2f/api'

import { lifecycleOptions } from '../const'
import { useSearchForm } from '../hooks'
import type { LifecycleSearchFormModel } from '../types'

export function Page() {
  const { form, formItems } = useSearchForm()
  const { createActions, createColumns } = useTableCreator<LifecycleSupplierVo>()
  const { pageParams, pagination } = usePagination<LifecycleSearchFormModel>()
  const {
    data: { records, total }
  } = useSuspenseQuery(Process.lifeCycle.listQO(PageUtils.mergeParams(pageParams)))
  const columns = createColumns([
    {
      title: '供应商编码',
      dataIndex: 'supplierCode',
      key: 'supplierCode'
    },
    {
      title: '供应商名称',
      dataIndex: 'supplierName',
      key: 'supplierName'
    },
    {
      title: '基地',
      dataIndex: 'organizationName',
      key: 'organizationName'
    },
    {
      title: '状态',
      dataIndex: 'relegationStatus',
      key: 'relegationStatus',
      render: (value) => {
        const status = lifecycleOptions.find((i) => i.value === value)
        return status?.label ?? 'x'
      }
    },
    {
      title: '申请记录',
      dataIndex: 'supplierCode',
      key: 'supplierCode',
      render: (value) => (
        <Link
          to="/srm/process/lifecycle/record"
          search={{
            keyword: `${value}`
          }}
        >
          查看
        </Link>
      )
    },
    {
      title: '策略负责人',
      dataIndex: 'strategyManager',
      key: 'strategyManager'
    },
    createActions({
      width: 120,
      render: (_: unknown, record) => (
        <ADropdown
          menu={{
            items: lifecycleOptions
              .filter((i) => i.value !== record.relegationStatus)
              .map((i) => ({
                ...i,
                key: i.value,
                label: (
                  <Link
                    to="/srm/process/lifecycle/application-form/$id"
                    params={{
                      id: record.id
                    }}
                  >
                    {i.label}
                  </Link>
                )
              }))
          }}
        >
          <RpButton type="link">升降级</RpButton>
        </ADropdown>
      )
    })
  ])
  return (
    <RpPageContainer>
      <RpSearchBar
        formProps={{
          form
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
