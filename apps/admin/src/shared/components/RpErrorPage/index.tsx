export interface RpErrorPageProps {
  title?: string
  subTitle?: string
  icon?: any
}

const RpErrorPage = memo<RpErrorPageProps>((props) => (
  <div className="absolute inset-0 m-auto flex items-center justify-center">
    <AResult
      icon={props.icon}
      title={props.title}
      subTitle={props.subTitle}
      extra={
        <Link to="/">
          <RpButton
            type="primary"
            variant="back"
          />
        </Link>
      }
    />
  </div>
))
export default RpErrorPage
