import type { DictVo } from '@raipiot-2f/api'

import { useSystemDictRemoveMutation } from '../mutations'

export const useDictValuesColumns = () => {
  const { t } = useTranslation(['SYSTEM/DICTS', 'COMMON'])
  const { createActions, createColumns } = useTableCreator<DictVo>()
  const { mutateAsync, isPending } = useSystemDictRemoveMutation()

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
    createActions({
      width: 180,
      render: (_, record) => (
        <ASpace>
          <RpViewBtn size="small" />
          <RpDeletePopconfirm
            okBtnLoading={isPending}
            onConfirm={() => mutateAsync(record.id!)}
          >
            <RpDeleteBtn size="small" />
          </RpDeletePopconfirm>
          <AButton size="small">{t('COMMON:CREATE.CHILD')}</AButton>
        </ASpace>
      )
    })
  ])
}
