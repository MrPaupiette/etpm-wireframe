import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Counter from '../components/ui/Counter'
import FilterBar from '../components/ui/FilterBar'
import ProjectCard from '../components/ui/ProjectCard'
import styles from './Realisations.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const PROJECTS = [
  {
    slug: 'viabilisation-lotissement-muret',
    title: 'Viabilisation lotissement Les Music\'Halles',
    image: '[Photo : chantier VRD terminé — lotissement viabilisé, voirie neuve, vue d\'ensemble aérienne]',
    tags: ['VRD'],
    territory: 'Toulouse & 31',
    text: '[2-3 phrases — viabilisation complète d\'un lotissement de X lots à Muret : réseaux eau, électricité, gaz, télécom, assainissement, voirie. Client : promoteur immobilier. Durée : X mois.]',
  },
  {
    slug: 'relamping-led-pau',
    title: 'Relamping LED — Avenue de Bayonne, Pau',
    image: '[Photo : avenue avec candélabres LED neufs allumés, vue crépusculaire]',
    tags: ['Éclairage'],
    territory: 'Pays Basque & 64',
    text: '[2-3 phrases — remplacement de X luminaires sodium par des LED sur une avenue principale. Économie énergétique de XX%. Client : commune de Pau.]',
  },
  {
    slug: 'irve-parking-dassault-merignac',
    title: 'Installation IRVE — Parking Dassault Aviation',
    image: '[Photo : bornes de recharge installées sur parking d\'entreprise, véhicules en charge]',
    tags: ['IRVE'],
    territory: 'Bordeaux & 33',
    text: '[2-3 phrases — installation de X bornes 22 kW sur le parking salarié d\'un site industriel à Mérignac. Gestion de charge intelligente. Client : Dassault Aviation (⚠️ nom client exemple — à confirmer).]',
  },
  {
    slug: 'poste-hta-bt-enedis-toulouse',
    title: 'Poste HTA/BT — Extension réseau Enedis',
    image: '[Photo : poste de transformation HTA/BT en construction, béton frais, armoire ouverte]',
    tags: ['Réseaux'],
    territory: 'Toulouse & 31',
    text: '[2-3 phrases — construction d\'un poste de transformation préfabriqué pour l\'extension du réseau Enedis dans une ZAC en périphérie de Toulouse. Génie civil + équipement électrique.]',
  },
  {
    slug: 'terrassement-zac-pessac',
    title: 'Terrassement ZAC — Pessac (33)',
    image: '[Photo : terrassement grande envergure, pelle mécanique, vue panoramique chantier]',
    tags: ['Terrassement'],
    territory: 'Bordeaux & 33',
    text: '[2-3 phrases — terrassement et préparation de plateforme pour une ZAC commerciale. X m³ de déblai/remblai. Contraintes nappe phréatique.]',
  },
  {
    slug: 'eclairage-solaire-anglet',
    title: 'Éclairage solaire — Chemin littoral Anglet',
    image: '[Photo : éclairage solaire autonome installé le long d\'un chemin piéton]',
    tags: ['Éclairage'],
    territory: 'Pays Basque & 64',
    text: '[2-3 phrases — installation de X candélabres solaires autonomes sur un chemin piéton littoral. Zéro raccordement réseau. Client : commune d\'Anglet.]',
  },
  {
    slug: 'renouvellement-gaz-bayonne',
    title: 'Renouvellement réseau gaz — Bayonne',
    image: '[Photo : tranchée avec canalisations gaz PEHD jaune, soudure visible]',
    tags: ['Réseaux'],
    territory: 'Pays Basque & 64',
    text: '[2-3 phrases — remplacement de X mètres de canalisation gaz fonte par du PEHD. Soudure bout à bout. Client : GRDF.]',
  },
  {
    slug: 'mise-en-lumiere-eglise-bayonne',
    title: 'Mise en lumière — Église Saint-André, Bayonne',
    image: '[Photo : mise en lumière monument — église ou pont illuminé de nuit]',
    tags: ['Éclairage'],
    territory: 'Pays Basque & 64',
    text: '[2-3 phrases — éclairage architectural de l\'église Saint-André. Études photométriques, projecteurs LED encastrés, scénarios lumière. Client : ville de Bayonne (⚠️ exemple).]',
  },
  {
    slug: 'vrd-centre-ville-toulouse',
    title: 'VRD centre-ville — Toulouse',
    image: '[Photo : tranchée VRD multi-réseaux en centre-ville, blindage visible]',
    tags: ['VRD', 'Terrassement'],
    territory: 'Toulouse & 31',
    text: '[2-3 phrases — renouvellement multi-réseaux en centre-ville de Toulouse : eau, gaz, électricité. Tranchée blindée en milieu urbain dense. Contraintes circulation et commerces riverains.]',
  },
]

