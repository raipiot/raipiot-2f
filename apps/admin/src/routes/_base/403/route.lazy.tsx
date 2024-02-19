export const Route = createLazyFileRoute('/_base/403')({
  component: Unauthorized
})

function Unauthorized() {
  return (
    <RpErrorPage
      title="禁止访问"
      subTitle="403 - 您没有权限访问该资源"
    />
  )
}
