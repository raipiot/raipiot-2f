import type { QuestionnaireVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { tabStateMap } from '../maps'

export const useColumns = () => {
  const { createActions, createColumns } = useTableCreator<QuestionnaireVo>()

  return {
    columns: createColumns<QuestionnaireVo>([
      {
        title: '调查表编号',
        dataIndex: 'questionnaireId',
        custom: {
          type: 'link',
          linkProps: (_, record) =>
            ({
              to: '/supplier/questionnaires/$id',
              params: { id: record.questionnaireId! }
            }) as any // TODO: 修复类型
        }
      },
      {
        title: '调查表状态',
        dataIndex: 'state',
        custom: { type: 'tagString', formatter: (value) => tabStateMap.get(value) }
      },
      { title: '供应商编码', dataIndex: 'supplierCode', custom: { type: 'string' } },
      { title: '供应商名称', dataIndex: 'supplierName', custom: { type: 'tooltipString' } },
      { title: '公司编码', dataIndex: 'companyCode', custom: { type: 'string' } },
      { title: '公司名称', dataIndex: 'companyName', custom: { type: 'tooltipString' } },
      { title: '调查表类型', dataIndex: 'type', custom: { type: 'string' } },
      { title: '调查表管控维度', dataIndex: 'controlDimension', custom: { type: 'string' } },
      { title: '调查表模版名称', dataIndex: 'templateName', custom: { type: 'string' } },
      { title: '创建人', dataIndex: 'createBy', custom: { type: 'string' } },
      { title: '创建人部门', dataIndex: 'createDepartment', custom: { type: 'string' } },
      { title: '审批日期', dataIndex: 'approvalDate', custom: { type: 'dateString' } },
      { title: '发布日期', dataIndex: 'releaseDate', custom: { type: 'dateString' } },
      { title: '创建日期', dataIndex: 'createTime', custom: { type: 'dateString' } },
      { title: '邀约调查表', dataIndex: 'isInvitation', custom: { type: 'boolean' } },
      createActions({
        width: 150,
        render: (_, record) => (
          // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
          <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
            <Link
              to="/supplier/questionnaires/$id"
              params={{ id: record.questionnaireId! }}
            >
              <RpButton
                variant="view"
                size="small"
              />
            </Link>
            <PermCodeProvider code="supplier:questionnaires:review">
              <Link
                to="/supplier/questionnaires/$id"
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
