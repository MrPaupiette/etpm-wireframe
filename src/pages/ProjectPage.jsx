import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Tag from '../components/ui/Tag'
import Placeholder from '../components/ui/Placeholder'
import TestimonialBlock from '../components/ui/TestimonialBlock'
import styles from './ProjectPage.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── DONNÉES PROJETS (wireframe — en production, viendra d'un CMS/JSON) ── */
const PROJECTS_DATA = {
  'viabilisation-lotissement-muret': {
    title: 'Viabilisation lotissement Les Music\'Halles — Muret (31)',
    tags: ['VRD', 'Terrassement'],
    territory: 'Toulouse & 31',
    territoryLink: '/territoires/toulouse-haute-garonne',
    territoryLabel: 'Toulouse et en Haute-Garonne',
    heroImage:
      '[Photo principale : vue aérienne ou d\'ensemble du chantier terminé — lotissement viabilisé, voirie neuve, parcelles visibles, maisons en construction au loin]',
    client: '[Nom du promoteur / maître d\'ouvrage — placeholder à remplir]',
    location: 'Muret (31), Haute-Garonne',
    type: 'VRD & Viabilisation',
    duration: '[X mois — placeholder]',
    year: '[2024 — placeholder]',
    team: '[Agence Muret, X personnes mobilisées — placeholder]',
    amount: '[X € HT — placeholder, optionnel selon confidentialité]',
    description:
      '[4-6 phrases — viabilisation complète d\'un lotissement de X lots en périphérie de Muret. Travaux réalisés : terrassement, pose de canalisations eau potable (PEHD), gaz (PEHD), électricité (câble BT souterrain), télécommunications (fourreaux), assainissement (EU/EP). Voirie : enrobés, bordures, trottoirs. Coordination multi-réseaux avec Enedis, GRDF, opérateurs télécom et syndicat d\'eau. Durée du chantier X mois, livré dans les délais. — Les KW des expertises concernées doivent être présents naturellement dans la description : viabilisation, VRD, terrassement, canalisation PEHD, branchement]',
    images: [
      '[Photo : vue aérienne du lotissement avant travaux — terrain nu, piquetage visible]',
      '[Photo : tranchée ouverte multi-réseaux — canalisations eau, gaz, élec visibles côte à côte]',
      '[Photo : machine de soudure PEHD en action — bout à bout sur canalisation gaz]',
      '[Photo : pose de candélabre d\'éclairage public dans le lotissement]',
      '[Photo : voirie en cours de finition — enrobé, bordures posées]',
      '[Photo : lotissement terminé — vue d\'ensemble, maisons, voirie, éclairage allumé]',
    ],
    testimonial: {
      quote:
        '[Témoignage du client — 2-3 phrases sur la qualité de l\'intervention ETPM, le respect des délais, la coordination multi-réseaux. Placeholder à remplir par le client.]',
      author: '[Jean Dupont]',
      role: '[Directeur de programme, Promoteur XYZ]',
    },
    expertises: [
      { name: 'VRD & Viabilisation', link: '/expertises/vrd-viabilisation' },
      { name: 'Réseaux d\'énergie', link: '/expertises/reseaux-energie' },
      { name: 'TP & Terrassement', link: '/expertises/travaux-publics-terrassement' },
    ],
    prev: null,
    next: {
      slug: 'relamping-led-pau',
      title: 'Relamping LED — Avenue de Bayonne, Pau',
    },
  },
}

/* Fallback pour slugs non définis */
const DEFAULT_PROJECT = PROJECTS_DATA['viabilisation-lotissement-muret']

