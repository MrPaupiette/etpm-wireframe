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
    text: '[2 phrases — viabilisation de lotissements et ZAC, tranchées, canalisations pour les promoteurs et collectivités du Pays Basque et des Landes.]',
    to: '/expertises/vrd-viabilisation',
  },
  {
    title: 'Éclairage public',
    text: '[2 phrases — installation, relamping LED et maintenance pour les communes du Pays Basque, des Landes et du Béarn.]',
    to: '/expertises/eclairage-public',
  },
  {
    title: 'Bornes de recharge IRVE',
    text: '[2 phrases — installation bornes de recharge entreprises et copropriétés au Pays Basque et dans les Landes.]',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    title: 'Réseaux d\'énergie',
    text: '[2 phrases — réseaux électriques HTA/BT pour Enedis, canalisations gaz pour GRDF au Pays Basque et dans les Landes.]',
    to: '/expertises/reseaux-energie',
  },
  {
    title: 'Terrassement',
    text: '[2 phrases — terrassement VRD, tranchées et canalisations sur les chantiers du 64 et du 40, y compris en terrain rocheux.]',
    to: '/expertises/travaux-publics-terrassement',
  },
]

const REFERENCES = [
  {
    image: '[Photo : chantier VRD au Pays Basque — lotissement ou aménagement, paysage vert en arrière-plan]',
    title: 'Viabilisation lotissement — Arcangues (64)',
    tags: 'VRD · Pays Basque',
    text: '[1-2 lignes — X lots viabilisés, réseaux complets, terrain vallonné]',
  },
  {
    image: '[Photo : éclairage public installé dans commune basque ou landaise]',
    title: 'Éclairage LED — commune du Pays Basque',
    tags: 'Éclairage · Pays Basque',
    text: '[1-2 lignes — X points lumineux, relamping centre-bourg]',
  },
  {
    image: '[Photo : chantier réseau dans les Landes ou le Béarn]',
    title: 'Extension réseau gaz — Landes (40)',
    tags: 'Réseaux · Landes',
    text: '[1-2 lignes — X mètres linéaires de canalisation PEHD gaz]',
  },
]

const ARGUMENTS = [
  {
    title: 'Le berceau d\'ETPM — depuis 1965',
    text: '[2 phrases — ETPM est née à Arcangues en 1965. 60 ans d\'ancrage local, des équipes qui connaissent chaque recoin du territoire, les sols, les contraintes et les interlocuteurs.]',
  },
  {
    title: '354 collaborateurs, un parc matériel en propre',
    text: '[2 phrases — pas de sous-traitance systématique. ETPM dispose de ses propres équipes et engins, garantissant réactivité même sur les chantiers les plus reculés du territoire.]',
  },
  {
    title: 'Tous les réseaux, un seul interlocuteur',
    text: '[2 phrases — VRD, éclairage, réseaux électriques, gaz, IRVE : ETPM couvre l\'ensemble des besoins. Un seul contrat, un seul responsable, une coordination simplifiée.]',
  },
  {
    title: 'Filiale du Groupe Synelis',
    text: '[2 phrases — ETPM s\'appuie sur la solidité du Groupe Synelis (700 personnes, 6 filiales). La garantie de solidité financière et d\'assise technique pour les marchés publics et les grands donneurs d\'ordre.]',
  },
]

export default function TerritoirePaysBasque() {
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
              { label: 'Pays Basque & Landes' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Travaux publics et réseaux au Pays Basque et dans les Landes — ETPM
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — le Pays Basque est le berceau d'ETPM : siège à Arcangues depuis
                1965, agence Bayonne. 60 ans d'ancrage local au service des collectivités,
                promoteurs et aménageurs du 64 et du 40. VRD, éclairage, réseaux d'énergie, IRVE. —
                KW : entreprise tp pau (50/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Contacter le siège
              </Button>
            </div>
            <Placeholder
              text="[Photo : chantier ETPM au Pays Basque — paysage vert et vallonné, engins sur chantier VRD, montagne ou côte basque en arrière-plan]"
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
              chapeau="[1 ligne — les 5 métiers d'ETPM déployés au Pays Basque, dans les Landes et le Béarn]"
            >
              Nos interventions au Pays Basque et dans les Landes
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
            <SectionTitle>Nos chantiers récents au Pays Basque et dans les Landes</SectionTitle>
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
          <SectionTitle>Nos agences au Pays Basque</SectionTitle>
          <div className={styles.agencesGrid}>
            <AgencyCard
              image="[Photo : siège ETPM Arcangues — bâtiment principal ou vue aérienne du site]"
              name="Siège — Arcangues"
              address="[Adresse complète siège Arcangues — à récupérer auprès du client]"
              phone="05 XX XX XX XX"
              text="[1-2 phrases — siège historique d'ETPM depuis 1965, direction générale et base opérationnelle Pays Basque]"
            />
            <AgencyCard
              image="[Photo : agence ETPM Bayonne]"
              name="Agence de Bayonne"
              address="[Adresse complète agence Bayonne — à récupérer]"
              phone="05 XX XX XX XX"
              text="[1-2 phrases — agence dédiée à la côte basque et au BAB (Bayonne-Anglet-Biarritz)]"
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
          <SectionTitle>Pourquoi choisir ETPM au Pays Basque ?</SectionTitle>
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
            Un projet au Pays Basque ou dans les Landes ?
          </h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — VRD, éclairage public, réseaux, IRVE — contactez notre siège à Arcangues]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/contact" variant="white">
              Contacter le siège
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
