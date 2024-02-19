import type { SignupInfo } from '@/features/signup'
import { initialValues, useSignupForm } from '@/features/signup'
import PrivacyPolicy from '@/features/signup/components/PrivacyPolicy'
import UserAgreement from '@/features/signup/components/UserAgreement'

export const Route = createLazyFileRoute('/_portal/signup')({
  component: Signup
})

function Signup() {
  const { t } = useTranslation(['AUTH', 'VALIDATION', 'DESCRIPTION'])

  const match = useMatch({ from: '/_portal/signup' })

  const {
    form,
    signupMutation,
    verificationCodeMutation,
    handleLogin,
    handleSendVerificationCode,
    handleSignup,
    isAgreed,
    setIsAgreed,
    showAgreement,
    showPrivacy,
    handleReverseAgreement,
    handleReversePrivacy
  } = useSignupForm()

  return (
    <div className="absolute inset-0 m-auto flex h-fit w-[560px] max-w-[90%] flex-col rounded-lg bg-[#ffffff] p-8 shadow-md dark:bg-[#222222]">
      <div className="mb-6 flex flex-col items-center">
        <span className="text-2xl">{t('DESCRIPTION:SUPPLIER.REGISTRATION')}</span>
      </div>

      <AForm<SignupInfo>
        name="signup"
        form={form}
        initialValues={initialValues}
        onFinish={handleSignup}
        autoComplete="off"
        labelAlign="right"
        labelCol={{ span: 6 }}
        disabled={signupMutation.isPending}
        className="pr-0 md:!pr-[50px]"
      >
        <AForm.Item
          name="companyName"
          rules={[{ required: true, message: t('VALIDATION:COMPANY.NAME') }]}
          rootClassName="!mb-4"
          label={t('COMPANY.NAME')}
        >
          <AInput
            placeholder={t('COMPANY.NAME')}
            autoComplete="companyName"
          />
        </AForm.Item>

        <AForm.Item
          name="username"
          rules={[{ required: true, message: t('VALIDATION:USERNAME') }]}
          rootClassName="!mb-4"
          label={t('USERNAME')}
        >
          <AInput.Password placeholder={t('USERNAME')} />
        </AForm.Item>

        <AForm.Item
          name="password"
          rules={[{ required: true, message: t('VALIDATION:PASSWORD') }]}
          label={t('LOGIN.PASSWORD')}
          rootClassName="!mb-4"
        >
          <AInput.Password
            placeholder={t('VALIDATION:LOGIN.PASSWORD')}
            autoComplete="new-password"
          />
        </AForm.Item>

        <AForm.Item
          name="confirmPassword"
          dependencies={['password']}
          label={t('CONFIRM.PASSWORD')}
          rules={[
            { required: true, message: t('VALIDATION:CONFIRM.PASSWORD') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error(t('VALIDATION:CONFIRM.PASSWORD.NOT.MATCH')))
              }
            })
          ]}
          rootClassName="!mb-4"
        >
          <AInput.Password
            placeholder={t('VALIDATION:CONFIRM.PASSWORD')}
            autoComplete="new-password"
          />
        </AForm.Item>

        <AForm.Item
          label={t('REGISTER.COUNTRY')}
          name="registerCountry"
        >
          <ASelect>
            <ASelect.Option value="china">中国大陆</ASelect.Option>
          </ASelect>
        </AForm.Item>

        <AForm.Item
          name="phone"
          label={t('PHONE.NUMBER')}
          required
          rules={[
            {
              required: true,
              message: t('VALIDATION:PHONE.NUMBER')
            }
          ]}
        >
          <div className="flex justify-between">
            <ACol span={7}>
              <ASelect
                style={{
                  border: 'none!important',
                  boxShadow: 'none!important'
                }}
                defaultValue="86"
                onClick={(e) => e.stopPropagation()}
              >
                <ASelect.Option value="86">🇨🇳 +86</ASelect.Option>
              </ASelect>
            </ACol>
            <ACol span={16}>
              <AInput
                type="photo"
                placeholder={t('VALIDATION:PHONE.NUMBER')}
              />
            </ACol>
          </div>
        </AForm.Item>

        <AForm.Item
          name="email"
          label={t('EMAIL')}
          required
          rules={[
            {
              type: 'email',
              message: t('VALIDATION:EMAIL')
            }
          ]}
        >
          <AInput
            placeholder={t('VALIDATION:EMAIL')}
            type="email"
          />
        </AForm.Item>

        {/* 验证码 */}
        <AForm.Item
          required
          name="verificationCode"
          rules={[
            {
              required: true,
              message: t('AUTH:VERIFICATION.CODE')
            }
          ]}
          label={t('AUTH:VERIFICATION.CODE')}
        >
          <AInput
            type="photo"
            placeholder={t('AUTH:VERIFICATION.CODE')}
            addonAfter={
              <button
                type="button"
                className="text-[12px]"
                disabled={verificationCodeMutation.isPending}
                onClick={handleSendVerificationCode}
              >
                {t('AUTH:GET.SMS.VERIFICATION.CODE')}
              </button>
            }
          />
        </AForm.Item>

        <AForm.Item rootClassName="!mb-2">
          <ACol
            className="mt-4"
            offset={6}
          >
            <AButton
              className="w-full"
              type="primary"
              disabled={signupMutation.isPending}
              loading={signupMutation.isPending}
              htmlType="submit"
            >
              {I18nUtils.getText(match.staticData.title)}
            </AButton>
            <AFlex
              justify="center"
              className="my-4"
              gap={8}
              align="center"
            >
              <ACheckbox
                value={isAgreed}
                onChange={(v) => setIsAgreed(v.target.checked)}
              />
              <div>
                我已阅读并同意
                <span
                  onClick={handleReverseAgreement}
                  className="cursor-pointer px-1 font-semibold text-sky-500"
                >
                  《用户协议》
                </span>
                和
                <span
                  onClick={handleReversePrivacy}
                  className="cursor-pointer px-1 font-semibold text-sky-500"
                >
                  《隐私政策》
                </span>
              </div>
            </AFlex>
          </ACol>
        </AForm.Item>
      </AForm>
      <div className="flex items-center text-xs">
        <span>{t('ALREADY.HAVE.ACCOUNT')}</span>
        <AConfigProvider theme={{ components: { Button: { paddingInlineSM: 0 } } }}>
          <AButton
            size="small"
            type="link"
            onClick={handleLogin}
          >
            <span className="text-xs font-semibold underline-offset-4 hover:underline">
              {t('LOGIN')}
            </span>
          </AButton>
        </AConfigProvider>
      </div>
      {showAgreement && <UserAgreement onCancel={handleReverseAgreement} />}
      {showPrivacy && <PrivacyPolicy onCancel={handleReversePrivacy} />}
    </div>
  )
}
