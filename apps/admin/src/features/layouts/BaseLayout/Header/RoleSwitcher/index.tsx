import { Role } from '@/shared/enums'

export default function RoleSwitcher() {
  const authStore = useAuthStore()

  return (
    <ATag
      className="cursor-pointer select-none"
      color={authStore.isPurchaser ? 'blue' : 'gold'}
      onClick={() => authStore.setRole(authStore.isPurchaser ? Role.SUPPLIER : Role.PURCHASER)}
    >
      当前角色：{authStore.isPurchaser ? '采购商' : '供应商'}
    </ATag>
  )
}
