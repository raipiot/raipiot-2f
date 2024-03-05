import { useLogoutMutation } from '@/features/auth/login'
import { userInfoQueryOptions } from '@/features/system/users'

export default function UserCard() {
  console.log(1)
  const { data } = useSuspenseQuery(userInfoQueryOptions())
  const logoutMutation = useLogoutMutation()

  const handleLogout = () =>
    logoutMutation.mutate(undefined, {
      onSuccess: async () => {
        queryClient.removeQueries(userInfoQueryOptions())
        router.invalidate()
      }
    })

  return (
    <div className="flex items-center gap-2">
      <div className="ml-4 flex items-center rounded-full bg-white pl-2 text-gray-900 shadow-md shadow-sky-500">
        <div className="group relative h-[22px] w-20 overflow-hidden">
          <div className="absolute top-[50%] w-full translate-y-[-50%] truncate text-center transition-all group-hover:top-[-100%]">
            Hi, {data.name}
          </div>
          <button
            type="button"
            className="absolute top-[100%] flex items-center gap-1 text-center transition-all group-hover:top-[50%] group-hover:translate-y-[-50%]"
            onClick={() => handleLogout()}
          >
            <MaterialSymbolsExitToAppSharp />
            退出登录
          </button>
        </div>
        <AAvatar
          src={data.avatar}
          size={32}
        />
      </div>
    </div>
  )
}
