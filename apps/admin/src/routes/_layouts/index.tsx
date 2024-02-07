export const Route = createFileRoute('/_layouts/')({
  component: Layout
})

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
