interface RpErrorPageProps {
  title?: string
  icon?: any
}

const RpErrorPage = memo<RpErrorPageProps>((props) => (
  <div className="flex h-full items-center justify-center">
    <AResult
      icon={props.icon}
      title={props.title}
      extra={
        <Link to="/">
          <AButton>返回</AButton>
        </Link>
      }
    />
  </div>
))
export default RpErrorPage
