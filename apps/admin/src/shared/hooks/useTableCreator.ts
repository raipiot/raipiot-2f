import type { ColumnType } from 'antd/es/table'
import type { DataIndex } from 'rc-table/lib/interface'

import type { RpBooleanProps } from '@/shared/components/RpBoolean'
import type { RpTagStringProps } from '@/shared/components/RpTagString'

interface CustomOptions {
  type?: 'string' | 'tagString' | 'dateString' | 'boolean' | 'link'
  skeleton?: boolean
  ellipsis?: boolean
  tagStringProps?: Pick<RpTagStringProps, 'copyable'>
  booleanProps?: Pick<RpBooleanProps, 'type'>
}

export interface RpColumnType<T> extends Omit<ColumnType<T>, 'dataIndex'> {
  dataIndex?: T extends object ? keyof T : DataIndex
  custom?: CustomOptions
}

export interface RpColumnGroupType<T> extends Omit<RpColumnType<T>, 'dataIndex'> {
  children: RpColumnsType<T>
}

type RpColumnsType<T> = (RpColumnGroupType<T> | RpColumnType<T>)[]

/**
 * 生成表格列
 */
const createColumns = <T>(columns: RpColumnsType<T>) => {
  const getRender = (column: RpColumnType<T>) => {
    const { custom } = column
    const { type, tagStringProps, booleanProps } = custom ?? {}
    switch (type) {
      case 'string':
        return (value: any) => RpString({ value })
      case 'tagString':
        return (value: any) => RpTagString({ value, copyable: tagStringProps?.copyable })
      case 'dateString':
        return (value: any) => RpDateString({ value })
      case 'boolean':
        return (value: any) => RpBoolean({ value, type: booleanProps?.type })
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
        ...column
      }) as ColumnType<T>
  )
}

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

  return {
    createActions,
    createColumns
  }
}
