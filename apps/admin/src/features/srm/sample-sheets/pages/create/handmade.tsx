import SampleForm from '../components/SampleForm'

export function CreatePageByHandmade() {
  const { id } = useSearch({
    from: '/_base/srm/sample-sheets/create/handmade'
  })

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <AFlex gap={6}>
            {id !== undefined && <RpButton variant="delete" />}
            <RpButton>保存</RpButton>
            {id !== undefined && <RpButton type="primary">发布</RpButton>}
          </AFlex>
        )
      }}
    >
      <SampleForm id={id} />
    </RpPageContainer>
  )
}
