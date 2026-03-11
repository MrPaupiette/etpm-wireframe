import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TimelineItem from './TimelineItem'

export default function Timeline({ items = [] }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.8'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={containerRef} style={{ position: 'relative', padding: '40px 0' }}>
      {/* Central vertical line (desktop) / left line (mobile) */}
      <div
        className="timeline-track"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 2,
          background: '#E0E0E0',
        }}
      >
        <motion.div
          style={{
            width: '100%',
            height: lineHeight,
            background: '#111',
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* Items */}
      <div style={{ position: 'relative' }}>
        {items.map((item, i) => (
          <TimelineItem key={item.year + i} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .timeline-track {
            left: 24px !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  )
}
