interface RpErrorPageProps {
  title?: string
  subTitle?: string
  icon?: any
}

const RpErrorPage = memo<RpErrorPageProps>((props) => {
  const { t } = useTranslation()
  return (
    <div className="absolute inset-0 m-auto flex items-center justify-center">
      <AResult
        icon={props.icon}
        title={props.title}
        subTitle={props.subTitle}
        extra={
          <Link to="/">
            <AButton type="primary">{t('BACK')}</AButton>
          </Link>
        }
      />
    </div>
  )
})
export default RpErrorPage
