import type { LoginDto, SMSLoginDto } from '@raipiot-2f/api'
import { omit } from 'lodash-es'
import type { ComponentPropsWithoutRef } from 'react'

import { useLoginMutation, useSMSLoginMutation } from '@/features/auth/login'
import { userInfoQueryOptions } from '@/features/system/users'

import AccountFormItems from './AccountFormItems'
import PhoneNumberFormItems from './PhoneNumberFormItems'

interface LoginProps extends ComponentPropsWithoutRef<'div'> {
  onLoginSuccess?: () => void
}

export function Login(props: LoginProps) {
  const [isAccountLogin, setIsAccountLogin] = useState(true)

  const { t } = useTranslation(['PORTAL'])

  const [form] = AForm.useForm<LoginDto & SMSLoginDto>()
  const initFormValue = {
    tenantId: '000000',
    username: 'admin',
    password: 'admin'
  }

  const loginMutation = useLoginMutation()
  const SMSLoginMutation = useSMSLoginMutation()

  const onFinish = async () => {
    // 不同的登录情况
    if (
      (loginMutation.isPending && isAccountLogin) ||
      (!isAccountLogin && SMSLoginMutation.isPending)
    ) {
      return
    }
    const values = await form.validateFields()
    const options = {
      onSuccess: async () => {
        await queryClient.ensureQueryData(userInfoQueryOptions())
        props.onLoginSuccess?.()
      }
    }
    if (isAccountLogin) {
      loginMutation.mutate(values, options)
    } else {
      SMSLoginMutation.mutate(values, options)
    }
  }

  return (
    <div {...omit(props, 'onLoginSuccess')}>
      <div className="flex space-x-8">
        <div
          className={clsx('cursor-pointer', {
            'text-sky-600 underline underline-offset-8 decoration-sky-500': isAccountLogin
          })}
          onClick={() => setIsAccountLogin(true)}
        >
          {t('ACCOUNT.LOGIN')}
        </div>
        <div
          onClick={() => setIsAccountLogin(false)}
          className={clsx('cursor-pointer underline-offset-8', {
            'text-sky-600 underline decoration-sky-500 font-semibold': !isAccountLogin
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
        </AForm.Item>
      </AForm>
      <div className="mt-4 grid grid-cols-[auto_2px_auto] items-center text-center">
        <Link
          to="/forgot-password"
          color="gray"
          className="!text-xs !text-inherit"
        >
          {t('FORGET.PASSWORD')}
        </Link>
        <span className="opacity-50">|</span>
        <Link
          to="/forgot-password"
          color="gray"
          className="!text-xs !text-inherit"
        >
          {t('ENTERPRISE.RETRIEVE')}
        </Link>
      </div>
    </div>
  )
}
