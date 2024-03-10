export const Route = createLazyFileRoute('/_portal/sso')({
  component: SSO
})

function SSO() {
  return <RpWaiting />
}
