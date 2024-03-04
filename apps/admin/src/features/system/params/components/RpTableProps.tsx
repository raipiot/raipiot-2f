import type { Page } from '@raipiot-2f/api'
import type { TablePaginationConfig, TableProps } from 'antd/lib'
import type { SetStateAction } from 'react'

export interface RpTableProps<T = any> extends TableProps {
  rawData: Page<T>
  setPageParams: React.Dispatch<
    SetStateAction<{ current: number; size: number } & Record<string, any>>
  >
  pageParams: { current: number; size: number }
}

const RpTable = forwardRef<any, RpTableProps>((props, ref) => {
  const { t } = useTranslation()
  const response = useResponsive()

  const pagination: TablePaginationConfig = {
    onChange: (pageNumber: number, pageSize: number) => {
      props.setPageParams((v) => ({
        ...v,
        current: pageNumber,
        size: pageSize
      }))
    },
    size: response.sm ? 'default' : 'small',
    rootClassName: '!mb-0',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (totalPage: number) => t('SHOW.TOTAL', { total: totalPage }),
    total: props.rawData.total,
    current: props.pageParams.current,
    pageSize: props.pageParams.size
  }

  return (
    <ATable
      rowSelection={{
        type: 'checkbox',
        columnWidth: 20
      }}
      dataSource={props.rawData.records}
      {...props}
      scroll={{
        scrollToFirstRowOnChange: false,
        x: 800,
        y: props.rawData.records.length < props.pageParams.size ? undefined : 500,
        ...props.scroll
      }}
      pagination={props.pagination === false ? false : Object.assign(pagination, props.pagination)}
      ref={ref}
    />
  )
})
export default RpTable
