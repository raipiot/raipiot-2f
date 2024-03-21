import { QuestionnaireStatus } from '@raipiot-2f/api'

import { tabStateMap } from '../maps'

export const useStatusTabOptions = () => {
  const canCreate = usePermCode('srm:questionnaires:create')
  const canWrite = usePermCode('srm:questionnaires:write')

  // 选项卡状态
  const tabStateOptions = useMemo(() => {
    const list = Array.from(tabStateMap).map(([key, label]) => ({
      label,
      key
    }))
    if (canWrite) {
      return list.filter((item) => item.key !== QuestionnaireStatus.NEW)
    }
    if (canCreate) {
      return list
    }
    return []
  }, [canCreate, canWrite])

  // 默认选项卡状态
  const defaultTabState = useMemo(() => {
    if (canWrite) {
      return QuestionnaireStatus.TO_FILL
    }
    if (canCreate) {
      return QuestionnaireStatus.NEW
    }
    return QuestionnaireStatus.NEW
  }, [canCreate, canWrite])

  return { tabStateOptions, defaultTabState }
}