export default function ProjectPage() {
  const { slug } = useParams()
  const project = PROJECTS_DATA[slug] || DEFAULT_PROJECT

  const ficheRows = [
    { label: 'Client', value: project.client },
    { label: 'Localisation', value: project.location },
    { label: 'Type', value: project.type },
    { label: 'Durée', value: project.duration },
    { label: 'Montant', value: project.amount },
    { label: 'Année', value: project.year },
    { label: 'Équipe ETPM', value: project.team },
  ].filter((r) => r.value)

  return (
    <>
      {/* BLOC 1 — HERO PROJET */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container">
          <Breadcrumb
            items={[
              { label: 'Accueil', to: '/' },
              { label: 'Nos réalisations', to: '/realisations' },
              { label: project.title.split('—')[0].trim() },
            ]}
          />
          <div className={styles.heroTags}>
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
            <Tag>{project.territory}</Tag>
          </div>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <Placeholder text={project.heroImage} ratio="16/9" />
        </div>
      </motion.section>

      {/* BLOC 2 — FICHE SYNTHÈSE */}
      <motion.section
        className={styles.fiche}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ficheGrid}`}>
          <div className={styles.ficheData}>
            {ficheRows.map((row) => (
              <div key={row.label} className={styles.ficheRow}>
                <span className={styles.ficheLabel}>{row.label}</span>
                <span className={styles.ficheValue}>{row.value}</span>
              </div>
            ))}
          </div>
          <div>
            <SectionTitle>Le projet</SectionTitle>
            <p className={styles.ficheDescription}>{project.description}</p>
          </div>
        </div>
      </motion.section>

      {/* BLOC 3 — GALERIE PHOTOS */}
      <section className={styles.galerie}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Le chantier en images</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.galerieGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {project.images.map((img, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Placeholder text={img} ratio="4/3" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — TÉMOIGNAGE CLIENT (optionnel) */}
      {project.testimonial && (
        <motion.section
          className={styles.testimonial}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <TestimonialBlock
              quote={project.testimonial.quote}
              author={project.testimonial.author}
              role={project.testimonial.role}
            />
          </div>
        </motion.section>
      )}

      {/* BLOC 5 — EXPERTISES MOBILISÉES */}
      <motion.section
        className={styles.expertises}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeIn}>
            <SectionTitle>Expertises mobilisées</SectionTitle>
          </motion.div>
          <div className={styles.expertisesGrid}>
            {project.expertises.map((exp) => (
              <motion.div key={exp.name} variants={fadeIn}>
                <Link to={exp.link} className={styles.expertiseCard}>
                  {exp.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — TERRITOIRE */}
      <motion.section
        className={styles.territoire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Ce chantier à {project.territoryLabel}</SectionTitle>
          <p className={styles.territoireText}>
            [2 phrases — ce projet a été réalisé par l'agence ETPM locale, qui couvre l'ensemble du
            département. Retrouvez l'ensemble de nos interventions dans le territoire.]
          </p>
          <Link to={project.territoryLink} className={styles.contextualLink}>
            Découvrir ETPM à {project.territoryLabel} →
          </Link>
        </div>
      </motion.section>

      {/* BLOC 7 — NAVIGATION PROJETS */}
      <motion.section
        className={styles.navigation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.navGrid}>
            {project.prev ? (
              <Link
                to={`/realisations/${project.prev.slug}`}
                className={styles.navItem}
              >
                <span className={styles.navArrow}>←</span>
                <div>
                  <span className={styles.navLabel}>Projet précédent</span>
                  <p className={styles.navTitle}>{project.prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {project.next ? (
              <Link
                to={`/realisations/${project.next.slug}`}
                className={`${styles.navItem} ${styles.navItemRight}`}
              >
                <div>
                  <span className={styles.navLabel}>Projet suivant</span>
                  <p className={styles.navTitle}>{project.next.title}</p>
                </div>
                <span className={styles.navArrow}>→</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div className={styles.navBack}>
            <Link to="/realisations" className={styles.contextualLink}>
              ← Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 8 — CTA FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Un projet similaire ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — viabilisation, VRD, réseaux — ETPM vous accompagne dans le Sud-Ouest]
          </p>
          <Button to="/contact" variant="white">
            Demander un devis
          </Button>
        </div>
      </motion.section>
    </>
  )
}
