import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'

const activities = [
  { icon: '⚡', title: 'Énergie', desc: 'Réseaux électriques HTA/BT, postes, maintenance', tags: ['ETPM', 'E2R', 'Restech'] },
  { icon: '📡', title: 'Numérique', desc: 'Fibre optique, télécoms, vidéosurveillance', tags: ['CAUM', 'E2R', 'Restech'] },
  { icon: '🚆', title: 'Ferroviaire', desc: 'Caténaire, sous-stations, signalisation', tags: ['HP Elec'] },
  { icon: '🔥', title: 'Chaleur urbaine', desc: 'Réseaux de chaleur, génie civil thermique', tags: ['FCTP'] },
]

function ActivityCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: '48px 32px',
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-6px)' : 'none',
          boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
          height: '100%',
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 20,
            fontWeight: 700,
            color: '#111',
            marginBottom: 8,
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: 15, color: '#666', marginBottom: 20, lineHeight: 1.5 }}>
          {item.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: '#F0F0F0',
                color: '#666',
                borderRadius: 20,
                padding: '4px 14px',
                fontSize: 12,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default function Activities() {
  return (
    <section style={{ background: '#F5F5F5', padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle title="Nos activités" subtitle="Concevoir, construire, maintenir — les réseaux essentiels" />

        {/* Grid 2×2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
          className="activities-grid"
        >
          {activities.map((item, i) => (
            <ActivityCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link
            to="/nos-activites"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
            }}
          >
            Explorer nos métiers →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .activities-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
