import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/lifecycle/category/application-form/$id')({
  component: () => <div>Hello /_base/srm/lifecycle/supplier/application-form/$id!</div>
})
