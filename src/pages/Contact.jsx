import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FormPlaceholder from '../components/FormPlaceholder'

const contactFields = [
  { label: 'Nom', type: 'text', placeholder: '' },
  { label: 'Entreprise', type: 'text', placeholder: '' },
  { label: 'Email', type: 'email', placeholder: '' },
  { label: 'Téléphone', type: 'tel', placeholder: '' },
  { label: 'Objet', type: 'select', placeholder: 'Sélectionner...', options: ['Projet', 'Recrutement', 'Presse', 'Partenariat', 'Autre'] },
  { label: 'Votre message', type: 'textarea', placeholder: '' },
]

const filiales = [
  { name: 'ETPM', url: 'https://etpm.fr' },
  { name: 'HP Elec', url: 'https://hpelec.fr' },
  { name: 'CAUM', url: 'https://caum.fr' },
  { name: 'FCTP', url: 'https://fctp.fr' },
  { name: 'Restech', url: 'https://restech.fr' },
  { name: 'E2R', url: 'https://e2r.re' },
]

export default function Contact() {
  return (
    <main>
      {/* BLOC 1 — HERO */}
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
          <Placeholder height="100%" text="[Photo — accueil, bureaux, équipe souriante, ambiance pro et humaine]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Contact' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Contact
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — une question, un projet, une candidature ? Contactez-nous]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — FORMULAIRE + IMPLANTATIONS */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div
          className="contact-grid"
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}
        >
          {/* Colonne gauche — Formulaire */}
          <AnimateOnScroll>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 400, color: '#111', marginBottom: 32 }}>
                Écrivez-nous
              </h2>
              <FormPlaceholder fields={contactFields} submitLabel="Envoyer" />
              <p style={{ fontSize: 12, color: '#999', fontStyle: 'italic', marginTop: 16 }}>
                [Vos données sont traitées conformément au RGPD]
              </p>
            </div>
          </AnimateOnScroll>

          {/* Colonne droite — Implantations */}
          <AnimateOnScroll delay={0.15}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 400, color: '#111', marginBottom: 32 }}>
                Nos implantations
              </h2>
              <Placeholder height="300px" text="[Carte Google Maps — 25 agences, filtrable par filiale]" style={{ borderRadius: 16 }} />

              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 8 }}>
                  Siège Groupe Synelis
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#666', lineHeight: 1.6 }}>
                  [Adresse du siège — ville, code postal]
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#666', lineHeight: 1.6 }}>
                  [Téléphone — email général]
                </p>
              </div>

              <div style={{ width: 40, height: 1, background: '#E0E0E0', margin: '28px 0' }} />

              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#999', marginBottom: 20 }}>
                Contacter une filiale
              </h3>
              <div
                className="filiales-mini-grid"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}
              >
                {filiales.map((f) => (
                  <a
                    key={f.name}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      background: '#F5F5F5',
                      borderRadius: 12,
                      padding: 16,
                      fontFamily: 'var(--font-sans)',
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#111',
                      textDecoration: 'none',
                    }}
                  >
                    {f.name} →
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </main>
  )
}
