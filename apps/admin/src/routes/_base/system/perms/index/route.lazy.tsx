import type { LazyMenuPageDto, MenuVo, ScopeTypeString } from '@raipiot-2f/api'

import { lazyMenuListQO } from '@/features/system/menus'

export const Route = createLazyFileRoute('/_base/system/perms/')({
  component: Component
})

function Component() {
  const [isPending, startTransition] = useTransition()
  const [type, setType] = useState<ScopeTypeString>('api')
  // 搜索表单
  const { searchForm, searchFormItems } = Perms.useSearchForm()
  // 表格列
  const { columns } = Perms.useColumns({ type })
  const [params, setParams] = useState<LazyMenuPageDto>({
    parentId: ''
  })

  // 异步查询：列表数据
  const { data, refetch } = useSuspenseQuery(lazyMenuListQO(params))

  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <ARadio.Group
            value={type}
            buttonStyle="solid"
            onChange={(v) => {
              setType(v.target.value)
              searchForm.resetFields()
              setParams({ parentId: '' })
              refetch()
            }}
          >
            <ARadio.Button value="api">数据</ARadio.Button>
            <ARadio.Button value="data">接口</ARadio.Button>
          </ARadio.Group>
        )
      }}
    >
      {/* 搜索区域 */}
      <RpSearchBar
        // 搜索表单
        formProps={{ form: searchForm }}
        // 表单配置项
        formItems={searchFormItems}
        // 事件：搜索
        onSearch={(values) =>
          startTransition(() => {
            setParams({ ...params, ...values })
          })
        }
      />
      {/* 表格 */}
      <RpBasicTable<MenuVo>
        rowKey={(record) => record.id!}
        // 表格列
        columns={columns}
        // 表格数据
        dataSource={data}
        // 刷新加载
        refreshLoading={isPending}
        // 事件：刷新
        onRefresh={() =>
          startTransition(() => {
            refetch()
          })
        }
      />
    </RpPageContainer>
  )
}
