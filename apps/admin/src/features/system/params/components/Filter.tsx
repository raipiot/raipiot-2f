import { ParamVoDataIndex } from '@raipiot-2f/api'

import { useCommonForm } from '../hooks/useCommonForm'

export default function FilterForm() {
  const { component } = useCommonForm({
    items: [
      <RpFormInputItem
        itemProps={{
          label: '参数名称',
          name: ParamVoDataIndex.paramName
        }}
        inputProps={{
          placeholder: '请输入参数名称'
        }}
      />,
      <RpFormInputItem
        itemProps={{
          label: '参数键名',
          name: ParamVoDataIndex.paramKey
        }}
        inputProps={{
          placeholder: '请输入参数名称'
        }}
      />
    ],
    formProps: {
      labelAlign: 'right',
      initialValues: {
        [ParamVoDataIndex.paramName]: '1',
        [ParamVoDataIndex.paramKey]: ''
      }
    }
  })
  return <>{component}</>
}
