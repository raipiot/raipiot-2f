import { saveTokens } from '@/features/login'
import type { SignupInfo } from '@/features/signup'
import { useRedirect, useSignupForm, useSignupMutation } from '@/features/signup'

export const Route = createLazyFileRoute('/_whitelist/signup')({
  component: Signup
})

function Signup() {
  const match = useMatch({ from: '/_whitelist/signup' })
  const { form } = useSignupForm()
  const { handleSignupRedirect, handleLogin } = useRedirect()

  const signupMutation = useSignupMutation()

  const handleSignup = (values: SignupInfo) =>
    signupMutation.mutate(values, {
      onSuccess: (data) => {
        saveTokens(data)
        handleSignupRedirect()
      },
      onError: () =>
        form.setFieldsValue({
          password: '',
          confirmPassword: ''
        })
    })

  return (
    <div className="absolute inset-0 m-auto flex h-fit w-[360px] max-w-[90%] flex-col rounded-lg bg-[#ffffff] p-8 shadow-md dark:bg-[#222222]">
      <div className="mb-4 flex flex-col items-center">
        <div className="text-xl">{BrandConfig.companyName} SRM</div>
      </div>

      <AForm<SignupInfo>
        name="signup"
        form={form}
        initialValues={{
          username: '',
          password: '',
          confirmPassword: ''
        }}
        onFinish={handleSignup}
        autoComplete="off"
        disabled={signupMutation.isPending}
      >
        <AForm.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
          rootClassName="!mb-4"
        >
          <AInput
            placeholder="用户名"
            autoComplete="username"
          />
        </AForm.Item>

        <AForm.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
          rootClassName="!mb-4"
        >
          <AInput.Password
            placeholder="密码"
            autoComplete="password"
          />
        </AForm.Item>

        <AForm.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: '请输入确认密码' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次输入密码不一致'))
              }
            })
          ]}
          rootClassName="!mb-4"
        >
          <AInput.Password
            placeholder="确认密码"
            autoComplete="new-password"
          />
        </AForm.Item>

        <AForm.Item rootClassName="!mb-2">
          <AButton
            rootClassName="!w-full"
            type="primary"
            disabled={signupMutation.isPending}
            loading={signupMutation.isPending}
            htmlType="submit"
            onClick={() => form.submit()}
          >
            {I18nUtils.getText(match.staticData.title)}
          </AButton>
        </AForm.Item>

        <div className="flex items-center space-x-1 text-xs">
          <span>已有账号？</span>
          <AConfigProvider theme={{ components: { Button: { paddingInlineSM: 0 } } }}>
            <AButton
              size="small"
              type="link"
              onClick={handleLogin}
            >
              <span className="text-xs font-semibold underline-offset-4 hover:underline">登录</span>
            </AButton>
          </AConfigProvider>
        </div>
      </AForm>
    </div>
  )
}
