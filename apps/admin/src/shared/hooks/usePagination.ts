import type { PageDto } from '@raipiot-2f/api'
import type { TablePaginationConfig } from 'antd'
import { createElement } from 'react'

interface PaginationParams<T> {
  /**
   * 总页数
   */
  total?: number
  /**
   * 事件：预加载
   */
  onPrefetch?: (values: T) => void
}

export const usePagination = <T extends PageDto>(initialValue?: Partial<T>) => {
  const { t } = useTranslation()
  const [isPending, startTransition] = useTransition()
  const response = useResponsive()

  const [pageParams, setPageParams] = useState(PageUtils.initParams<T>(initialValue))

  const onPaginationChange = (page: number, pageSize: number) =>
    startTransition(() =>
      setPageParams(
        PageUtils.mergeParams(pageParams, {
          current: page,
          size: pageSize
        })
      )
    )

  const pagination = (params?: PaginationParams<T>): TablePaginationConfig => ({
    total: params?.total,
    pageSize: pageParams.size,
    current: pageParams.current,
    onChange: onPaginationChange,
    size: response.sm ? 'default' : 'small',
    rootClassName: '!mb-0',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (totalPage: number) =>
      totalPage
        ? t('SHOW.TOTAL', {
            count: totalPage
          })
        : null,
    pageSizeOptions: ['20', '30', '50', '100'],
    itemRender: (page, type, originalElement) => {
      if (type === 'page') {
        return createElement(
          'div',
          {
            onMouseEnter: () => params?.onPrefetch?.({ ...pageParams, current: page })
          },
          originalElement
        )
      }
      return originalElement
    }
  })

  return {
    pageParams,
    setPageParams,
    pagination,
    isPending,
    startTransition
  }
}
