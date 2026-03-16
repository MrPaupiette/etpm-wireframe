import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import AgencyCard from '../components/ui/AgencyCard'
import styles from './TerritoirePage.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const INTERVENTIONS = [
  {
    title: 'VRD & Viabilisation',
    text: '[2 phrases — viabilisation de lotissements, tranchées, pose de canalisations, raccordement aux réseaux pour les promoteurs et collectivités du 31. — KW : entreprise vrd toulouse (40/mois)]',
    to: '/expertises/vrd-viabilisation',
  },
  {
    title: 'Éclairage public',
    text: '[2 phrases — installation, relamping LED, éclairage intelligent et maintenance du parc luminaire des communes de Haute-Garonne. — KW : éclairage public toulouse (30/mois)]',
    to: '/expertises/eclairage-public',
  },
  {
    title: 'Bornes de recharge IRVE',
    text: '[2 phrases — installation de bornes de recharge pour les entreprises, copropriétés et parkings publics de Toulouse et du 31.]',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    title: 'Réseaux d\'énergie',
    text: '[2 phrases — réseaux électriques HTA/BT pour Enedis, canalisations gaz pour GRDF, postes de transformation dans le département.]',
    to: '/expertises/reseaux-energie',
  },
  {
    title: 'Terrassement',
    text: '[2 phrases — terrassement VRD, tranchées, canalisations enterrées pour tous types de chantiers dans la métropole et le péri-urbain.]',
    to: '/expertises/travaux-publics-terrassement',
  },
]

const REFERENCES = [
  {
    image: '[Photo : chantier VRD terminé dans la métropole toulousaine — lotissement ou ZAC]',
    title: 'Viabilisation ZAC — Muret (31)',
    tags: 'VRD · Toulouse',
    text: '[1-2 lignes — X lots, réseaux complets eau/élec/gaz/télécom/assainissement]',
  },
  {
    image: '[Photo : éclairage public LED installé sur avenue ou rond-point toulousain]',
    title: 'Relamping LED — Toulouse Métropole',
    tags: 'Éclairage · Toulouse',
    text: '[1-2 lignes — X points lumineux convertis, économie XX%]',
  },
  {
    image: '[Photo : chantier réseau Enedis en milieu urbain toulousain]',
    title: 'Extension réseau HTA — Haute-Garonne',
    tags: 'Réseaux · Toulouse',
    text: '[1-2 lignes — X mètres linéaires de câble HTA souterrain]',
  },
]

const ARGUMENTS = [
  {
    title: '60 ans d\'ancrage dans le Sud-Ouest',
    text: '[2 phrases — ETPM est née au Pays Basque en 1965 et s\'est développée vers Toulouse. Nos équipes locales connaissent les sols argileux du bassin toulousain, les contraintes urbaines de la métropole et les interlocuteurs du département.]',
  },
  {
    title: '354 collaborateurs, un parc matériel en propre',
    text: '[2 phrases — pas de sous-traitance systématique. ETPM dispose de ses propres équipes et engins, garantissant réactivité et maîtrise des délais.]',
  },
  {
    title: 'Tous les réseaux, un seul interlocuteur',
    text: '[2 phrases — VRD, éclairage, réseaux électriques, gaz, IRVE : ETPM couvre l\'ensemble des besoins d\'un chantier de réseaux. Un seul contrat, un seul responsable, une coordination simplifiée.]',
  },
  {
    title: 'Filiale du Groupe Synelis',
    text: '[2 phrases — ETPM s\'appuie sur la solidité du Groupe Synelis (700 personnes, 6 filiales). Les marchés publics et les grands donneurs d\'ordre y trouvent la garantie de solidité financière et d\'assise technique qu\'ils recherchent.]',
  },
]

export default function TerritoireToulouse() {
  return (
    <>
      {/* BLOC 1 — HERO */}
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
              { label: 'Nos territoires', to: '/territoires' },
              { label: 'Toulouse & Haute-Garonne' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Travaux publics et VRD à Toulouse et en Haute-Garonne — ETPM
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — ETPM est implantée à Toulouse et Muret avec 2 agences et des
                équipes dédiées au département 31. VRD, viabilisation, éclairage public, réseaux
                d'énergie et IRVE : nous intervenons sur tous les chantiers de la métropole et du
                département. — KW : entreprise tp toulouse (260/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Contacter l'agence Toulouse
              </Button>
            </div>
            <Placeholder
              text="[Photo : chantier ETPM en zone urbaine toulousaine — tranchée VRD ou candélabre en cours d'installation, avec brique rose ou éléments architecturaux de Toulouse en arrière-plan]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — INTERVENTIONS */}
      <section className={styles.interventions}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — les 5 métiers d'ETPM déployés dans la métropole toulousaine et le département 31]"
            >
              Nos interventions à Toulouse et en Haute-Garonne
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.interventionsGrid5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {INTERVENTIONS.map((item) => (
              <motion.div key={item.title} variants={fadeIn} className={styles.interventionCard}>
                <h3 className={styles.interventionTitle}>{item.title}</h3>
                <p className={styles.interventionText}>{item.text}</p>
                <Link to={item.to} className={styles.contextualLink}>
                  En savoir plus →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 3 — RÉFÉRENCES */}
      <section className={styles.references}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Nos chantiers récents à Toulouse et en Haute-Garonne</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.referencesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {REFERENCES.map((ref) => (
              <motion.div key={ref.title} variants={fadeIn}>
                <Card
                  image={ref.image}
                  title={ref.title}
                  text={ref.text}
                  tag={ref.tags}
                  ratio="16/10"
                />
              </motion.div>
            ))}
          </motion.div>
          <Link to="/realisations" className={styles.contextualLink}>
            Voir toutes nos réalisations →
          </Link>
        </div>
      </section>

      {/* BLOC 4 — AGENCES */}
      <motion.section
        className={styles.agences}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Nos agences en Haute-Garonne</SectionTitle>
          <div className={styles.agencesGrid}>
            <AgencyCard
              image="[Photo : façade ou entrée de l'agence ETPM Muret, ou vue aérienne zone d'activité]"
              name="Agence de Muret"
              address="[Adresse complète agence Muret — à récupérer auprès du client]"
              phone="05 XX XX XX XX"
              text="[1-2 phrases — agence principale Haute-Garonne, équipes VRD/éclairage/réseaux dédiées au département 31]"
            />
            <AgencyCard
              image="[Photo : façade ou entrée de l'agence ETPM Toulouse]"
              name="Agence de Toulouse"
              address="[Adresse complète agence Toulouse — à récupérer]"
              phone="05 XX XX XX XX"
              text="[1-2 phrases — présence au cœur de la métropole, interventions rapides centre-ville et première couronne]"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 5 — POURQUOI ETPM */}
      <motion.section
        className={styles.pourquoi}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.pourquoiInner}`}>
          <SectionTitle>Pourquoi choisir ETPM à Toulouse ?</SectionTitle>
          {ARGUMENTS.map((arg) => (
            <div key={arg.title}>
              <h3 className={styles.argumentTitle}>{arg.title}</h3>
              <p className={styles.argumentText}>{arg.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* BLOC 6 — CTA FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>
            Un projet à Toulouse ou en Haute-Garonne ?
          </h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — VRD, éclairage public, réseaux, IRVE — contactez notre agence locale]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/contact" variant="white">
              Contacter l'agence
            </Button>
            <Button href="tel:+33500000000" variant="outlineWhite">
              Appeler le 05 XX XX XX XX
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
