import { useState } from 'react'

export default function MetierCard({ title, family, filiales, text, externalLink, externalLabel }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 20,
        padding: 32,
        borderLeft: '4px solid #333',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
      }}
    >
      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 8 }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#999', marginBottom: 14 }}>
        {family} · {filiales}
      </p>
      <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
        {text}
      </p>
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: '#111',
          textDecoration: 'underline',
          textUnderlineOffset: 3,
        }}
      >
        {externalLabel}
      </a>
    </div>
  )
}
