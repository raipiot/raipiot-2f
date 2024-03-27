import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_base/srm/sample-sheets/create/origin')({
  staticData: {
    title: '创建送样表 - 寻源',
    permCode: 'srm:sample-sheets:create'
  }
})
