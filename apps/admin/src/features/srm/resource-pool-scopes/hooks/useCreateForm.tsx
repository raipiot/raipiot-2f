import type {
  ResourcePoolScopeCategoryVo,
  ResourcePoolScopeCompanyVo,
  ResourcePoolScopeCreateDto
} from '@raipiot-2f/api'

import { typeOptions } from '../constants'
import { useCategoryColumns } from './useCategoryColumns'
import { useCompanyColumns } from './useCompanyColumns'

export const useCreateForm = () => {
  const { createModalForm } = useFormCreator<ResourcePoolScopeCreateDto>()
  const [form] = AForm.useForm()

  const [companyList, setCompanyList] = useImmer<ResourcePoolScopeCompanyVo[]>([
    {
      id: '1',
      code: 'CO00000027732',
      name: '浙江一道优加新能源有限公司'
    }
  ])
  const [categoryList, setCategoryList] = useImmer<ResourcePoolScopeCategoryVo[]>([
    {
      id: '2',
      category: 'C',
      name: '废旧资产&物资',
      description: '废旧资产&物资'
    }
  ])

  const { columns: companyColumns } = useCompanyColumns({ setCompanyList })
  const { columns: categoryColumns } = useCategoryColumns({ setCategoryList })

  const isolationTypeId = AForm.useWatch('isolationTypeId', form)

  return {
    form,
    formItems: createModalForm([
      {
        type: 'input',
        formItemProps: {
          name: 'name',
          label: '资源池名称',
          rules: [{ required: true }]
        }
      },
      {
        type: 'select',
        formItemProps: {
          name: 'isolationTypeId',
          label: '资源池类型',
          rules: [{ required: true }]
        },
        selectProps: {
          options: typeOptions,
          allowClear: true
        }
      },
      {
        type: 'custom',
        hidden: isolationTypeId !== '1',
        render: () => (
          <ACol
            span={24}
            className="mt-4"
          >
            <AFlex
              justify="space-between"
              align="center"
            >
              <ATypography>
                <blockquote>品类</blockquote>
              </ATypography>
              <RpButton
                variant="add"
                size="small"
              />
            </AFlex>
            <ATable
              rowKey="id"
              dataSource={categoryList}
              columns={categoryColumns(true)}
            />
          </ACol>
        )
      },
      {
        type: 'custom',
        hidden: !isolationTypeId,
        render: () => (
          <ACol
            span={24}
            className="mt-4"
          >
            <AFlex
              justify="space-between"
              align="center"
            >
              <ATypography>
                <blockquote>基地</blockquote>
              </ATypography>
              <RpButton
                variant="add"
                size="small"
              />
            </AFlex>
            <ATable
              rowKey="id"
              dataSource={companyList}
              columns={companyColumns(true)}
            />
          </ACol>
        )
      }
    ])
  }
}
