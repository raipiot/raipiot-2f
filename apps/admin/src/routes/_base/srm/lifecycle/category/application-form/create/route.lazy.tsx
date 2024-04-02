import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/lifecycle/category/application-form/create')({
  component: () => <div>Hello /_base/srm/lifecycle/category/application-form/create!</div>
})
