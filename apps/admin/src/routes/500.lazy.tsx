import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/500')({
  component: () => <div>服务器错误</div>
})
