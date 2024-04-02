import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/lifecycle/supplier/application-form/$id')({
  component: LifeCycle.applicationForm.detailPage
})
