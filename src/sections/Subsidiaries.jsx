import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import Placeholder from '../components/Placeholder'
import SectionTitle from '../components/SectionTitle'

const subsidiaries = [
  { name: 'ETPM', job: "Réseaux d'énergie & éclairage public", zone: 'Toulouse · Bordeaux · Pays Basque', link: '/nos-filiales/etpm' },
  { name: 'HP Elec', job: 'Caténaire & électrification ferroviaire', zone: 'National', link: '/nos-filiales/hpelec' },
  { name: 'CAUM', job: 'Fibre optique & télécommunications', zone: 'Grand Sud-Ouest & National', link: '/nos-filiales/caum' },
  { name: 'FCTP', job: 'Génie civil & réseaux de chaleur', zone: 'Île-de-France', link: '/nos-filiales/fctp' },
  { name: 'Restech', job: 'Multi-réseaux Bretagne', zone: 'Morbihan · Finistère', link: '/nos-filiales/restech' },
  { name: 'E2R', job: 'Réseaux & énergie', zone: 'La Réunion', link: '/nos-filiales/e2r' },
]

function SubsidiaryCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.08} direction="right">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? '#EBEBEB' : '#F5F5F5',
          borderRadius: 16,
          padding: 24,
          borderTop: `${hovered ? 6 : 3}px solid #333`,
          transition: 'all 0.3s',
        }}
      >
        <h4
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 700,
            color: '#111',
            marginBottom: 4,
          }}
        >
          {item.name}
        </h4>
        <p style={{ fontSize: 14, color: '#666', marginBottom: 4 }}>{item.job}</p>
        <p style={{ fontSize: 12, color: '#999', marginBottom: 12 }}>{item.zone}</p>
        <Link
          to={item.link}
          style={{
            fontSize: 13,
            color: '#111',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          Découvrir →
        </Link>
      </div>
    </AnimateOnScroll>
  )
}

export default function Subsidiaries() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle title="Nos filiales" subtitle="Un groupe, six expertises complémentaires" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'start',
          }}
          className="subsidiaries-layout"
        >
          {/* Left: Map placeholder */}
          <AnimateOnScroll>
            <Placeholder
              aspectRatio="4/3"
              text="[Carte de France — 25 implantations, 6 filiales]"
            />
          </AnimateOnScroll>

          {/* Right: Cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
            }}
            className="subsidiaries-cards"
          >
            {subsidiaries.map((item, i) => (
              <SubsidiaryCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .subsidiaries-layout { grid-template-columns: 1fr !important; }
          .subsidiaries-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
