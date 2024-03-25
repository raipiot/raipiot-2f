import type { SupplierBlackListPageDto, SupplierInfoVo } from '@raipiot-2f/api'

import { listQO } from '../../queries'
import type { SupplierBlackListSearchFormModel } from '../../types'
import { useColumns, useSearchForm } from './hooks'

export function SearchPage() {
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<SupplierBlackListPageDto>()
  const { form, formItems } = useSearchForm()
  const columns = useColumns()

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(listQO(PageUtils.mergeParams(pageParams)))

  const formatPageParams = (values: SupplierBlackListSearchFormModel) =>
    PageUtils.mergeParams(pageParams, values)

  return (
    <RpPageContainer>
      <RpSearchBar
        formProps={{ form }}
        formItems={formItems}
        onSearch={(values) => startTransition(() => setPageParams(formatPageParams(values)))}
        onPrefetch={(values) => queryClient.prefetchQuery(listQO(formatPageParams(values)))}
      />
      <RpBasicTable<SupplierInfoVo>
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
      />
    </RpPageContainer>
  )
}
