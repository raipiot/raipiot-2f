import { useCommonForm } from '../hooks/useCommonForm'

export default function FilterForm() {
  const { component } = useCommonForm({
    items: [
      <RpFormInputItem
        itemProps={{
          label: '参数名称',
          name: 'paramName'
        }}
        inputProps={{
          placeholder: '请输入参数名称'
        }}
      />,
      <RpFormInputItem
        itemProps={{
          label: '参数键名',
          name: 'paramKey'
        }}
        inputProps={{
          placeholder: '请输入参数名称'
        }}
      />
    ],
    formProps: {
      labelAlign: 'right',
      initialValues: {
        paramName: '1',
        paramKey: ''
      }
    }
  })
  return <>{component}</>
}
