export const Route = createLazyFileRoute('/_whitelist/signup')({
  component: Signup
})

function Signup() {
  const match = useMatch({ from: '/_whitelist/signup' })
  return (
    <div className="absolute inset-0 m-auto flex h-fit w-[360px] max-w-[90%] flex-col rounded-lg bg-[#ffffff] p-8 shadow-md dark:bg-[#222222]">
      <div className="mb-4 flex flex-col items-center">
        <div className="text-xl">{I18nUtils.getText(match.staticData.title)}</div>
      </div>
    </div>
  )
}
