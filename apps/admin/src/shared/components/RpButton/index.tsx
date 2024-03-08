import type { ButtonProps } from 'antd'
import { merge } from 'lodash-es'

type RpButtonType = 'view' | 'create' | 'edit' | 'delete' | 'batch-delete' | 'back' | 'config'

interface RpButtonProps extends ButtonProps {
  variant?: RpButtonType
}

function RpButton(props: RpButtonProps) {
  const { variant, ...btnProps } = props
  const { t } = useTranslation()

  const getVariantProps = useCallback((type?: RpButtonType): ButtonProps => {
    switch (type) {
      // 查看
      case 'view':
        return {
          children: t('VIEW')
        }
      // 新增
      case 'create':
        return {
          type: 'primary',
          children: t('CREATE')
        }
      // 编辑
      case 'edit':
        return {
          children: t('EDIT')
        }
      // 删除
      case 'delete':
        return {
          danger: true,
          children: t('DELETE')
        }
      // 批量删除
      case 'batch-delete':
        return {
          danger: true,
          children: t('BATCH.DELETE')
        }
      // 返回
      case 'back':
        return {
          children: t('BACK')
        }
      // 配置
      case 'config':
        return {
          children: t('CONFIG')
        }
      default:
        return {}
    }
  }, [])

  return <AButton {...merge({}, getVariantProps(variant), btnProps)} />
}
export default RpButton
