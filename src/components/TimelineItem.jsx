import { useState } from 'react'
import { motion } from 'framer-motion'
import Placeholder from './Placeholder'

export default function TimelineItem({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const isLeft = item.side === 'left'

  return (
    <div
      className="timeline-event"
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-start' : 'flex-end',
        position: 'relative',
        marginBottom: 60,
        padding: '0 24px',
      }}
    >
      {/* Pastille on the central line */}
      <div
        className="timeline-dot"
        style={{
          position: 'absolute',
          left: '50%',
          top: 20,
          transform: 'translateX(-50%)',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#111',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontFamily: 'var(--font-serif)',
          fontSize: 14,
          fontWeight: 700,
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        {item.year}
      </div>

      {/* Horizontal connector */}
      <div
        className="timeline-connector"
        style={{
          position: 'absolute',
          top: 42,
          left: isLeft ? 'calc(50% - 60px)' : '50%',
          width: 60,
          height: 2,
          background: '#111',
          zIndex: 1,
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="timeline-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 'calc(50% - 80px)',
          background: '#fff',
          borderRadius: 16,
          padding: 32,
          boxShadow: hovered
            ? '0 12px 30px rgba(0,0,0,0.08)'
            : '0 2px 10px rgba(0,0,0,0.04)',
          transition: 'box-shadow 0.3s, transform 0.3s',
          transform: hovered ? 'translateY(-3px)' : 'none',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 20,
            fontWeight: 700,
            color: '#111',
            marginBottom: 10,
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: item.image ? 16 : 0 }}>
          {item.text}
        </p>
        {item.image && (
          <div style={{ marginTop: 16 }}>
            <Placeholder height="160px" text={item.image} />
          </div>
        )}
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-event {
            justify-content: flex-start !important;
            padding-left: 72px !important;
          }
          .timeline-dot {
            left: 24px !important;
            width: 36px !important;
            height: 36px !important;
            font-size: 11px !important;
          }
          .timeline-connector {
            left: 42px !important;
            width: 30px !important;
          }
          .timeline-card {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  )
}
