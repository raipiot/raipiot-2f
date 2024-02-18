enum UserAction {
  'USER.INFO' = '1',
  'CHANGE.PASSWORD' = '2',
  'QUIT' = '3'
}

export default function UserAvatar() {
  const { t } = useTranslation(['LAYOUT', 'AUTH'])
  const { message } = AApp.useApp()
  const userStore = useUserStore()
  const navigate = useNavigate()

  const logoutMutation = useMutation({
    mutationFn: () => AuthAPI.logout(),
    onSuccess: () => {
      userStore.clearUser()
      AuthUtils.clearAccessToken()
      AuthUtils.clearRefreshToken()
      navigate({ to: '/login', replace: true })
      message.success(t('AUTH:LOG.OUT.SUCCESS'))
    }
  })

  const menuItems = [
    {
      key: UserAction['USER.INFO'],
      label: t('HEADER.USER.INFO')
    },
    {
      key: UserAction['CHANGE.PASSWORD'],
      label: t('HEADER.CHANGE.PASSWORD')
    },
    {
      key: UserAction.QUIT,
      label: t('HEADER.LOG.OUT')
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

  if (!userStore.user?.id) {
    return null
  }

  return (
    <ADropdown
      menu={{
        items: menuItems,
        onClick: handleClickMenu
      }}
    >
      {userStore.user.avatar ? (
        <AAvatar
          src={userStore.user.avatar}
          size={22}
          className="cursor-pointer !bg-gray-300 hover:shadow"
        />
      ) : (
        <MaterialSymbolsAccountCircle className="cursor-pointer text-xl" />
      )}
    </ADropdown>
  )
}
