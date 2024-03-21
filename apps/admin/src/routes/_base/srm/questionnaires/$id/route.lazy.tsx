export const Route = createLazyFileRoute('/_base/srm/questionnaires/$id')({
  component: () => (
    <Questionnaires.ModuleProvider>
      <Component />
    </Questionnaires.ModuleProvider>
  )
})

function Component() {
  return (
    // 页面容器
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <>
            <RpButton
              variant="save"
              onClick={() => {}}
            />
            <RpButton
              variant="submit"
              onClick={() => {
                // form.resetFields()
                // modal.openCreate()
              }}
            />
            <AButton type="primary">发布</AButton>
          </>
        ),
        backBtn: true
      }}
    >
      <Questionnaires.BasicInfoForm />
      <Questionnaires.CheckList />
    </RpPageContainer>
  )
}
