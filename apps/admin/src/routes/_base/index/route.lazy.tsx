export const Route = createLazyFileRoute('/_base/')({
  component: Dashboard
})

function Dashboard() {
  const userStore = useUserStore()
  const navigate = useNavigate()
  return (
    <div className="flex space-x-2 p-1">
      <Link to="/change-password">
        <AButton>修改密码</AButton>
      </Link>
      <Link to="/user-info">
        <AButton>用户信息</AButton>
      </Link>
      <AButton
        onClick={() => {
          userStore.clearUser()
          AuthUtils.clearAccessToken()
          AuthUtils.clearRefreshToken()
          navigate({ to: '/login' })
        }}
      >
        退出登录
      </AButton>
    </div>
  )
}
