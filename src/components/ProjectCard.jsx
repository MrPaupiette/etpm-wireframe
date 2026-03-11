import { useState } from 'react'
import Placeholder from './Placeholder'

export default function ProjectCard({ image, tags = [], title, text, link }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        transition: 'box-shadow 0.3s',
        boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
      }}
    >
      <Placeholder aspectRatio="16/10" text={image} />
      <div style={{ padding: 28 }}>
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
            {tags.map((tag) => (
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
        )}
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 20,
            fontWeight: 700,
            color: '#111',
            marginBottom: 8,
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.5, marginBottom: 14 }}>
          {text}
        </p>
        {link && (
          <a
            href={link.url || '#'}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  )
}
