export const Route = createLazyFileRoute('/_base/dashboard')({
  component: Dashboard
})

function Dashboard() {
  return <div className="bg-green-50">Dashboard</div>
}
