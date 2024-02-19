import { saveTokens } from '@/features/login'

import { useSignupMutation, useSMSVerificationMutation } from '../mutations'
import type { SignupInfo } from '../types'
import { useRedirect } from './useRedirect'

export const useSignupForm = () => {
  const { t } = useTranslation(['AUTH', 'VALIDATION'])
  const [form] = AForm.useForm<SignupInfo>()
  const { handleSignupRedirect, handleLogin } = useRedirect()
  const verificationCodeMutation = useSMSVerificationMutation()
  const signupMutation = useSignupMutation()
  const [isAgreed, setIsAgreed] = useState(false)
  const [showAgreement, setShowAgreement] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  // 验证码倒计时
  const [countdown, setCountdown] = useState(60)

  const handleReverseAgreement = () => setShowAgreement((v) => !v)
  const handleReversePrivacy = () => setShowPrivacy((v) => !v)

  const handleSignup = (values: SignupInfo) => {
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
      AMessage.error(t('PLEASE.AGREE.TERMS'))
    }
  }

  const handleSendVerificationCode = () => {
    const phone = form.getFieldValue('phone')
    if (!phone) {
      AMessage.error(t('VALIDATION:PHONE.NUMBER'))
      return
    }

    verificationCodeMutation.mutate(
      { phone },
      {
        onSuccess: () => {
          AMessage.success(t('SEND.VERIFICATION.CODE.SUCCESS'))
        },
        onError: (e) => {
          AMessage.error(`...${e.message}`)
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
    handleReverseAgreement,
    handleReversePrivacy
  }
}
