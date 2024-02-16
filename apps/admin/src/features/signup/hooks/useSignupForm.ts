import type { SignupInfo } from '../types'

export const useSignupForm = () => {
  const [form] = AForm.useForm<SignupInfo>()

  return { form }
}
