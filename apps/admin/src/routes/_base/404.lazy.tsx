export const Route = createLazyFileRoute('/_base/404')({
  component: () => (
    <RpErrorPage
      title="页面或资源不存在"
      subTitle="404 - 无法找到您要访问的页面或资源"
    />
  )
})
