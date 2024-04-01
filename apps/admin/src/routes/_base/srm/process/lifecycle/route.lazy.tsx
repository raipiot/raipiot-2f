import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/process/lifecycle')({
  component: () => <div>Hello /_base/srm/process/lifecycle!</div>
})
