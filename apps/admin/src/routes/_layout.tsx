export const Route = createFileRoute('/_layout')({
  component: Layout
})

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
