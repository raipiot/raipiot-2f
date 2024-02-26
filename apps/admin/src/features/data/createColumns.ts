import type { ColumnType } from 'antd/es/table'
import type { DataIndex } from 'rc-table/lib/interface'

import type { RpBooleanProps } from '@/shared/components/RpBoolean'
import type { RpTagStringProps } from '@/shared/components/RpTagString'

interface CustomOptions {
  type?: 'string' | 'tagString' | 'dateString' | 'boolean'
  skeleton?: boolean
  tagStringProps?: Pick<RpTagStringProps, 'copyable'>
  booleanProps?: Pick<RpBooleanProps, 'type'>
}

interface RpColumnType<T> extends Omit<ColumnType<T>, 'dataIndex'> {
  dataIndex?: T extends object ? keyof T : DataIndex
  custom?: CustomOptions
}

interface RpColumnGroupType<T> extends Omit<RpColumnType<T>, 'dataIndex'> {
  children: RpColumnsType<T>
}

type RpColumnsType<T> = (RpColumnGroupType<T> | RpColumnType<T>)[]

export const createColumns = <T>(columns: RpColumnsType<T>) => {
  const getRender = (column: RpColumnType<T>) => {
    const { custom } = column
    const { type, skeleton, tagStringProps, booleanProps } = custom ?? {}
    switch (type) {
      case 'string':
        return (value: any) => RpString({ value })
      case 'tagString':
        return (value: any) => RpTagString({ value, skeleton, copyable: tagStringProps?.copyable })
      case 'dateString':
        return (value: any) => RpDateString({ value, skeleton })
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
