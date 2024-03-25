import type { SupplierPageDto, SupplierVo } from '@raipiot-2f/api'

import type { SupplierSearchFormModel } from '@/features/srm/supplier-black-list/types'

import { listQO } from '../../../queries'
import { useColumns, useSearchForm } from './hooks'

export function SearchTable() {
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<SupplierPageDto>()
  const { form, formItems } = useSearchForm()
  const columns = useColumns()

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(listQO(PageUtils.mergeParams(pageParams)))

  const formatPageParams = (values: SupplierSearchFormModel) =>
    PageUtils.mergeParams(pageParams, values)

  return (
    <ASpace
      direction="vertical"
      className="w-full"
    >
      <RpSearchBar
        formProps={{
          form,
          labelCol: { style: { width: 80 } }
        }}
        formItems={formItems}
        onSearch={(values) => startTransition(() => setPageParams(formatPageParams(values)))}
        onPrefetch={(values) => queryClient.prefetchQuery(listQO(formatPageParams(values)))}
        showExpand
      />
      <RpBasicTable<SupplierVo>
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
    </ASpace>
  )
}
