import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: Login
})

function Login() {
  return <div>Login</div>
}
