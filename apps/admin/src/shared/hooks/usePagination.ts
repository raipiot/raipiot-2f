import type { PageDto } from '@raipiot-2f/api'
import type { PaginationProps, TablePaginationConfig } from 'antd'

export const usePagination = <T extends PageDto>(initialValue?: Partial<T>) => {
  const { t } = useTranslation()
  const response = useResponsive()

  const [pageParams, setPageParams] = useState(PageUtils.initParams<T>(initialValue))

  const onPaginationChange = (page: number, pageSize: number) =>
    setPageParams(PageUtils.mergeParams(pageParams, { current: page, size: pageSize }))

  const pagination: TablePaginationConfig = {
    pageSize: pageParams.size,
    current: pageParams.current,
    onChange: onPaginationChange,
    size: (response.sm ? 'default' : 'small') as PaginationProps['size'],
    rootClassName: '!mb-0',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (totalPage: number) => (totalPage ? t('SHOW.TOTAL', { total: totalPage }) : null)
  }

  return {
    pageParams,
    setPageParams,
    pagination
  }
}
