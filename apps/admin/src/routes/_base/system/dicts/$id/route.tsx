import type { SystemDictConfigPageDto } from '@raipiot-2f/api'

const t = i18n.getFixedT(null, 'ROUTER')

export const Route = createFileRoute('/_base/system/dicts/$id')({
  staticData: {
    title: () => t('SYSTEM.SYSTEM.DICTS.CONFIG'),
    icon: <MaterialSymbolsBook2Rounded />
  },
  loader: async ({ params }) => {
    const { id } = params
    if (!id) {
      throw redirect({ to: '/404' })
    }
    await Promise.all([
      queryClient.ensureQueryData(
        DictConfigs.listQueryOptions(
          PageUtils.initParams<SystemDictConfigPageDto>({
            parentId: id
          })
        )
      ),
      queryClient.ensureQueryData(Dicts.detailQueryOptions(id))
    ])
  }
})
