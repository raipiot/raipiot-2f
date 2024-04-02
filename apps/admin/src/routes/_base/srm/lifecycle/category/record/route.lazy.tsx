import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/lifecycle/category/record')({
  component: () => <div>Hello /_base/srm/lifecycle/supplier/record!</div>
})
