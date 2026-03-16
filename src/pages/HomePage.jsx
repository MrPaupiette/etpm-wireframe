import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Counter from '../components/ui/Counter'
import Placeholder from '../components/ui/Placeholder'
import styles from './HomePage.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const EXPERTISES = [
  {
    image: '[Photo : tranchée ouverte avec canalisations PEHD, engin de terrassement en arrière-plan]',
    title: 'VRD & Viabilisation',
    text: '[1 ligne — raccordement réseaux, terrassement, tranchées, lotissements et aménagements — KW : viabilisation (720/mois, KD 4), entreprise vrd (590/mois, KD 9)]',
    to: '/expertises/vrd-viabilisation',
  },
  {
    image: '[Photo : rangée de candélabres LED allumés au crépuscule sur avenue urbaine]',
    title: 'Éclairage public',
    text: '[1 ligne — installation, rénovation LED, éclairage intelligent et solaire, mise en lumière patrimoine — KW : éclairage public (4 400/mois, KD 42)]',
    to: '/expertises/eclairage-public',
  },
  {
    image: '[Photo : borne de recharge électrique installée sur parking d\'entreprise ou copropriété]',
    title: 'IRVE — Bornes de recharge',
    text: '[1 ligne — installation bornes entreprises, copropriétés, parkings publics, qualification IRVE — KW : installateur irve (590/mois, KD 6)]',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    image: '[Photo : poste de transformation HTA/BT ou câblage souterrain haute tension]',
    title: 'Réseaux d\'énergie',
    text: '[1 ligne — réseaux HTA/BT, postes de transformation, branchements électriques et gaz, canalisations — KW : réseau hta (320/mois, KD 7)]',
    to: '/expertises/reseaux-energie',
  },
  {
    image: '[Photo : aspiratrice excavatrice RSP en action ou terrassement grande envergure]',
    title: 'Travaux publics & Terrassement',
    text: '[1 ligne — terrassement VRD, tranchées, canalisations enterrées, parc matériel lourd — KW : terrassement vrd (390/mois, KD 3)]',
    to: '/expertises/travaux-publics-terrassement',
  },
]

const TERRITOIRES = [
  {
    image: '[Photo : vue urbaine Toulouse brique rose ou chantier urbain 31]',
    title: 'Toulouse & Haute-Garonne',
    text: '[1 ligne — agences Muret et Toulouse, VRD/éclairage/réseaux/IRVE sur le département 31 — KW : entreprise tp toulouse (260/mois, KD 11)]',
    to: '/territoires/toulouse-haute-garonne',
  },
  {
    image: '[Photo : Bordeaux quais ou chantier VRD péri-urbain gironde]',
    title: 'Bordeaux & Gironde',
    text: '[1 ligne — agence Pessac, travaux publics et VRD en Gironde — KW : entreprise tp bordeaux (140/mois, KD 3)]',
    to: '/territoires/bordeaux-gironde',
  },
  {
    image: '[Photo : paysage Pays Basque ou chantier rural côte basque]',
    title: 'Pays Basque & Landes',
    text: '[1 ligne — siège historique Arcangues, berceau d\'ETPM depuis 1965, agences Bayonne — KW : entreprise tp pau (50/mois, KD 9)]',
    to: '/territoires/pays-basque-landes',
  },
]

const REALISATIONS = [
  {
    image: '[Photo : chantier VRD terminé — lotissement viabilisé]',
    title: 'Viabilisation lotissement — Muret (31)',
    tag: 'VRD',
  },
  {
    image: '[Photo : éclairage public LED installé — avenue ou rond-point]',
    title: 'Relamping LED — Bordeaux Métropole',
    tag: 'Éclairage',
  },
  {
    image: '[Photo : bornes IRVE sur parking]',
    title: 'Installation IRVE — Copropriété Bayonne',
    tag: 'IRVE',
  },
]

