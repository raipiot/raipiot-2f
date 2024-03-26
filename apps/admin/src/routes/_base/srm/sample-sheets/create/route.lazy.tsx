import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/sample-sheets/create')({
  component: () => <div>Hello /_base/srm/sample-sheets/create!</div>
})
