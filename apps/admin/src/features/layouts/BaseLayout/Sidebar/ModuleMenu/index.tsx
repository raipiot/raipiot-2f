import { moduleMenus } from '@/features/menus'

import Logo from './Logo'

export default function ModuleMenu() {
  return (
    <div className="w-16">
      <Logo />
      <div className="flex  flex-col items-center space-y-4">
        {moduleMenus.map((i) => (
          <div
            key={i.code}
            className="flex cursor-pointer flex-col items-center space-y-1.5 py-1 transition-all hover:scale-110 active:opacity-85"
          >
            <div>{i.icon}</div>
            <span className="text-xs">{I18nUtils.getText(i.title)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
