import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'
import ActivityMatrix from '../components/ActivityMatrix'
import AlternatingBlocks from '../components/AlternatingBlocks'
import ProjectCard from '../components/ProjectCard'

const domainsBlocks = [
  {
    image: '[Photo — pylône électrique, poste HTA, câbles]',
    title: "⚡ Énergie",
    text: "[Intention — réseaux électriques HTA/BT, postes de transformation, raccordements, maintenance réseau, astreinte 24/7 — cœur historique du groupe]",
    tags: 'ETPM · E2R · Restech',
    link: { label: "En savoir plus sur ETPM →", url: 'https://etpm.fr' },
  },
  {
    image: '[Photo — fibre optique, soudure, boîtier PBO, tirage de câble]',
    title: "📡 Numérique",
    text: "[Intention — déploiement fibre FTTH, câblage VDI, vidéosurveillance, infrastructure télécom — connecter les territoires au très haut débit]",
    tags: 'CAUM · E2R · Restech',
    link: { label: "En savoir plus sur CAUM →", url: 'https://caum.fr' },
  },
  {
    image: '[Photo — caténaire, TGV, monteur en hauteur, ligne aérienne]',
    title: "🚆 Ferroviaire",
    text: "[Intention — caténaire, sous-stations, signalisation, électrification, qualification SNCF — faire circuler les trains sur tout le réseau national]",
    tags: 'HP Elec',
    link: { label: "En savoir plus sur HP Elec →", url: 'https://hpelec.fr' },
  },
  {
    image: '[Photo — canalisations isolées, chantier urbain, réseau de chaleur]',
    title: "🔥 Chaleur urbaine",
    text: "[Intention — réseaux de chaleur, génie civil thermique, canalisations, chaufferies — chauffer les quartiers de manière sobre et durable]",
    tags: 'FCTP',
    link: { label: "En savoir plus sur FCTP →", url: 'https://fctp.fr' },
  },
]

const previewProjects = [
  {
    image: '[Photo — éclairage public LED]',
    tags: ['ETPM', 'Énergie'],
    title: "[Titre projet — Éclairage commune X]",
    text: "[Résumé court]",
    link: { label: "Voir le projet →", url: 'https://etpm.fr', external: true },
  },
  {
    image: '[Photo — déploiement fibre FTTH]',
    tags: ['CAUM', 'Numérique'],
    title: "[Titre projet — Fibre zone rurale]",
    text: "[Résumé court]",
    link: { label: "Voir le projet →", url: 'https://caum.fr', external: true },
  },
  {
    image: '[Photo — caténaire TGV]',
    tags: ['HP Elec', 'Ferroviaire'],
    title: "[Titre projet — Caténaire ligne X]",
    text: "[Résumé court]",
    link: { label: "Voir le projet →", url: 'https://hpelec.fr', external: true },
  },
]

export default function NosActivites() {
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
          <Placeholder height="100%" text="[Photo — panorama multi-chantiers, diversité des métiers Synelis]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nos activités' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Nos activités
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — concevoir, construire, maintenir les réseaux essentiels des territoires — multi-énergies, multi-métiers]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 400, color: '#111', marginBottom: 32 }}>
              Ce que fait Synelis
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.8, color: '#333' }}>
              [Texte 3-4 phrases — Synelis intervient sur 4 grands domaines : énergie, numérique, ferroviaire, chaleur urbaine. Chaque filiale porte une expertise complémentaire. La matrice ci-dessous montre qui fait quoi. — pousser : multi-énergies, infrastructures, réseaux essentiels]
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — MATRICE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Concevoir · Construire · Maintenir"
            subtitle="[Qui fait quoi — chaque nom de filiale est un lien vers son site]"
          />
          <ActivityMatrix />
        </div>
      </section>

      {/* BLOC 4 — 5 DOMAINES EN DÉTAIL */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle title="Nos 4 domaines d'expertise" />
          <AlternatingBlocks items={domainsBlocks} startSide="left" />
        </div>
      </section>

      {/* BLOC 5 — APERÇU RÉALISATIONS */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Nos réalisations"
            subtitle="[Preuves concrètes — projets phares de nos filiales]"
          />
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
            className="realisations-preview-grid"
          >
            {previewProjects.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <ProjectCard {...p} />
              </AnimateOnScroll>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/nos-activites/realisations" className="btn-pill btn-pill-dark">
              Toutes nos réalisations
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .realisations-preview-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 6 — CTA FILIALES */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2.5vw, 22px)', fontStyle: 'italic', color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Un groupe, six expertises — découvrez la filiale qui correspond à votre besoin]
            </p>
            <Link to="/nos-filiales" className="btn-pill btn-pill-dark">
              Voir nos filiales
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
