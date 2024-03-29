import FullScreenButton from './FullScreenButton'
import LanguageButton from './LanguageButton'
import MenuVisibilityToggle from './MenuVisibilityToggle'
import ThemeToggle from './ThemeToggle'
import UserAvatar from './UserAvatar'

export default function Header() {
  return (
    <ALayout.Header
      className="z-50 flex items-center justify-between border-y border-gray-300 !p-2 dark:border-gray-950 sm:!p-4"
      style={{
        padding: '0 15px',
        height: '56px'
      }}
    >
      <div className="flex items-center justify-start !space-x-4">
        <MenuVisibilityToggle />
      </div>

      <div className="flex items-center justify-start !space-x-4">
        <Dev.PermConfig />
        <Link
          to="/"
          className="!text-inherit"
        >
          <span className="hidden md:inline">企业商城</span>
          <MaterialSymbolsAddShoppingCart className="md:hidden" />
        </Link>
        <Link
          to="/"
          className="!text-inherit"
        >
          <span className="hidden md:inline">SRM 门户</span>
          <MaterialSymbolsHouseOutlineRounded className="md:hidden" />
        </Link>
        <FullScreenButton />
        <LanguageButton />
        <ThemeToggle />
        <UserAvatar />
      </div>
    </ALayout.Header>
  )
}
