import AnimateOnScroll from './AnimateOnScroll'

export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <AnimateOnScroll>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 400,
            color: light ? '#fff' : '#111',
            marginBottom: 16,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 17,
              color: light ? 'rgba(255,255,255,0.5)' : '#999',
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </AnimateOnScroll>
  )
}
