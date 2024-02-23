import type { PaginationProps } from 'antd'

import { PageDto } from '@/api/common.type'

export const usePagination = <T extends PageDto>(initialValue?: T) => {
  const { t } = useTranslation()
  const response = useResponsive()

  const [pageParams, setPageParams] = useImmer(initialValue ?? new PageDto())

  const setPagination = (page: number, pageSize: number) =>
    setPageParams((draft) => {
      draft.current = page
      draft.size = pageSize
    })

  const genPagination = ({ total }: { total: number }) => ({
    pageParams: {
      current: pageParams.current,
      pageSize: pageParams.size
    },
    onChange: setPagination,
    size: (response.sm ? 'default' : 'small') as PaginationProps['size'],
    rootClassName: '!mb-0',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (totalPage: number) => t('SHOW.TOTAL', { total: totalPage }),
    total
  })

  return {
    pageParams,
    setPageParams,
    genPagination
  }
}
