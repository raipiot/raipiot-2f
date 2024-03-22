import type { TabsProps } from 'antd/lib'

import { useDashboardSuspenseQuery } from '../queries'

interface CommonItemProps {
  items: {
    id: number
    title: string
    timestamp: string
    content: string
  }[]
}

function CommonItems({ items }: CommonItemProps) {
  return (
    <div className="h-[300px] overflow-y-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-sm border p-2 dark:border-gray-900/30"
        >
          <AFlex
            justify="space-between"
            className="mb-4"
            align="center"
          >
            <div className="text-md">{item.title}</div>
            <div className="text-sm text-gray-500">{item.timestamp}</div>
          </AFlex>
          <div className="text-sm text-gray-700 dark:text-gray-300">{item.content}A</div>
        </div>
      ))}
    </div>
  )
}

export function InfoTabs() {
  const { data } = useDashboardSuspenseQuery()

  const tabItems: TabsProps['items'] = [
    {
      label: '系统消息',
      key: 'systemInfo',
      children: <CommonItems items={data.notify.systemInfo} />
    },
    {
      label: '公司发布',
      key: 'companyPublish',
      children: <CommonItems items={data.notify.companyPublish} />
    },
    {
      label: '平台发布',
      key: 'platformPublish',
      children: <CommonItems items={data.notify.platformPublish} />
    }
  ]

  return (
    <div className="border border-transparent bg-white px-4 pb-4 shadow dark:border-dark dark:bg-transparent">
      <ATabs
        items={tabItems}
        defaultValue="systemInfo"
      />
    </div>
  )
}
