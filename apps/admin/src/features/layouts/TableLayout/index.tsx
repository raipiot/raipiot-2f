import type { ModalProps } from 'antd'
import { type HTMLAttributes, type PropsWithChildren, type ReactNode } from 'react'

import type { RpSearchBarProps } from '@/shared/components/RpSearchBar'

import { TableLayoutPropsContext } from './context'
import type { HeaderProps } from './Header'
import Header from './Header'
import Modal from './Modal'
import type { TableProps } from './Table'
import Table from './Table'

export interface TableLayoutProps<T, D> extends PropsWithChildren {
  containerProps?: HTMLAttributes<HTMLDivElement>
  /**
   * 头部 Props
   */
  headerProps?: HeaderProps
  /**
   *
   */
  searchBarProps?: RpSearchBarProps<D>
  /**
   * 自定义渲染搜索区域
   */
  renderSearch?: ReactNode
  /**
   * 表格 Props
   */
  tableProps?: TableProps<T>
  /**
   * 自定义渲染表格
   */
  renderTable?: ReactNode
  /**
   * 弹窗 Props
   */
  modalProps?: ModalProps
  /**
   * 自定义渲染弹窗
   */
  renderModal?: ReactNode
  /**
   * 刷新加载状态
   */
  refreshLoading?: boolean
  /**
   * 批量删除加载状态
   */
  batchDeleteLoading?: boolean
  /**
   * 刷新事件
   */
  onRefresh?: () => void
  /**
   * 批量删除事件
   */
  onBatchDelete?: (selectedRowKeys: React.Key[]) => void
  /**
   * 表格批量操作区域
   */
  renderTableBatchOpeate?: ReactNode
  /**
   * 表格操作区域
   */
  renderTableOpeate?: ReactNode
}

export function TableLayout<
  T extends Record<string, any> = any,
  D extends Record<string, any> = any
>(props: TableLayoutProps<T, D>) {
  const {
    children,
    headerProps,
    searchBarProps,
    tableProps,
    modalProps,
    renderSearch,
    renderTable,
    renderModal,
    containerProps
  } = props

  return (
    <TableLayoutPropsContext.Provider value={props}>
      <div {...containerProps}>
        <Header {...headerProps} />
        {renderSearch ?? (
          <div className="mb-2 sm:mb-4">
            <ACard>
              <RpSearchBar {...searchBarProps} />
            </ACard>
          </div>
        )}
        {renderTable ?? <Table {...tableProps} />}
        {children}
        {renderModal ?? <Modal {...modalProps} />}
      </div>
    </TableLayoutPropsContext.Provider>
  )
}
