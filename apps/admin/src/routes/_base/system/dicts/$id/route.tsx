import type { DictValuePageDto } from '@raipiot-2f/api'

import { systemDictValuesQueryOptions } from '@/features/system/dicts'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/dicts/$id')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICTS'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: async ({ params }) => {
    const { id } = params
    if (!id) {
      throw redirect({ to: '/404' })
    }
    await queryClient.ensureQueryData(
      systemDictValuesQueryOptions(
        PageUtils.initParams<DictValuePageDto>({
          parentId: id
        })
      )
    )
  }
})
