export const Route = createLazyFileRoute('/_base/test')({
  component: Test
})

function Test() {
  return <div className="bg-green-50">Test</div>
}
