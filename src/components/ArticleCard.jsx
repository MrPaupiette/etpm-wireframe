import { useState } from 'react'
import Placeholder from './Placeholder'

export default function ArticleCard({ image, date, title, excerpt, category, link = '#' }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
      }}
    >
      <Placeholder aspectRatio="16/9" text={image} />
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: '#999' }}>{date}</span>
          {category && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: 1,
                color: '#999',
                background: '#F0F0F0',
                borderRadius: 20,
                padding: '3px 12px',
              }}
            >
              {category}
            </span>
          )}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 18,
            fontWeight: 700,
            color: '#111',
            lineHeight: 1.4,
            marginBottom: 8,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: '#666',
            lineHeight: 1.5,
            marginBottom: 14,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {excerpt}
        </p>
        <a
          href={link}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#111',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          Lire →
        </a>
      </div>
    </div>
  )
}
