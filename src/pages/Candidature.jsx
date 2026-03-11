import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FormPlaceholder from '../components/FormPlaceholder'

const candidatureFields = [
  { label: 'Prénom', type: 'text', placeholder: '' },
  { label: 'Nom', type: 'text', placeholder: '' },
  { label: 'Email', type: 'email', placeholder: '' },
  { label: 'Téléphone', type: 'tel', placeholder: '' },
  { label: 'Filiale souhaitée', type: 'select', placeholder: 'ETPM / HP Elec / CAUM / FCTP / Restech / E2R / Indifférent' },
  { label: 'Métier visé', type: 'text', placeholder: '' },
  { label: 'Votre message', type: 'textarea', placeholder: '' },
  { label: 'CV (PDF)', type: 'file', placeholder: 'Glissez votre CV ici ou cliquez pour parcourir' },
]

export default function Candidature() {
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
          <Placeholder height="100%" text="[Photo — poignée de main, accueil nouveau collaborateur, sourire]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nous rejoindre', path: '/nous-rejoindre' }, { label: 'Candidature spontanée' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Candidature spontanée
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — pas d’offre qui vous correspond ? Envoyez-nous votre profil, on recrute régulièrement dans toutes nos filiales]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO + FORMULAIRE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div className="candidature-layout" style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
              <div className="candidature-text" style={{ flex: '1 1 40%' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 400, color: '#111', marginBottom: 24 }}>
                  Faites-vous connaître
                </h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.7, marginBottom: 32 }}>
                  [Intention — nous recrutons régulièrement dans nos 6 filiales et 25 agences. Chefs de chantier, techniciens, conducteurs de travaux, alternants... Même sans offre ouverte, votre profil peut correspondre à un besoin futur.]
                </p>
                <div style={{ width: 40, height: 2, background: '#111', marginBottom: 32 }} />
                <p style={{ fontSize: 15, color: '#999', lineHeight: 1.6 }}>
                  [Intention — vos données sont traitées conformément au RGPD. Votre CV est conservé 6 mois.]
                </p>
              </div>
              <div className="candidature-form" style={{ flex: '1 1 60%' }}>
                <FormPlaceholder
                  fields={candidatureFields}
                  submitLabel="Envoyer ma candidature"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .candidature-layout { flex-direction: column !important; gap: 40px !important; }
            .candidature-text, .candidature-form { flex: 1 1 100% !important; }
          }
        `}</style>
      </section>

      {/* BLOC 3 — CTA RETOUR */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) 0', background: '#F5F5F5' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
              [Vous préférez consulter nos offres en cours ?]
            </p>
            <Link to="/nous-rejoindre/offres" className="btn-pill btn-pill-outline" style={{ marginBottom: 16, display: 'inline-flex' }}>
              Voir nos offres
            </Link>
            <div>
              <Link
                to="/nous-rejoindre"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#111', textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                Retour à Nous rejoindre →
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
