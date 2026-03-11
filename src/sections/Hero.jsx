import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Placeholder from '../components/Placeholder'

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Placeholder
          height="100%"
          text="[Vidéo/Photo — équipe terrain + chantier infrastructure]"
        />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#fff',
          padding: '0 24px',
          maxWidth: 900,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            textTransform: 'uppercase',
            letterSpacing: 4,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 20,
          }}
        >
          GROUPE SYNELIS
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Rendre possible la vie collective
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 19,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 40,
            lineHeight: 1.5,
          }}
        >
          6 filiales · 700 collaborateurs · 25 agences — Infrastructures, réseaux, énergie
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/nos-activites" className="btn-pill btn-pill-light">
            Nos activités
          </Link>
          <Link to="/nous-rejoindre" className="btn-pill btn-pill-outline">
            Nous rejoindre
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
