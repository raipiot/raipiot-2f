import type { PageDto } from '@raipiot-2f/api'
import type { PaginationProps, TablePaginationConfig } from 'antd'

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

  const pagination: TablePaginationConfig = {
    pageSize: pageParams.size,
    current: pageParams.current,
    onChange: onPaginationChange,
    size: (response.sm ? 'default' : 'small') as PaginationProps['size'],
    rootClassName: '!mb-0',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (totalPage: number) =>
      totalPage
        ? t('SHOW.TOTAL', {
            total: totalPage
          })
        : null
  }

  const onSearch = <D extends Record<string, any>>(values?: D) =>
    startTransition(() => setPageParams(PageUtils.mergeParams(pageParams, values)))

  return {
    pageParams,
    setPageParams,
    pagination,
    onSearch,
    isPending,
    startTransition
  }
}
