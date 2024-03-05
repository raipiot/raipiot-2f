import type { FormInstance } from 'antd'

interface RpVerificationCodeItemProps {
  form: FormInstance
}

export default function PhoneNumberFormItems({ form }: RpVerificationCodeItemProps) {
  const { t } = useTranslation(['PORTAL'])

  return (
    <>
      <AForm.Item
        rootClassName="!mb-4"
        name="phone"
        rules={[
          {
            required: true,
            message: t('PLEASE.ENTER.YOUR.PHONE.NUMBER')
          }
        ]}
      >
        <AInput
          prefix={<MaterialSymbolsPhoneIphone className="opacity-50" />}
          placeholder={t('PLEASE.ENTER.YOUR.PHONE.NUMBER')}
        />
      </AForm.Item>
      <RpVerificationCodeItem
        rules={[
          {
            required: true,
            message: t('PLEASE.ENTER.VERIFICATION.CODE')
          }
        ]}
        name="verificationCode"
        getPhoneName={() => form.getFieldValue('phone')}
      />
    </>
  )
}
