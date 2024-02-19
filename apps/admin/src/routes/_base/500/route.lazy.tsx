export const Route = createLazyFileRoute('/_base/500')({
  component: InternalServerError
})

function InternalServerError() {
  return (
    <RpErrorPage
      title="服务器错误"
      subTitle="500 - 请联系系统管理员寻求帮助"
    />
  )
}