export default function HomePage() {
  return (
    <>
      {/* BLOC 1 — HERO */}
      <section className={styles.hero}>
        <Placeholder
          text="[Photo grand format : équipe ETPM en gilet orange sur chantier tranchée VRD, paysage sud-ouest en arrière-plan, lumière naturelle matin]"
          ratio="auto"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Réseaux d'énergie, éclairage public et VRD dans le Grand Sud-Ouest
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            [Sous-titre 1 ligne — positionner ETPM comme entreprise TP multi-réseaux, ancrage
            géographique sud-ouest, 60 ans d'expertise — KW : etpm (branded, ~1 200/mois)]
          </motion.p>
          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button to="/expertises" variant="white">
              Découvrir nos expertises
            </Button>
            <Button to="/nous-rejoindre" variant="outlineWhite">
              Nous rejoindre
            </Button>
          </motion.div>
        </div>
      </section>

      {/* BLOC 2 — INTRO GROUPE */}
      <motion.section
        className={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.introInner}`}>
          <h2 className={styles.introTitle}>60 ans au service des territoires</h2>
          <p className={styles.introText}>
            [Texte 2-3 phrases — ETPM Entreprise de Travaux Publics du Midi, filiale du Groupe
            Synelis, 354 collaborateurs, 7 agences, expertise réseaux d'énergie/éclairage/VRD/IRVE
            depuis 1965, ancrage Pays Basque étendu au Grand Sud-Ouest — KW secondaires : entreprise
            travaux publics midi, entreprise tp sud-ouest]
          </p>
          <a
            href="https://synelis.fr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.introLink}
          >
            Découvrir le Groupe Synelis →
          </a>
        </div>
      </motion.section>

      {/* BLOC 3 — NOS EXPERTISES */}
      <section className={styles.expertises}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — ETPM intervient sur 5 métiers complémentaires, de l'étude à la maintenance]"
            >
              Nos expertises
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.expertisesGrid}
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
                  to={item.to}
                  ratio="16/10"
                />
              </motion.div>
            ))}
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
          <SectionTitle align="center" light>
            ETPM en chiffres
          </SectionTitle>
          <div className={styles.chiffresGrid}>
            <Counter value={63} label="M€ de chiffre d'affaires" />
            <Counter value={354} label="collaborateurs" />
            <Counter value={7} label="agences dans le Sud-Ouest" />
            <Counter value={60} label="ans d'expérience" />
            <div className={styles.counterWithLink}>
              <Counter value={1} label="" />
              <span className={styles.counterLabel}>
                groupe —{' '}
                <a
                  href="https://synelis.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.synelis}
                >
                  Synelis
                </a>
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 5 — NOS TERRITOIRES */}
      <section className={styles.territoires}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — 7 agences couvrent le Grand Sud-Ouest, de Toulouse au Pays Basque]"
            >
              Nos territoires
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.territoiresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {TERRITOIRES.map((item) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  to={item.to}
                  ratio="16/9"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 6 — DERNIÈRES RÉALISATIONS */}
      <section className={styles.realisations}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — retrouvez nos chantiers récents en VRD, éclairage, réseaux et IRVE dans le Sud-Ouest]"
            >
              Nos dernières réalisations
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.realisationsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {REALISATIONS.map((item) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card
                  image={item.image}
                  title={item.title}
                  tag={item.tag}
                  ratio="16/10"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className={styles.realisationsCta}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <Button to="/realisations" variant="secondary">
              Voir toutes nos réalisations →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* BLOC 7 — NOUS REJOINDRE */}
      <motion.section
        className={styles.rejoindre}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.rejoindreInner}`}>
          <div className={styles.rejoindreText}>
            <h2 className={styles.rejoindreTitle}>Rejoindre ETPM</h2>
            <p className={styles.rejoindreParagraph}>
              [Accroche 2 lignes — ETPM recrute des femmes et hommes de terrain, du manœuvre au
              conducteur de travaux, en CDI et alternance — évoquer le sens du métier, l'esprit
              collectif, la formation interne — KW : emploi travaux publics (210/mois, KD 6)]
            </p>
            <ul className={styles.rejoindreLinks}>
              <li>
                <Link to="/nous-rejoindre/metiers" className={styles.rejoindreLink}>
                  Nos métiers →
                </Link>
              </li>
              <li>
                <Link to="/nous-rejoindre/alternance" className={styles.rejoindreLink}>
                  Alternance TP →
                </Link>
              </li>
              <li>
                <Link to="/nous-rejoindre/offres" className={styles.rejoindreLink}>
                  Voir les offres →
                </Link>
              </li>
            </ul>
            <Button to="/nous-rejoindre" variant="white">
              Rejoindre l'équipe
            </Button>
          </div>
          <div className={styles.rejoindreImage}>
            <Placeholder
              text="[Photo : portrait groupe 3-4 collaborateurs ETPM souriants, gilets terrain, ambiance fin de chantier]"
              ratio="4/3"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 8 — CTA BANDEAU FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <p className={styles.ctaFinalText}>
            [Accroche 1 ligne — inviter à prendre contact pour un projet VRD, éclairage, réseaux ou
            IRVE dans le Sud-Ouest]
          </p>
          <Button to="/contact" variant="primary">
            Demander un devis
          </Button>
        </div>
      </motion.section>
    </>
  )
}
