export const useRedirect = () => {
  const navigate = useNavigate()

  // 处理注册重定向
  const handleSignupRedirect = () => navigate({ to: '/' })

  // 跳转至登录页面
  const handleLogin = () => navigate({ to: '/login' })

  return {
    handleSignupRedirect,
    handleLogin
  }
}
