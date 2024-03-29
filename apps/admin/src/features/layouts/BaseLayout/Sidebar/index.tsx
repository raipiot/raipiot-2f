import CollapseButton from './CollapseButton'
import Mask from './Mask'
import ModuleMenu from './ModuleMenu'
import RouterMenu from './RouterMenu'

export default function Sidebar() {
  const sidebarStore = useSidebarStore()
  return (
    <>
      <ALayout.Sider
        className={clsx(
          '!absolute inset-y-0 left-0 z-[100] h-screen overflow-hidden border border-gray-300 shadow-sm dark:border-gray-950 sm:!static',
          !sidebarStore.isDisplay && 'border-r-0'
        )}
        collapsible
        collapsed={sidebarStore.isCollapse}
        onCollapse={(value) => sidebarStore.setIsCollapse(value)}
        width={sidebarStore.isDisplay ? 280 : 0}
        collapsedWidth={sidebarStore.isDisplay ? 146 : 0}
        trigger={null}
      >
        <div className="flex h-[calc(100%-40px)] select-none">
          <ModuleMenu />
          <RouterMenu />
        </div>
        <CollapseButton />
      </ALayout.Sider>
      <Mask />
    </>
  )
}
