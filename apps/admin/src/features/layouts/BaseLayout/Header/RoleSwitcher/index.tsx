import { Role } from '@/shared/enums'

export default function RoleSwitcher() {
  const authStore = useAuthStore()

  return (
    <ATooltip
      placement="bottom"
      title={`🚀 点击切换角色，改功能仅用于测试！当前角色：${authStore.isPurchaser ? '采购商' : '供应商'}`}
    >
      <ATag
        className="cursor-pointer select-none"
        color={authStore.isPurchaser ? 'blue' : 'gold'}
        onClick={() => authStore.setRole(authStore.isPurchaser ? Role.SUPPLIER : Role.PURCHASER)}
      >
        当前角色：{authStore.isPurchaser ? '采购商' : '供应商'}
      </ATag>
    </ATooltip>
  )
}
