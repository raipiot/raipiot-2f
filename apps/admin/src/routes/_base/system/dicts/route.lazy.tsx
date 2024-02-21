import type { DictVo } from '@/api/system/dict/dict.vo'
import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/dicts')({
  component: SystemDicts
})

function SystemDicts() {
  const { t } = useTranslation(['COMMON', 'SYSTEM', 'VALIDATION'])
  return (
    <TableLayout
      renderOperate={[
        <AButton
          type="primary"
          onClick={() => {}}
        >
          {t('CREATE')}
        </AButton>
      ]}
      renderTable={
        <ATable<DictVo>
          rowKey={(record) => record.id!}
          scroll={{
            scrollToFirstRowOnChange: true,
            x: 1500
          }}
        />
      }
    />
  )
}
