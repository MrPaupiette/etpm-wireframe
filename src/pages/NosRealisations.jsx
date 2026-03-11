import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FilterBar from '../components/FilterBar'
import ProjectCard from '../components/ProjectCard'

const filters = ['Tous', 'Énergie', 'Numérique', 'Ferroviaire', 'Chaleur', 'Eau']

const projects = [
  {
    image: '[Photo — éclairage public LED]',
    tags: ['ETPM', 'Énergie'],
    title: "[Éclairage LED commune de X — 450 candélabres remplacés, client : mairie de X, Haute-Garonne]",
    text: "[Résumé + client + localisation]",
    link: { label: "Voir le projet →", url: 'https://etpm.fr', external: true },
  },
  {
    image: '[Photo — déploiement fibre FTTH]',
    tags: ['CAUM', 'Numérique'],
    title: "[Déploiement FTTH zone rurale X — 2 000 prises raccordées, client : opérateur RIP]",
    text: "[Résumé + client + localisation]",
    link: { label: "Voir le projet →", url: 'https://caum.fr', external: true },
  },
  {
    image: '[Photo — caténaire TGV]',
    tags: ['HP Elec', 'Ferroviaire'],
    title: "[Électrification ligne X — 30km de caténaire, client : SNCF Réseau]",
    text: "[Résumé + client + localisation]",
    link: { label: "Voir le projet →", url: 'https://hpelec.fr', external: true },
  },
  {
    image: '[Photo — réseau de chaleur]',
    tags: ['FCTP', 'Chaleur'],
    title: "[Réseau de chaleur quartier X — 1 500 logements connectés, client : collectivité IdF]",
    text: "[Résumé + client + localisation]",
    link: { label: "Voir le projet →", url: 'https://fctp.fr', external: true },
  },
  {
    image: '[Photo — adduction eau potable]',
    tags: ['Restech', 'Eau'],
    title: "[Adduction eau potable commune X — 3km de canalisation PEHD, client : syndicat des eaux]",
    text: "[Résumé + client + localisation]",
    link: { label: "Voir le projet →", url: 'https://restech.fr', external: true },
  },
  {
    image: '[Photo — poste électrique HTB]',
    tags: ['E2R', 'Énergie'],
    title: "[Poste électrique HTB La Réunion — génie électrique, client : EDF SEI]",
    text: "[Résumé + client + localisation]",
    link: { label: "Voir le projet →", url: 'https://e2r.fr', external: true },
  },
]

export default function NosRealisations() {
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
          <Placeholder height="100%" text="[Photo — montage multi-projets, chantiers terminés, diversité]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nos activités', path: '/nos-activites' }, { label: 'Réalisations' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Nos réalisations
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — des preuves concrètes de notre savoir-faire, filiale par filiale, domaine par domaine]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — FILTRES + GRILLE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FilterBar filters={filters} activeFilter="Tous" />
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
            className="realisations-grid"
          >
            {projects.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <ProjectCard {...p} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .realisations-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 3 — CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#F5F5F5' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2vw, 20px)', fontStyle: 'italic', color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Vous avez un projet d'infrastructure ? Parlons-en.]
            </p>
            <Link to="/contact" className="btn-pill btn-pill-dark">
              Nous contacter
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
