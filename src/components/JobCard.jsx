import { useState } from 'react'

export default function JobCard({ title, filiale, location, contractType, externalUrl }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        transition: 'box-shadow 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.07)' : '0 1px 4px rgba(0,0,0,0.03)',
      }}
    >
      <div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 6 }}>
          {title}
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#666' }}>
          {location} &middot; {contractType} &middot; {filiale}
        </p>
      </div>
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-pill btn-pill-dark"
        style={{ padding: '10px 28px', fontSize: 12, flexShrink: 0 }}
      >
        Voir l&rsquo;offre &rarr;
      </a>
    </div>
  )
}
