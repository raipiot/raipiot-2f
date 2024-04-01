import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/process/lifecycle/record/$id')({
  component: () => <div>Hello /_base/srm/process/lifecycle/application-form/$id!</div>
})
