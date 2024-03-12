import type { PostVo } from '@raipiot-2f/api'
import type { FormInstance } from 'antd'
import { isMobile } from 'react-device-detect'

import type { UseModal } from '@/shared/hooks/useModal'

import { systemDictTreeQueryOptions } from '../../dicts'
import { SystemDictCode } from '../../dicts/enum'
import { usePostRemoveMutation } from '../mutations'
import { postQueryOptions } from '../queries'

interface UsePostsColumnsProps {
  modal?: UseModal<string>
  form?: FormInstance
}

export const usePostsColumns = (props?: UsePostsColumnsProps) => {
  const { modal, form } = props ?? {}

  const { t } = useTranslation(['SYSTEM/POST', 'COMMON', 'PORTAL'])
  const { createActions, createColumns } = useTableCreator<PostVo>()

  const { mutateAsync, isPending } = usePostRemoveMutation()
  const { data } = useSuspenseQuery(systemDictTreeQueryOptions(SystemDictCode.SYSTEM_POST))

  return {
    columns: createColumns<PostVo>([
      {
        dataIndex: 'category',
        title: t('CATEGORY'),
        width: 100,
        render: (value) => (
          <RpTagString
            value={data.find((item) => item.value?.toString() === value.toString())?.label}
          />
        )
      },
      {
        title: t('CODE'),
        dataIndex: 'postCode'
      },
      {
        title: t('NAME'),
        dataIndex: 'postName'
      },
      {
        title: t('COMMON:SORT'),
        dataIndex: 'sort',
        width: 80,
        custom: { type: 'tagString' }
      },
      {
        title: t('PORTAL:TENANT.ID'),
        dataIndex: 'tenantId',
        width: 80
      },
      {
        title: t('COMMON:REMARK'),
        dataIndex: 'remark',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      createActions({
        width: 250,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(postQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openRead()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(postQueryOptions(record.id!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => queryClient.prefetchQuery(postQueryOptions(record.id!))}
              onClick={async () => {
                modal?.openEdit()
                modal?.setMeta(record.id)
                form?.setFieldsValue(
                  await queryClient.ensureQueryData(postQueryOptions(record.id!))
                )
              }}
            />
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => mutateAsync(record.id!)}
            >
              <RpButton
                variant="delete"
                size="small"
              />
            </RpDeletePopconfirm>
          </ASpace>
        )
      })
    ])
  }
}
