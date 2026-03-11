import { motion } from 'framer-motion'

export default function AnimateOnScroll({ children, delay = 0, direction = 'up', threshold = 0.15 }) {
  const directions = {
    up: { y: 40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  }

  const { x, y } = directions[direction] || directions.up

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  )
}
