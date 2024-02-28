import { useUserInfoSuspenseQuery } from '@/features/users'

enum UserAction {
  'USER.INFO' = '1',
  'CHANGE.PASSWORD' = '2',
  'QUIT' = '3'
}

export default function UserAvatar() {
  const { t } = useTranslation(['COMMON', 'AUTH'])
  const { message } = AApp.useApp()
  const navigate = useNavigate()

  const { data: userInfo } = useUserInfoSuspenseQuery()

  const logoutMutation = useMutation({
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      AuthUtils.clearAccessToken()
      AuthUtils.clearRefreshToken()
      navigate({ to: '/login', replace: true })
      message.success(t('AUTH:LOG.OUT.SUCCESS'))
    }
  })

  const menuItems = [
    {
      key: UserAction['USER.INFO'],
      label: t('USER.INFO')
    },
    {
      key: UserAction['CHANGE.PASSWORD'],
      label: t('CHANGE.PASSWORD')
    },
    {
      key: UserAction.QUIT,
      label: t('LOG.OUT')
    }
  ]

  // 点击菜单
  const handleClickMenu = ({ key }: { key: string }) => {
    switch (key) {
      case UserAction['USER.INFO']: {
        navigate({ to: '/user-info' })
        break
      }
      case UserAction['CHANGE.PASSWORD']: {
        navigate({ to: '/change-password' })
        break
      }
      case UserAction.QUIT: {
        logoutMutation.mutate()
        break
      }
      default: {
        break
      }
    }
  }

  return (
    <ADropdown
      menu={{
        items: menuItems,
        onClick: handleClickMenu
      }}
    >
      {userInfo.avatar ? (
        <AAvatar
          src={userInfo.avatar}
          size={22}
          className="cursor-pointer !bg-gray-300 hover:shadow"
        />
      ) : (
        <MaterialSymbolsAccountCircle className="cursor-pointer text-lg" />
      )}
    </ADropdown>
  )
}
