import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Placeholder from '../components/ui/Placeholder'
import Button from '../components/ui/Button'
import FilterBar from '../components/ui/FilterBar'
import JobCardExtended from '../components/ui/JobCardExtended'
import ApplicationForm from '../components/ui/ApplicationForm'
import styles from './OffresEmploi.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const OFFRES = [
  {
    title: 'Chef de chantier VRD (H/F)',
    contract: 'CDI',
    territory: 'Toulouse & 31',
    family: 'Encadrement',
    agency: 'Muret (31)',
    summary:
      '[2-3 phrases — vous pilotez des chantiers de VRD et viabilisation en Haute-Garonne. Gestion d\'équipes de 5-10 personnes, suivi budgétaire, relation client. BTS TP ou expérience terrain 5 ans minimum.]',
    date: '[JJ/MM/AAAA — placeholder]',
  },
  {
    title: 'Monteur réseau électrique (H/F)',
    contract: 'CDI',
    territory: 'Bordeaux & 33',
    family: 'Terrain',
    agency: 'Pessac (33)',
    summary:
      '[2-3 phrases — pose de câbles HTA/BT pour Enedis, raccordements, travaux aériens et souterrains en Gironde. CAP Électrotechnique ou expérience équivalente. Habilitations H1/B1 souhaitées (formation possible).]',
    date: '[JJ/MM/AAAA — placeholder]',
  },
  {
    title: 'Alternant conducteur de travaux (H/F)',
    contract: 'Alternance',
    territory: 'Pays Basque & 64',
    family: 'Encadrement',
    agency: 'Arcangues (64)',
    summary:
      '[2-3 phrases — alternance 12-24 mois en conduite de travaux TP. Vous préparez un BTS, une Licence Pro ou un diplôme d\'ingénieur. Vous participez à la préparation et au suivi de chantiers réseaux.]',
    date: '[JJ/MM/AAAA — placeholder]',
  },
  {
    title: 'Canalisateur (H/F)',
    contract: 'CDI',
    territory: 'Toulouse & 31',
    family: 'Terrain',
    agency: 'Muret (31)',
    summary:
      '[2-3 phrases — pose de canalisations gaz et eau potable en PEHD, soudure bout à bout et électrosoudage. CAP ou expérience terrain. Formation soudure PEHD assurée si besoin.]',
    date: '[JJ/MM/AAAA — placeholder]',
  },
  {
    title: 'Technicien IRVE (H/F)',
    contract: 'CDI',
    territory: 'Bordeaux & 33',
    family: 'Terrain',
    agency: 'Pessac (33)',
    summary:
      '[2-3 phrases — installation et raccordement de bornes de recharge pour entreprises et copropriétés. Bac Pro ou BTS Électrotechnique. Formation qualification IRVE assurée.]',
    date: '[JJ/MM/AAAA — placeholder]',
  },
  {
    title: 'Manœuvre TP (H/F)',
    contract: 'CDI',
    territory: 'Pays Basque & 64',
    family: 'Terrain',
    agency: 'Bayonne (64)',
    summary:
      '[2-3 phrases — aide aux travaux de terrassement, pose de canalisations, balisage de chantier. Pas de diplôme requis — formation assurée sur le terrain. Permis B souhaité.]',
    date: '[JJ/MM/AAAA — placeholder]',
  },
]

const CONTRACT_FILTERS = ['Tous', 'CDI', 'Alternance']
const TERRITORY_FILTERS = ['Tous', 'Toulouse & 31', 'Bordeaux & 33', 'Pays Basque & 64']
const FAMILY_FILTERS = ['Tous', 'Terrain', 'Encadrement', 'Bureau d\'études']

const RETOUR_CARDS = [
  {
    title: 'Travailler chez ETPM',
    text: '[1 ligne — pourquoi les TP, pourquoi ETPM, quels avantages]',
    to: '/nous-rejoindre/emploi-travaux-publics',
  },
  {
    title: 'Nos métiers',
    text: '[1 ligne — du manœuvre au conducteur de travaux]',
    to: '/nous-rejoindre/metiers',
  },
  {
    title: 'Alternance TP',
    text: '[1 ligne — du CAP à l\'ingénieur, formez-vous sur le terrain]',
    to: '/nous-rejoindre/alternance',
  },
]

