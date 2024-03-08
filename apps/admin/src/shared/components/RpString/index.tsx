import rpWithSkeleton from '../RpWithSkeleton'

interface RpStringProps {
  value?: any
}

const RpString = rpWithSkeleton((props: RpStringProps) => {
  const { value } = props

  return <span>{value}</span>
})
export default RpString
