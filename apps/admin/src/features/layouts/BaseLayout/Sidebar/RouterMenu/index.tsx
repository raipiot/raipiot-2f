import { getRouterMenu, type MenuItem, removeTrailingSlash } from '@/features/menus'

import SearchBar from './SearchBar'

export default function RouterMenu() {
  const { siderBg } = ATheme.useToken().token.Layout!
  const navigate = useNavigate()
  const routerState = useRouterState()
  const menuStore = useMenuStore()

  // 选中项
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  // 展开项
  const [openKeys, setOpenKeys] = useState<string[]>([])

  // 根据路由地址，设置菜单的选中项和展开项
  useEffect(() => {
    setSelectedKeys([routerState.location.pathname])
    setOpenKeys((value) => [
      ...removeTrailingSlash(routerState.location.pathname)
        .split('/')
        .filter(Boolean)
        .reduce<string[]>((acc, cur) => {
          const key = `${acc}/${cur}`
          return [...acc, key]
        }, []),
      ...value
    ])
  }, [routerState.location.pathname])

  // 点击菜单项，跳转到对应的路由
  const handleClickMenuItem = (menuInfo: MenuItem) => {
    if (menuInfo?.key && typeof menuInfo.key === 'string') {
      navigate({ to: menuInfo.key })
    }
  }

  return (
    <div className="rp-hide-scrollbar flex min-h-[calc(100vh-40px)] w-full flex-col items-center overflow-y-scroll !border-0 !border-l border-gray-300 dark:border-gray-950">
      <SearchBar />
      <AMenu
        rootClassName="rp-hide-scrollbar"
        style={{
          backgroundColor: siderBg,
          border: 'none',
          height: 'calc(100vh - 96px)',
          width: '100%',
          overflowY: 'auto'
        }}
        items={getRouterMenu(menuStore.activeModuleMenuCode)}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        mode="inline"
        onClick={handleClickMenuItem}
      />
    </div>
  )
}
