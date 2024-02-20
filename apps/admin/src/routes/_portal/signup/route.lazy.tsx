import type { SignupDto } from '@/api/auth.type'
import type { SignupInfo } from '@/features/signup'
import { useSignupForm } from '@/features/signup'
import PrivacyPolicy from '@/features/signup/components/PrivacyPolicy'
import UserAgreement from '@/features/signup/components/UserAgreement'

export const Route = createLazyFileRoute('/_portal/signup')({
  component: Signup
})

const initialValues: SignupDto = {
  username: 'test',
  companyName: 'test',
  password: 'test1234',
  confirmPassword: 'test1234',
  registerCountry: 'china',
  photo: 'test',
  email: 'test@qq.com',
  verificationCode: 'test'
}

function Signup() {
  const { t } = useTranslation(['AUTH', 'VALIDATION', 'DESCRIPTION', 'COMMON'])

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
    handleReversePrivacy,
    countdown
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
          rules={[
            { required: true, message: t('VALIDATION:PASSWORD') },
            {
              min: 6,
              message: t('VALIDATION:PASSWORD.LENGTH')
            }
          ]}
          label={t('LOGIN.PASSWORD')}
          rootClassName="!mb-4"
        >
          <AInput.Password
            placeholder={t('VALIDATION:LOGIN.PASSWORD')}
            min={6}
            max={20}
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
            min={6}
            max={20}
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
          validateTrigger="onBlur"
          rules={[
            {
              required: true,
              message: t('VALIDATION:PHONE.NUMBER')
            },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: t('VALIDATION:PHONE.NUMBER.FORMAT')
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
            suffix={
              <button
                type="button"
                className={clsx('min-w-[84px] text-center text-[12px]', {
                  'text-gray-400': countdown !== 60
                })}
                disabled={verificationCodeMutation.isPending || countdown !== 60}
                onClick={handleSendVerificationCode}
              >
                {countdown !== 60
                  ? `${t('RESEND.SMS.VERIFICATION.CODE')}(${countdown}s)`
                  : t('AUTH:GET.SMS.VERIFICATION.CODE')}
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
                {t('I.HAVE.READ.AND.AGREE')}
                <span
                  onClick={handleReverseAgreement}
                  className="cursor-pointer px-1 font-semibold text-sky-500"
                >
                  《{t('THE.USER.AGREEMENT')}》
                </span>
                {t('COMMON:AND')}
                <span
                  onClick={handleReversePrivacy}
                  className="cursor-pointer px-1 font-semibold text-sky-500"
                >
                  《{t('THE.PRIVACY.POLICY')}》
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
