import { dashboardQK } from './query-keys'

export const useDashboardQueryOptions = () =>
  queryOptions({
    queryKey: dashboardQK(),
    queryFn: () =>
      Promise.resolve({
        todo: [
          {
            id: 1,
            title: '待办事项1',
            count: 10,
            description: '文本标签文本标签'
          },
          {
            id: 2,
            title: '待办事项2',
            count: 10,
            description: '文本标签文本标签'
          },
          {
            id: 3,
            title: '待办事项3',
            count: 10,
            description: '文本标签文本标签'
          },
          {
            id: 4,
            title: '待办事项4',
            count: 10,
            description: '文本标签文本标签'
          },
          {
            id: 5,
            title: '待办事项5',
            count: 10,
            description: '文本标签文本标签'
          }
        ],
        notify: {
          systemInfo: [
            {
              id: 1,
              title: '供应商问题通知',
              timestamp: '2021-09-01 12:00:00',
              content:
                '尊敬的用户：您收到【常州三源光伏材料有限公司】关于询价单【RFX2024012400002&不同公司的需求申请单合并询价】的澄清提问【Q2024012500002】，请登录平台进行澄清回复！'
            }
          ],
          companyPublish: [
            {
              id: 2,
              title: '供应商问题通知2',
              timestamp: '2021-09-01 12:00:00',
              content:
                '尊敬的用户：您收到【常州三源光伏材料有限公司】关于询价单【RFX2024012400002&不同公司的需求申请单合并询价】的澄清提问【Q2024012500002】，请登录平台进行澄清回复！'
            }
          ],
          platformPublish: [
            {
              id: 3,
              title: '供应商问题通知3',
              timestamp: '2021-09-01 12:00:00',
              content:
                '尊敬的用户：您收到【常州三源光伏材料有限公司】关于询价单【RFX2024012400002&不同公司的需求申请单合并询价】的澄清提问【Q2024012500002】，请登录平台进行澄清回复！'
            }
          ],
          errorInfo: []
        }
      })
  })

export const useDashboardQuery = () => useQuery(useDashboardQueryOptions())

export const useDashboardSuspenseQuery = () => useSuspenseQuery(useDashboardQueryOptions())
