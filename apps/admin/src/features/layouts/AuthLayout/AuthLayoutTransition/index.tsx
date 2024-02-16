import type { PropsWithChildren } from 'react'

interface AuthLayoutTransitionProps extends PropsWithChildren {
  className?: string
}

export function AuthLayoutTransition(props: AuthLayoutTransitionProps) {
  const { location } = useRouterState()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.state.key}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: 'tween',
          duration: 0.5
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 1
          }
        }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
