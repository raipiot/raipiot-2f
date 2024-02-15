export const Route = createLazyFileRoute('/_whitelist/forgot-password')({
  component: ForgotPassword
})

function ForgotPassword() {
  return <div>忘记密码</div>
}