export default function OffresEmploi() {
  const [activeContract, setActiveContract] = useState('Tous')
  const [activeTerritory, setActiveTerritory] = useState('Tous')
  const [activeFamily, setActiveFamily] = useState('Tous')
  const formRef = useRef(null)

  const filtered = OFFRES.filter((o) => {
    const matchContract = activeContract === 'Tous' || o.contract === activeContract
    const matchTerritory = activeTerritory === 'Tous' || o.territory === activeTerritory
    const matchFamily = activeFamily === 'Tous' || o.family === activeFamily
    return matchContract && matchTerritory && matchFamily
  })

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const contractGroup = {
    label: 'Contrat',
    filters: CONTRACT_FILTERS.map((f) => ({
      label: f, value: f, active: activeContract === f,
    })),
    onToggle: (val) => setActiveContract(val),
  }

  const territoryGroup = {
    label: 'Territoire',
    filters: TERRITORY_FILTERS.map((f) => ({
      label: f, value: f, active: activeTerritory === f,
    })),
    onToggle: (val) => setActiveTerritory(val),
  }

  const familyGroup = {
    label: 'Métier',
    filters: FAMILY_FILTERS.map((f) => ({
      label: f, value: f, active: activeFamily === f,
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
              { label: 'Nos offres' },
            ]}
          />
          <h1 className={styles.heroTitle}>Nos offres d'emploi</h1>
          <p className={styles.heroText}>
            [Texte 2 phrases — retrouvez toutes les offres ETPM dans le Grand Sud-Ouest. CDI,
            alternance, tous métiers. Vous ne trouvez pas votre poste ? Envoyez une candidature
            spontanée.]
          </p>
          <Link to="/contact" className={styles.contextualLink}>
            Candidature spontanée →
          </Link>
        </div>
      </motion.section>

      {/* BLOC 2 — FILTRES */}
      <section className={styles.filtres}>
        <div className="container">
          <FilterBar groups={[contractGroup, territoryGroup, familyGroup]} />
          <p className={styles.compteur}>
            {filtered.length} offre{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* BLOC 3 — LISTE DES OFFRES */}
      <section className={styles.liste}>
        <div className="container">
          <motion.div
            className={styles.listeGrid}
            initial="hidden"
            animate="visible"
            variants={stagger}
            key={`${activeContract}-${activeTerritory}-${activeFamily}`}
          >
            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                filtered.map((offre) => (
                  <motion.div
                    key={offre.title}
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  >
                    <JobCardExtended
                      title={offre.title}
                      tags={[offre.contract, offre.territory, offre.family]}
                      agency={offre.agency}
                      summary={offre.summary}
                      date={offre.date}
                      onApply={scrollToForm}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className={styles.empty}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                >
                  <p className={styles.emptyText}>
                    Aucune offre ne correspond à vos critères actuellement. Envoyez-nous une
                    candidature spontanée — nous recrutons tout au long de l'année.
                  </p>
                  <Button to="/contact">Candidature spontanée</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — FORMULAIRE DE CANDIDATURE */}
      <motion.section
        className={styles.formulaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
        ref={formRef}
      >
        <div className="container">
          <SectionTitle>Postuler chez ETPM</SectionTitle>
          <p className={styles.formulaireIntro}>
            [1-2 phrases — remplissez le formulaire ci-dessous ou envoyez votre CV à
            recrutement@etpm.fr (placeholder email).]
          </p>
          <ApplicationForm />
        </div>
      </motion.section>

      {/* BLOC 5 — CANDIDATURE SPONTANÉE */}
      <motion.section
        className={styles.spontanee}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.spontaneeGrid}`}>
          <div>
            <SectionTitle>Candidature spontanée</SectionTitle>
            <p className={styles.spontaneeText}>
              [3-4 phrases — vous ne trouvez pas votre poste dans la liste ? ETPM recrute tout au
              long de l'année sur l'ensemble de ses métiers. Envoyez-nous votre CV et nous vous
              recontacterons dès qu'un poste correspondant s'ouvre dans l'une de nos 7 agences. Les
              candidatures spontanées représentent X% de nos recrutements (placeholder %).]
            </p>
            <Button onClick={scrollToForm}>Candidature spontanée</Button>
          </div>
          <Placeholder
            text="[Photo : collaborateur ETPM souriant à l'accueil d'une agence, ambiance conviviale]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 6 — MAILLAGE RETOUR */}
      <section className={styles.retour}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>En savoir plus</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.retourGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {RETOUR_CARDS.map((card) => (
              <motion.div key={card.title} variants={fadeIn}>
                <Link to={card.to} className={styles.retourCard}>
                  <h3 className={styles.retourCardTitle}>{card.title}</h3>
                  <p className={styles.retourCardText}>{card.text}</p>
                  <span className={styles.retourCardLink}>Découvrir →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
