import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Placeholder from '../../components/Placeholder'
import AnimateOnScroll from '../../components/AnimateOnScroll'
import SectionTitle from '../../components/SectionTitle'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  // Parse numeric part from target (e.g. "63M€" -> 63, "60+" -> 60)
  const numeric = parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0
  const rest = String(target).replace(/^[0-9]+/, '')

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const start = performance.now()
      const animate = (now) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * numeric))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, numeric])

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(48px, 5vw, 64px)', fontWeight: 700, color: '#fff' }}>
      {count}{rest}{suffix}
    </span>
  )
}

function ExpertiseCard({ icon, title, text, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: 40,
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>{text}</p>
      </div>
    </AnimateOnScroll>
  )
}

function ProjectCardSimple({ image, title, text, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
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
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 8, lineHeight: 1.4 }}>
            {title}
          </h3>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.5 }}>{text}</p>
        </div>
      </div>
    </AnimateOnScroll>
  )
}

export default function FilialeTemplate({
  name,
  tagline,
  heroImage,
  description,
  externalUrl,
  dgPortrait,
  dgName,
  dgRole,
  dgQuote,
  expertises = [],
  agencies = [],
  mapPlaceholder,
  stats = [],
  projects = [],
  recruitText,
  recruitUrl,
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
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nos filiales', path: '/nos-filiales' }, { label: name }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            {name}
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            {tagline}
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — PRÉSENTATION */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div className="filiale-presentation" style={{ display: 'flex', gap: 64, alignItems: 'center' }}>
              <div className="filiale-presentation-text" style={{ flex: '1 1 55%' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 400, color: '#111', marginBottom: 32 }}>
                  Qui est {name} ?
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.8, color: '#333' }}>
                  {description}
                </p>
              </div>
              <div className="filiale-presentation-dg" style={{ flex: '1 1 45%', textAlign: 'center' }}>
                <div style={{ maxWidth: 250, margin: '0 auto' }}>
                  <Placeholder height="320px" text={dgPortrait} style={{ borderRadius: 20 }} />
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginTop: 20, marginBottom: 4 }}>
                    {dgName}
                  </h3>
                  <p style={{ fontSize: 14, color: '#999', marginBottom: 16 }}>{dgRole}</p>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontStyle: 'italic', color: '#444', lineHeight: 1.6 }}>
                    {dgQuote}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .filiale-presentation { flex-direction: column !important; gap: 40px !important; }
            .filiale-presentation-text, .filiale-presentation-dg { flex: 1 1 100% !important; }
          }
        `}</style>
      </section>

      {/* BLOC 3 — EXPERTISES */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Nos expertises"
            subtitle={`[Les domaines d’intervention de ${name}]`}
          />
          <div
            className="expertise-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: expertises.length <= 3 ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {expertises.map((exp, i) => (
              <ExpertiseCard key={exp.title} {...exp} index={i} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .expertise-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 4 — TERRITOIRES */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Nos territoires"
            subtitle={`[Implantations et zones d’intervention de ${name}]`}
          />
          <AnimateOnScroll>
            <div className="territoire-layout" style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
              <div className="territoire-map" style={{ flex: '1 1 50%' }}>
                <Placeholder height="360px" text={mapPlaceholder} />
              </div>
              <div className="territoire-list" style={{ flex: '1 1 50%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {agencies.map((agency) => (
                    <div key={agency} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#999', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: '#333' }}>{agency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .territoire-layout { flex-direction: column !important; }
            .territoire-map, .territoire-list { flex: 1 1 100% !important; }
          }
        `}</style>
      </section>

      {/* BLOC 5 — CHIFFRES CLÉS */}
      <section style={{ background: '#111', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div
          className="filiale-stats-row"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="filiale-stat-item"
              style={{
                textAlign: 'center',
                flex: 1,
                padding: '20px 0',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <div>
                <AnimatedCounter target={s.number} />
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .filiale-stats-row { flex-wrap: wrap !important; justify-content: center !important; }
            .filiale-stat-item { flex: 0 0 50% !important; border-right: none !important; }
          }
        `}</style>
      </section>

      {/* BLOC 6 — RÉALISATIONS */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Réalisations"
            subtitle={`[Projets phares de ${name}]`}
          />
          <div
            className="filiale-projects-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
          >
            {projects.map((p, i) => (
              <ProjectCardSimple key={p.title} {...p} index={i} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-dark"
            >
              Toutes nos réalisations →
            </a>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .filiale-projects-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 7 — REJOINDRE */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div className="filiale-recruit" style={{ display: 'flex', gap: 48, alignItems: 'center' }}>
              <div className="filiale-recruit-image" style={{ flex: '1 1 50%' }}>
                <Placeholder height="360px" text={`[Photo — équipe ${name}, terrain, ambiance, sourires]`} />
              </div>
              <div className="filiale-recruit-content" style={{ flex: '1 1 50%' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#111', marginBottom: 20 }}>
                  Rejoindre {name}
                </h2>
                <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, marginBottom: 28 }}>
                  {recruitText}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
                  <a
                    href={recruitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill btn-pill-dark"
                  >
                    Voir les offres {name}
                  </a>
                  <Link
                    to="/nous-rejoindre/metiers"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#111', textDecoration: 'underline', textUnderlineOffset: 3 }}
                  >
                    Ou explorez tous les métiers du groupe →
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .filiale-recruit { flex-direction: column !important; }
            .filiale-recruit-image, .filiale-recruit-content { flex: 1 1 100% !important; }
          }
        `}</style>
      </section>

      {/* BLOC 8 — CTA RETOUR */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontStyle: 'italic', color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Découvrez les autres filiales du Groupe Synelis]
            </p>
            <Link to="/nos-filiales" className="btn-pill btn-pill-dark">
              Toutes nos filiales
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
