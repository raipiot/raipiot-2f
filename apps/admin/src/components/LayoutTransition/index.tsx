import type { PropsWithChildren } from 'react'

interface LayoutTransitionProps extends PropsWithChildren {
  className?: string
}

export function LayoutTransition(props: LayoutTransitionProps) {
  const router = useRouter()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.state.location.pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: 'tween',
          duration: 0.3
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
            opacity: 0
          }
        }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
