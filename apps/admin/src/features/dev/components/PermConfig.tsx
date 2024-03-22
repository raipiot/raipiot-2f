export function PermConfig() {
  const permStore = usePermStore()
  return (
    <APopover
      placement="bottom"
      title="权限配置"
      content={
        <ASelect
          value={permStore.getList()}
          options={permStore.selector}
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
