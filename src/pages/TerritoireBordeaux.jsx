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
    text: '[2 phrases — viabilisation de lotissements et ZAC, tranchées et raccordement réseaux pour les promoteurs et collectivités de Gironde. — KW : entreprise vrd bordeaux (20/mois)]',
    to: '/expertises/vrd-viabilisation',
  },
  {
    title: 'Éclairage public',
    text: '[2 phrases — installation neuve, relamping LED et maintenance pour les communes et intercommunalités de Gironde. — KW : éclairage public bordeaux (90/mois)]',
    to: '/expertises/eclairage-public',
  },
  {
    title: 'Bornes de recharge IRVE',
    text: '[2 phrases — installation bornes de recharge entreprises, copropriétés et parkings publics sur Bordeaux Métropole et la Gironde.]',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    title: 'Réseaux d\'énergie',
    text: '[2 phrases — réseaux électriques HTA/BT pour Enedis, canalisations gaz pour GRDF, postes de transformation en Gironde.]',
    to: '/expertises/reseaux-energie',
  },
  {
    title: 'Terrassement',
    text: '[2 phrases — terrassement VRD, tranchées et canalisations enterrées sur les chantiers bordelais et girondins.]',
    to: '/expertises/travaux-publics-terrassement',
  },
]

const REFERENCES = [
  {
    image: '[Photo : chantier VRD sur nouveau quartier bordelais — Euratlantique, Bassins à flot ou Ginko]',
    title: 'Viabilisation quartier neuf — Bordeaux Métropole',
    tags: 'VRD · Bordeaux',
    text: '[1-2 lignes — X lots viabilisés, réseaux complets, coordination multi-réseaux]',
  },
  {
    image: '[Photo : éclairage public LED installé sur boulevard bordelais ou quais]',
    title: 'Relamping LED — commune de Gironde',
    tags: 'Éclairage · Bordeaux',
    text: '[1-2 lignes — X points lumineux convertis en LED, économie XX%]',
  },
  {
    image: '[Photo : chantier réseau souterrain en milieu urbain bordelais]',
    title: 'Réseau HTA — Pessac (33)',
    tags: 'Réseaux · Bordeaux',
    text: '[1-2 lignes — extension réseau Enedis, X mètres linéaires]',
  },
]

const ARGUMENTS = [
  {
    title: 'Bordeaux Métropole en pleine expansion',
    text: '[2 phrases — nouveaux quartiers, extensions de réseau, densification urbaine : Bordeaux est l\'un des marchés TP les plus dynamiques du Sud-Ouest. ETPM accompagne cette croissance avec son agence de Pessac.]',
  },
  {
    title: '354 collaborateurs, un parc matériel en propre',
    text: '[2 phrases — pas de sous-traitance systématique. ETPM dispose de ses propres équipes et engins, garantissant réactivité et maîtrise des délais sur les chantiers bordelais.]',
  },
  {
    title: 'Tous les réseaux, un seul interlocuteur',
    text: '[2 phrases — VRD, éclairage, réseaux électriques, gaz, IRVE : ETPM couvre l\'ensemble des besoins d\'un chantier de réseaux. Un seul contrat, un seul responsable.]',
  },
  {
    title: 'Filiale du Groupe Synelis',
    text: '[2 phrases — ETPM s\'appuie sur la solidité du Groupe Synelis (700 personnes, 6 filiales). Les marchés publics et les grands donneurs d\'ordre y trouvent la garantie de solidité financière qu\'ils recherchent.]',
  },
]

export default function TerritoireBordeaux() {
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
              { label: 'Bordeaux & Gironde' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Travaux publics et VRD à Bordeaux et en Gironde — ETPM
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — ETPM est implantée à Pessac avec une agence dédiée à Bordeaux
                Métropole et au département 33. VRD, éclairage public, réseaux d'énergie et IRVE :
                nous accompagnons la dynamique d'expansion bordelaise. — KW : entreprise tp bordeaux
                (140/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Contacter l'agence Bordeaux
              </Button>
            </div>
            <Placeholder
              text="[Photo : chantier ETPM en zone urbaine bordelaise — tranchée VRD ou pose de réseau, avec éléments architecturaux de Bordeaux en arrière-plan]"
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
              chapeau="[1 ligne — les 5 métiers d'ETPM déployés sur Bordeaux Métropole et le département 33]"
            >
              Nos interventions à Bordeaux et en Gironde
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
            <SectionTitle>Nos chantiers récents à Bordeaux et en Gironde</SectionTitle>
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

      {/* BLOC 4 — AGENCE */}
      <motion.section
        className={styles.agences}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Notre agence en Gironde</SectionTitle>
          <div className={styles.agencesGrid1}>
            <AgencyCard
              image="[Photo : façade ou entrée de l'agence ETPM Pessac, ou vue aérienne zone d'activité]"
              name="Agence de Pessac"
              address="[Adresse complète agence Pessac — à récupérer auprès du client]"
              phone="05 XX XX XX XX"
              text="[1-2 phrases — agence Gironde, couvre Bordeaux Métropole et le département 33, équipes VRD/éclairage/réseaux]"
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
          <SectionTitle>Pourquoi choisir ETPM à Bordeaux ?</SectionTitle>
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
            Un projet à Bordeaux ou en Gironde ?
          </h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — VRD, éclairage public, réseaux, IRVE — contactez notre agence de Pessac]
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
