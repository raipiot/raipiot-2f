import { useLogoutMutation } from '@/features/login'
import { useUserInfoSuspenseQuery } from '@/features/users'

enum UserAction {
  'USER.INFO' = '1',
  'CHANGE.PASSWORD' = '2',
  'QUIT' = '3'
}

export default function UserAvatar() {
  const { t } = useTranslation(['LAYOUT', 'AUTH'])
  const navigate = useNavigate()

  const { data: userInfo } = useUserInfoSuspenseQuery()

  const logoutMutation = useLogoutMutation()

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
        logoutMutation.mutate(undefined, {
          onSuccess: () => {
            navigate({ to: '/login' })
          }
        })
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
        <MaterialSymbolsAccountCircle className="cursor-pointer text-xl" />
      )}
    </ADropdown>
  )
}
