import loginBanner from '@/assets/img/login_banner.jpg'

export const Route = createLazyFileRoute('/_whitelist')({
  component: Layout
})

function Layout() {
  return (
    <div className="size-full">
      <img
        src={loginBanner}
        alt=""
        className="h-screen object-fill"
      />
      <Outlet />
    </div>
  )
}
