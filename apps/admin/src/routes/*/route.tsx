import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/*')({
  beforeLoad: () => {
    throw redirect({
      to: '/404'
    })
  }
})
