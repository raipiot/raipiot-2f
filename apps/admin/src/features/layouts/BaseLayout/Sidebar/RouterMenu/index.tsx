import { type MenuItem, routerMenus } from '@/features/menus'

import SearchBar from './SearchBar'

export default function RouterMenu() {
  const { siderBg } = ATheme.useToken().token.Layout!
  const navigate = useNavigate()
  const routerState = useRouterState()

  // 选中项
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  // 展开项
  const [openKeys, setOpenKeys] = useState<string[]>([])

  // 根据路由地址，设置菜单的选中项和展开项
  useEffect(() => {
    setSelectedKeys([routerState.location.pathname])
    setOpenKeys((value) => [
      ...routerState.location.pathname
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
    <div className="flex min-h-[calc(100vh-40px)] w-full flex-col items-center overflow-y-scroll !border-0 !border-l border-gray-300 dark:border-gray-950">
      <SearchBar />
      <div className="rp-hide-scrollbar h-[calc(100vh-96px)] w-full overflow-y-auto">
        <AMenu
          style={{
            backgroundColor: siderBg,
            border: 'none'
          }}
          items={routerMenus()}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
          mode="inline"
          onClick={handleClickMenuItem}
        />
      </div>
    </div>
  )
}
