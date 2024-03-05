export const Route = createFileRoute('/_base/dev/templates/')({
  beforeLoad: () => {
    throw redirect({
      to: '/404'
    })
  }
})
