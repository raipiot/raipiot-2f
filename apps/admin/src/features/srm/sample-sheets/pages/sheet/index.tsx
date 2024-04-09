import SampleForm from '../components/SampleForm'

export function SampleSheetDetailPage() {
  const { id } = useParams({
    from: '/_base/srm/sample-sheets/sheet/$id'
  })
  const { data } = useSuspenseQuery(SampleSheets.queries.detailOP(id))
  const [form] = AForm.useForm()
  const saveMutation = SampleSheets.useSaveNewSheetMutation()
  const navigate = useNavigate()

  const onSave = async () => {
    const values = await form.validateFields()
    console.log(values)
    await saveMutation.mutateAsync({ ...values, id })
  }

  const onPublish = async () => {
    const values = await form.validateFields()
    await saveMutation.mutateAsync({ ...values, id })
    navigate({
      to: '/srm/sample-sheets'
    })
  }

  const onDelete = () => {
    navigate({
      to: '/srm/sample-sheets'
    })
  }

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <AFlex gap={6}>
            <RpButton
              variant="delete"
              onClick={onDelete}
            />
            <RpButton
              onClick={onSave}
              loading={saveMutation.isPending}
            >
              保存
            </RpButton>
            <RpButton
              type="primary"
              onClick={onPublish}
            >
              发布
            </RpButton>
          </AFlex>
        )
      }}
    >
      <SampleForm
        form={form}
        initialValues={data}
        id={id}
      />
    </RpPageContainer>
  )
}
