import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import Placeholder from '../components/Placeholder'
import SectionTitle from '../components/SectionTitle'

const articles = [
  {
    date: '12 février 2026',
    title: 'Synelis renforce sa présence en Bretagne',
    excerpt: "Le groupe poursuit son développement avec l'ouverture d'une nouvelle agence à Vannes.",
  },
  {
    date: '28 janvier 2026',
    title: 'Partenariat fibre optique avec Orange',
    excerpt: 'CAUM signe un accord-cadre pour le déploiement FTTH dans le Grand Sud-Ouest.',
  },
  {
    date: '15 janvier 2026',
    title: 'Certification MASE renouvelée',
    excerpt: 'ETPM et Restech obtiennent le renouvellement de leur certification sécurité.',
  },
]

function NewsCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 16,
          overflow: 'hidden',
          transition: 'box-shadow 0.3s',
          boxShadow: hovered ? '0 8px 20px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        <Placeholder aspectRatio="16/9" text="[Photo actu]" />
        <div style={{ padding: 24 }}>
          <p style={{ fontSize: 12, color: '#999', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
            {item.date}
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              fontWeight: 700,
              color: '#111',
              marginBottom: 8,
              lineHeight: 1.4,
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: '#666',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {item.excerpt}
          </p>
          <Link
            to="/actualites"
            style={{
              fontSize: 14,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              marginTop: 12,
              display: 'inline-block',
            }}
          >
            Lire →
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default function News() {
  return (
    <section style={{ background: '#F5F5F5', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle title="Actualités" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="news-grid"
        >
          {articles.map((item, i) => (
            <NewsCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link
            to="/actualites"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
            }}
          >
            Toutes les actualités →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .news-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
