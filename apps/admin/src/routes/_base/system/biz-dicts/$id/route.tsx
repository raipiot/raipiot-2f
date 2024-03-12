import type { BizDictValuePageDto } from '@raipiot-2f/api'

import { bizDictQueryOptions, bizDictValuesQueryOptions } from '@/features/system/biz-dicts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/biz-dicts/$id')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICTS.CONFIG'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: async ({ params }) => {
    const { id } = params
    if (!id) {
      throw redirect({ to: '/404' })
    }
    await queryClient.ensureQueryData(
      bizDictValuesQueryOptions(
        PageUtils.initParams<BizDictValuePageDto>({
          parentId: id
        })
      )
    )
    await queryClient.ensureQueryData(bizDictQueryOptions(id))
  }
})
