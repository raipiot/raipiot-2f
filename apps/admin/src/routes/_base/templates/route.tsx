export const Route = createFileRoute('/_base/templates')({
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
