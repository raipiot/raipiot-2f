import type { ColumnType } from 'antd/es/table'
import { merge } from 'lodash-es'
import type { DataIndex } from 'rc-table/lib/interface'

import type { RpFieldProps } from '@/shared/components/RpField'
import RpField from '@/shared/components/RpField'

export interface RpColumnType<T> extends Omit<ColumnType<T>, 'dataIndex'> {
  dataIndex?: T extends object ? keyof T : DataIndex
  custom?: RpFieldProps | ((value?: any, record?: T, index?: number) => RpFieldProps)
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
      return (value: any, record: T, index: number) =>
        createElement(
          RpField,
          typeof custom === 'function' ? custom(value, record, index) : merge(custom, { value })
        )
    }

    return columns.map((column) => {
      const render = getRender(column)
      const { custom } = column
      const ellipsis = {
        showTitle: !(typeof custom === 'function' ? custom().tooltip : custom?.tooltip)
      }
      return {
        width: 150,
        align: 'center',
        render,
        ellipsis,
        ...column
      } as ColumnType<T>
    })
  }

  return {
    createActions,
    createColumns
  }
}
