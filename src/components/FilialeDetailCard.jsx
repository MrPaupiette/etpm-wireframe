import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import Placeholder from './Placeholder'

export default function FilialeDetailCard({ name, subtitle, text, zone, dgName, dgQuote, image, link, side = 'left', index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const imageOnLeft = side === 'left'

  const imageEl = (
    <div
      className="filiale-card-image"
      style={{
        width: '45%',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          transition: 'transform 0.4s ease',
          transform: hovered ? 'scale(1.03)' : 'scale(1)',
          height: '100%',
        }}
      >
        <Placeholder height="100%" aspectRatio="3/2" text={image} />
      </div>
    </div>
  )

  const contentEl = (
    <div
      className="filiale-card-content"
      style={{
        width: '55%',
        padding: 48,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(24px, 3vw, 32px)',
          fontWeight: 400,
          color: '#111',
          marginBottom: 8,
        }}
      >
        {name}
      </h2>
      <p
        style={{
          fontSize: 14,
          color: '#999',
          fontFamily: 'var(--font-sans)',
          marginBottom: 16,
        }}
      >
        {subtitle}
      </p>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, marginBottom: 16 }}>
        {text}
      </p>
      <p
        style={{
          fontSize: 13,
          color: '#999',
          fontFamily: 'var(--font-sans)',
          marginBottom: 24,
        }}
      >
        {zone}
      </p>

      {/* Portrait DG + citation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
        <div style={{ flexShrink: 0 }}>
          <Placeholder
            height="60px"
            text=""
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              minHeight: 'auto',
            }}
          />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 4 }}>
            {dgName}
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontStyle: 'italic', color: '#666', lineHeight: 1.5 }}>
            {dgQuote}
          </p>
        </div>
      </div>

      <div>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-dark"
          style={{ display: 'inline-flex' }}
        >
          {link.label}
        </a>
      </div>
    </div>
  )

  return (
    <AnimateOnScroll delay={index * 0.15} direction={imageOnLeft ? 'left' : 'right'}>
      <div
        className="filiale-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          flexDirection: imageOnLeft ? 'row' : 'row-reverse',
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          transition: 'box-shadow 0.3s',
          boxShadow: hovered
            ? '0 12px 30px rgba(0,0,0,0.07)'
            : '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        {imageEl}
        {contentEl}
      </div>
    </AnimateOnScroll>
  )
}
