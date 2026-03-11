import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../../components/Breadcrumb'
import Placeholder from '../../components/Placeholder'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export default function ResourceTemplate({
  breadcrumbLabel,
  h1,
  subtitle,
  heroImage,
  definitionTitle,
  definitionText,
  definitionSource,
  sections,
  faq,
  relatedResources,
  ctaText,
}) {
  return (
    <main>
      {/* BLOC 1 — HERO COMPACT */}
      <section
        style={{
          minHeight: '50vh',
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
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Ressources' }, { label: breadcrumbLabel }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            {h1}
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            {subtitle}
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — DÉFINITION FEATURED SNIPPET */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div
              style={{
                background: '#F5F5F5',
                borderRadius: 20,
                borderLeft: '4px solid #333',
                padding: 32,
              }}
            >
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: '#111', marginBottom: 20 }}>
                {definitionTitle}
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#333', lineHeight: 1.8, marginBottom: 16 }}>
                {definitionText}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#999', fontStyle: 'italic' }}>
                {definitionSource}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — CONTENU GUIDE */}
      <section style={{ paddingBottom: 'clamp(80px, 10vw, 120px)', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          {sections.map((section, i) => (
            <AnimateOnScroll key={i}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#111', marginBottom: 20 }}>
                  {section.title}
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: section.image ? 28 : 0 }}>
                  {section.text}
                </p>
                {section.image && (
                  <Placeholder height="280px" text={section.image} style={{ borderRadius: 16, marginBottom: 0 }} />
                )}
                {section.note && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#999', marginTop: 16 }}>
                    {section.noteLink ? (
                      <>
                        {section.note.split(section.noteLinkLabel)[0]}
                        <Link to={section.noteLink} style={{ color: '#111', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                          {section.noteLinkLabel}
                        </Link>
                        {section.note.split(section.noteLinkLabel)[1]}
                      </>
                    ) : (
                      section.note
                    )}
                  </p>
                )}
              </div>
              {i < sections.length - 1 && (
                <div style={{ width: 60, height: 1, background: '#E0E0E0', margin: '60px auto' }} />
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* BLOC 4 — FAQ */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div style={{ background: '#fff', borderRadius: 20, padding: 48 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: '#111', textAlign: 'center', marginBottom: 40 }}>
                Questions fréquentes
              </h2>
              {faq.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: i < faq.length - 1 ? '1px solid #E0E0E0' : 'none',
                    paddingBottom: i < faq.length - 1 ? 24 : 0,
                    marginBottom: i < faq.length - 1 ? 24 : 0,
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 10 }}>
                    {item.q}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: '#666', lineHeight: 1.7 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 5 — RESSOURCES CONNEXES */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: 32 }}>
            Aller plus loin
          </h3>
          <div
            className="related-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}
          >
            {relatedResources.map((r, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: '#F5F5F5',
                    borderRadius: 20,
                    borderLeft: '4px solid #333',
                    padding: 32,
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 10 }}>
                    {r.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
                    {r.description}
                  </p>
                  <Link
                    to={r.link}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      color: '#111',
                      textDecoration: 'underline',
                      textUnderlineOffset: 3,
                    }}
                  >
                    Lire le guide →
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .related-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* BLOC 6 — CTA EXPERT */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#F5F5F5' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#111', marginBottom: 16 }}>
              Besoin d'un expert ?
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.7, marginBottom: 32 }}>
              {ctaText}
            </p>
            <Link to="/contact" className="btn-pill btn-pill-dark">
              Contactez nos experts
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
