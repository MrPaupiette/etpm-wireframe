import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import Placeholder from '../components/Placeholder'
import SectionTitle from '../components/SectionTitle'

const cards = [
  {
    title: 'Alternance & apprentissage BTP',
    desc: "Formez-vous aux métiers des travaux publics et de l'énergie dans l'une de nos 6 filiales.",
    cta: '/nous-rejoindre/alternance',
    image: '[Photo métier — alternance terrain]',
  },
  {
    title: 'Carrières fibre optique',
    desc: "La fibre recrute : techniciens, chefs d'équipe, conducteurs de travaux.",
    cta: '/nous-rejoindre/carrieres-fibre',
    image: '[Photo — technicien fibre]',
  },
  {
    title: 'Carrières travaux publics',
    desc: "Du terrassement à l'éclairage public, trouvez votre voie dans les TP.",
    cta: '/nous-rejoindre/carrieres-tp',
    image: '[Photo — chantier VRD]',
  },
]

function JoinCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.15} direction="left">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'flex',
          transition: 'box-shadow 0.3s',
          boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.03)',
        }}
        className="join-card"
      >
        <div style={{ width: '40%', flexShrink: 0 }} className="join-card-image">
          <Placeholder height="100%" text={item.image} />
        </div>
        <div
          style={{
            width: '60%',
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          className="join-card-content"
        >
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 28px)',
              color: '#111',
              marginBottom: 12,
              fontWeight: 400,
            }}
          >
            {item.title}
          </h3>
          <p style={{ fontSize: 16, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
            {item.desc}
          </p>
          <div>
            <Link to={item.cta} className="btn-pill btn-pill-dark">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default function JoinUs() {
  return (
    <section style={{ background: '#F5F5F5', padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle title="Rejoignez l'aventure" subtitle="L'énergie d'un collectif engagé" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {cards.map((item, i) => (
            <JoinCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/nous-rejoindre" className="btn-pill btn-pill-dark">
            Voir toutes nos offres
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .join-card { flex-direction: column !important; }
          .join-card-image { width: 100% !important; min-height: 200px; }
          .join-card-content { width: 100% !important; padding: 32px !important; }
        }
      `}</style>
    </section>
  )
}
