import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Placeholder from '../../components/Placeholder'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import SectionTitle from '../../components/SectionTitle'

function DomainCard({ icon, title, text, tags = [], index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: 32,
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>{text}</p>
        {tags.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
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
      </div>
    </AnimateOnScroll>
  )
}

export default function CareerTemplate({
  breadcrumbLabel,
  h1,
  subtitle,
  heroImage,
  introTitle,
  introText,
  cards = [],
  testimonial,
  faq = [],
  ctaTitle,
  ctaText,
  ctaLabel,
  ctaLink,
}) {
  return (
    <main>
      {/* BLOC 1 — HERO */}
      <section
        style={{
          minHeight: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Placeholder height="100%" text={heroImage} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nous rejoindre', path: '/nous-rejoindre' }, { label: breadcrumbLabel }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            {h1}
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            {subtitle}
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 400, color: '#111', marginBottom: 32 }}>
              {introTitle}
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.8, color: '#333' }}>
              {introText}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — CARDS */}
      {cards.length > 0 && (
        <section style={{ padding: 'clamp(60px, 8vw, 120px) 0', background: '#F5F5F5' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div
              className="career-cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${Math.min(cards.length, 3)}, 1fr)`,
                gap: 24,
              }}
            >
              {cards.map((c, i) => (
                <DomainCard key={c.title} {...c} index={i} />
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .career-cards-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      )}

      {/* BLOC 4 — TÉMOIGNAGE */}
      {testimonial && (
        <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll direction="left">
              <div className="career-testimonial" style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
                <div className="career-testimonial-image" style={{ flex: '1 1 45%' }}>
                  <Placeholder height="360px" text={testimonial.image} style={{ borderRadius: 20 }} />
                </div>
                <div className="career-testimonial-content" style={{ flex: '1 1 55%' }}>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, color: '#111', marginBottom: 16 }}>
                    {testimonial.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontStyle: 'italic', color: '#333', lineHeight: 1.7 }}>
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .career-testimonial { flex-direction: column !important; }
              .career-testimonial-image, .career-testimonial-content { flex: 1 1 100% !important; }
            }
          `}</style>
        </section>
      )}

      {/* BLOC 5 — FAQ */}
      {faq.length > 0 && (
        <section style={{ padding: 'clamp(60px, 8vw, 120px) 0', background: '#F5F5F5' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
            <AnimateOnScroll>
              <div style={{ background: '#fff', borderRadius: 20, padding: 48 }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: '#111', textAlign: 'center', marginBottom: 40 }}>
                  Questions fréquentes
                </h2>
                {faq.map((item, i) => (
                  <div
                    key={item.q}
                    style={{
                      paddingBottom: 24,
                      marginBottom: 24,
                      borderBottom: i < faq.length - 1 ? '1px solid #E0E0E0' : 'none',
                    }}
                  >
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 8 }}>
                      {item.q}
                    </h3>
                    <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6 }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* BLOC 6 — CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 400, color: '#111', marginBottom: 16 }}>
              {ctaTitle}
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              {ctaText}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to={ctaLink} className="btn-pill btn-pill-dark">
                {ctaLabel}
              </Link>
              <Link to="/nous-rejoindre/candidature" className="btn-pill btn-pill-outline">
                Candidature spontanée
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
