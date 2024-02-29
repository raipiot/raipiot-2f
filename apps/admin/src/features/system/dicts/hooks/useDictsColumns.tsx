import type { DictVo } from '@raipiot-2f/api'

import { createColumns } from '@/features/data'

export const useDictsColumns = () => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const response = useResponsive()

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
    {
      title: t('COMMON:ACTIONS'),
      key: 'actions',
      fixed: response.sm && 'right',
      render: (_, record) => (
        <ASpace>
          <Link
            to="/system/dicts/$id"
            params={{ id: record.id! }}
          >
            <AButton size="small">{t('COMMON:VIEW')}</AButton>
          </Link>
          <APopconfirm
            title={t('COMMON:DELETE')}
            description={t('COMMON:OPERATION.CONFIRMATION')}
            okText={t('COMMON:CONFIRM')}
            cancelText={t('COMMON:CANCEL')}
            okButtonProps={{ loading: undefined }}
            onConfirm={() => {}}
          >
            <AButton
              size="small"
              danger
            >
              {t('COMMON:DELETE')}
            </AButton>
          </APopconfirm>
        </ASpace>
      )
    }
  ])
}
