export const Route = createLazyFileRoute('/_base/')({
  component: Index
})

function Index() {
  const userStore = useUserStore()
  const navigate = useNavigate()
  return (
    <div className="flex space-x-2 p-1">
      <Link to="/dashboard">
        <AButton>仪表盘</AButton>
      </Link>
      <Link to="/test">
        <AButton>测试</AButton>
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
