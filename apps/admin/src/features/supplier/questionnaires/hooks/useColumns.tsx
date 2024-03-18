import type { QuestionnaireVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { useBaseModalContext } from '../context'
import { useRemoveMutation } from '../mutations'
import { detailQueryOptions } from '../queries'

export const useColumns = () => {
  const { modal, form } = useBaseModalContext()

  const { createActions, createColumns } = useTableCreator<QuestionnaireVo>()

  const { mutateAsync, isPending } = useRemoveMutation()

  return {
    columns: createColumns<QuestionnaireVo>([
      {
        title: '调查表编号',
        dataIndex: 'questionnaireCode',
        render: (value) => <Link>{value}</Link>
      },
      {
        title: '调查表状态'
      },
      {
        title: '供应商编码'
      },
      {
        title: '供应商名称'
      },
      {
        title: '公司编码'
      },
      {
        title: '公司名称'
      },
      {
        title: '调查表类型'
      },
      { title: '调查表管控维度' },
      { title: '调查表模版名称' },
      { title: '创建人' },
      { title: '创建人部门' },
      { title: '审批日期' },
      { title: '发布日期' },
      { title: '创建日期' },
      { title: '邀约调查表' },
      createActions({
        width: 250,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <RpButton
              variant="view"
              size="small"
              onMouseEnter={() =>
                queryClient.prefetchQuery(detailQueryOptions(record.questionnaireId!))
              }
              onClick={async () => {
                modal.openRead()
                modal.setMeta(record.questionnaireId!)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.questionnaireId!))
                )
              }}
            />
            <RpButton
              variant="edit"
              size="small"
              onMouseEnter={() =>
                queryClient.prefetchQuery(detailQueryOptions(record.questionnaireId!))
              }
              onClick={async () => {
                modal.openEdit()
                modal.setMeta(record.questionnaireId!)
                form.setFieldsValue(
                  await queryClient.ensureQueryData(detailQueryOptions(record.questionnaireId!))
                )
              }}
            />
            <Link
              to="/system/dicts/$id"
              params={{ id: record.questionnaireId! }}
            >
              <RpButton
                variant="config"
                size="small"
              />
            </Link>
            <RpDeletePopconfirm
              okBtnLoading={isPending}
              onConfirm={() => mutateAsync(record.questionnaireId!)}
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
