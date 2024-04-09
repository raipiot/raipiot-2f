import SampleForm from '../components/SampleForm'

export function CreatePageByHandmade() {
  const [form] = AForm.useForm()
  const saveMutation = SampleSheets.useSaveNewSheetMutation()
  const navigate = useNavigate()
  const onSave = async () => {
    const values = await form.validateFields()
    console.log(values)
    const { id } = await saveMutation.mutateAsync(values)
    console.log(id)
    // redirect to sheet detail page
    navigate({
      to: '/srm/sample-sheets/sheet/$id',
      params: { id }
    })
  }

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <AFlex gap={6}>
            {/* {id !== undefined && <RpButton variant="delete" />} */}
            <RpButton
              onClick={onSave}
              loading={saveMutation.isPending}
            >
              保存
            </RpButton>
            {/* {id !== undefined && <RpButton type="primary">发布</RpButton>} */}
          </AFlex>
        )
      }}
    >
      <SampleForm form={form} />
    </RpPageContainer>
  )
}
