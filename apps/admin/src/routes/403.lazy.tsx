import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/403')({
  component: () => <div>没有权限访问该内容</div>
})
