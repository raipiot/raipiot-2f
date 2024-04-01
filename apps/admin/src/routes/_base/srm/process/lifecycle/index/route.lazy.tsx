import { createLazyFileRoute } from '@tanstack/react-router'

import { Process } from '@/features'

export const Route = createLazyFileRoute('/_base/srm/process/lifecycle/')({
  component: Process.lifeCycle.Page
})
