import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import styles from './Counter.module.css'

export default function Counter({ value, label, suffix = '', light = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(Math.round(v)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <div ref={ref} className={`${styles.counter} ${light ? styles.light : ''}`}>
      <span className={styles.value}>
        {display}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
