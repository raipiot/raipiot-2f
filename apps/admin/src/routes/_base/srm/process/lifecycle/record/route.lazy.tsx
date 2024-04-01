import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/srm/process/lifecycle/record')({
  component: Process.lifeCycle.ApplicationFormPage
})
