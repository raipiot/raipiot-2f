import type { PageDto } from '@raipiot-2f/api'
import type { TablePaginationConfig } from 'antd'
import { createElement } from 'react'

import { systemDictsQueryOptions } from '@/features/system/dicts'

export const usePagination = <T extends PageDto>(initialValue?: Partial<T>) => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
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

  const pagination: TablePaginationConfig = {
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
            onMouseEnter: () =>
              queryClient.prefetchQuery(systemDictsQueryOptions({ ...pageParams, current: page }))
          },
          originalElement
        )
      }
      return originalElement
    }
  }

  return {
    pageParams,
    setPageParams,
    pagination,
    isPending,
    startTransition
  }
}
