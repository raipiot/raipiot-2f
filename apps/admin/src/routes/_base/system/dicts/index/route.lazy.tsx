import { DictPageDto } from '@/api/system/dict/dict.dto'
import type { DictVo } from '@/api/system/dict/dict.vo'
import { TableLayout } from '@/features/layouts'
import { usePagination } from '@/features/pagination'
import { useDictsColumns, useSystemDictsSuspenseQuery } from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation(['COMMON', 'SYSTEM/DICTS'])
  const { pageParams, pagination } = usePagination(new DictPageDto())
  const {
    data: { records, total },
    isFetching
  } = useSystemDictsSuspenseQuery(pageParams)
  const columns = useDictsColumns({
    handleDelete: () => {}
  })

  return (
    <TableLayout
      renderOperate={
        <AButton
          type="primary"
          onClick={() => {}}
          icon={
            <AIcon>
              <MaterialSymbolsAddCircleRounded className="text-xs" />
            </AIcon>
          }
        >
          {t('CREATE')}
        </AButton>
      }
      renderHeader={<RpTableSearch handleSearch={() => {}} />}
      renderTable={
        <ATable<DictVo>
          rowKey={(record) => record.id!}
          rowSelection={{
            type: 'checkbox',
            columnWidth: 20
          }}
          columns={columns}
          dataSource={records}
          scroll={{
            scrollToFirstRowOnChange: true,
            x: 800,
            y: 500
          }}
          loading={isFetching}
          pagination={{ ...pagination, total }}
        />
      }
    />
  )
}
