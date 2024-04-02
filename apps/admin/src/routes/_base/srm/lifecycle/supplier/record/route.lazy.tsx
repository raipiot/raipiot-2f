import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/lifecycle/supplier/record')({
  component: LifeCycle.applicationForm.list
})
