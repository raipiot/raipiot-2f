export const Route = createLazyFileRoute('/_base/user-info')({
  component: UserInfo
})

function UserInfo() {
  return <div>用户信息</div>
}
