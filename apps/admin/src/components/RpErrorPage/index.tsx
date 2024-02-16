interface RpErrorPageProps {
  title?: string
  subTitle?: string
  icon?: any
}

const RpErrorPage = memo<RpErrorPageProps>((props) => (
  <div className="flex h-full items-center justify-center">
    <AResult
      icon={props.icon}
      title={props.title}
      subTitle={props.subTitle}
      extra={
        <Link to="/">
          <AButton type="primary">返回</AButton>
        </Link>
      }
    />
  </div>
))
export default RpErrorPage
