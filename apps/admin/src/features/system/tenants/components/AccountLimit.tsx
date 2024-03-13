interface AccountLimitProps {
  value?: any
}

export function AccountLimit(props: AccountLimitProps) {
  const { value } = props

  const { t } = useTranslation()

  const isNotLimited = !value || typeof value !== 'number' || value <= 0

  return (
    <ATag
      style={{
        // NOTE: 消除默认内联边距
        marginInlineEnd: 0
      }}
      color="blue"
      bordered
    >
      {isNotLimited ? t('NOT.LIMITED') : value}
    </ATag>
  )
}
