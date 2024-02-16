import type { LoginInfo } from '@/features/login'
import {
  LoginType,
  saveTokens,
  useLoginForm,
  useLoginMutation,
  useRedirect
} from '@/features/login'

export const Route = createLazyFileRoute('/_whitelist/login')({
  component: Login
})

function Login() {
  const { form, clearPassword, setAdminAccount, handleRememberPassword } = useLoginForm()
  const { handleLoginRedirect, handleForgotPassword, handleSignup, handleSSO } = useRedirect()

  const loginMutation = useLoginMutation()

  const [currentLoginType, setCurrentLoginType] = useState(LoginType.USER)

  // 点击登录
  const handleClickLoginBtn = (loginType: LoginType) => {
    setCurrentLoginType(loginType)
    switch (loginType) {
      case LoginType.USER: {
        form.submit()
        break
      }
      case LoginType.ADMIN: {
        setAdminAccount()
        form.submit()
        break
      }
      case LoginType.SSO: {
        handleSSO()
        break
      }
      default: {
        break
      }
    }
  }

  // 处理登录
  const handleLogin = (values: LoginInfo) =>
    loginMutation.mutate(values, {
      onSuccess: (data) => {
        // 保存 token
        saveTokens(data)
        // 如果勾选记住密码，则写入 localStorage
        handleRememberPassword()
        // 处理登录重定向
        handleLoginRedirect()
      },
      onError: clearPassword
    })

  return (
    <div className="absolute inset-0 m-auto flex h-fit w-[360px] max-w-[90%] flex-col rounded-lg bg-[#ffffff] p-8 shadow-md dark:bg-[#222222]">
      <div className="mb-4 flex flex-col items-center">
        <div className="text-xl">{BrandConfig.companyName} SRM</div>
      </div>

      <AForm<LoginInfo>
        name="login"
        form={form}
        initialValues={{
          tenantId: '000000' // TODO: 移除 Hard Code
        }}
        onFinish={handleLogin}
        autoComplete="off"
        disabled={loginMutation.isPending}
      >
        <AForm.Item
          name="tenantId"
          rules={[{ required: true, message: '请输入租户编号' }]}
          rootClassName="!mb-4"
        >
          <AInput
            placeholder="租户编号"
            allowClear
          />
        </AForm.Item>

        <AForm.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
          rootClassName="!mb-4"
        >
          <AInput
            placeholder="用户名"
            autoComplete="username"
            allowClear
          />
        </AForm.Item>

        <AForm.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
          rootClassName="!mb-2"
        >
          <AInput.Password
            placeholder="密码"
            autoComplete="current-password"
          />
        </AForm.Item>

        <div className="mb-1 flex items-center justify-between text-gray-300">
          <AForm.Item
            name="rememberPassword"
            valuePropName="checked"
            rootClassName="!mb-0"
          >
            <ACheckbox>记住密码</ACheckbox>
          </AForm.Item>

          <AForm.Item rootClassName="!mb-0">
            <AConfigProvider theme={{ components: { Button: { paddingInlineSM: 0 } } }}>
              <AButton
                size="small"
                type="link"
                onClick={handleForgotPassword}
              >
                <span className="text-xs font-semibold underline-offset-4 hover:underline">
                  忘记密码
                </span>
              </AButton>
            </AConfigProvider>
          </AForm.Item>
        </div>

        <AForm.Item rootClassName="!mb-2">
          <div className="flex flex-col space-y-2">
            <AButton
              type="primary"
              disabled={loginMutation.isPending}
              loading={currentLoginType === LoginType.USER && loginMutation.isPending}
              htmlType="submit"
              onClick={() => handleClickLoginBtn(LoginType.USER)}
            >
              登录
            </AButton>

            <ADivider />

            <div className="flex flex-1 space-x-2">
              <AButton
                className="w-[calc(50%-4px)]"
                disabled={loginMutation.isPending}
                loading={currentLoginType === LoginType.ADMIN && loginMutation.isPending}
                onClick={() => handleClickLoginBtn(LoginType.ADMIN)}
              >
                管理员登录
              </AButton>
              <AButton
                className="w-[calc(50%-4px)]"
                disabled={loginMutation.isPending}
                onClick={() => handleClickLoginBtn(LoginType.SSO)}
              >
                SSO 登录
              </AButton>
            </div>
          </div>
        </AForm.Item>

        <div className="flex items-center space-x-1 text-xs">
          <span>需要账号？</span>
          <AConfigProvider theme={{ components: { Button: { paddingInlineSM: 0 } } }}>
            <AButton
              size="small"
              type="link"
              onClick={handleSignup}
            >
              <span className="text-xs font-semibold underline-offset-4 hover:underline">注册</span>
            </AButton>
          </AConfigProvider>
        </div>
      </AForm>
    </div>
  )
}
