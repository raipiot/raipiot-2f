export default function AccountFormItems() {
  const { t } = useTranslation(['PORTAL'])

  return (
    <>
      <AForm.Item
        name="username"
        rootClassName="!mb-4"
        rules={[
          {
            required: true,
            message: t('PLEASE.ENTER.YOUR.ACCOUNT')
          }
        ]}
      >
        <AInput
          prefix={<MaterialSymbolsAccountCircle className="opacity-50" />}
          type="text"
          placeholder={t('PLEASE.ENTER.YOUR.ACCOUNT')}
        />
      </AForm.Item>
      <AForm.Item
        name="password"
        rules={[
          {
            required: true,
            message: t('PLEASE.ENTER.YOUR.PASSWORD')
          }
        ]}
      >
        <AInput
          prefix={<MaterialSymbolsLock className="opacity-50" />}
          placeholder={t('PLEASE.ENTER.YOUR.PASSWORD')}
          type="password"
        />
      </AForm.Item>
    </>
  )
}
