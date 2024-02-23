import type { DictVo } from '@/api/system/dict/dict.vo'
import { TableLayout } from '@/features/layouts'
import { usePagination } from '@/features/pagination'
import { useDictValuesColumns, useSystemDictValuesSuspenseQuery } from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/$id')({
  component: SystemDictItem
})

function SystemDictItem() {
  const { id } = useParams({ from: '/_base/system/dicts/$id' })
  const { t } = useTranslation(['COMMON', 'SYSTEM/DICTS'])
  const { containerRef, y } = useTableContainer()
  const { pageParams } = usePagination(new DictValuePageDto({ parentId: id }))
  const { data: listData, isFetching } = useSystemDictValuesSuspenseQuery({ ...pageParams })
  const columns = useDictValuesColumns({
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
            dataSource={listData}
            scroll={{
              scrollToFirstRowOnChange: true,
              x: 800,
              y
            }}
            loading={isFetching}
          />
        </div>
      }
    />
  )
}
