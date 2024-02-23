import type { ColumnsType } from 'antd/es/table'

import type { DictVo } from '@/api/system/dict/dict.vo'
import { createColumns } from '@/features/data'

export const useDictValuesColumns = (): ColumnsType<DictVo> => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const response = useResponsive()

  return createColumns<DictVo>([
    {
      title: t('CODE'),
      dataIndex: 'code',
      align: 'left',
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
      align: 'center',
      fixed: response.sm && 'right',
      width: 120,
      render: (_, record) => (
        <ASpace>
          <Link
            to="/system/dicts/$id"
            params={{ id: record.id! }}
          >
            <AButton size="small">{t('COMMON:EDIT')}</AButton>
          </Link>
          {/* <APopconfirm
            title={record.enabled ? t('ENABLE') : t('DISABLE')}
            description={t('OPERATION.CONFIRMATION')}
            okText={t('CONFIRM')}
            cancelText={t('CANCEL')}
            okButtonProps={{ loading: props.isPatchLoading }}
            onConfirm={() => props.toggleEnabled({ ...record })}
          >
            <AButton
              size="small"
              danger={!record.enabled}
            >
              {record.enabled ? t('ENABLE') : t('DISABLE')}
            </AButton>
          </APopconfirm> */}
          <APopconfirm
            title={t('COMMON:DELETE')}
            description={t('COMMON:OPERATION.CONFIRMATION')}
            okText={t('COMMON:CONFIRM')}
            cancelText={t('COMMON:CANCEL')}
            okButtonProps={{ loading: undefined }}
            onConfirm={() => {}}
          >
            <AButton
              danger
              size="small"
            >
              {t('COMMON:DELETE')}
            </AButton>
          </APopconfirm>
        </ASpace>
      )
    }
  ])
}
