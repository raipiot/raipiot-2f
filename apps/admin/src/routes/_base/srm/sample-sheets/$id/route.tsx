import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/sample-sheets/$id')({
  component: () => <div>Hello /_base/srm/sample-sheets/$id!</div>
})
