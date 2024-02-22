import { TableLayout } from '@/features/layouts'

export const Route = createLazyFileRoute('/_base/system/posts')({
  component: Posts
})

function Posts() {
  return <TableLayout />
}
