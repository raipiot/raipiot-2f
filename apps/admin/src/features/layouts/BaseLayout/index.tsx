import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import Tabs from './Tabs'

export function BaseLayout() {
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
