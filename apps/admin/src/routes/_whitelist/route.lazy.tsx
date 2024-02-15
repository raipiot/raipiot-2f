import loginBg from '@/assets/img/login_bg.jpg'

export const Route = createLazyFileRoute('/_whitelist')({
  component: Layout
})

function Layout() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <Outlet />
    </div>
  )
}
