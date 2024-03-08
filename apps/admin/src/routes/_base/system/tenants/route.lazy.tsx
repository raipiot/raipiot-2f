export const Route = createLazyFileRoute('/_base/system/tenants')({
  component: Tenants
})

function Tenants() {
  return <RpWaiting />
}
