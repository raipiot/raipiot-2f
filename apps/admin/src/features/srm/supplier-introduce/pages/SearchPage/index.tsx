import type { SupplierIntroPageDto, SupplierIntroVo } from '@raipiot-2f/api'

import { listQO } from '../../queries'
import type { SupplierIntroSearchFormModel } from '../../types'
import { useColumns, useSearchForm } from './hooks'

export function SearchPage() {
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<SupplierIntroPageDto>()
  const { form, formItems } = useSearchForm()
  const columns = useColumns()

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(listQO(PageUtils.mergeParams(pageParams)))

  const formatPageParams = (values: SupplierIntroSearchFormModel) =>
    PageUtils.mergeParams(pageParams, values)

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <Link to="/srm/supplier-introduce/create">
            <AButton type="primary">引入申请</AButton>
          </Link>
        )
      }}
    >
      <RpSearchBar
        formProps={{ form }}
        formItems={formItems}
        onSearch={(values) => startTransition(() => setPageParams(formatPageParams(values)))}
        onPrefetch={(values) => queryClient.prefetchQuery(listQO(formatPageParams(values)))}
      />
      <RpBasicTable<SupplierIntroVo>
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
    </RpPageContainer>
  )
}
