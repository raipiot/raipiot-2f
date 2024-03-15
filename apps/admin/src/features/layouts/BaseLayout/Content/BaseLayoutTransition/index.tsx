import type { PropsWithChildren } from 'react'

interface BaseLayoutTransitionProps extends PropsWithChildren {
  className?: string
}

export function BaseLayoutTransition(props: BaseLayoutTransitionProps) {
  const { location } = useRouterState()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
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
