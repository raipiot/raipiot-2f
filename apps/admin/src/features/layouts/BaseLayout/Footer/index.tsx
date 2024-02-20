import { getImageFromAssets } from '@/features/assets'

export default function Footer() {
  const themeStore = useThemeStore()

  return (
    <ALayout.Footer className="z-50 flex h-10 w-full items-center justify-center space-x-2 border-y border-gray-300 !p-0 text-center text-xs shadow-sm dark:border-gray-950">
      <span>
        {AppMetadata.appName} - v{AppMetadata.appVersion}
      </span>
      <span>©</span>
      <AImage
        className="-mb-2 cursor-pointer pb-2 transition-all hover:-translate-y-1 hover:scale-110 active:-translate-y-0 active:scale-105 active:opacity-75"
        src={getImageFromAssets(themeStore.isDarkTheme() ? 'raipiot_dark.png' : 'raipiot.png')}
        alt=""
        loading="eager"
        width={20}
        preview={false}
        draggable={false}
        onClick={() => BrowserUtils.openNewWindow(BrandConfig.websiteUrl)}
      />
      <span>{BrandConfig.companyFullName}</span>
    </ALayout.Footer>
  )
}