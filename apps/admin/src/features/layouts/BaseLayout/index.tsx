import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import Tabs from './Tabs'

export function BaseLayout() {
  const { location } = useRouterState()
  const matches = useMatches()

  // 监听路由变化，添加标签记录
  useEffect(() => {
    const newRecord = {
      path: location.pathname,
      active: true
    }
    useTabRecordStore.getState().addRecord(newRecord)
  }, [matches, location])
  return (
    // NOTE: 此处 rootClassName 不加 !flex-row 会导致加载布局闪屏
    <ALayout rootClassName="!flex !flex-row">
      <Sidebar />
      <ALayout className="border-r border-gray-300 dark:border-gray-950">
        <Header />
        <Tabs />
        <Content />
        <Footer />
      </ALayout>
    </ALayout>
  )
}
