import { MenuType } from '../enums'
import { menuTreeQueryOptions } from '../queries'
import type { MenuSubmitFormModel } from '../types'

export const useMenusModalForm = () => {
  const { t } = useTranslation(['SYSTEM/MENUS', 'COMMON'])
  const { createResponsiveFormItems } = useFormCreator<MenuSubmitFormModel>()
  const [modalForm] = AForm.useForm<MenuSubmitFormModel>()

  const { data } = useSuspenseQuery(menuTreeQueryOptions())

  return {
    modalForm,
    modalFormItems: createResponsiveFormItems([
      {
        type: 'input',
        formItemProps: {
          name: 'name',
          label: t('NAME'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'path',
          label: t('ROUTER.URL')
        }
      },
      {
        type: 'tree-select',
        formItemProps: {
          name: 'parentId',
          label: t('PARENT.MENU')
        },
        treeSelectProps: {
          treeData: data
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'code',
          label: t('CODE'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'radio-group',
        formItemProps: {
          name: 'category',
          label: t('TYPE'),
          rules: [{ required: true }]
        },
        radioGroupProps: {
          options: [
            {
              label: t('TYPE.MENU'),
              value: MenuType.MENU
            },
            {
              label: t('TYPE.BUTTON'),
              value: MenuType.BUTTON
            }
          ]
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'source',
          label: t('ICON')
        }
      },
      {
        type: 'input',
        formItemProps: {
          name: 'alias',
          label: t('ALIAS'),
          rules: [{ required: true }]
        }
      },
      {
        type: 'input-number',
        formItemProps: {
          name: 'sort',
          label: t('COMMON:SORT'),
          rules: [{ required: true }]
        },
        inputNumberProps: {
          style: { width: '100%' }
        }
      },
      {
        type: 'switch',
        formItemProps: {
          name: 'isOpen',
          label: t('IS.OUTER.LINK')
        }
      },
      {
        type: 'text-area',
        colProps: { span: 24 },
        formItemProps: {
          name: 'remark',
          label: t('COMMON:REMARK')
        },
        textAreaProps: {
          rows: 3
        }
      }
    ])
  }
}
