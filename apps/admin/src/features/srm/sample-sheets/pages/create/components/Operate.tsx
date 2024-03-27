export default function Operate() {
  return (
    <APopover
      trigger="click"
      content={
        <AFlex
          vertical
          gap={4}
        >
          <Link
            className="flex items-center gap-1 !text-gray-800 hover:!text-blue-500 dark:!text-white"
            to="/srm/sample-sheets/create/origin"
          >
            <MaterialSymbolsSourceNotesRounded />
            <span className="relative top-px">寻源创建</span>
          </Link>
          <Link
            className="flex items-center gap-1 !text-gray-800 hover:!text-blue-500 dark:!text-white"
            to="/srm/sample-sheets/create/handmade"
          >
            <MaterialSymbolsRebaseEditOutlineSharp />
            <span className="relative top-px">手动创建</span>
          </Link>
        </AFlex>
      }
      arrow={false}
      placement="bottom"
    >
      <RpButton variant="create" />
    </APopover>
  )
}
