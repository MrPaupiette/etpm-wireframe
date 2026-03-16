import { motion } from 'framer-motion'
import styles from './ProcessTimeline.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function ProcessTimeline({ steps }) {
  return (
    <motion.div
      className={styles.timeline}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
    >
      {steps.map((step, i) => (
        <motion.div key={i} className={styles.step} variants={fadeIn}>
          <div className={styles.indicator}>
            <span className={styles.number}>{step.number}</span>
            {i < steps.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
