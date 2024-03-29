import type { ButtonProps } from 'antd'
import { merge } from 'lodash-es'

type RpButtonType =
  | 'view'
  | 'create'
  | 'edit'
  | 'delete'
  | 'batch-delete'
  | 'back'
  | 'config'
  | 'reset'
  | 'search'
  | 'cancel'
  | 'confirm'
  | 'save'
  | 'submit'
  | 'add'
  | 'add-child'
  | 'cancel-edit'
  | 'import' // 导入
  | 'export' // 导出

interface RpButtonProps extends ButtonProps {
  variant?: RpButtonType
}

function RpButton(props: RpButtonProps) {
  const { variant, ...btnProps } = props
  const { t } = useTranslation()

  const getVariantProps = useCallback(
    (type?: RpButtonType): ButtonProps => {
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
        // 重置
        case 'reset':
          return {
            children: t('RESET')
          }
        // 搜索
        case 'search':
          return {
            type: 'primary',
            children: t('SEARCH')
          }
        // 取消
        case 'cancel':
          return {
            children: t('CANCEL')
          }
        // 确认
        case 'confirm':
          return {
            type: 'primary',
            children: t('CONFIRM')
          }
        // 保存
        case 'save':
          return {
            children: t('SAVE')
          }
        // 提交
        case 'submit':
          return {
            type: 'primary',
            children: t('SUBMIT')
          }
        // 新增
        case 'add':
          return {
            type: 'primary',
            children: t('ADD')
          }
        // 新增子项
        case 'add-child':
          return {
            children: t('ADD.CHILD')
          }
        // 取消编辑
        case 'cancel-edit':
          return {
            children: t('CANCEL.EDIT')
          }
        case 'import':
          return {
            children: t('IMPORT')
          }
        case 'export':
          return {
            children: t('EXPORT')
          }
        default:
          return {}
      }
    },
    [t]
  )

  return <AButton {...merge({}, getVariantProps(variant), btnProps)} />
}
export default RpButton
