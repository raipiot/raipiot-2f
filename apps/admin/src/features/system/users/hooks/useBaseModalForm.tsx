import { postSelectQueryOptions } from '../../posts'
import { tenantsSelectQueryOptions } from '../../tenants'
import type { UserSubmitFormModel } from '../types'

export const useBaseModalForm = () => {
  const { t } = useTranslation(['SYSTEM/USERS', 'COMMON', 'AUTH'])
  const { createModalForm } = useFormCreator<UserSubmitFormModel>()
  const [modalForm] = AForm.useForm<UserSubmitFormModel>()
  const { data: tenantData } = useSuspenseQuery(tenantsSelectQueryOptions())
  const { data: userPlatform } = useSuspenseQuery(Dicts.directoryQueryOptions('user_type'))
  const sexOptions = useSexSelectOptions()
  const [deptData, setDeptData] = useState<any[]>([])
  const [positionData, setPositionData] = useState<any[]>([])
  const [roleData, setRoleData] = useState<any[]>([])

  // console.log('deptData data:', deptData)

  return {
    modalForm,
    modalFormItems: createModalForm([
      {
        type: 'collapse',
        collapseProps: {
          size: 'small',
          items: [
            {
              label: (
                <AFlex gap={4}>
                  <MaterialSymbolsAccountCircleOutline />
                  <span>{t('BASIC.INFO')}</span>
                </AFlex>
              ),
              children: [
                {
                  type: 'select',
                  formItemProps: {
                    name: 'tenantId',
                    label: t('TENANT'),
                    rules: [{ required: true }]
                  },
                  selectProps: {
                    options: tenantData,
                    onChange: async (value) => {
                      // form.setFieldsValue({
                      //   deptId: undefined,
                      //   roleId: undefined,
                      //   postId: undefined
                      // })
                      // query new dept data
                      const result = await Promise.all([
                        queryClient.ensureQueryData(Depts.treeQueryOptions(value)),
                        queryClient.ensureQueryData(Roles.treeQueryOptions(value)),
                        queryClient.ensureQueryData(postSelectQueryOptions(value))
                      ])
                      setDeptData(result[0])
                      setRoleData(result[1])
                      setPositionData(result[2])
                    },
                    fieldNames: { value: 'tenantId', label: 'tenantName' }
                  }
                },
                {
                  type: 'input',
                  formItemProps: {
                    name: 'account',
                    label: t('LOGIN.ACCOUNT'),
                    rules: [{ required: true }]
                  }
                },
                {
                  type: 'tree-select',
                  formItemProps: {
                    name: 'userType',
                    label: t('PLATFORM'),
                    rules: [{ required: true }]
                  },
                  treeSelectProps: {
                    treeData: userPlatform
                  }
                },
                {
                  type: 'input',
                  inputProps: {
                    type: 'password',
                    id: 'password'
                  },
                  formItemProps: {
                    name: 'password',
                    label: t('AUTH:LOGIN.PASSWORD'),
                    rules: [{ required: true }]
                  }
                },
                {
                  type: 'input',
                  inputProps: {
                    type: 'password',
                    id: 'password2'
                  },
                  formItemProps: {
                    name: 'password2',
                    label: t('AUTH:CONFIRM.PASSWORD'),
                    rules: [{ required: true }]
                  }
                }
              ]
            },
            {
              label: (
                <AFlex gap={4}>
                  <MaterialSymbolsDataInfoAlert />
                  <span>{t('DETAIL.INFO')}</span>
                </AFlex>
              ),
              children: [
                {
                  type: 'input',
                  formItemProps: {
                    name: 'name',
                    label: t('NICKNAME'),
                    rules: [
                      {
                        required: true
                      }
                    ]
                  }
                },
                {
                  type: 'input',
                  formItemProps: {
                    name: 'realName',
                    label: t('NAME'),
                    rules: [
                      {
                        required: true
                      }
                    ]
                  }
                },
                {
                  type: 'input',
                  formItemProps: {
                    name: 'phone',
                    label: t('PHONE.NUMBER')
                  },
                  inputProps: {
                    type: 'number'
                  }
                },
                {
                  type: 'input',
                  formItemProps: {
                    name: 'email',
                    label: t('EMAIL.ADDRESS')
                  },
                  inputProps: {
                    type: 'email'
                  }
                },
                {
                  type: 'select',
                  formItemProps: {
                    name: 'sex',
                    label: t('SYSTEM/USERS:GENDER')
                  },
                  selectProps: {
                    options: sexOptions
                  }
                },
                {
                  type: 'date-picker',
                  formItemProps: {
                    label: t('BIRTHDAY'),
                    name: 'birthday'
                  }
                }
              ]
            },
            {
              label: (
                <AFlex gap={4}>
                  <MaterialSymbolsFramePersonMic />
                  <span>{t('DUTY.INFO')}</span>
                </AFlex>
              ),
              children: [
                {
                  type: 'input',
                  formItemProps: {
                    name: 'code',
                    label: t('CODE')
                  }
                },
                {
                  type: 'tree-select',
                  formItemProps: {
                    name: 'roleId',
                    label: t('ROLE'),
                    rules: [{ required: true }]
                  },
                  treeSelectProps: {
                    treeData: roleData,
                    multiple: true
                  }
                },
                {
                  type: 'tree-select',
                  formItemProps: {
                    name: 'deptId',
                    label: t('DEPT'),
                    rules: [{ required: true }]
                  },
                  treeSelectProps: {
                    treeData: deptData,
                    multiple: true
                  }
                },
                {
                  type: 'tree-select',
                  formItemProps: {
                    name: 'postId',
                    label: t('POSITION'),
                    rules: [{ required: true }]
                  },
                  treeSelectProps: {
                    treeData: positionData,
                    multiple: true,
                    fieldNames: { value: 'id', label: 'postName' }
                  }
                }
              ]
            }
          ]
        },
        colProps: { span: 24 }
      }
    ])
  }
}
