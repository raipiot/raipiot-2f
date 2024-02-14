import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/signup')({
  component: Signup
})

function Signup() {
  return <div>Signup</div>
}