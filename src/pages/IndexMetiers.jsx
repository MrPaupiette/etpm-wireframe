import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Placeholder from '../components/ui/Placeholder'
import Card from '../components/ui/Card'
import FilterBar from '../components/ui/FilterBar'
import MetierCard from '../components/ui/MetierCard'
import ProcessTimeline from '../components/ui/ProcessTimeline'
import styles from './IndexMetiers.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const FAMILY_FILTERS = ['Tous', 'Terrain', 'Encadrement', 'Bureau d\'études', 'Alternance']

const METIERS = [
  {
    title: 'Manœuvre TP',
    families: ['Terrain', 'Alternance'],
    level: 'Sans diplôme',
    contract: 'CDI, alternance',
    salary: 'SMIC → SMIC+15%',
    text: '[3-4 phrases — premier échelon des travaux publics. Aide au terrassement, à la pose de canalisations, au balisage de chantier. Pas de diplôme requis : ETPM forme sur le terrain. C\'est le point de départ de nombreuses carrières — plusieurs chefs de chantier actuels ont commencé comme manœuvres.]',
    link: '/nous-rejoindre/offres',
    linkText: 'Voir les offres manœuvre →',
  },
  {
    title: 'Canalisateur',
    families: ['Terrain'],
    level: 'CAP/BEP',
    contract: 'CDI',
    salary: 'XX-XX€ brut/mois',
    text: '[3-4 phrases — pose de canalisations eau, gaz, assainissement. Soudure PEHD, raccordements, essais pression. Métier technique qui s\'apprend vite sur le terrain. Habilitations et formations spécifiques assurées par ETPM.]',
    link: '/nous-rejoindre/offres',
  },
  {
    title: 'Monteur réseau électrique',
    families: ['Terrain'],
    level: 'CAP/BEP Électrotechnique',
    contract: 'CDI',
    salary: 'XX-XX€ brut/mois',
    text: '[3-4 phrases — LE métier de base d\'ETPM. Pose de câbles HTA/BT, raccordements sur réseaux Enedis, travaux aériens et souterrains. Habilitations électriques obligatoires (H1/B1 — formation assurée). — KW : monteur réseau électrique (110/mois)]',
    link: '/fiches-metiers/monteur-reseau-electrique',
    linkText: 'Lire la fiche métier →',
    hasDetailPage: true,
  },
  {
    title: 'Technicien IRVE',
    families: ['Terrain'],
    level: 'Bac Pro / BTS Électrotechnique',
    contract: 'CDI',
    salary: 'XX-XX€',
    text: '[3-4 phrases — installe et raccorde les bornes de recharge pour véhicules électriques. Métier en forte croissance avec la transition vers la mobilité électrique. Formation qualification IRVE assurée. — KW : technicien irve emploi (40/mois)]',
    link: '/nous-rejoindre/offres',
  },
  {
    title: 'Chef d\'équipe',
    families: ['Encadrement'],
    level: 'Expérience terrain 2-3 ans',
    contract: 'CDI',
    salary: 'XX-XX€',
    text: '[3-4 phrases — encadre une équipe de 3-5 personnes sur le chantier. Gère l\'avancement, la sécurité, le matériel au quotidien. Première marche d\'encadrement, souvent atteinte par promotion interne.]',
    link: '/nous-rejoindre/offres',
  },
  {
    title: 'Chef de chantier TP',
    families: ['Encadrement'],
    level: 'BTS / Licence Pro TP ou promotion interne',
    contract: 'CDI',
    salary: 'XX-XX€',
    text: '[3-4 phrases — pilote un ou plusieurs chantiers de A à Z : préparation, gestion des équipes, suivi budgétaire, relation client, sécurité. Le métier le plus demandé dans les TP — et le plus difficile à recruter. — KW : chef de chantier tp (140/mois)]',
    link: '/fiches-metiers/chef-de-chantier-tp',
    linkText: 'Lire la fiche métier →',
    hasDetailPage: true,
  },
  {
    title: 'Conducteur de travaux',
    families: ['Encadrement'],
    level: 'Ingénieur / Licence Pro / promotion interne',
    contract: 'CDI',
    salary: 'XX-XX€',
    text: '[3-4 phrases — supervise plusieurs chantiers simultanément. Prépare les travaux, négocie avec les clients, pilote le budget global. Poste à responsabilité accessible aux profils ingénieurs comme aux chefs de chantier expérimentés. — KW : conducteur de travaux tp (70/mois)]',
    link: '/nous-rejoindre/offres',
  },
  {
    title: 'Chargé d\'études / Dessinateur projeteur',
    families: ['Bureau d\'études'],
    level: 'BTS / DUT Génie Civil ou Électrotechnique',
    contract: 'CDI',
    salary: 'XX-XX€',
    text: '[3-4 phrases — réalise les plans d\'exécution, les études de dimensionnement, les métrés. Travaille en bureau d\'études mais se rend régulièrement sur le terrain. Interface entre le client, le conducteur de travaux et les équipes.]',
    link: '/nous-rejoindre/offres',
  },
]

