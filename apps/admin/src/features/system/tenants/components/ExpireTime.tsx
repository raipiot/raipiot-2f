interface ExpireTimeProps {
  value?: any
}
export function ExpireTime(props: ExpireTimeProps) {
  const { value } = props

  const { t } = useTranslation()

  const currentDate = DateUtils.dayjs()
  const isExpired = DateUtils.dayjs(value).isBefore(currentDate)

  return (
    <ATag
      style={{
        // NOTE: 消除默认内联边距
        marginInlineEnd: 0
      }}
      color={isExpired ? 'error' : 'blue'}
      bordered
    >
      {value || t('NOT.LIMITED')}
    </ATag>
  )
}
