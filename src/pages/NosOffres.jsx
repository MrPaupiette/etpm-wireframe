import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FilterBar from '../components/FilterBar'
import JobCard from '../components/JobCard'

const filialeFilters = ['Toutes les filiales', 'ETPM', 'HP Elec', 'CAUM', 'FCTP', 'Restech', 'E2R']
const typeFilters = ['Tous les types', 'CDI', 'Alternance', 'Stage']

const offres = [
  { title: 'Chef de chantier VRD', filiale: 'ETPM', location: 'Toulouse (31)', contractType: 'CDI', externalUrl: 'https://etpm.fr/offre-1' },
  { title: 'Technicien fibre optique', filiale: 'CAUM', location: 'Lescar (64)', contractType: 'CDI', externalUrl: 'https://caum.fr/offre-1' },
  { title: 'Monteur caténaire', filiale: 'HP Elec', location: 'National', contractType: 'CDI', externalUrl: 'https://hpelec.fr/offre-1' },
  { title: 'Conducteur de travaux', filiale: 'FCTP', location: 'Île-de-France', contractType: 'CDI', externalUrl: 'https://fctp.fr/offre-1' },
  { title: 'Canalisateur', filiale: 'Restech', location: "Crac’h (56)", contractType: 'CDI', externalUrl: 'https://restech.fr/offre-1' },
  { title: 'Monteur réseau électrique', filiale: 'E2R', location: 'Le Port (974)', contractType: 'CDI', externalUrl: 'https://e2r.re/offre-1' },
  { title: "Alternance — Conducteur d’engins", filiale: 'ETPM', location: 'Bordeaux (33)', contractType: 'Alternance', externalUrl: 'https://etpm.fr/offre-2' },
  { title: 'Alternance — Technicien fibre', filiale: 'CAUM', location: 'Pau (64)', contractType: 'Alternance', externalUrl: 'https://caum.fr/offre-2' },
  { title: "Chef d’équipe éclairage public", filiale: 'ETPM', location: 'Pau (64)', contractType: 'CDI', externalUrl: 'https://etpm.fr/offre-3' },
  { title: 'Conducteur de travaux fibre', filiale: 'CAUM', location: 'National', contractType: 'CDI', externalUrl: 'https://caum.fr/offre-3' },
]

export default function NosOffres() {
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
          <Placeholder height="100%" text="[Photo — équipe recrutement terrain, ambiance détendue, chantier]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nous rejoindre', path: '/nous-rejoindre' }, { label: 'Nos offres' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Nos offres d’emploi
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — toutes les offres du Groupe Synelis, 6 filiales, des dizaines de postes ouverts]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — FILTRES */}
      <section style={{ padding: '40px 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <FilterBar filters={filialeFilters} activeFilter="Toutes les filiales" />
          <FilterBar filters={typeFilters} activeFilter="Tous les types" />
        </div>
      </section>

      {/* BLOC 3 — LISTE DES OFFRES */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {offres.map((offre, i) => (
              <AnimateOnScroll key={offre.title + offre.filiale} delay={i * 0.05}>
                <JobCard {...offre} />
              </AnimateOnScroll>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#999', marginTop: 32 }}>
            [10 offres affichées — en production, ce contenu sera dynamique via API ou flux RSS des sites filiales]
          </p>
        </div>
      </section>

      {/* BLOC 4 — CANDIDATURE SPONTANÉE */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ width: 40, height: 2, background: '#111', margin: '0 auto 32px' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, color: '#111', marginBottom: 16 }}>
              Vous ne trouvez pas votre poste ?
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Intention — nous recrutons régulièrement, envoyez votre profil même sans offre correspondante — on vous recontacte si un poste s’ouvre]
            </p>
            <Link to="/nous-rejoindre/candidature" className="btn-pill btn-pill-dark" style={{ marginBottom: 16, display: 'inline-flex' }}>
              Candidature spontanée
            </Link>
            <div>
              <Link
                to="/nous-rejoindre"
                style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#999', textDecoration: 'underline', textUnderlineOffset: 3 }}
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
