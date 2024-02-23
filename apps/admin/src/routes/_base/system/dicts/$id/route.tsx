import { systemDictValuesQueryOptions } from '@/features/system/dicts'
import { queryClient } from '@/router'

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
        new DictValuePageDto({
          parentId: id
        })
      )
    )
  }
})
