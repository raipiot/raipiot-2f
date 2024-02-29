export default function LanguageButton() {
  const { menu } = useLanguageMenu()

  return (
    <ADropdown
      menu={menu}
      placement="bottom"
    >
      <div className="cursor-pointer text-lg">
        <MaterialSymbolsTranslateRounded />
      </div>
    </ADropdown>
  )
}
