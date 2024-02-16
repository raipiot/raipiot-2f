import IcRoundError from '~icons/ic/round-error'

export const Route = createLazyFileRoute('/_base/500')({
  component: () => (
    <RpErrorPage
      title="服务器错误"
      subTitle="500 - 请联系系统管理员寻求帮助"
      icon={<IcRoundError />}
    />
  )
})
