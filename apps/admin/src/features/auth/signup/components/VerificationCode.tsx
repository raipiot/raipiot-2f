import type { FormItemProps, InputProps } from 'antd'
import { isEmpty } from 'lodash-es'

import { useSMSVerificationMutation } from '@/features/auth/signup'

export interface VerificationCodeProps extends FormItemProps {
  inputProps?: InputProps
  getPhoneName: () => string
}

export function VerificationCode({ inputProps, getPhoneName, ...props }: VerificationCodeProps) {
  const { t } = useTranslation(['AUTH', 'PORTAL'])
  const { message } = AApp.useApp()
  const verificationCodeMutation = useSMSVerificationMutation()
  const [countDown, setCountDown] = useState(60)

  const onSendVerificationCode = () => {
    if (countDown < 60 || verificationCodeMutation.isPending) {
      return
    }
    const phoneName = getPhoneName()
    if (isEmpty(phoneName)) {
      message.error(t('PORTAL:PLEASE.ENTER.YOUR.PHONE.NUMBER'))
    } else {
      let timer: NodeJS.Timeout
      verificationCodeMutation.mutate(
        { phone: phoneName },
        {
          onSuccess: () => {
            message.success(t('SEND.VERIFICATION.CODE.SUCCESS'))
            const fc = () => {
              setCountDown((prev) => {
                if (prev === 0) {
                  clearInterval(timer)
                  return 60
                }
                return prev - 1
              })
            }
            timer = setInterval(fc, 1000)
          }
        }
      )
    }
  }
  return (
    <AForm.Item {...props}>
      <AInput
        maxLength={6}
        {...inputProps}
        placeholder={t('VERIFICATION.CODE')}
        autoComplete="off"
        prefix={<MaterialSymbolsDomainVerificationOutlineSharp className="opacity-50" />}
        suffix={
          <button
            type="button"
            className="cursor-pointer text-xs"
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              onSendVerificationCode()
            }}
            disabled={countDown < 60 || verificationCodeMutation.isPending}
          >
            {countDown === 60 ? t('GET.SMS.VERIFICATION.CODE') : `${countDown} s`}
          </button>
        }
      />
    </AForm.Item>
  )
}
