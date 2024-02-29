import type { MenuProps } from 'antd/lib'

import LanguageButton from '@/features/layouts/BaseLayout/Header/LanguageButton'
import ThemeToggle from '@/features/layouts/BaseLayout/Header/ThemeToggle'
import { useLogoutMutation } from '@/features/login'
import { userInfoQK } from '@/features/users'

import { Login } from '../Login'
import UserCard from './UserCard'

export default function PortalHeader() {
  const [hadLogin, setHadLogin] = useState(!!queryClient.getQueryData(userInfoQK()))
  const logoutMutation = useLogoutMutation()
  const { visible, open, close } = useModal()
  const [showMiniMenu, setShowMiniMenu] = useState(false)

  const { t } = useTranslation(['PORTAL', 'COMMON'])

  const onLogout = () => {
    if (logoutMutation.isPending) return
    logoutMutation.mutate(undefined, {
      onSuccess: () => setHadLogin(false)
    })
  }

  const accountItems: MenuProps['items'] = [
    {
      key: '1',
      label: t('LOGIN'),
      onClick: open
    },
    {
      key: '2',
      label: (
        <Link
          className="!text-inherit"
          to="/signup"
        >
          {t('SUPPLIER.REGISTRATION')}
        </Link>
      )
    }
  ]

  return (
    <header className="sticky top-0 z-[999] w-full bg-gradient-to-t from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto flex w-[1200px] max-w-[100vw] items-center justify-between p-4 text-gray-800 md:px-8 dark:text-gray-50">
        <section className="text-lg font-semibold md:text-xl">raipiot 2f portal</section>
        <div className="flex items-center justify-end">
          <div className="mr-4 hidden gap-4 md:ml-auto md:flex">
            <Link
              className="flex items-center !text-inherit"
              to="/404"
            >
              <AFlex
                align="center"
                gap={2}
              >
                <MaterialSymbolsShoppingBagOutlineSharp />
                SRM 商城
              </AFlex>
            </Link>
            <Link
              className="flex items-center gap-1 !text-inherit"
              to="/dashboard"
              disabled={!hadLogin}
              onClick={() => {
                if (!hadLogin) {
                  open()
                }
              }}
            >
              <MaterialSymbolsDashboardSharp />
              Dashboard
            </Link>
            <LanguageButton iconSize={12} />
            <ThemeToggle />
          </div>
          <AFlex
            align="center"
            className="gap-4 md:ml-0"
          >
            {hadLogin ? (
              <UserCard
                onLogout={onLogout}
                className="flex items-center gap-2"
              />
            ) : (
              <ADropdown menu={{ items: accountItems }}>
                <AAvatar
                  style={{ backgroundColor: '#eee', color: '#333' }}
                  icon={<MaterialSymbolsAccountCircle />}
                />
              </ADropdown>
            )}
          </AFlex>

          <div className="ml-4 flex gap-1 rounded-sm border border-gray-800 bg-gray-50 p-[4px] text-[20px] text-gray-900 md:hidden dark:border-white dark:bg-gray-900 dark:text-white">
            <MaterialSymbolsMenuOpenRounded onClick={() => setShowMiniMenu(!showMiniMenu)} />
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'flex flex-col gap-2 overflow-hidden bg-gray-50 transition-all md:hidden dark:bg-gray-900',
          showMiniMenu ? 'h-[120px] p-4' : 'h-0'
        )}
      >
        <Link
          className="flex items-center !text-inherit"
          to="/404"
        >
          <AFlex
            align="center"
            gap={2}
          >
            <MaterialSymbolsShoppingBagOutlineSharp />
            SRM 商城
          </AFlex>
        </Link>
        <Link
          className="flex items-center gap-1 !text-inherit"
          to="/dashboard"
          disabled={!hadLogin}
          onClick={() => {
            if (!hadLogin) {
              open()
            }
          }}
        >
          <MaterialSymbolsDashboardSharp />
          Dashboard
        </Link>
        <LanguageButton
          iconSize={12}
          text={t('COMMON:LANGUAGE')}
        />
      </div>
      <AModal
        destroyOnClose
        open={visible}
        footer={null}
        width={380}
        onCancel={close}
      >
        <Login
          className="flex flex-col p-3 px-8 md:px-6"
          onLoginSuccess={() => {
            close()
            setHadLogin(true)
          }}
        />
      </AModal>
    </header>
  )
}
