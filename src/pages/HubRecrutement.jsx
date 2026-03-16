import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import Counter from '../components/ui/Counter'
import TestimonialBlock from '../components/ui/TestimonialBlock'
import styles from './HubRecrutement.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const POURQUOI = [
  {
    icon: '[Icône/illustration : candélabre allumé ou câble posé — symbole d\'utilité publique]',
    title: 'Des métiers concrets et utiles',
    text: '[2-3 phrases — vous construisez des réseaux qui alimentent des villes, vous éclairez des quartiers, vous viabilisez des terrains pour les familles. Le résultat de votre travail, vous le voyez chaque jour. C\'est le "bleu de travail" dont les gens sont fiers.]',
  },
  {
    icon: '[Icône/illustration : casque + flèche vers le haut — symbole progression]',
    title: 'Formation et évolution',
    text: '[2-3 phrases — ETPM forme en interne : habilitations électriques, CACES, AIPR, soudure PEHD. Les parcours d\'évolution existent : du manœuvre au chef d\'équipe, du chef d\'équipe au chef de chantier, du chef de chantier au conducteur de travaux.]',
  },
  {
    icon: '[Icône/illustration : bâtiment groupe ou S de Synelis — solidité]',
    title: 'La solidité du Groupe Synelis',
    text: '[2-3 phrases — ETPM est la filiale principale du Groupe Synelis : 700 personnes, 6 filiales, 100M€+ de CA. CDI, mutuelle, intéressement, matériel en propre. La stabilité d\'un groupe, l\'agilité d\'une filiale de terrain.]',
  },
  {
    icon: '[Icône/illustration : carte Sud-Ouest ou pin géographique]',
    title: '7 agences, des chantiers près de chez vous',
    text: '[2-3 phrases — de Toulouse à Bayonne en passant par Bordeaux, ETPM a des chantiers dans tout le Sud-Ouest. Pas de grands déplacements systématiques. Vous travaillez sur votre territoire.]',
  },
]

const PORTES = [
  {
    image: '[Photo : chef de chantier sur le terrain avec plan à la main, équipe en arrière-plan]',
    title: 'Travailler chez ETPM',
    text: '[2 phrases — découvrez pourquoi les métiers TP sont les métiers d\'avenir et ce qu\'ETPM offre à ses collaborateurs. Du manœuvre au conducteur de travaux. — KW distribué : emploi travaux publics (210/mois)]',
    link: '/nous-rejoindre/emploi-travaux-publics',
    linkText: 'Découvrir →',
  },
  {
    image: '[Photo : monteur réseau électrique en nacelle ou soudeur PEHD en action]',
    title: 'Nos métiers',
    text: '[2 phrases — chef de chantier, monteur réseau, conducteur de travaux, technicien IRVE, manœuvre… découvrez les métiers d\'ETPM et les perspectives d\'évolution.]',
    link: '/nous-rejoindre/metiers',
    linkText: 'Explorer les métiers →',
  },
  {
    image: '[Photo : jeune alternant sur chantier aux côtés d\'un tuteur, ambiance apprentissage/transmission]',
    title: 'Alternance travaux publics',
    text: '[2 phrases — du CAP au diplôme d\'ingénieur, formez-vous sur le terrain avec ETPM. Encadrement, missions concrètes, embauche à la clé. — KW distribué : alternance travaux publics (140/mois)]',
    link: '/nous-rejoindre/alternance',
    linkText: 'Découvrir l\'alternance →',
  },
  {
    image: '[Photo : panneau de chantier ETPM ou bureau d\'agence avec collaborateurs]',
    title: 'Nos offres d\'emploi',
    text: '[2 phrases — consultez nos postes ouverts dans les 7 agences du Sud-Ouest. CDI, alternance, intérim. Candidature en ligne.]',
    link: '/nous-rejoindre/offres',
    linkText: 'Voir les offres →',
  },
]

const INTER_SITES = [
  { label: 'Groupe Synelis', href: 'https://synelis.fr/nous-rejoindre' },
  { label: 'CAUM', href: 'https://caum.fr/nous-rejoindre' },
  { label: 'HP Elec', href: 'https://hpelec.fr/nous-rejoindre' },
  { label: 'FCTP', href: 'https://fctp.fr/nous-rejoindre' },
  { label: 'Restech', href: 'https://restech.fr/nous-rejoindre' },
]

