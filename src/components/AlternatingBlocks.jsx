import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import Placeholder from './Placeholder'

export default function AlternatingBlocks({ items = [], startSide = 'left' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {items.map((item, i) => {
        const imageOnLeft = startSide === 'left' ? i % 2 === 0 : i % 2 !== 0
        return (
          <AlternatingBlock key={item.title} item={item} index={i} imageOnLeft={imageOnLeft} />
        )
      })}

      <style>{`
        @media (max-width: 768px) {
          .alt-block { flex-direction: column !important; }
          .alt-block-image { width: 100% !important; min-height: 220px; }
          .alt-block-content { width: 100% !important; padding: 32px !important; }
        }
      `}</style>
    </div>
  )
}

function AlternatingBlock({ item, index, imageOnLeft }) {
  const [hovered, setHovered] = useState(false)

  const imageEl = (
    <div className="alt-block-image" style={{ width: '45%', flexShrink: 0 }}>
      <Placeholder height="100%" aspectRatio="3/2" text={item.image} />
    </div>
  )

  const contentEl = (
    <div
      className="alt-block-content"
      style={{
        width: '55%',
        padding: 48,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(20px, 2.5vw, 24px)',
          fontWeight: 700,
          color: '#111',
          marginBottom: 12,
        }}
      >
        {item.title}
      </h3>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, marginBottom: 16 }}>
        {item.text}
      </p>
      {item.tags && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          {item.tags.split(' · ').map((tag) => (
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
      {item.link && (
        <a
          href={item.link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#111',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          {item.link.label}
        </a>
      )}
    </div>
  )

  return (
    <AnimateOnScroll delay={index * 0.15} direction={imageOnLeft ? 'left' : 'right'}>
      <div
        className="alt-block"
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
