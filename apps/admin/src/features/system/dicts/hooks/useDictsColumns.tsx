import type { ColumnsType } from 'antd/es/table'

import type { DictVo } from '@/api/system/dict/dict.vo'

interface Props {
  handleDelete: (id: string) => void
  // toggleEditModal: (id: string) => void
  // toggleDetailModal: (id: string) => void
  isDeleteLoading: boolean
}

export const useDictsColumns = (props: Props): ColumnsType<DictVo> => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const response = useResponsive()

  return [
    {
      title: t('CODE'),
      dataIndex: 'code',
      width: 150,
      align: 'center',
      render: (value) => (
        <RpTagString
          value={value}
          copyable
        />
      )
    },
    {
      title: t('DICT.VALUE'),
      dataIndex: 'dictValue',
      width: 150,
      align: 'center'
    },
    {
      title: t('COMMON:SORT'),
      dataIndex: 'sort',
      width: 80,
      align: 'center',
      render: (value) => <RpTagString value={value} />
    },
    {
      title: t('COMMON:IS.SEALED'),
      dataIndex: 'isSealed',
      width: 80,
      align: 'center',
      render: (value) => (
        <RpBoolean
          value={value}
          mode="text"
        />
      )
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
            okButtonProps={{ loading: props.isDeleteLoading }}
            onConfirm={() => props.handleDelete(record.id!)}
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
  ]
}
