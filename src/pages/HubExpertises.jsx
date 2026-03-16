import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import styles from './HubExpertises.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const EXPERTISES = [
  {
    image: '[Photo : vue aérienne chantier VRD — tranchées ouvertes sur lotissement, canalisations visibles, engins de terrassement]',
    title: 'VRD & Viabilisation',
    text: '[2-3 lignes — raccordement aux réseaux publics, terrassement, tranchées, canalisations, VRD lotissement et terrain individuel. De l\'étude de sol à la réception de chantier — KW distribués : viabilisation (720/mois), entreprise vrd (590/mois), terrassement vrd (390/mois)]',
    tag: 'Quick win — 3 880 rech/mois',
    to: '/expertises/vrd-viabilisation',
  },
  {
    image: '[Photo : avenue urbaine éclairée par candélabres LED modernes au crépuscule, lumière chaude]',
    title: 'Éclairage public',
    text: '[2-3 lignes — installation neuve, rénovation et relamping LED, éclairage intelligent avec détection et gradation, éclairage solaire autonome, mise en lumière du patrimoine. Du candélabre au pilotage à distance — KW distribués : éclairage public (4 400/mois), éclairage public led (210/mois)]',
    tag: 'Océan bleu — 5 180 rech/mois',
    to: '/expertises/eclairage-public',
  },
  {
    image: '[Photo : borne de recharge rapide sur parking extérieur, véhicule électrique en charge, environnement entreprise ou copropriété]',
    title: 'IRVE — Bornes de recharge',
    text: '[2-3 lignes — installation de bornes pour entreprises, copropriétés et parkings publics, qualification IRVE, dimensionnement et raccordement réseau. Accompagnement de la transition vers la mobilité électrique — KW distribués : installateur irve (590/mois), borne recharge entreprise (590/mois)]',
    tag: 'Croissance — 5 040 rech/mois',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    image: '[Photo : poste de transformation HTA/BT en construction ou câbles haute tension souterrains en cours de pose]',
    title: 'Réseaux d\'énergie',
    text: '[2-3 lignes — construction et maintenance de réseaux électriques HTA/BT/HTB, postes de transformation, canalisations gaz, branchements. Interventions pour Enedis, GRDF et collectivités — KW distribués : réseau hta (320/mois), branchement électrique (1 900/mois)]',
    tag: 'Technique — 2 720 rech/mois',
    to: '/expertises/reseaux-energie',
  },
  {
    image: '[Photo : aspiratrice excavatrice RSP en action sur chantier urbain ou terrassement de grande envergure avec engins lourds]',
    title: 'Travaux publics & Terrassement',
    text: '[2-3 lignes — terrassement VRD, tranchées et canalisations enterrées, réseaux secs et humides, parc matériel lourd avec aspiratrice-excavatrice RSP. Intervention sur tous types de sols et environnements — KW distribués : entreprise vrd (590/mois), terrassement vrd (390/mois)]',
    tag: 'Quick win — 1 040 rech/mois',
    to: '/expertises/travaux-publics-terrassement',
  },
]

export default function HubExpertises() {
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
              { label: 'Nos expertises' },
            ]}
          />
          <h1 className={styles.heroTitle}>Nos expertises</h1>
          <p className={styles.heroText}>
            [Texte 2-3 phrases — ETPM intervient de l'étude à la maintenance sur 5 métiers
            complémentaires : VRD et viabilisation, éclairage public, bornes de recharge IRVE,
            réseaux d'énergie HTA/BT/gaz, et travaux publics. 354 collaborateurs, 7 agences, un
            interlocuteur unique pour tous les réseaux du Sud-Ouest.]
          </p>
        </div>
      </motion.section>

      {/* BLOC 2 — GRILLE EXPERTISES */}
      <section className={styles.grid}>
        <div className="container">
          <motion.div
            className={styles.cards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {EXPERTISES.map((item) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  tag={item.tag}
                  to={item.to}
                  ratio="16/9"
                  titleAs="h2"
                  titleSerif
                  clickable
                  linkText="Découvrir →"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 3 — CTA BANDEAU */}
      <motion.section
        className={styles.cta}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Un projet de réseaux dans le Sud-Ouest ?</h2>
          <p className={styles.ctaText}>
            [1 ligne — ETPM vous accompagne de l'étude au chantier, contactez-nous pour un devis
            adapté]
          </p>
          <div className={styles.ctaButtons}>
            <Button to="/contact" variant="white">
              Demander un devis
            </Button>
            <Button to="/territoires/toulouse-haute-garonne" variant="outlineWhite">
              Nos territoires
            </Button>
          </div>
        </div>
      </motion.section>

      {/* BLOC 4 — MAILLAGE CONTEXTUEL */}
      <motion.section
        className={styles.maillage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.maillageInner}`}>
          <h2 className={styles.maillageTitle}>ETPM, filiale du Groupe Synelis</h2>
          <p className={styles.maillageText}>
            [Texte 2-3 phrases — ETPM est la principale filiale opérationnelle du{' '}
            <a href="https://synelis.fr" target="_blank" rel="noopener noreferrer">
              Groupe Synelis
            </a>
            . Avec 5 autres filiales spécialisées (
            <a href="https://caum.fr" target="_blank" rel="noopener noreferrer">
              fibre optique
            </a>
            ,{' '}
            <a href="https://hpelec.fr" target="_blank" rel="noopener noreferrer">
              caténaire ferroviaire
            </a>
            ,{' '}
            <a href="https://fctp.fr" target="_blank" rel="noopener noreferrer">
              génie civil
            </a>
            , multi-réseaux), le groupe couvre l'ensemble des réseaux d'énergie et de
            télécommunications en France. — Maillage inter-sites contextuel vers synelis.fr]
          </p>
        </div>
      </motion.section>
    </>
  )
}
