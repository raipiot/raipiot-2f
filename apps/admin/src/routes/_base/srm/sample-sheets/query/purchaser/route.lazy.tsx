import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/sample-sheets/query/purchaser')({
  component: () => <div>Hello /_base/srm/sample-sheets/!</div>
})
