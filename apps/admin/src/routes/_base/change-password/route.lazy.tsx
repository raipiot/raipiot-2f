export const Route = createLazyFileRoute('/_base/change-password')({
  component: ChangePassword
})

function ChangePassword() {
  return <RpWaiting />
}
