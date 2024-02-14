export const Route = createLazyFileRoute('/_auth')({
  component: Layout
})

function Layout() {
  return (
    <div>
      123
      <Outlet />
    </div>
  )
}
