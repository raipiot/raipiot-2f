export const Route = createLazyFileRoute('/_base/dev/storybook')({
  component: () => (
    <iframe
      src="http://antd.raipiot.com/"
      width="100%"
      height="100%"
    />
  )
})
