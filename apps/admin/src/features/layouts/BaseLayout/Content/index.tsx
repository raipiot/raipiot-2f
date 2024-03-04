import { BaseLayoutTransition } from './BaseLayoutTransition'

// TODO: 添加暗黑模式，移动到 ThemeConfig 里
export default function Content() {
  return (
    <ALayout.Content>
      <BaseLayoutTransition className="relative h-[calc(100vh-136px)] overflow-y-scroll bg-white p-2 dark:bg-dark/80 sm:p-4">
        <Outlet />
      </BaseLayoutTransition>
    </ALayout.Content>
  )
}
