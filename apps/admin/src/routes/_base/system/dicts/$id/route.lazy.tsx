import { DictValuePageDto, type DictVo } from '@raipiot-2f/api'

import { TableLayout } from '@/features/layouts'
import { usePagination } from '@/features/pagination'
import { useDictValuesColumns, useSystemDictValuesSuspenseQuery } from '@/features/system/dicts'

export const Route = createLazyFileRoute('/_base/system/dicts/$id')({
  component: SystemDictItem
})

function SystemDictItem() {
  const { id } = useParams({ from: '/_base/system/dicts/$id' })
  const { t } = useTranslation(['COMMON', 'SYSTEM/DICTS'])
  const { pageParams } = usePagination(new DictValuePageDto({ parentId: id }))
  const { data: listData, isFetching } = useSystemDictValuesSuspenseQuery({ ...pageParams })
  const columns = useDictValuesColumns()

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
        <RpTable<DictVo>
          rowKey={(record) => record.id!}
          rowSelection={{
            type: 'checkbox',
            columnWidth: 20
          }}
          columns={columns}
          dataSource={listData}
          loading={isFetching}
        />
      }
    />
  )
}
