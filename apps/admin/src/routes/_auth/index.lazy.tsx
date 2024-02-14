export const Route = createLazyFileRoute('/_auth/')({
  component: Index
})

function Index() {
  const userStore = useUserStore()
  const navigate = useNavigate()
  return (
    <div className="p-2">
      <Link to="/login">
        <AButton>登录页</AButton>
      </Link>
      <AButton
        onClick={() => {
          userStore.clearUser()
          navigate({ to: '/login' })
        }}
        className="ml-2"
      >
        退出登录
      </AButton>
    </div>
  )
}
