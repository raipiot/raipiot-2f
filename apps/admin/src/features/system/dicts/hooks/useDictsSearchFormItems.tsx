import type { DictSearchForm } from '@raipiot-2f/api'

export const useDictsSearchFormItems = () => {
  const { t } = useTranslation('SYSTEM/DICTS')
  const { createSearchFormItems } = useSearchFormCreator<DictSearchForm>()

  return createSearchFormItems([
    {
      type: 'input',
      key: 'code',
      formItemProps: {
        name: 'code',
        label: t('CODE')
      }
    },
    {
      type: 'input',
      key: 'dictValue',
      formItemProps: {
        name: 'dictValue',
        label: t('DICT.VALUE')
      }
    }
  ])
}
