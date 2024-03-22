import { useLogoutMutation } from '@/features/auth/login'

export default function UserCard() {
  const { data } = useSuspenseQuery(Users.infoQueryOptions())
  const logoutMutation = useLogoutMutation()

  const handleLogout = () =>
    logoutMutation.mutate(undefined, {
      onSuccess: () => router.invalidate()
    })

  return (
    <div className="flex items-center gap-2">
      <div className="ml-4 flex items-center rounded-full bg-white pl-2 text-gray-900 shadow-md shadow-sky-500">
        <div className="group relative h-[22px] w-20 overflow-hidden">
          <div className="absolute top-1/2 w-full -translate-y-1/2 truncate text-center transition-all group-hover:-top-full">
            Hi, {data.name}
          </div>
          <button
            type="button"
            className="absolute top-full flex items-center gap-1 text-center transition-all group-hover:top-1/2 group-hover:-translate-y-1/2"
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
