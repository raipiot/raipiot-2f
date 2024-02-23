import rpWithSkeleton from '../RpWithSkeleton'

export interface RpTagStringProps {
  value?: any
  copyable?: boolean
  skeleton?: boolean
}

const RpTagString = rpWithSkeleton((props: RpTagStringProps) => {
  const { value, copyable } = props
  const { t } = useTranslation()
  const { message } = AApp.useApp()

  const handleCopy = (str: string) => {
    BrowserUtils.setClipBoardText(str)
    message.success(t('COPY.SUCCESS'))
  }

  return (
    <ATag
      className={clsx(copyable && 'cursor-pointer')}
      style={{
        // NOTE: 消除默认内联边距
        marginInlineEnd: 0
      }}
      bordered
      {...(copyable && { onClick: () => handleCopy(value) })}
    >
      {value}
    </ATag>
  )
})
export default RpTagString
