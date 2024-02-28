import type { SignupDto } from '@raipiot-2f/api'

import { saveTokens } from '@/features/login'

import { useSignupMutation, useSMSVerificationMutation } from '../mutations'
import { useRedirect } from './useRedirect'

export const useSignupForm = () => {
  const { t } = useTranslation(['AUTH', 'VALIDATION'])
  const [form] = AForm.useForm<SignupDto>()
  const { handleSignupRedirect, handleLogin } = useRedirect()
  const verificationCodeMutation = useSMSVerificationMutation()
  const signupMutation = useSignupMutation()
  const [isAgreed, setIsAgreed] = useState(false)
  const [showAgreement, toggleShowAgreement] = useBoolean(false)
  const [showPrivacy, toggleShowPrivacy] = useBoolean(false)
  const { message } = AApp.useApp()
  // 验证码倒计时
  const [countdown, setCountdown] = useState(60)

  const handleSignup = (values: SignupDto) => {
    if (isAgreed) {
      signupMutation.mutate(values, {
        onSuccess: (data) => {
          saveTokens(data)
          handleSignupRedirect()
        },
        onError: () => {
          // TODO: 需要处理错误吗？
        }
      })
    } else {
      message.error(t('PLEASE.AGREE.TERMS'))
    }
  }

  const handleSendVerificationCode = () => {
    const phone = form.getFieldValue('phone')
    if (!phone) {
      message.error(t('VALIDATION:PHONE.NUMBER'))
      return
    }
    verificationCodeMutation.mutate(
      { phone },
      {
        onSuccess: () => {
          message.success(t('SEND.VERIFICATION.CODE.SUCCESS'))

          // 发送验证码成功后，开始倒计时
          let timer: NodeJS.Timeout
          const fc = () => {
            setCountdown((prev) => {
              if (prev === 0) {
                clearInterval(timer)
                return 60
              }
              return prev - 1
            })
          }
          timer = setInterval(fc, 1000)
          fc()
        },
        onError: (e) => {
          message.error(`...${e.message}`)
        }
      }
    )
  }

  return {
    form,
    handleSendVerificationCode,
    handleLogin,
    handleSignup,
    signupMutation,
    verificationCodeMutation,
    isAgreed,
    setIsAgreed,
    showAgreement,
    showPrivacy,
    toggleShowAgreement,
    toggleShowPrivacy,
    countdown
  }
}
