import type { LinkProps } from '@tanstack/react-router'
import type { ColumnType } from 'antd/es/table'
import type { DataIndex } from 'rc-table/lib/interface'

import type { RpBooleanProps } from '@/shared/components/RpBoolean'
import type { RpTagStringProps } from '@/shared/components/RpTagString'

interface CustomOptions<T> {
  type?: 'string' | 'tagString' | 'dateString' | 'boolean' | 'tooltipString' | 'link'
  skeleton?: boolean
  ellipsis?: boolean
  tagStringProps?: Pick<RpTagStringProps, 'copyable'>
  booleanProps?: Pick<RpBooleanProps, 'type'>
  linkProps?: LinkProps | ((value: any, record: T, index: number) => LinkProps)
  formatter?: (value: any) => any
}

export interface RpColumnType<T> extends Omit<ColumnType<T>, 'dataIndex'> {
  dataIndex?: T extends object ? keyof T : DataIndex
  custom?: CustomOptions<T>
}

export interface RpColumnGroupType<T> extends Omit<RpColumnType<T>, 'dataIndex'> {
  children: RpColumnsType<T>
}

type RpColumnsType<T> = (RpColumnGroupType<T> | RpColumnType<T>)[]

export const useTableCreator = <T>() => {
  const { t } = useTranslation()
  const response = useResponsive()

  /**
   * 生成操作列
   */
  const createActions = (config: RpColumnType<T>): RpColumnType<T> => ({
    title: t('ACTIONS'),
    key: 'actions',
    fixed: response.sm && 'right',
    ...config
  })

  /**
   * 生成表格列
   */
  const createColumns = (columns: RpColumnsType<T>) => {
    const getRender = (column: RpColumnType<T>) => {
      const { custom } = column
      const { type, tagStringProps, booleanProps, linkProps, formatter } = custom ?? {}
      switch (type) {
        case 'string':
          return (value: any) =>
            RpString({
              value: formatter?.(value) ?? value
            })
        case 'tagString':
          return (value: any) =>
            RpTagString({
              value: formatter?.(value) ?? value,
              copyable: tagStringProps?.copyable
            })
        case 'dateString':
          return (value: any) => RpDateString({ value: formatter?.(value) ?? value })
        case 'boolean':
          return (value: any) =>
            RpBoolean({ value: formatter?.(value) ?? value, type: booleanProps?.type })
        case 'tooltipString':
          return (value: any) =>
            createElement(
              ATooltip,
              { title: formatter?.(value) ?? value, placement: 'bottom' },
              formatter?.(value) ?? value
            )
        case 'link':
          return (value: any, record: T, index: number) =>
            createElement(
              Link,
              typeof linkProps === 'function' ? linkProps(value, record, index) : linkProps,
              formatter?.(value) ?? value
            )
        default:
          return undefined
      }
    }

    return columns.map(
      (column) =>
        ({
          width: 150,
          align: 'center',
          render: getRender(column),
          ellipsis: column.custom?.type === 'tooltipString' ? { showTitle: false } : undefined,
          ...column
        }) as ColumnType<T>
    )
  }

  return {
    createActions,
    createColumns
  }
}
