import { BasicInfoForm } from './BasicInfoForm'
import { BizInfoForm } from './BizInfoForm'

export function CheckList() {
  return (
    <ACard>
      <ATabs
        tabPosition="left"
        items={[
          { label: '基本信息', key: 'basic', children: <BasicInfoForm /> },
          { label: '业务信息', key: 'biz', children: <BizInfoForm /> }
        ]}
      />
    </ACard>
  )
}
