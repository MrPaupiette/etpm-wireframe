import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './PlaceholderPage.module.css'

export default function PlaceholderPage({ title }) {
  return (
    <motion.section
      className={styles.page}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>Page en construction</p>
        <Link to="/" className={styles.link}>
          ← Retour à l'accueil
        </Link>
      </div>
    </motion.section>
  )
}
