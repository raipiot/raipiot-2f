import type { SignupDto } from '@raipiot-2f/api'
import { Lang } from '@raipiot-infra/enums'

import loginBg from '@/assets/images/login_bg.jpg'
import { PrivacyPolicy, UserAgreement, useSignupForm } from '@/features/auth/signup'
import LanguageButton from '@/features/layouts/BaseLayout/Header/LanguageButton'

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
  const { t, i18n } = useTranslation(['AUTH', 'VALIDATION', 'COMMON'])
  const match = useMatch({ from: '/_portal/signup' })

  const size = useSize(window.document.body)

  const {
    form,
    signupMutation,
    handleLogin,
    handleSignup,
    setIsAgreed,
    showAgreement,
    showPrivacy,
    toggleShowAgreement,
    toggleShowPrivacy
  } = useSignupForm()

  return (
    <>
      <div
        className="fixed inset-0 h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${loginBg})`
        }}
      />
      <div className="relative inset-x-0 top-12 m-auto mb-[120px] flex h-fit w-[520px] max-w-[90%] flex-col rounded-lg bg-[#ffffff] p-8 shadow-md dark:bg-[#222222]">
        <div className="absolute right-4 top-4">
          <LanguageButton />
        </div>
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl">{t('SUPPLIER.REGISTRATION')}</span>
        </div>

        <AForm
          name="signup"
          form={form}
          initialValues={initialValues}
          onFinish={handleSignup}
          autoComplete="off"
          labelAlign="right"
          labelWrap={false}
          layout={i18n.language !== Lang['zh-CN'] ? 'vertical' : 'horizontal'}
          labelCol={{ span: i18n.language !== Lang['zh-CN'] ? 24 : 6 }}
          disabled={signupMutation.isPending}
          className={clsx({
            'md:!pr-[50px]': i18n.language === Lang['zh-CN']
          })}
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
              <ACol span={8}>
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
              <ACol span={15}>
                <AInput
                  type="photo"
                  maxLength={11}
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

          <RpVerificationCodeItem
            getPhoneName={() => form.getFieldValue('phone')}
            name="verificationCode"
            rules={[
              {
                required: true,
                message: t('AUTH:VERIFICATION.CODE')
              }
            ]}
            label={t('AUTH:VERIFICATION.CODE')}
            required
          />

          <AForm.Item rootClassName="!mb-2">
            <ACol
              className="mt-4"
              offset={i18n.language === Lang['zh-CN'] && size && size.width > 480 ? 6 : 0}
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
                wrap="wrap"
              >
                <ACheckbox onChange={(v) => setIsAgreed(v.target.checked)}>
                  {t('I.HAVE.READ.AND.AGREE')}
                </ACheckbox>
                <div>
                  <span
                    onClick={toggleShowAgreement}
                    className="cursor-pointer font-semibold text-sky-500"
                  >
                    《{t('THE.USER.AGREEMENT')}》
                  </span>
                  {t('COMMON:AND')}
                  <span
                    onClick={toggleShowPrivacy}
                    className="cursor-pointer font-semibold text-sky-500"
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

        {showAgreement && <UserAgreement onCancel={toggleShowAgreement} />}
        {showPrivacy && <PrivacyPolicy onCancel={toggleShowPrivacy} />}
      </div>
    </>
  )
}
