import type { LoginDto } from '@raipiot-2f/api'
import type { HTMLAttributes } from 'react'

import LanguageButton from '@/features/layouts/BaseLayout/Header/LanguageButton'
import { useLoginMutation, useLogoutMutation } from '@/features/login'

import AccountFormItems from './AccountFormItems'
import { PhoneNumberFormItems } from './PhoneNumberFormItems'

export function Login(props: HTMLAttributes<HTMLDivElement>) {
  const [isAccountLogin, setIsAccountLogin] = useState(true)

  const { t } = useTranslation(['PORTAL'])

  const [form] = AForm.useForm<LoginDto>()
  const initFormValue = {
    tenantId: '000000'
  }
  const loginMutation = useLoginMutation()
  const logoutMutation = useLogoutMutation()

  const [isLogin, setIsLogin] = useState(false)

  const onFinish = async () => {
    if (loginMutation.isPending || loginMutation.isError) return
    try {
      const values = await form.validateFields()
      loginMutation.mutate(values, {})
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   if(AuthUtils.isAuthenticated()) {

  //     setIsLogin(true)
  //   }
  // }, [])

  // if (!isLogin) {
  //   return (
  //     <div {...props}>
  //       <div className="flex min-h-[220px] flex-col items-center justify-center">
  //         <AAvatar
  //           src={data.avatar}
  //           size={64}
  //         />
  //         <div className="mt-2 text-xl font-semibold">{data.name}</div>
  //         <div className="mt-4 flex gap-4">
  //           <AButton onClick={() => logoutMutation.mutate()}>Logout</AButton>
  //           <AButton type="primary">Profile</AButton>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div {...props}>
      <div className="absolute right-2 top-[10px] scale-[0.7] rounded-full bg-sky-600 text-white">
        <LanguageButton />
      </div>
      <div className="flex space-x-8">
        <div
          className={clsx('cursor-pointer', {
            'text-sky-500 underline underline-offset-8 decoration-sky-400': isAccountLogin
          })}
          onClick={() => setIsAccountLogin(true)}
        >
          {t('ACCOUNT.LOGIN')}
        </div>
        <div
          onClick={() => setIsAccountLogin(false)}
          className={clsx('cursor-pointer underline-offset-8', {
            'text-sky-500 underline decoration-sky-400 font-semibold': !isAccountLogin
          })}
        >
          {t('PHONE.NUMBER.LOGIN')}
        </div>
      </div>
      {/* form */}
      <AForm
        form={form}
        initialValues={initFormValue}
        rootClassName="!mt-4"
        onFinish={onFinish}
      >
        <AForm.Item
          name="tenantId"
          label={t('TENANT.ID')}
          rootClassName="!mb-4 !hidden"
        >
          <ASelect>
            <ASelect.Option value="000000">000000</ASelect.Option>
          </ASelect>
        </AForm.Item>
        {/* 账号登录 */}
        {isAccountLogin ? <AccountFormItems /> : <PhoneNumberFormItems form={form} />}

        <AForm.Item rootClassName="!mb-2">
          <AButton
            type="primary"
            htmlType="submit"
            className="w-full"
            rootClassName="!h-9"
          >
            {t('LOGIN')}
          </AButton>
          <AButton
            className="mt-2 w-full"
            rootClassName="!h-9"
          >
            <Link to="/signup">{t('SUPPLIER.REGISTRATION')}</Link>
          </AButton>
        </AForm.Item>
      </AForm>
      <div className="grid grid-cols-[auto_2px_auto] items-center text-center">
        <Link
          to="/forgot-password"
          color="gray"
          className="!text-xs !text-gray-800/60"
        >
          {t('FORGET.PASSWORD')}
        </Link>
        <span className="opacity-50">|</span>
        <Link
          to="/forgot-password"
          color="gray"
          className="!text-xs !text-gray-800/60"
        >
          {t('ENTERPRISE.RETRIEVE')}
        </Link>
      </div>
    </div>
  )
}
