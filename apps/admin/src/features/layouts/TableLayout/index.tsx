import type { ModalProps, TableProps } from 'antd'
import { type HTMLAttributes, type PropsWithChildren, type ReactNode } from 'react'

import { TableLayoutContext } from './context'
import type { HeaderProps } from './Header'
import Header from './Header'
import Modal from './Modal'
import Table from './Table'

interface TableLayoutProps<T extends object = any>
  extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  className?: string
  /**
   * 自定义渲染操作区域
   */
  renderOperate?: ReactNode | (() => ReactNode)
  /**
   * 头部 Props
   */
  headerProps?: HeaderProps
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
}

export function TableLayout<T extends object = any>(props: TableLayoutProps<T>) {
  const {
    children,
    renderOperate,
    headerProps,
    tableProps,
    modalProps,
    renderSearch,
    renderTable,
    renderModal,
    ...divProps
  } = props

  const containerRef = useRef(null)

  return (
    <TableLayoutContext.Provider value={containerRef}>
      <div
        {...divProps}
        ref={containerRef}
        className="h-[calc(100vh-240px)] sm:h-[calc(100vh-176px)]"
      >
        <Header {...{ renderOperate, ...headerProps }} />
        {renderSearch ?? (
          <ACard rootClassName="!mb-2">
            <RpSearchBar />
          </ACard>
        )}
        {renderTable ?? <Table {...tableProps} />}
        {children}
        {renderModal ?? <Modal {...modalProps} />}
      </div>
    </TableLayoutContext.Provider>
  )
}
