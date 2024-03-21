import type { QuestionnaireVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { tabStateMap } from '../maps'

export const useBaseTableColumns = () => {
  const { createActions, createColumns } = useTableCreator<QuestionnaireVo>()

  return {
    columns: createColumns([
      {
        title: '调查表编号',
        dataIndex: 'questionnaireId',
        custom: (_, record) => ({
          link: {
            to: '/srm/questionnaires/$id',
            params: { id: record?.questionnaireId } as any
          }
        })
      },
      {
        title: '调查表状态',
        dataIndex: 'state',
        custom: { tag: true, formatter: (value) => tabStateMap.get(value) }
      },
      { title: '供应商编码', dataIndex: 'supplierCode' },
      { title: '供应商名称', dataIndex: 'supplierName', custom: { tooltip: true } },
      { title: '公司编码', dataIndex: 'companyCode' },
      { title: '公司名称', dataIndex: 'companyName', custom: { tooltip: true } },
      { title: '调查表类型', dataIndex: 'type' },
      { title: '调查表管控维度', dataIndex: 'controlDimension' },
      { title: '调查表模版名称', dataIndex: 'templateName' },
      { title: '创建人', dataIndex: 'createBy' },
      { title: '创建人部门', dataIndex: 'createDepartment' },
      { title: '审批日期', dataIndex: 'approvalDate', custom: { dateString: true } },
      { title: '发布日期', dataIndex: 'releaseDate', custom: { dateString: true } },
      { title: '创建日期', dataIndex: 'createTime', custom: { dateString: true } },
      { title: '邀约调查表', dataIndex: 'isInvitation', custom: { booleanValue: true } },
      createActions({
        width: 150,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <Link
              to="/srm/questionnaires/$id"
              params={{ id: record.questionnaireId! }}
            >
              <RpButton
                variant="view"
                size="small"
              />
            </Link>
            <PermCodeProvider code="srm:questionnaires:review">
              <Link
                to="/srm/questionnaires/$id"
                params={{ id: record.questionnaireId! }}
              >
                <AButton size="small">填写</AButton>
              </Link>
            </PermCodeProvider>
          </ASpace>
        )
      })
    ])
  }
}