const PARCOURS_STEPS = [
  { number: 1, title: 'Manœuvre', text: '[Entrée sans diplôme, formation terrain]' },
  { number: 2, title: 'Ouvrier qualifié / Canalisateur', text: '[Après 6-12 mois, spécialisation]' },
  { number: 3, title: 'Chef d\'équipe', text: '[Après 2-3 ans, premier encadrement]' },
  { number: 4, title: 'Chef de chantier', text: '[Après 3-5 ans ou diplôme BTS/Licence]' },
  { number: 5, title: 'Conducteur de travaux', text: '[Après 5-8 ans ou diplôme ingénieur]' },
]

export default function IndexMetiers() {
  const [activeFamily, setActiveFamily] = useState('Tous')

  const filtered = METIERS.filter(
    (m) => activeFamily === 'Tous' || m.families.includes(activeFamily)
  )

  const familyGroup = {
    label: 'Famille',
    filters: FAMILY_FILTERS.map((f) => ({
      label: f,
      value: f,
      active: activeFamily === f,
    })),
    onToggle: (val) => setActiveFamily(val),
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
              { label: 'Nous rejoindre', to: '/nous-rejoindre' },
              { label: 'Nos métiers' },
            ]}
          />
          <h1 className={styles.heroTitle}>Nos métiers</h1>
          <p className={styles.heroText}>
            [Texte 2-3 phrases — ETPM regroupe une diversité de métiers dans les travaux publics :
            du terrain au bureau d'études, du premier emploi au poste d'encadrement. Chaque métier
            a son parcours, ses formations et ses perspectives d'évolution. Découvrez les métiers
            qui font vivre les réseaux du Sud-Ouest.]
          </p>
        </div>
      </motion.section>

      {/* BLOC 2 — FILTRES + BLOC 3 — GRILLE MÉTIERS */}
      <section className={styles.metiers}>
        <div className="container">
          <FilterBar groups={[familyGroup]} />
          <motion.div
            className={styles.metiersGrid}
            initial="hidden"
            animate="visible"
            variants={stagger}
            key={activeFamily}
          >
            <AnimatePresence mode="wait">
              {filtered.map((metier) => (
                <motion.div
                  key={metier.title}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <MetierCard
                    title={metier.title}
                    level={metier.level}
                    contract={metier.contract}
                    salary={metier.salary}
                    text={metier.text}
                    link={metier.link}
                    linkText={metier.linkText}
                    hasDetailPage={metier.hasDetailPage}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — PARCOURS D'ÉVOLUTION */}
      <section className={styles.parcours}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1-2 phrases — chez ETPM, les parcours ne sont pas figés. La promotion interne est la norme, pas l'exception.]"
            >
              Évoluer chez ETPM
            </SectionTitle>
          </motion.div>
          <div className={styles.parcoursTimeline}>
            <ProcessTimeline steps={PARCOURS_STEPS} />
          </div>
          <motion.p
            className={styles.parcoursSub}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            [Ce parcours est réel — plusieurs conducteurs de travaux et responsables d'agence actuels
            ont commencé comme manœuvres ou apprentis chez ETPM.]
          </motion.p>
        </div>
      </section>

      {/* BLOC 5 — ALTERNANCE */}
      <motion.section
        className={styles.alternance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.alternanceCard}>
            <Placeholder
              text="[Photo : jeune alternant en situation de travail avec tuteur, ambiance transmission, chantier en arrière-plan]"
              ratio="16/6"
            />
            <div className={styles.alternanceBody}>
              <h2 className={styles.alternanceTitle}>Alternance et apprentissage</h2>
              <p className={styles.alternanceText}>
                [2-3 phrases — du CAP au diplôme d'ingénieur, ETPM accueille des alternants sur
                tous ses métiers. Formation terrain encadrée par un tuteur dédié. X% d'embauche en
                CDI à l'issue (placeholder).]
              </p>
              <Link to="/nous-rejoindre/alternance" className={styles.contextualLink}>
                Découvrir l'alternance TP →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — CTA BANDEAU */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Trouvez votre métier</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — consultez nos offres ou envoyez une candidature spontanée]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/nous-rejoindre/offres" variant="white">Voir les offres</Button>
            <Button to="/contact" variant="outlineWhite">Candidature spontanée</Button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
