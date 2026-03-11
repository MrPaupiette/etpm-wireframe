import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'LE GROUPE',
    links: [
      { label: 'Notre mission', path: '/notre-groupe/mission' },
      { label: 'Notre histoire', path: '/notre-groupe/histoire' },
      { label: 'Notre équipe', path: '/notre-groupe/equipe' },
      { label: 'Nos engagements', path: '/notre-groupe/engagements' },
      { label: 'Nos activités', path: '/nos-activites' },
      { label: 'Nos réalisations', path: '/nos-activites' },
    ],
  },
  {
    title: 'NOS FILIALES',
    links: [
      { label: 'ETPM', path: '#', external: true },
      { label: 'HP Elec', path: '#', external: true },
      { label: 'CAUM', path: '#', external: true },
      { label: 'FCTP', path: '#', external: true },
      { label: 'Restech', path: '#', external: true },
      { label: 'E2R', path: '#', external: true },
    ],
  },
  {
    title: 'NOUS REJOINDRE',
    links: [
      { label: 'Alternance BTP', path: '/nous-rejoindre/alternance' },
      { label: 'Nos métiers', path: '/nous-rejoindre/metiers' },
      { label: 'Nos offres', path: '/nous-rejoindre/offres' },
      { label: 'Candidature spontanée', path: '/nous-rejoindre/candidature' },
    ],
  },
  {
    title: 'GUIDES & RESSOURCES',
    links: [
      { label: 'Guide AIPR', path: '/ressources/aipr' },
      { label: 'Autorisation de voirie', path: '/ressources/autorisation-voirie' },
      { label: 'Réglementation DT-DICT', path: '/ressources/dt-dict' },
      { label: 'Certification MASE', path: '/ressources/certification-mase' },
      { label: 'Prévention chantier', path: '/ressources/prevention-chantier' },
      { label: 'Smart grid', path: '/ressources/smart-grid' },
    ],
  },
]

const linkStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'rgba(255,255,255,0.6)',
  textDecoration: 'none',
  display: 'block',
  marginBottom: 12,
  transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '80px 0 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
          }}
          className="footer-grid"
        >
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  color: '#fff',
                  marginBottom: 24,
                  fontWeight: 600,
                }}
              >
                {col.title}
              </h4>
              {col.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = '#fff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = '#fff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        {/* Separator */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '40px 0' }} />

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            © Synelis 2026 — L'énergie nous unit
          </span>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
            <Link to="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</Link>
            {' | '}
            <Link to="/contact" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Contact</Link>
          </span>
        </div>

        {/* Sub-bottom */}
        <p
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            marginTop: 24,
          }}
        >
          ETPM, HP Elec, CAUM, FCTP, E2R, Restech — filiales du Groupe Synelis
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
