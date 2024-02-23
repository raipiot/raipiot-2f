import { DictPageDto } from '@/api/system/dict/dict.dto'
import type { DictVo } from '@/api/system/dict/dict.vo'
import { useDictsColumns, useSystemDictsSuspenseQuery } from '@/features/dicts'
import { TableLayout } from '@/features/layouts'
import { usePagination } from '@/features/pagination'

export const Route = createLazyFileRoute('/_base/system/dicts/')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation(['COMMON', 'SYSTEM/DICTS'])
  const { containerRef, y } = useTableContainer()
  const { pageParams, genPagination } = usePagination(new DictPageDto())
  const { data: listData, isFetching } = useSystemDictsSuspenseQuery(pageParams)
  const columns = useDictsColumns({
    handleDelete: () => {},
    isDeleteLoading: false
  })

  return (
    <TableLayout
      renderOperate={
        <AButton
          type="primary"
          onClick={() => {}}
        >
          {t('CREATE')}
        </AButton>
      }
      renderHeader={<RpTableSearch handleSearch={() => {}} />}
      renderTable={
        <div>
          <ATable<DictVo>
            ref={containerRef}
            rowKey={(record) => record.id!}
            rowSelection={{
              type: 'checkbox',
              columnWidth: 20
            }}
            columns={columns}
            dataSource={listData.records}
            scroll={{
              scrollToFirstRowOnChange: true,
              x: 800,
              y
            }}
            loading={isFetching}
            pagination={genPagination(listData)}
          />
        </div>
      }
    />
  )
}
