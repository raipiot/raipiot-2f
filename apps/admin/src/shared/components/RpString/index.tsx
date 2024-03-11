import rpWithSkeleton from '../RpWithSkeleton'

export interface RpStringProps {
  value?: any
}

const RpString = rpWithSkeleton<RpStringProps>((props) => {
  const { value } = props
  return <span>{value}</span>
})
export default RpString
