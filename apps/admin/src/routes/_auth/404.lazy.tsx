export const Route = createLazyFileRoute('/_auth/404')({
  component: NotFound
})

function NotFound() {
  return (
    <div className="container absolute inset-0 m-auto flex size-fit flex-col items-center space-y-6">
      <span className="text-2xl font-bold sm:text-4xl">出错了</span>
      <span className="text-base font-medium sm:text-xl">无法找到您要访问的页面</span>
      <Link to="/login">
        <AButton type="primary">返回首页</AButton>
      </Link>
    </div>
  )
}
