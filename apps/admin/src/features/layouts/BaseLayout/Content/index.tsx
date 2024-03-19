// TODO: 添加暗黑模式，移动到 ThemeConfig 里
export default function Content() {
  return (
    <ALayout.Content>
      <div className="relative h-[calc(100vh-136px)] overflow-y-scroll bg-white p-2 dark:bg-dark/80 sm:p-4">
        <Outlet />
      </div>
    </ALayout.Content>
  )
}
