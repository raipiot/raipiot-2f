import raipiotLogo from '@/assets/images/raipiot.png'
import raipiotDarkLogo from '@/assets/images/raipiot_dark.png'

export default function Header() {
  const themeStore = useThemeStore()
  const sidebarStore = useSidebarStore()

  return (
    <Link
      to="/"
      className="!text-inherit"
    >
      <div className="flex h-14 w-full items-center justify-center space-x-4">
        <AImage
          className="cursor-pointer p-2"
          src={themeStore.isDarkTheme() ? raipiotDarkLogo : raipiotLogo}
          alt=""
          width={64}
          loading="eager"
          preview={false}
          draggable={false}
        />
        <span
          className={clsx([
            'cursor-pointer whitespace-nowrap text-sm tracking-wide transition-[margin,width]',
            sidebarStore.isDisplay && sidebarStore.isCollapse ? 'ml-0 hidden' : 'ml-1 w-auto',
            !sidebarStore.isDisplay && 'hidden'
          ])}
        >
          {AppMetadata.appName}
        </span>
      </div>
    </Link>
  )
}
