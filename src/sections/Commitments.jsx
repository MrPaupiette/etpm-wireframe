import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'

const commitments = [
  {
    title: 'Sécurité',
    desc: 'Certification MASE, plan de prévention, culture sécurité quotidienne.',
    link: '/notre-groupe/engagements',
  },
  {
    title: 'Environnement',
    desc: "Réduction d'impact, sobriété énergétique, recyclage des déchets de chantier.",
    link: '/notre-groupe/engagements',
  },
  {
    title: 'Humain',
    desc: 'Formation continue, mobilité interne, bien-être au travail.',
    link: '/notre-groupe/engagements',
  },
]

const certifications = [
  '[Logo MASE]',
  '[Logo ISO 9001]',
  '[Logo Qualibat]',
  '[Logo CEFRI]',
  '[Logo APSAD]',
  '[Logo Qualifelec]',
]

export default function Commitments() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionTitle title="Nos engagements" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 48,
            maxWidth: 1000,
            margin: '0 auto',
          }}
          className="commitments-grid"
        >
          {commitments.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.1}>
              <div style={{ textAlign: 'center', maxWidth: 320, margin: '0 auto' }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: '#E8E8E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: 14,
                    margin: '0 auto 20px',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  Icône
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#111',
                    marginBottom: 12,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
                  {item.desc}
                </p>
                <Link
                  to={item.link}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: '#111',
                    textDecoration: 'underline',
                    textUnderlineOffset: 3,
                  }}
                >
                  En savoir plus →
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Certifications */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 60,
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert}
              style={{
                background: '#F0F0F0',
                borderRadius: 8,
                padding: '16px 24px',
                color: '#999',
                fontSize: 12,
                fontFamily: 'var(--font-sans)',
              }}
            >
              {cert}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .commitments-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
