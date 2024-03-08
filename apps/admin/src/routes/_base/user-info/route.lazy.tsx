export const Route = createLazyFileRoute('/_base/user-info')({
  component: UserInfo
})

function UserInfo() {
  // const []
  return (
    <div className="flex h-full flex-col space-y-[4px] border bg-gray-200">
      <div className="bg-white px-6 py-3 text-lg">个人中心</div>
      <div className="grid grow grid-cols-[130px_auto] space-x-[4px]">
        <div className="flex flex-col space-y-4 bg-white p-4">
          <div>个人信息</div>
          <div>消息接收</div>
          <div>安全设置</div>
        </div>
        <div className="bg-white p-2 md:p-4">content...</div>
      </div>
    </div>
  )
}
