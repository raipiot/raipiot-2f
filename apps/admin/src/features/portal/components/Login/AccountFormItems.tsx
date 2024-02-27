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
          placeholder={t('PLEASE.ENTER.YOUR.PASSWORD')}
          type="password"
        />
      </AForm.Item>
    </>
  )
}
