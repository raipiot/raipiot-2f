export const Route = createLazyFileRoute('/_auth/forgot-password')({
  component: ForgotPassword
})

function ForgotPassword() {
  return <div>忘记密码</div>
}
