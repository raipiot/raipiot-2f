import { BaseLayoutTransition } from './BaseLayoutTransition'

export default function Content() {
  return (
    <ALayout.Content>
      <BaseLayoutTransition className="relative h-[calc(100vh-140px)] overflow-y-scroll p-2 sm:p-4">
        <Outlet />
      </BaseLayoutTransition>
    </ALayout.Content>
  )
}
