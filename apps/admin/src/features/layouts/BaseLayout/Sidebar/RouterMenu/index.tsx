import type { MenuItem } from '@/features/menus'

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
    <AMenu
      className="!border-0"
      style={{ backgroundColor: siderBg }}
      items={[]}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      mode="inline"
      onClick={handleClickMenuItem}
    />
  )
}
