export const Route = createLazyFileRoute('/_auth/dashboard')({
  component: Dashboard
})

function Dashboard() {
  return <div>Dashboard</div>
}
