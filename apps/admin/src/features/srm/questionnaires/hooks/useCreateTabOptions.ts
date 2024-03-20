import type { TabsProps } from 'antd'

import { CreateTabOption } from '../enums'

export const useCreateTabOptions = () => {
  const [activeTab, setActiveTab] = useState(CreateTabOption.SELECT_SUPPLIER)

  const handleTabChange: TabsProps['onChange'] = (key) => setActiveTab(key as CreateTabOption)

  return {
    activeTab,
    handleTabChange
  }
}
