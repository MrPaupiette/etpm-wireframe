import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import KeyFigures from '../sections/KeyFigures'

const pillars = [
  {
    path: '/notre-groupe/mission',
    image: '[Photo — équipe terrain, gilets orange, esprit collectif]',
    title: 'Notre mission',
    text: "[1-2 phrases — pourquoi Synelis existe, ce qu’on rend possible — pousser KW : rendre possible la vie collective, mission service public]",
  },
  {
    path: '/notre-groupe/histoire',
    image: '[Photo — archives chantier historique ou montage avant/après]',
    title: 'Notre histoire',
    text: "[1-2 phrases — de Groupe Neys à Synelis, 60 ans d’évolution — pousser KW : groupe neys (210/mois), ex groupe neys]",
  },
  {
    path: '/notre-groupe/equipe',
    image: '[Photo — portraits direction + profils terrain, sourires, diversité]',
    title: 'Notre équipe',
    text: '[1-2 phrases — les visages du groupe, de la gouvernance au terrain — pousser : humain, collectif, proximité]',
  },
  {
    path: '/notre-groupe/engagements',
    image: '[Photo — chantier sécurisé, EPI, balisage, environnement]',
    title: 'Nos engagements',
    text: '[1-2 phrases — sécurité + environnement + humain, les 3 piliers — pousser KW : rse btp (70/mois), qse btp (30/mois)]',
  },
]

function PillarCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.12}>
      <Link
        to={item.path}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
            transition: 'box-shadow 0.3s',
            boxShadow: hovered
              ? '0 16px 40px rgba(0,0,0,0.1)'
              : '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          {/* Image */}
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                transition: 'transform 0.4s ease',
                transform: hovered ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              <Placeholder
                aspectRatio="16/10"
                text={item.image}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ padding: 32 }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 400,
                color: '#111',
                marginBottom: 12,
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: '#666',
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              {item.text}
            </p>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: '#111',
                textDecoration: 'underline',
                textUnderlineOffset: 3,
              }}
            >
              Découvrir →
            </span>
          </div>
        </div>
      </Link>
    </AnimateOnScroll>
  )
}

export default function NotreGroupe() {
  return (
    <main>
      {/* BLOC 1 — HERO COMPACT */}
      <section
        style={{
          minHeight: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Placeholder
            height="100%"
            text="[Photo — vue aérienne chantier ou siège social]"
          />
        </div>

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))',
            zIndex: 1,
          }}
        />

        {/* Content — aligned bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px 60px',
            width: '100%',
          }}
        >
          <Breadcrumb
            items={[
              { label: 'Accueil', path: '/' },
              { label: 'Notre Groupe' },
            ]}
          />
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Notre Groupe
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            [Accroche courte — présentation groupe en 1 phrase — pousser KW : groupe infrastructures, réseaux, Grand Sud-Ouest]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — LES 4 PILIERS */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {/* Intro text */}
          <AnimateOnScroll>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(17px, 2vw, 19px)',
                color: '#333',
                lineHeight: 1.8,
                textAlign: 'center',
                maxWidth: 700,
                margin: '0 auto 64px',
              }}
            >
              [Texte chapeau 2-3 phrases — ce qui définit Synelis : mission, histoire, équipe, engagements — ton : fierté sobre]
            </p>
          </AnimateOnScroll>

          {/* 2×2 Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 32,
            }}
            className="pillars-grid"
          >
            {pillars.map((item, i) => (
              <PillarCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .pillars-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 3 — CHIFFRES CLÉS COMPACT */}
      <KeyFigures variant="light" size="compact" />

      {/* BLOC 4 — CTA FILIALES */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                fontStyle: 'italic',
                color: '#666',
                lineHeight: 1.6,
                marginBottom: 32,
              }}
            >
              [Phrase de transition — un groupe, six expertises complémentaires — inviter à découvrir les filiales]
            </p>
            <Link to="/nos-filiales" className="btn-pill btn-pill-dark">
              Voir nos filiales
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
