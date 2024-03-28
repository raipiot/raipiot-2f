import type { SampleSheetByHandmadeDto } from '@raipiot-2f/api'

import {
  useDeleteSheetMutation,
  usePublishMutation,
  useSaveNewSheetMutation
} from '../../mutations'
import SampleInfoTable from './components/SampleInfoTable'

// Usage of DebounceSelect
interface UserValue {
  label: string
  value: string
}

// 临时示例
async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username)
  const res = await fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username
        })
      )
    )
  console.log('res:', res)
  return res
}

export function CreateByHandPage() {
  const { createModalForm } = useFormCreator<SampleSheetByHandmadeDto>()
  const [sheetId, setSheetId] = useState<string | undefined>(undefined)
  const items = createModalForm([
    {
      type: 'input',
      formItemProps: {
        label: '业务实体',
        name: '',
        rules: [{ required: true }]
      }
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '公司',
        name: 'company',
        rules: [{ required: true }]
      },
      debounceSelectProps: {
        fetchOptions: fetchUserList
      }
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '库存组织',
        name: 'inventoryOrganizationId',
        rules: [{ required: true }]
      },
      debounceSelectProps: {
        fetchOptions: fetchUserList
      }
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '供应商',
        name: 'supplier',
        rules: [{ required: true }]
      },
      debounceSelectProps: {
        fetchOptions: fetchUserList,
        placeholder: '请输入供应商名称'
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '供应商类型',
        name: 'supplierType',
        rules: [{ required: true }]
      },
      selectProps: {
        options: [],
        showSearch: true
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '原厂名称',
        name: 'originalFactoryName'
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '送样类型',
        name: 'sampleType',
        rules: [{ required: true }]
      },
      selectProps: {
        options: []
      }
    },
    {
      type: 'select',
      formItemProps: {
        label: '紧急程度',
        name: 'urgency'
      },
      selectProps: {
        options: []
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '送样地址',
        name: 'sampleAddress'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '接样人',
        name: 'sampleRecipient',
        rules: [{ required: true }]
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '接样人电话',
        name: 'sampleRecipientPhone',
        rules: [
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的手机号码'
          }
        ]
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '申请人电话',
        name: 'applicantPhone'
      }
    },
    {
      type: 'debounce-select',
      formItemProps: {
        label: '接收部门',
        name: 'recipientDepartmentId'
      },
      debounceSelectProps: {
        fetchOptions: fetchUserList
      }
    },
    {
      type: 'switch',
      formItemProps: {
        label: '是否需要供应商反馈',
        name: 'needFeedbackFlag'
      }
    },
    {
      type: 'input',
      formItemProps: {
        label: '送样申请来源',
        name: 'sampleApplicationSource'
      }
    },
    {
      type: 'text-area',
      formItemProps: {
        label: '备注',
        name: 'notes'
      },
      textAreaProps: {
        rows: 3,
        maxLength: 200,
        showCount: true
      },
      colProps: {
        span: 24
      }
    }
  ])
  const [form] = AForm.useForm<SampleSheetByHandmadeDto>()

  const publishMT = usePublishMutation()
  const saveMT = useSaveNewSheetMutation()
  const deleteMT = useDeleteSheetMutation()

  return (
    <RpPageContainer
      pageHeaderProps={{
        // 操作区
        operate: (
          <AFlex gap={4}>
            {sheetId && (
              <RpButton
                variant="delete"
                disabled={deleteMT.isPending}
                onClick={() => {
                  deleteMT.mutateAsync(sheetId!, {
                    onSuccess: () => {
                      // reset form
                    }
                  })
                }}
              />
            )}
            <RpButton
              variant="save"
              onClick={() => {
                form.validateFields().then((values) => {
                  saveMT.mutateAsync(values, {
                    onSuccess: (res) => {
                      setSheetId(res.id)
                    }
                  })
                })
              }}
              disabled={saveMT.isPending || sheetId !== undefined}
            />
            {sheetId && (
              <RpButton
                type="primary"
                disabled={publishMT.isPaused}
                onClick={() => {
                  publishMT.mutateAsync(sheetId!)
                }}
              >
                发布
              </RpButton>
            )}
          </AFlex>
        )
      }}
    >
      <br />
      <RpDynamicForm
        items={items}
        form={form}
      />
      <SampleInfoTable id={sheetId} />
    </RpPageContainer>
  )
}
