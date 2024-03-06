export const Route = createFileRoute('/_base/dev/templates')({
  staticData: {
    title: '通用模版'
  },
  component: () => <Outlet />,
  beforeLoad: () => {
    // 模版页面仅开发环境可用
    if (!GlobalEnvConfig.DEV_ONLY) {
      throw redirect({
        to: '/404'
      })
    }
  }
})
