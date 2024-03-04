import { useSystemDictSuspenseQuery } from '../queries'

export function SystemDictDetail({ id }: { id: string }) {
  const { data } = useSystemDictSuspenseQuery(id)

  return (
    <ADescriptions
      bordered
      items={Object.keys(data).map((key, index) => ({
        label: key,
        key,
        children: (data as any)[key],
        span: index % 2 === 0 ? 1 : 2
      }))}
    />
  )
}
