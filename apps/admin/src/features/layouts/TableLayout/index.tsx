import type { ModalProps } from 'antd'

import Header from './Header'

export interface RenderModal extends ModalProps {
  renderContent?: React.ReactNode
}

interface TableLayoutProps {
  /**
   * 顶部操作区域
   */
  renderOperate?: React.ReactNode
  /**
   * 头部区域
   */
  renderHeader?: React.ReactNode
  /**
   * 表格区域
   */
  renderTable?: React.ReactNode
  /**
   * 模态框区域
   */
  renderModal?: RenderModal
}

export function TableLayout(props: TableLayoutProps) {
  const { renderContent, ...modalProps } = props.renderModal ?? {}

  const { t } = useTranslation()

  return (
    <>
      <Header renderRight={props.renderOperate} />
      <ACard
        hoverable
        rootClassName="!cursor-default !h-[calc(100vh-216px)]"
      >
        {props.renderHeader && <ACard rootClassName="!mb-2">{props.renderHeader}</ACard>}
        {props.renderTable}
      </ACard>
      {props.renderModal && (
        <AModal
          okText={t('CONFIRM')}
          cancelText={t('CANCEL')}
          {...modalProps}
        >
          {renderContent}
        </AModal>
      )}
    </>
  )
}
