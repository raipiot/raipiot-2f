import { Sex } from '@raipiot-2f/api'
import type { SelectProps } from 'antd'

export const useSexSelectOptions = () => {
  const { t } = useTranslation()
  return [
    {
      label: t('MAN'),
      value: Sex.MAN
    },
    {
      label: t('FAMALE'),
      value: Sex.FEMALE
    },
    {
      label: t('UNKNOWN'),
      value: Sex.UNKNOWN
    }
  ] as SelectProps['options']
}
