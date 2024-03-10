import type { SignupDto } from '@raipiot-2f/api'

import { saveTokens } from '@/features/auth/login'

import { useSignupMutation } from '../mutations'
import { useRedirect } from './useRedirect'

export const useSignupForm = () => {
  const { t } = useTranslation(['AUTH', 'VALIDATION'])
  const [form] = AForm.useForm<SignupDto>()
  const { handleSignupRedirect, handleLogin } = useRedirect()
  const signupMutation = useSignupMutation()
  const [isAgreed, setIsAgreed] = useState(false)
  const [showAgreement, toggleShowAgreement] = useBoolean()
  const [showPrivacy, toggleShowPrivacy] = useBoolean()
  const { message } = AApp.useApp()

  const handleSignup = (values: SignupDto) => {
    if (isAgreed) {
      signupMutation.mutate(values, {
        onSuccess: (data) => {
          saveTokens(data)
          handleSignupRedirect()
        }
      })
    } else {
      message.error(t('PLEASE.AGREE.TERMS'))
    }
  }

  return {
    form,
    handleLogin,
    handleSignup,
    isAgreed,
    setIsAgreed,
    showAgreement,
    showPrivacy,
    toggleShowAgreement,
    toggleShowPrivacy,
    signupMutation
  }
}
