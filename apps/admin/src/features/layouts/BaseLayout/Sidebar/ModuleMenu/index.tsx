import { moduleMenus } from '@/features/menus'

import Logo from './Logo'

export default function ModuleMenu() {
  return (
    <div className="px-1">
      <Logo />
      <div className="rp-hide-scrollbar h-[calc(100vh-96px)] overflow-y-auto py-2">
        {moduleMenus.map((i) => (
          <div
            key={i.code}
            className="mb-6 flex cursor-pointer flex-col items-center justify-center space-y-1.5 transition-all hover:scale-105 active:opacity-85"
          >
            {i.icon}
            <div className="text-xs">{I18nUtils.getText(i.title)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
