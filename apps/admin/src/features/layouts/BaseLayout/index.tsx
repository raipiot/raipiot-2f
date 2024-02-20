import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import Tabs from './Tabs'

export function BaseLayout() {
  const { location } = useRouterState()
  const tabStore = useTabStore()
  // const match = useMatch({
  //   from: '/_base'
  // })

  // const match = useMatches()
  // useEffect(() => {
  //   console.log(match)
  // }, [match])

  // 监听路由变化，添加标签记录
  useEffect(() => {
    // console.log('location.pathname', location.pathname)
    const newRecord = {
      path: location.pathname,
      active: true
    }
    tabStore.addRecord(newRecord)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

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
