import { type ParamVo, ParamVoDataIndex } from '@raipiot-2f/api'
import type { ColumnsType } from 'antd/es/table'

interface Props {
  handleEdit: (paramsObj: ParamVo) => void
  handleView: (paramsObj: ParamVo) => void
}

export const useParamsColumns = (props: Props): ColumnsType<ParamVo> => {
  const { t } = useTranslation(['SYSTEM/PARAMS', 'COMMON'])
  const response = useResponsive()

  return [
    {
      title: t('PARAMS.NAME'),
      dataIndex: ParamVoDataIndex.paramName,
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
      title: t('PARAMS.KEY'),
      dataIndex: ParamVoDataIndex.paramKey,
      width: 150,
      align: 'center'
    },
    {
      title: t('PARAMS.VALUE'),
      dataIndex: ParamVoDataIndex.paramValue,
      width: 80,
      align: 'center',
      render: (value) => <RpTagString value={value} />
    },
    {
      title: t('COMMON:ACTIONS'),
      key: 'actions',
      align: 'center',
      fixed: response.sm && 'right',
      width: 120,
      render: (_, record) => (
        <ASpace>
          <APopconfirm
            title={t('COMMON:DELETE')}
            description={t('COMMON:OPERATION.CONFIRMATION')}
            okText={t('COMMON:CONFIRM')}
            cancelText={t('COMMON:CANCEL')}
            // 使用 mutation 时，可以使用 loading 属性
            // okButtonProps={{ loading: props.isDeleteLoading }}
            // onConfirm={() => props.handleDelete(record)}
          >
            <AButton
              danger
              size="small"
            >
              {t('COMMON:DELETE')}
            </AButton>
          </APopconfirm>
          <AButton
            size="small"
            onClick={() => props.handleEdit(record)}
          >
            {t('COMMON:EDIT')}
          </AButton>
          <AButton
            size="small"
            onClick={() => props.handleView(record)}
          >
            {t('COMMON:VIEW')}
          </AButton>
        </ASpace>
      )
    }
  ]
}
