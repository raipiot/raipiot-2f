export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className="p-2">
      <Link to="/login">
        <AButton>登录页</AButton>
      </Link>
    </div>
  )
}
