export const Route = createLazyFileRoute('/_portal/forgot-password')({
  component: ForgotPassword
})

function ForgotPassword() {
  return <RpWaiting />
}
