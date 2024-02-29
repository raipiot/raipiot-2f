import type { HTMLAttributes } from 'react'

import { useLogoutMutation } from '@/features/login'
import { userInfoQueryOptions } from '@/features/users'

interface UserCardProps extends HTMLAttributes<HTMLDivElement> {
  onLogout: () => void
}

export default function UserCard(props: UserCardProps) {
  const { onLogout, ...divProps } = props
  const { data } = useSuspenseQuery(userInfoQueryOptions)
  const logoutMutation = useLogoutMutation()

  return (
    <Suspense fallback={<div className="p-4">loading...</div>}>
      <div {...divProps}>
        <div className="flex min-h-[220px] flex-col items-center justify-center">
          <AAvatar
            src={data.avatar}
            size={64}
          />
          <div className="mt-2 text-xl font-semibold">{data.name}</div>
          <div className="mt-4 flex gap-4">
            <AButton
              onClick={() =>
                logoutMutation.mutate(undefined, {
                  onSuccess: () => onLogout()
                })
              }
            >
              Logout
            </AButton>
            <Link to="/dashboard">
              <AButton type="primary">Dashboard</AButton>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
