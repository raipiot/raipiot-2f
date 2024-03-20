export const Route = createLazyFileRoute('/_base/supplier/questionnaires/create')({
  component: () => (
    <Questionnaires.ModuleProvider>
      <Component />
    </Questionnaires.ModuleProvider>
  )
})

function Component() {
  const { activeTab, handleTabChange } = Questionnaires.useCreateTabOptions()
  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <ASpace>
            <RpButton variant="save" />
            <RpSubmitPopconfirm>
              <AButton type="primary">发布</AButton>
            </RpSubmitPopconfirm>
          </ASpace>
        ),
        backBtn: true
      }}
    >
      <ACard>
        <Questionnaires.BasicInfoForm />
      </ACard>
      <ACard>
        <ATabs
          activeKey={activeTab}
          onChange={handleTabChange}
          items={Questionnaires.createTabOptions}
        />
      </ACard>
    </RpPageContainer>
  )
}
