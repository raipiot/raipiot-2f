import { BaseLayoutTransition } from './BaseLayoutTransition'

// TODO: Add dark mode
export default function Content() {
  return (
    <ALayout.Content>
      <BaseLayoutTransition className="relative h-[calc(100vh-136px)] overflow-y-scroll p-2 sm:p-4 bg-white dark:bg-dark/80">
        <Outlet />
      </BaseLayoutTransition>
    </ALayout.Content>
  )
}
