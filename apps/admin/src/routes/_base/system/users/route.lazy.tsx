export const Route = createLazyFileRoute('/_base/system/users')({
  component: Users
})

function Users() {
  return <div>用户管理</div>
}
