import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/sample-sheets/create/origin')({
  component: () => <div>Hello /_base/srm/sample-sheets/$id!</div>
})
