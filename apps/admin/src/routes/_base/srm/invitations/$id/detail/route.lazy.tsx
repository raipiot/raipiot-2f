export const Route = createLazyFileRoute('/_base/srm/invitations/$id/detail')({
  component: () => <Invitations.RegisterPage isReadOnly />
})
