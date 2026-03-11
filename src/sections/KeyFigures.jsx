import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const fullFigures = [
  { value: 700, suffix: '', label: 'COLLABORATEURS' },
  { value: 150, suffix: 'M€', label: "CHIFFRE D'AFFAIRES" },
  { value: 25, suffix: '', label: 'AGENCES EN FRANCE' },
  { value: 6, suffix: '', label: 'FILIALES SPÉCIALISÉES' },
  { value: 60, suffix: '+', label: "ANNÉES D'EXPERTISE" },
]

const compactFigures = [
  { value: 700, suffix: '', label: 'COLLABORATEURS' },
  { value: 25, suffix: '', label: 'AGENCES' },
  { value: 6, suffix: '', label: 'FILIALES' },
  { value: 60, suffix: '+', label: "ANNÉES D'EXPERTISE" },
]

function AnimatedCounter({ target, suffix, color = '#fff', fontSize = 'clamp(48px, 5vw, 64px)' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const start = performance.now()

      const animate = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, target])

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-serif)', fontSize, fontWeight: 700, color }}>
      {count}{suffix}
    </span>
  )
}

export default function KeyFigures({ variant = 'dark', size = 'full' }) {
  const isDark = variant === 'dark'
  const isCompact = size === 'compact'
  const figures = isCompact ? compactFigures : fullFigures

  return (
    <section
      style={{
        background: isDark ? '#111' : '#F5F5F5',
        padding: isCompact ? 'clamp(40px, 6vw, 80px) 0' : 'clamp(60px, 8vw, 100px) 0',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className="keyfigures-row"
      >
        {figures.map((fig, i) => (
          <div
            key={fig.label}
            style={{
              textAlign: 'center',
              flex: 1,
              padding: '20px 0',
              borderRight:
                i < figures.length - 1
                  ? `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
                  : 'none',
            }}
            className="keyfigure-item"
          >
            <div>
              <AnimatedCounter
                target={fig.value}
                suffix={fig.suffix}
                color={isDark ? '#fff' : '#111'}
                fontSize={isCompact ? 'clamp(36px, 4vw, 48px)' : 'clamp(48px, 5vw, 64px)'}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: 2,
                color: isDark ? 'rgba(255,255,255,0.5)' : '#999',
                marginTop: 8,
              }}
            >
              {fig.label}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .keyfigures-row {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .keyfigure-item {
            flex: 0 0 50% !important;
            border-right: none !important;
          }
          .keyfigure-item:last-child {
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
