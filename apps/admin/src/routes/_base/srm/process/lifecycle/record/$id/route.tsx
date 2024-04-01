import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/process/lifecycle/record/$id')({
  component: () => <div>Hello /_base/srm/process/lifecycle/application-form/$id!</div>
})
