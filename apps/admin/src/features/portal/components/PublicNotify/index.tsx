interface PublicNotifyProps {
  title: string
  onShowMore?: () => void
  items: string[]
}

export default function PublicNotify({ title, onShowMore, items }: PublicNotifyProps) {
  const { t } = useTranslation(['PORTAL'])
  return (
    <div className="group min-h-[300px] bg-white p-8 md:p-4 dark:bg-gray-900">
      <div className="text-md flex justify-between font-semibold">
        <div className="flex items-center gap-1">
          <MaterialSymbolsSpeakerNotesOutlineRounded className="text-blue-600" />
          <span>{title}</span>
        </div>
        <span
          className="cursor-pointer text-blue-500 md:hidden md:group-hover:inline-block"
          onClick={onShowMore}
        >
          {t('SEE.MORE')}
        </span>
      </div>
      <div className="flex flex-col pt-4">
        {items.map((text, idx) => (
          <Link
            className="space-y-2 !text-sm !text-inherit"
            key={idx}
            to="/"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}
