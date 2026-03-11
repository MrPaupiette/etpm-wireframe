import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PlaceholderPage({ title = 'Page' }) {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#111',
            marginBottom: 16,
            fontWeight: 400,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 17,
            color: '#666',
            marginBottom: 32,
            fontFamily: 'var(--font-sans)',
          }}
        >
          Cette page est en cours de construction.
        </p>
        <Link to="/" className="btn-pill btn-pill-dark">
          Retour à l'accueil
        </Link>
      </motion.div>
    </section>
  )
}
