import type { InvitationPageDto, InvitationVo } from '@raipiot-2f/api'

import { listQO } from '../../queries'
import type { InvitationSearchFormModel } from '../../types'
import { useColumns, useSearchForm } from './hooks'

export function SearchPage() {
  const { pageParams, setPageParams, pagination, isPending, startTransition } =
    usePagination<InvitationPageDto>()
  const { form, formItems } = useSearchForm()
  const columns = useColumns()

  const {
    data: { records, total },
    refetch
  } = useSuspenseQuery(listQO(PageUtils.mergeParams(pageParams)))

  const formatPageParams = (values: InvitationSearchFormModel) =>
    PageUtils.mergeParams(pageParams, values)

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <Link to="/srm/invitations/register">
            <AButton type="primary">邀请注册</AButton>
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
      <RpBasicTable<InvitationVo>
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
