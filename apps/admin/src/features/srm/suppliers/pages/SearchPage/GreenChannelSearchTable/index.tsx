import type { LocalSupplierVo, SupplierPageDto } from '@raipiot-2f/api'

import { localListQO } from '../../../queries'
import type { LocalSupplierSearchFormModel } from '../../../types'
import { useColumns, useSearchForm } from './hooks'

export function GreenChannelSearchTable() {
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<SupplierPageDto>()
  const { form, formItems } = useSearchForm()
  const columns = useColumns()

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(localListQO(PageUtils.mergeParams(pageParams)))

  const formatPageParams = (values: LocalSupplierSearchFormModel) =>
    PageUtils.mergeParams(pageParams, values)

  return (
    <ASpace
      direction="vertical"
      className="w-full"
    >
      <RpSearchBar
        formProps={{
          form,
          name: 'greenChannelSearchForm',
          labelCol: { style: { width: 130 } }
        }}
        formItems={formItems}
        onSearch={(values) => startTransition(() => setPageParams(formatPageParams(values)))}
        onPrefetch={(values) => queryClient.prefetchQuery(localListQO(formatPageParams(values)))}
      />
      <RpBasicTable<LocalSupplierVo>
        rowKey={(record) => record.id!}
        columns={columns}
        dataSource={records}
        pagination={pagination({
          total,
          onPrefetch: (values) => queryClient.prefetchQuery(localListQO(values))
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
