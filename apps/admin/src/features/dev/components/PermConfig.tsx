import type { SelectProps } from 'antd'

const codes: SelectProps['options'] = [
  { label: '调查表：管理', value: 'supplier:questionnaires' },
  { label: '调查表：创建', value: 'supplier:questionnaires:create' },
  { label: '调查表：填写', value: 'supplier:questionnaires:write' },
  { label: '调查表：审核', value: 'supplier:questionnaires:review' }
]

export function PermConfig() {
  const permStore = usePermStore()
  return (
    <APopover
      placement="bottom"
      title="权限配置"
      content={
        <ASelect
          value={permStore.getList()}
          options={codes}
          style={{ width: 400 }}
          mode="multiple"
          onSelect={(value) => permStore.addCode(value)}
          onDeselect={(value) => permStore.removeCode(value)}
        />
      }
      arrow
      trigger="click"
    >
      <div>
        <ATooltip
          title="🚀 用于开发、测试环境快速测试权限功能！"
          placement="left"
        >
          <AButton>权限配置</AButton>
        </ATooltip>
      </div>
    </APopover>
  )
}
