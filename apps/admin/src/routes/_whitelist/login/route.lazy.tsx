import type { LoginInputModel, Tokens } from '@/api/auth.type'
import { handleLoginResult, useLoginForm, useRedirect } from '@/features/login'

export const Route = createLazyFileRoute('/_whitelist/login')({
  component: Login
})

function Login() {
  const userStore = useUserStore()
  const { handleRedirect, handleForgotPassword, handleSignup } = useRedirect()
  const { loginForm, clearPassword, setAdminAccount, handleRememberPassword } = useLoginForm()

  // 登录请求
  const loginMutation = useMutation({
    mutationFn: (data: LoginInputModel) => AuthAPI.login(data),
    onSuccess: onLoginSuccess,
    onError: clearPassword
  })

  // 登录
  const handleLogin = () => {
    userStore.setUser({ id: 1 })
    setAdminAccount()
    // loginForm.submit()
    handleRedirect()
  }

  // 登录成功
  function onLoginSuccess(data: Tokens) {
    // 处理登录结果
    handleLoginResult(data)
    // 记住密码写入 localStorage
    handleRememberPassword()
    // 处理重定向
    handleRedirect()
  }

  return (
    <div className="absolute inset-0 m-auto flex h-fit w-[360px] max-w-[90%] flex-col rounded-lg bg-[#ffffff] p-8 shadow-md dark:bg-[#222222]">
      <div className="mb-4 flex flex-col items-center">
        <div className="text-xl">{BrandConfig.companyName} SRM</div>
      </div>

      <AForm
        name="login"
        form={loginForm}
        onFinish={(values) => loginMutation.mutate({ ...values })}
        autoComplete="off"
        disabled={loginMutation.isPending}
      >
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
              loading={loginMutation.isPending}
              onClick={() => handleLogin()}
            >
              登录
            </AButton>

            <ADivider />

            <div className="flex flex-1 space-x-2">
              <AButton
                className="w-[calc(50%-4px)]"
                disabled={loginMutation.isPending}
                loading={loginMutation.isPending}
                onClick={() => handleLogin()}
              >
                管理员登录
              </AButton>
              <AButton
                className="w-[calc(50%-4px)]"
                disabled={loginMutation.isPending}
                loading={loginMutation.isPending}
                onClick={() => handleLogin()}
              >
                租户管理员登录
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
