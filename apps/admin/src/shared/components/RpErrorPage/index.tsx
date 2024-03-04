interface RpErrorPageProps {
  title?: string
  subTitle?: string
  icon?: any
}

const RpErrorPage = memo<RpErrorPageProps>((props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="absolute inset-0 m-auto flex items-center justify-center">
      <AResult
        icon={props.icon}
        title={props.title}
        subTitle={props.subTitle}
        extra={
          <AButton
            onClick={() =>
              navigate({
                to: '/dashboard'
              })
            }
            type="primary"
          >
            {t('BACK')}
          </AButton>
        }
      />
    </div>
  )
})
export default RpErrorPage
