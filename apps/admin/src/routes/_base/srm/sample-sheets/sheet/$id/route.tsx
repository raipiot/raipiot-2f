import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/sample-sheets/sheet/$id')({
  staticData: {
    title: '送样表详情'
  }
})
