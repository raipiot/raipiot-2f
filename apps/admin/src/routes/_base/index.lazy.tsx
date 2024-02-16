export const Route = createLazyFileRoute('/_base/')({
  component: Index
})

function Index() {
  const userStore = useUserStore()
  const navigate = useNavigate()
  return (
    <div className="p-2">
      <Link to="/dashboard">
        <AButton>仪表盘</AButton>
      </Link>
      <AButton
        onClick={() => {
          userStore.clearUser()
          AuthUtils.clearAccessToken()
          AuthUtils.clearRefreshToken()
          navigate({ to: '/login' })
        }}
        className="ml-2"
      >
        退出登录
      </AButton>
    </div>
  )
}
