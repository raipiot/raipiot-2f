import FullScreenButton from './FullScreenButton'
import RefreshButton from './RefreshButton'
import RowGapButton from './RowGapButton'

export default function TableTitle() {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between">
      <AButton>{t('DELETE')}</AButton>

      <div className="flex items-center space-x-4">
        <RefreshButton />
        <RowGapButton />
        <FullScreenButton />
      </div>
    </div>
  )
}
