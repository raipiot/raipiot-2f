import { moduleMenus } from '@/features/menus'

import Logo from './Logo'

export default function ModuleMenu() {
  return (
    <div className="w-16">
      <Logo />
      <div className="flex flex-col items-center space-y-4">
        {moduleMenus.map((i) => (
          <div
            key={i.code}
            className="flex cursor-pointer flex-col items-center space-y-1.5 py-1.5 transition-all hover:scale-105 active:opacity-85"
          >
            {i.icon}
            <div className="text-xs">{I18nUtils.getText(i.title)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
