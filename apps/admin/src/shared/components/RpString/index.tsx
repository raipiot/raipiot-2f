import rpWithSkeleton from '../RpWithSkeleton'

export interface RpStringProps {
  value?: any
}

const RpString = rpWithSkeleton<RpStringProps>((props) => {
  const { value } = props
  return <span title={value}>{value}</span>
})
export default RpString
