export const Route = createFileRoute('/_base/templates/')({
  beforeLoad: () => {
    throw redirect({
      to: '/404'
    })
  }
})
