import rpWithSkeleton from '../RpWithSkeleton'

interface RpBooleanProps {
  value?: any
  type?: 'text' | 'icon'
  skeleton?: boolean
}

const RpBoolean = rpWithSkeleton((props: RpBooleanProps) => {
  const { value, type } = props

  const { t } = useTranslation()

  const booleanValue = value === '1' || !!value

  switch (type) {
    case 'icon':
      return booleanValue ? (
        <MaterialSymbolsCheckSmallRounded />
      ) : (
        <MaterialSymbolsCloseSmallRounded />
      )
    case 'text':
    default:
      return (
        <ATag
          style={{
            // NOTE: 消除默认内联边距
            marginInlineEnd: 0
          }}
          color="blue"
          bordered
        >
          {booleanValue ? t('Y') : t('N')}
        </ATag>
      )
  }
})
export default RpBoolean
