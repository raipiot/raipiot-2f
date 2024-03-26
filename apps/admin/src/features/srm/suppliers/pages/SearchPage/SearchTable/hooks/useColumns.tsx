import { type SupplierVo } from '@raipiot-2f/api'
import { isMobile } from 'react-device-detect'

import { LifecycleStageValue } from '@/features/srm/suppliers/components'
import { lifecycleStageLabelMap } from '@/features/srm/suppliers/maps'

export const useColumns = () => {
  const { createColumns, createActions } = useTableCreator<SupplierVo>()

  return createColumns([
    { title: '供应商名称', dataIndex: 'name' },
    { title: '业务实体', dataIndex: 'companyTypeName', custom: { tooltip: true } },
    { title: '默认联系人', dataIndex: 'realName' },
    { title: '手机号', dataIndex: 'phone' },
    { title: 'ERP 供应商编码', dataIndex: 'erpCode' },
    {
      title: '生命周期阶段',
      dataIndex: 'lifecycleStage',
      render: (value, record) => (
        <LifecycleStageValue
          value={value}
          target={record?.targetLifecycleStage}
          status={record?.relegationStatus}
        />
      )
    },
    createActions({
      render: (_, record) => (
        // rp-table-action 用于非 Hover 表格行上隐藏操作按钮
        <ASpace className={clsx(!isMobile && 'rp-table-action', 'transition-all ease-out')}>
          <Link
            to="/srm/suppliers/$id/related"
            params={{ id: record.id! }}
          >
            <AButton size="small">关联单据</AButton>
          </Link>

          <ADropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: '业务类单据',
                  type: 'group',
                  children: [
                    {
                      key: '2',
                      label: '调查表创建及发布',
                      onClick: () => {}
                    },
                    {
                      key: '3',
                      label: '送样申请发布',
                      onClick: () => {}
                    },
                    {
                      key: '4',
                      label: '现场考察报告创建',
                      onClick: () => {}
                    }
                  ]
                },
                {
                  key: '2',
                  label: '主数据类单据',
                  type: 'group',
                  children: [
                    {
                      key: '5',
                      label: '生命周期升降级',
                      onClick: () => {},
                      children: Array.from(lifecycleStageLabelMap).map(([key, label]) => ({
                        key,
                        label,
                        onClick: () => {}
                      }))
                    },
                    {
                      key: '6',
                      label: '供货能力清单定义',
                      disabled: true,
                      onClick: () => {}
                    },
                    {
                      key: '7',
                      label: '供应商分类变更',
                      disabled: true,
                      onClick: () => {}
                    },
                    {
                      key: '8',
                      label: '供应商信息变更',
                      onClick: () => {}
                    }
                  ]
                }
              ]
            }}
            placement="bottom"
          >
            <AButton size="small">新建单据</AButton>
          </ADropdown>
        </ASpace>
      )
    })
  ])
}
