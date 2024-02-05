import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/404')({
  component: () => <div>内容或页面未找到</div>
})
