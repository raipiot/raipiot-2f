// 处理登录页面路由调整、重定向
export const useRedirect = () => {
  const navigate = useNavigate()
  const { redirect } = useSearch({ from: '/_auth/login' })

  // 处理重定向
  const handleLoginRedirect = () => navigate({ to: redirect ?? '/', replace: true })

  // 忘记密码
  const handleForgotPassword = () => navigate({ to: '/forgot-password' })

  // 注册
  const handleSignup = () => navigate({ to: '/signup' })

  // SSO
  const handleSSO = () => navigate({ to: '/sso' })

  return {
    handleLoginRedirect,
    handleForgotPassword,
    handleSignup,
    handleSSO
  }
}
