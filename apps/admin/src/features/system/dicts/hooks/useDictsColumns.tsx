import type { DictVo } from '@raipiot-2f/api'

export const useDictsColumns = () => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createActions, createColumns } = useTableFields<DictVo>()

  return createColumns<DictVo>([
    {
      title: t('CODE'),
      dataIndex: 'code',
      custom: {
        type: 'tagString',
        tagStringProps: { copyable: true }
      }
    },
    {
      title: t('DICT.VALUE'),
      dataIndex: 'dictValue'
    },
    {
      title: t('COMMON:SORT'),
      dataIndex: 'sort',
      width: 80,
      custom: { type: 'tagString' }
    },
    {
      title: t('COMMON:IS.SEALED'),
      dataIndex: 'isSealed',
      width: 80,
      custom: { type: 'boolean' }
    },
    createActions({
      render: (_, record) => (
        <ASpace>
          <Link
            to="/system/dicts/$id"
            params={{ id: record.id! }}
          >
            <RpViewBtn size="small" />
          </Link>
          <RpDeletePopconfirm
            okBtnLoading={false}
            onConfirm={() => {}}
          >
            <RpDeleteBtn size="small" />
          </RpDeletePopconfirm>
        </ASpace>
      )
    })
  ])
}
