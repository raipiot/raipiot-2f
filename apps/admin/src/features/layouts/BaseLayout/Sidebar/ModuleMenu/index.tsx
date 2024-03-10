import type { ModuleMenuCode } from '@/features/menus'
import { moduleMenus } from '@/features/menus'

import Logo from './Logo'
import ModuleMenuItem from './ModuleMenuItem'

export default function ModuleMenu() {
  const menuStore = useMenuStore()
  return (
    <div className="w-16">
      <Logo />
      <div className="rp-hide-scrollbar flex h-[calc(100vh-96px)] flex-col items-center overflow-y-auto">
        {moduleMenus.map((i) => (
          <ModuleMenuItem
            key={i.key}
            label={I18nUtils.getText(i.label)}
            onClick={() => menuStore.setActiveModuleMenuCode(i.key as ModuleMenuCode)}
            icon={i.icon}
            active={menuStore.activeModuleMenuCode === i.key}
            className="mb-2"
          />
        ))}
      </div>
    </div>
  )
}
