import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import ContactForm from '../components/ui/ContactForm'
import AgencyList from '../components/ui/AgencyList'
import Placeholder from '../components/ui/Placeholder'
import Card from '../components/ui/Card'
import styles from './ContactPage.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const AGENCIES = [
  { name: 'ETPM Arcangues', city: 'Arcangues', department: '64', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: true },
  { name: 'ETPM Muret', city: 'Muret', department: '31', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: false },
  { name: 'ETPM Toulouse', city: 'Toulouse', department: '31', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: false },
  { name: 'ETPM Pessac', city: 'Pessac', department: '33', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: false },
  { name: 'ETPM Bayonne', city: 'Bayonne', department: '64', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: false },
  { name: 'ETPM Auch', city: 'Auch', department: '32', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: false },
  { name: 'ETPM Pluvigner', city: 'Pluvigner', department: '56', address: '[Adresse complète placeholder]', phone: '[05 XX XX XX XX]', isHQ: false },
]

const ACCES_RAPIDES = [
  {
    title: 'Nos offres d\'emploi',
    text: '[Consultez les postes ouverts et postulez en ligne]',
    to: '/nous-rejoindre/offres',
    linkText: 'Voir les offres →',
  },
  {
    title: 'Nos expertises',
    text: '[VRD, éclairage public, IRVE, réseaux d\'énergie, terrassement]',
    to: '/expertises',
    linkText: 'Découvrir →',
  },
  {
    title: 'Nos territoires',
    text: '[7 agences dans le Grand Sud-Ouest — Toulouse, Bordeaux, Pays Basque]',
    to: '/territoires',
    linkText: 'Voir la carte →',
  },
]

export default function ContactPage() {
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
              { label: 'Contact' },
            ]}
          />
          <h1 className={styles.heroTitle}>Contactez ETPM</h1>
          <p className={styles.heroText}>
            [1-2 phrases — demande de devis, candidature, question technique ou partenariat :
            choisissez l'objet de votre message et notre équipe vous répondra sous 48h.]
          </p>
        </div>
      </motion.section>

      {/* BLOC 2 — FORMULAIRE + INFOS */}
      <motion.section
        className={styles.formulaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.formulaireGrid}>
            <ContactForm />
            <div className={styles.infos}>
              <h2 className={styles.infosTitle}>Coordonnées</h2>
              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Siège social</p>
                <p className={styles.infoValue}>ETPM — Groupe Synelis<br />[Adresse siège Arcangues placeholder]</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Téléphone</p>
                <p className={styles.infoValue}>[05 XX XX XX XX]</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Email</p>
                <p className={styles.infoValue}>[contact@etpm.fr — placeholder]</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.infoLabel}>Horaires</p>
                <p className={styles.infoValue}>[Lundi — Vendredi : 8h00 — 17h30]</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 3 — NOS AGENCES */}
      <motion.section
        className={styles.agences}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle
            chapeau="[7 agences dans le Grand Sud-Ouest — retrouvez l'agence la plus proche de votre projet]"
          >
            Nos agences
          </SectionTitle>
          <AgencyList agencies={AGENCIES} />
          <div style={{ marginTop: 32 }}>
            <Placeholder
              text="[Carte — placeholder visuel représentant la localisation des 7 agences dans le Sud-Ouest. Points : Arcangues, Bayonne, Muret, Toulouse, Pessac, Auch, Pluvigner]"
              ratio="21/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 4 — ACCÈS RAPIDES */}
      <section className={styles.acces}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Accès rapides</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.accesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {ACCES_RAPIDES.map((card) => (
              <motion.div key={card.title} variants={fadeIn}>
                <Card
                  title={card.title}
                  text={card.text}
                  to={card.to}
                  linkText={card.linkText}
                  clickable
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