export default function HubRecrutement() {
  return (
    <>
      {/* BLOC 1 — HERO RECRUTEMENT */}
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
              { label: 'Nous rejoindre' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>Rejoindre ETPM</h1>
              <p className={styles.heroText}>
                [Accroche marque-employeur 3-4 phrases — ETPM recrute des femmes et des hommes de
                terrain dans le Grand Sud-Ouest. Du manœuvre au conducteur de travaux, en CDI ou en
                alternance. Construire des réseaux, éclairer des villes, viabiliser des terrains :
                nos métiers ont du sens et un impact concret sur la vie des gens. 354 collaborateurs,
                7 agences, un groupe solide — et des postes ouverts toute l'année.]
              </p>
              <div className={styles.heroCtas}>
                <Button to="/nous-rejoindre/offres">Voir les offres</Button>
                <Button to="/contact" variant="secondary">Candidature spontanée</Button>
              </div>
            </div>
            <Placeholder
              text="[Photo : portrait groupe 4-5 collaborateurs ETPM sur chantier, gilets et casques, sourires, ambiance équipe/fierté — PAS une photo corporate studio, du VRAI terrain]"
              ratio="4/3"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — POURQUOI ETPM */}
      <section className={styles.pourquoi}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Pourquoi nous rejoindre</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.pourquoiGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {POURQUOI.map((item) => (
              <motion.div key={item.title} className={styles.pourquoiCard} variants={fadeIn}>
                <div className={styles.pourquoiIcon}>
                  <Placeholder text={item.icon} ratio="1/1" />
                </div>
                <h3 className={styles.pourquoiCardTitle}>{item.title}</h3>
                <p className={styles.pourquoiCardText}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 3 — CHIFFRES EMPLOI */}
      <motion.section
        className={styles.chiffres}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.chiffresGrid}`}>
          <Counter value={354} label="collaborateurs" light />
          <Counter value={7} label="agences" light />
          <Counter value="X" label="recrutements/an" light />
          <Counter value="X" label="alternants formés/an" light />
        </div>
      </motion.section>

      {/* BLOC 4 — LES 4 PORTES D'ENTRÉE */}
      <section className={styles.portes}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Votre parcours chez ETPM</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.portesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {PORTES.map((porte) => (
              <motion.div key={porte.title} variants={fadeIn}>
                <Card
                  image={porte.image}
                  title={porte.title}
                  text={porte.text}
                  to={porte.link}
                  ratio="16/9"
                  titleSerif
                  clickable
                  linkText={porte.linkText}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 5 — TÉMOIGNAGE */}
      <motion.section
        className={styles.temoignage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.temoignageGrid}`}>
          <Placeholder
            text="[Photo : portrait d'un collaborateur ETPM sur chantier, sourire, casque, gilet — regard caméra, ambiance authentique]"
            ratio="4/3"
          />
          <div className={styles.temoignageContent}>
            <TestimonialBlock
              quote="Témoignage d'un collaborateur — 3-4 phrases sur son parcours chez ETPM, ce qui l'a fait rester, ce qu'il aime dans le métier. Ex : « Je suis arrivé comme manœuvre il y a 8 ans. Aujourd'hui je suis chef de chantier. ETPM m'a formé, m'a fait confiance. Et chaque matin je sais pourquoi je me lève. » — Placeholder, le vrai témoignage sera filmé/recueilli."
              author="[Prénom N., Chef de chantier — Agence de Muret]"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — MAILLAGE INTER-SITES GROUPE */}
      <motion.section
        className={styles.interSites}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.interSitesInner}>
            <SectionTitle>Carrières dans le Groupe Synelis</SectionTitle>
            <p className={styles.interSitesText}>
              [Texte 3-4 phrases — ETPM fait partie du Groupe Synelis, qui regroupe 6 filiales
              spécialisées dans les réseaux d'énergie, les télécoms et le ferroviaire. Vous ne
              trouvez pas votre poste chez ETPM ? Explorez les opportunités chez nos filiales
              sœurs : CAUM recrute des techniciens fibre optique, HP Elec des monteurs caténaires,
              FCTP des ingénieurs génie civil, Restech des canalisateurs en Bretagne. — Le groupe
              ouvre des passerelles entre filiales.]
            </p>
            <div className={styles.interSitesLinks}>
              {INTER_SITES.map((site) => (
                <a
                  key={site.label}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.interSiteLink}
                >
                  {site.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 7 — CTA BANDEAU */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Prêt à rejoindre l'équipe ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — CDI, alternance ou candidature spontanée — nous avons un poste pour vous
            dans le Sud-Ouest]
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
