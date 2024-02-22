import rpWithSkeleton from '../RpWithSkeleton'

interface RpBooleanProps {
  value?: any
  mode?: 'text' | 'icon'
  skeleton?: boolean
}

const RpBoolean = rpWithSkeleton((props: RpBooleanProps) => {
  const { value, mode } = props

  const { t } = useTranslation()

  const booleanValue = value === '1' || !!value

  switch (mode) {
    case 'text': {
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
    default:
      return booleanValue && <MaterialSymbolsCheckSmallRounded />
  }
})
export default RpBoolean
