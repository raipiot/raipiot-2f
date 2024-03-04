import { TodoTask } from '@/features/dashboard'
import { InfoTabs } from '@/features/dashboard/components/InfoTabs'
import { Wrapper } from '@/features/dashboard/components/Wrapper'
import { useDashboardSuspenseQuery } from '@/features/dashboard/queries'

export const Route = createLazyFileRoute('/_base/dashboard')({
  component: Dashboard
})

function Dashboard() {
  const { data } = useDashboardSuspenseQuery()

  return (
    <div className="flex flex-col gap-2 bg-gray-50 dark:bg-dark">
      <Wrapper title="我的工作台" />
      <Wrapper
        title="待办事项"
        className="grid grid-cols-2 flex-wrap justify-start gap-4 p-2 md:flex md:p-4"
      >
        {data.todo.map((item) => (
          <TodoTask
            {...item}
            key={item.id}
          />
        ))}
      </Wrapper>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <InfoTabs />
        <Wrapper
          title="常用功能"
          className="h-[300px] overflow-y-auto"
          aside={<MaterialSymbolsSettingsOutline className="cursor-pointer text-sky-600" />}
        >
          <div className="flex flex-wrap gap-4 p-4">
            <AButton>
              <Link to="/system/users">供应商管理</Link>
            </AButton>
            <AButton>
              <Link to="/system/users">生命周期管理</Link>
            </AButton>
            <AButton>
              <Link to="/system/users">供应商查询</Link>
            </AButton>
          </div>
        </Wrapper>
      </div>
      <Wrapper title="异常处理">
        <AEmpty
          description="暂无异常"
          className="mx-auto my-12"
        />
      </Wrapper>
    </div>
  )
}
