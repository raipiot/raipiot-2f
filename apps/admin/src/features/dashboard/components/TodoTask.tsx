export interface TodoTaskProps {
  count: number
  title: string
  description: string
}
export function TodoTask({ count, title, description }: TodoTaskProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-sm bg-white p-6 dark:bg-[#42444a]">
      <div className="text-2xl font-semibold">{count}</div>
      <div>{title}</div>
      <p className="opacity-50">{description}</p>
    </div>
  )
}
