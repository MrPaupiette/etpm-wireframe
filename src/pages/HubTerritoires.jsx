import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import styles from './HubTerritoires.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const EXPERTISES_LINKS = [
  { label: 'VRD & Viabilisation', to: '/expertises/vrd-viabilisation' },
  { label: 'Éclairage public', to: '/expertises/eclairage-public' },
  { label: 'IRVE — Bornes de recharge', to: '/expertises/irve-bornes-recharge' },
  { label: 'Réseaux d\'énergie', to: '/expertises/reseaux-energie' },
  { label: 'TP & Terrassement', to: '/expertises/travaux-publics-terrassement' },
]

export default function HubTerritoires() {
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
              { label: 'Nos territoires' },
            ]}
          />
          <h1 className={styles.heroTitle}>Nos territoires dans le Grand Sud-Ouest</h1>
          <p className={styles.heroText}>
            [Texte 2-3 phrases — ETPM est implantée dans le Grand Sud-Ouest depuis 60 ans, avec 7
            agences couvrant la Haute-Garonne, la Gironde, le Pays Basque, les Landes et le Gers.
            Cette proximité géographique nous permet d'intervenir rapidement sur vos chantiers de
            VRD, éclairage public, réseaux d'énergie et IRVE.]
          </p>
        </div>
      </motion.section>

      {/* BLOC 2 — CARTE DES AGENCES */}
      <motion.section
        className={styles.carte}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.carteGrid}`}>
          <div>
            <Placeholder
              text="[Carte stylisée du Sud-Ouest de la France — fond gris clair, forme des départements simplifiée (31, 33, 64, 40, 32). 7 points noirs indiquant les agences : Arcangues (siège, point plus gros), Muret, Toulouse, Pessac, Auch, Bayonne, Pluvigner. 3 zones en nuances de gris correspondant aux 3 territoires.]"
              ratio="4/3"
            />
            <p className={styles.carteLegend}>● Siège — Arcangues (64) &nbsp;|&nbsp; ● Agences</p>
          </div>
          <div>
            <SectionTitle>7 agences à votre service</SectionTitle>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
            >
              <motion.div variants={fadeIn} className={styles.zoneGroup}>
                <h3 className={styles.zoneGroupTitle}>Toulouse & Haute-Garonne</h3>
                <p className={styles.zoneGroupAgences}>Muret (31) · Toulouse (31)</p>
                <Link to="/territoires/toulouse-haute-garonne" className={styles.contextualLink}>
                  Découvrir →
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className={styles.zoneGroup}>
                <h3 className={styles.zoneGroupTitle}>Bordeaux & Gironde</h3>
                <p className={styles.zoneGroupAgences}>Pessac (33)</p>
                <Link to="/territoires/bordeaux-gironde" className={styles.contextualLink}>
                  Découvrir →
                </Link>
              </motion.div>

              <motion.div variants={fadeIn} className={styles.zoneGroup}>
                <h3 className={styles.zoneGroupTitle}>Pays Basque & Landes</h3>
                <p className={styles.zoneGroupAgences}>
                  Arcangues (64, siège) · Bayonne (64)
                </p>
                <Link to="/territoires/pays-basque-landes" className={styles.contextualLink}>
                  Découvrir →
                </Link>
              </motion.div>

              <motion.p variants={fadeIn} className={styles.zoneComplement}>
                Aussi présent à Auch (32) et Pluvigner (56)
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 3 — 3 CARDS TERRITOIRES */}
      <section className={styles.territoires}>
        <div className="container">
          <motion.div
            className={styles.territoiresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <Card
                image="[Photo : vue de Toulouse — Capitole ou bord de Garonne avec pont, ambiance urbaine dynamique]"
                title="Toulouse & Haute-Garonne"
                text="[2-3 lignes — ETPM est le partenaire TP de référence de la métropole toulousaine. VRD, éclairage public, réseaux d'énergie et IRVE pour les collectivités, promoteurs et aménageurs du département 31. Agences Muret et Toulouse. — KW distribué : entreprise tp toulouse (260/mois, KD 11)]"
                to="/territoires/toulouse-haute-garonne"
                tag="URGENCE — 330 rech/mois"
                ratio="16/9"
                titleAs="h2"
                titleSerif
                clickable
                linkText="Découvrir →"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card
                image="[Photo : vue de Bordeaux — quais, place de la Bourse ou miroir d'eau, ambiance urbaine]"
                title="Bordeaux & Gironde"
                text="[2-3 lignes — agence Pessac, ETPM intervient sur les chantiers VRD et réseaux de Bordeaux Métropole et de la Gironde. Terrassement, éclairage public, réseaux électriques et gaz. — KW distribué : entreprise tp bordeaux (140/mois, KD 3)]"
                to="/territoires/bordeaux-gironde"
                tag="Quick win — 340 rech/mois"
                ratio="16/9"
                titleAs="h2"
                titleSerif
                clickable
                linkText="Découvrir →"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card
                image="[Photo : paysage Pays Basque — montagne ou côte basque, ambiance verte et maritime]"
                title="Pays Basque & Landes"
                text="[2-3 lignes — siège historique d'ETPM à Arcangues, berceau de l'entreprise depuis 1965. Travaux publics, VRD et réseaux au Pays Basque, dans les Landes et le Béarn. — KW distribué : entreprise tp pau (50/mois, KD 9)]"
                to="/territoires/pays-basque-landes"
                tag="Historique — 90 rech/mois"
                ratio="16/9"
                titleAs="h2"
                titleSerif
                clickable
                linkText="Découvrir →"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — NOS EXPERTISES SUR LE TERRAIN */}
      <section className={styles.expertises}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — les 5 métiers d'ETPM sont déployés sur l'ensemble de nos zones d'intervention]"
            >
              Nos expertises sur tous nos territoires
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.expertisesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {EXPERTISES_LINKS.map((item) => (
              <motion.div key={item.label} variants={fadeIn}>
                <Link to={item.to} className={styles.expertiseCard}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 5 — CTA FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Un projet dans le Sud-Ouest ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — contactez l'agence ETPM la plus proche pour un devis adapté à votre
            territoire]
          </p>
          <Button to="/contact" variant="white">
            Nous contacter
          </Button>
        </div>
      </motion.section>
    </>
  )
}
