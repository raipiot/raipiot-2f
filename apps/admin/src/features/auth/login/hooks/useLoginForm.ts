import type { LoginInfo } from '../types'

export const useLoginForm = () => {
  const [form] = AForm.useForm<LoginInfo>()

  useEffect(() => {
    // 从 localStorage 中获取记住的账号密码
    const localStorageData = AuthUtils.getRememberedAccount()
    if (localStorageData) {
      try {
        const data = JSON.parse(localStorageData) as LoginInfo
        form.setFieldsValue(data)
      } catch {
        //
      }
    }
  }, [form])

  // 清空密码
  const clearPassword = () => form.setFieldValue('password', '')

  // 设置管理员账号密码
  const setAdminAccount = () =>
    form.setFieldsValue({
      username: AuthUtils.DEFAULT_ADMIN_USERNAME,
      password: AuthUtils.DEFAULT_ADMIN_PASSWORD
    })

  // 处理记住密码
  const handleRememberPassword = () => {
    const formData = form.getFieldsValue()
    if (formData.rememberPassword) {
      AuthUtils.setRememberedAccount(JSON.stringify(formData))
    } else {
      AuthUtils.clearRememberedAccount()
    }
  }

  return {
    form,
    clearPassword,
    setAdminAccount,
    handleRememberPassword
  }
}
