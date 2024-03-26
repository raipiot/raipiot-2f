import type { UserVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { postSelectQueryOptions } from '../../posts'
import { useBaseModalContext, usePlatformModalContext } from '../context'
import { useRemoveMutation } from '../mutations'
import { detailQueryOptions, platformDetailQueryOptions } from '../queries'

export const useColumns = () => {
  const { modal, form, setDynamicTreeData, setMode } = useBaseModalContext()
  const platformModalContext = usePlatformModalContext()

  const { t } = useTranslation('SYSTEM/USERS')
  const { createActions, createColumns } = useTableCreator<UserVo>()

  const { mutateAsync, isPending } = useRemoveMutation()

  const prefetchQueryData = (id: string, tenantId: string) =>
    Promise.all([
      queryClient.prefetchQuery(detailQueryOptions(id)),
      queryClient.prefetchQuery(Depts.treeQueryOptions(tenantId)),
      queryClient.prefetchQuery(Roles.treeQueryOptions(tenantId)),
      queryClient.prefetchQuery(postSelectQueryOptions(tenantId!))
    ])

  const onEdit = async (record: UserVo) => {
    setMode('edit')
    const newTreeData = await Promise.all([
      queryClient.ensureQueryData(Depts.treeQueryOptions(record.tenantId)),
      queryClient.ensureQueryData(postSelectQueryOptions(record.tenantId!)),
      queryClient.ensureQueryData(Roles.treeQueryOptions(record.tenantId))
    ])
    setDynamicTreeData(...newTreeData)
    modal.openEdit()
    modal.setMeta(record.id)
    const detail = await queryClient.ensureQueryData(detailQueryOptions(record.id!))
    const newFormValue = {
      ...detail,
      birthday:
        detail.birthday && DateUtils.dayjs(detail.birthday)?.isValid()
          ? DateUtils.dayjs(detail.birthday)
          : undefined,
      password: undefined,
      password2: undefined
    }
    form.setFieldsValue(newFormValue)
  }

  const onRead = async (record: UserVo) => {
    const newTreeData = await Promise.all([
      queryClient.ensureQueryData(Depts.treeQueryOptions(record.tenantId)),
      queryClient.ensureQueryData(postSelectQueryOptions(record.tenantId!)),
      queryClient.ensureQueryData(Roles.treeQueryOptions(record.tenantId))
    ])
    setDynamicTreeData(...newTreeData)
    setMode('view')
    modal.setType('read')
    modal.setMeta(record.id)
    const detail = await queryClient.ensureQueryData(detailQueryOptions(record.id!))
    const newFormValue = {
      ...detail,
      birthday:
        detail.birthday && DateUtils.dayjs(detail.birthday)?.isValid()
          ? DateUtils.dayjs(detail.birthday)
          : undefined,
      password: undefined,
      password2: undefined
    }
    modal.openRead()
    console.log('new form value:', newFormValue)
    form.setFieldsValue(newFormValue)
  }

  return {
    columns: createColumns([
      {
        title: t('LOGIN.ACCOUNT'),
        dataIndex: 'account'
      },
      {
        title: t('TENANT'),
        dataIndex: 'tenantName',
        width: 150,
        custom: { tag: true }
      },
      {
        title: t('NAME'),
        dataIndex: 'realName',
        width: 150
      },
      {
        title: t('ROLE'),
        dataIndex: 'roleName',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('DEPT'),
        dataIndex: 'deptName',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('POSITION'),
        dataIndex: 'postName',
        width: 200,
        ellipsis: { showTitle: false },
        render: (value) => <ATooltip title={value}>{value}</ATooltip>
      },
      {
        title: t('PLATFORM'),
        dataIndex: 'userTypeName',
        custom: { tag: true }
      },
      createActions({
        width: 250,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() => prefetchQueryData(record.id!, record.tenantId!)}
              onClick={() => onRead(record)}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() => prefetchQueryData(record.id!, record.tenantId!)}
              onClick={() => onEdit(record)}
            />
            <RpButton
              variant="config"
              size="small"
              onMouseEnter={() => {
                // 预加载数据
                queryClient.prefetchQuery(platformDetailQueryOptions(record.id!))
              }}
              onClick={async () => {
                platformModalContext.modal.openEdit()
                platformModalContext.modal.setMeta(record.id)
                const { userType, userExt } = await queryClient.ensureQueryData(
                  platformDetailQueryOptions(record.id!)
                )
                platformModalContext.form.setFieldsValue({
                  userId: record.id!,
                  userType,
                  userExt
                })
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
