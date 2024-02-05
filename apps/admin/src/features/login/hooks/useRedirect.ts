export const useRedirect = () => {
  const { redirect } = useSearch({ from: '/login' })
  const navigate = useNavigate()

  // 处理重定向
  const handleRedirect = () => {
    // 跳转到登录前的页面
    if (redirect) {
      navigate({ to: redirect, replace: true })
    } else {
      navigate({ to: '/', replace: true })
    }
  }

  // 忘记密码
  const handleForgotPassword = () => navigate({ to: '/forgot-password' })

  // 注册
  const handleSignup = () => navigate({ to: '/signup' })

  return { handleRedirect, handleForgotPassword, handleSignup }
}