const EXPERTISE_FILTERS = ['Tous', 'VRD', 'Éclairage', 'IRVE', 'Réseaux', 'Terrassement']
const TERRITORY_FILTERS = ['Tous', 'Toulouse & 31', 'Bordeaux & 33', 'Pays Basque & 64']

const EXPERTISE_LINKS = [
  { label: 'VRD & Viabilisation', to: '/expertises/vrd-viabilisation' },
  { label: 'Éclairage public', to: '/expertises/eclairage-public' },
  { label: 'IRVE — Bornes de recharge', to: '/expertises/irve-bornes-recharge' },
  { label: 'Réseaux d\'énergie', to: '/expertises/reseaux-energie' },
  { label: 'TP & Terrassement', to: '/expertises/travaux-publics-terrassement' },
]

export default function Realisations() {
  const [activeExpertise, setActiveExpertise] = useState('Tous')
  const [activeTerritory, setActiveTerritory] = useState('Tous')

  const filtered = PROJECTS.filter((p) => {
    const matchExpertise =
      activeExpertise === 'Tous' || p.tags.includes(activeExpertise)
    const matchTerritory =
      activeTerritory === 'Tous' || p.territory === activeTerritory
    return matchExpertise && matchTerritory
  })

  const expertiseGroup = {
    label: 'Expertise',
    filters: EXPERTISE_FILTERS.map((f) => ({
      label: f,
      value: f,
      active: activeExpertise === f,
    })),
    onToggle: (val) => setActiveExpertise(val),
  }

  const territoryGroup = {
    label: 'Territoire',
    filters: TERRITORY_FILTERS.map((f) => ({
      label: f,
      value: f,
      active: activeTerritory === f,
    })),
    onToggle: (val) => setActiveTerritory(val),
  }

  return (
    <>
      {/* BLOC 1 — HERO LÉGER */}
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
              { label: 'Nos réalisations' },
            ]}
          />
          <h1 className={styles.heroTitle}>Nos réalisations</h1>
          <p className={styles.heroText}>
            [Texte 2-3 phrases — retrouvez une sélection de nos chantiers récents en VRD, éclairage
            public, réseaux d'énergie et IRVE dans le Grand Sud-Ouest. Chaque projet illustre notre
            savoir-faire et notre capacité à intervenir sur des chantiers variés, de la viabilisation
            de lotissement à la rénovation d'éclairage urbain.]
          </p>
        </div>
      </motion.section>

      {/* BLOC 2+3 — FILTRES + GRILLE */}
      <section className={styles.galerie}>
        <div className="container">
          <FilterBar groups={[expertiseGroup, territoryGroup]} />
          <motion.div
            className={styles.projectsGrid}
            initial="hidden"
            animate="visible"
            variants={stagger}
            key={`${activeExpertise}-${activeTerritory}`}
          >
            <AnimatePresence mode="wait">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <ProjectCard
                    title={project.title}
                    image={project.image}
                    tags={[...project.tags, project.territory]}
                    text={project.text}
                    to={`/realisations/${project.slug}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — CHIFFRES CLÉS */}
      <motion.section
        className={styles.chiffres}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.chiffresGrid}>
            <Counter value={0} label="chantiers réalisés en 2025" suffix=" X" light={false} />
            <Counter value={0} label="km de réseaux posés" suffix=" X" light={false} />
            <Counter value={0} label="points lumineux installés" suffix=" X" light={false} />
            <Counter value={60} label="ans d'expérience" light={false} />
          </div>
          <p className={styles.chiffresSub}>
            [Ces chiffres seront fournis par le client et mis à jour annuellement]
          </p>
        </div>
      </motion.section>

      {/* BLOC 5 — DÉCOUVRIR NOS EXPERTISES */}
      <section className={styles.expertises}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Découvrir nos expertises</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.expertisesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {EXPERTISE_LINKS.map((item) => (
              <motion.div key={item.label} variants={fadeIn}>
                <Link to={item.to} className={styles.expertiseCard}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 6 — CTA FINAL */}
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
            [1 ligne — contactez ETPM pour un devis adapté à votre chantier dans le Sud-Ouest]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/contact" variant="white">
              Demander un devis
            </Button>
            <Button to="/territoires" variant="outlineWhite">
              Nos territoires
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
