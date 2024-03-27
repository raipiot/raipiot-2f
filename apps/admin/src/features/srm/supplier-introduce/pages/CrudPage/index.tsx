import type { ModalType } from '@/shared/hooks/useModal'

import { useCreateMutation } from '../../mutations'

interface CrudPageProps {
  mode?: ModalType
}

export function CrudPage(props: CrudPageProps) {
  const { mode } = props
  const navigate = useNavigate()
  const [form] = AForm.useForm()
  const { mutateAsync, isPending } = useCreateMutation()

  return (
    <RpPageContainer
      pageHeaderProps={{
        operate: (
          <RpButton
            variant="submit"
            loading={isPending}
            disabled={isPending}
            onClick={form.submit}
          />
        ),
        backBtn: true
      }}
    >
      <RpForm
        form={form}
        onFinish={async () => {
          const values = form.getFieldsValue(true)
          await mutateAsync(values, {
            onSuccess: () =>
              navigate({
                to: '/srm/invitations'
              })
          })
        }}
      >
        <ACard rootClassName="!mt-4">
          <ATypography>
            <h5>
              <AFlex
                justify="space-between"
                align="center"
              >
                引入对象
                <RpButton
                  variant="add"
                  size="small"
                />
              </AFlex>
            </h5>
          </ATypography>
          <RpForm>
            <RpRow>
              <RpFormItem
                formItemProps={{ label: '品类', labelCol: { style: { width: 50 } } }}
                type="input"
              />

              <RpFormItem
                formItemProps={{ label: '业务实体', labelCol: { style: { width: 70 } } }}
                type="input"
              />
            </RpRow>
          </RpForm>
          <ATable
            rowKey="id"
            dataSource={[]}
            columns={[
              { title: '供应商编码' },
              { title: '供应商名称' },
              { title: '品类名称' },
              { title: '品类状态' },
              { title: '所属业务实体' }
            ]}
          />
        </ACard>

        <ACard rootClassName="!mt-4">
          <ATypography>
            <h5>
              <AFlex
                justify="space-between"
                align="center"
              >
                引入目标业务实体
                <RpButton
                  variant="add"
                  size="small"
                />
              </AFlex>
            </h5>
          </ATypography>
          <RpForm>
            <RpRow>
              <RpFormItem
                formItemProps={{ label: '资源池', labelCol: { style: { width: 60 } } }}
                type="input"
              />
            </RpRow>
          </RpForm>
          <ATable
            rowKey="id"
            dataSource={[]}
            columns={[
              { title: '业务实体编码' },
              { title: '业务实体名称' },
              { title: '所属资源池' }
            ]}
          />
        </ACard>
      </RpForm>
    </RpPageContainer>
  )
}
