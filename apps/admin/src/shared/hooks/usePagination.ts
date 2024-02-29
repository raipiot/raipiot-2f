import type { PageDto } from '@raipiot-2f/api'
import type { PaginationProps, TablePaginationConfig } from 'antd'

type CanOmitDefaultPageParams<T> = Omit<T, keyof PageDto> & Partial<PageDto>

export const usePagination = <T extends PageDto>(initialValue?: CanOmitDefaultPageParams<T>) => {
  const { t } = useTranslation()
  const response = useResponsive()

  const [pageParams, setPageParams] = useImmer<T>(PageUtils.formatParams<T>(initialValue))

  const setPagination = (page: number, pageSize: number) =>
    setPageParams((draft) => {
      draft.current = page
      draft.size = pageSize
    })

  const pagination: TablePaginationConfig = {
    current: pageParams.current,
    onChange: setPagination,
    size: (response.sm ? 'default' : 'small') as PaginationProps['size'],
    rootClassName: '!mb-0',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (totalPage: number) => t('SHOW.TOTAL', { total: totalPage })
  }

  return {
    pageParams,
    setPageParams,
    pagination
  }
}
