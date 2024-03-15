import type { PropsWithChildren } from 'react'

interface PortalLayoutTransitionProps extends PropsWithChildren {
  className?: string
}

export function PortalLayoutTransition(props: PortalLayoutTransitionProps) {
  const { location } = useRouterState()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.state.key}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 1
        }}
        transition={{
          type: 'tween',
          duration: 0.5
        }}
        className={props.className}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  )
}
