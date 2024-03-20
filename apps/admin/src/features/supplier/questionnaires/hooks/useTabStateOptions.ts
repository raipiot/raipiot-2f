import { QuestionnaireState } from '@raipiot-2f/api'

import { tabStateMap } from '../maps'

export const useTabStateOptions = () => {
  const canCreate = usePermCode('supplier:questionnaires:create')
  const canWrite = usePermCode('supplier:questionnaires:write')

  // 选项卡状态
  const tabStateOptions = useMemo(() => {
    const list = Array.from(tabStateMap).map(([key, label]) => ({
      label,
      key
    }))
    if (canWrite) {
      return list.filter((item) => item.key !== QuestionnaireState.NEW)
    }
    if (canCreate) {
      return list
    }
    return []
  }, [canCreate, canWrite])

  // 默认选项卡状态
  const defaultTabState = useMemo(() => {
    if (canWrite) {
      return QuestionnaireState.TO_FILL
    }
    if (canCreate) {
      return QuestionnaireState.NEW
    }
    return QuestionnaireState.NEW
  }, [canCreate, canWrite])

  return { tabStateOptions, defaultTabState }
}
