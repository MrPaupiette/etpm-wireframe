import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Placeholder from '../components/ui/Placeholder'
import Counter from '../components/ui/Counter'
import ProcessTimeline from '../components/ui/ProcessTimeline'
import TestimonialBlock from '../components/ui/TestimonialBlock'
import styles from './AlternanceTP.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const METIERS_CARDS = [
  {
    title: 'Canalisateur / Monteur réseau',
    text: '[2-3 phrases — CAP Constructeur de réseaux, CAP Électricien, Bac Pro MELEC. Vous posez des canalisations, des câbles, vous raccordez des réseaux. Le cœur du métier TP, appris sur le terrain avec votre tuteur.]',
    to: '/nous-rejoindre/metiers',
  },
  {
    title: 'Chef d\'équipe / Chef de chantier',
    text: '[2-3 phrases — BTS Travaux Publics, Licence Pro TP. Vous participez à la préparation et au suivi de chantiers, vous apprenez à gérer une équipe et un budget. L\'alternance idéale pour accéder à l\'encadrement.]',
    to: '/fiches-metiers/chef-de-chantier-tp',
  },
  {
    title: 'Conducteur de travaux',
    text: '[2-3 phrases — Licence Pro, école d\'ingénieurs. Vous supervisez plusieurs chantiers, vous préparez les études, vous gérez les relations client. Alternance longue (24 mois) recommandée.]',
    to: '/nous-rejoindre/metiers',
  },
  {
    title: 'Chargé d\'études / Dessinateur',
    text: '[2-3 phrases — BTS/DUT Génie Civil, Électrotechnique. Vous réalisez des plans, des métrés, des études de dimensionnement. Vous allez régulièrement sur le terrain pour confronter vos plans à la réalité.]',
    to: '/nous-rejoindre/metiers',
  },
]

const PROCESS_STEPS = [
  { number: 1, title: 'Candidature', text: '[2 phrases — envoyez votre CV via notre formulaire ou sur les plateformes alternance. Nous recrutons de mars à septembre pour les rentrées de septembre.]' },
  { number: 2, title: 'Entretien et affectation', text: '[2 phrases — un entretien avec le responsable d\'agence et votre futur tuteur. On définit ensemble votre agence d\'accueil et les chantiers sur lesquels vous interviendrez.]' },
  { number: 3, title: 'Accueil et sécurité', text: '[2 phrases — dès le premier jour : accueil sécurité, remise des EPI (casque, gilet, chaussures), visite de l\'agence et du premier chantier. La sécurité est la priorité n°1 chez ETPM.]' },
  { number: 4, title: 'Formation terrain', text: '[2 phrases — vous travaillez sur de vrais chantiers, encadré par votre tuteur. Progression : observation → gestes simples → autonomie progressive sur les tâches de votre métier.]' },
  { number: 5, title: 'Évaluation et embauche', text: '[2 phrases — évaluations régulières avec votre tuteur et votre école. En fin d\'alternance, si c\'est un match : proposition de CDI.]' },
]

const DIPLOMES = [
  {
    title: 'CAP — Bac Pro (niveau terrain)',
    text: '[2-3 phrases — CAP Constructeur de réseaux, CAP Électricien, Bac Pro MELEC, Bac Pro Travaux Publics. Alternance 12-24 mois. Accès aux métiers terrain : canalisateur, monteur réseau, aide-conducteur d\'engins.]',
  },
  {
    title: 'BTS — Licence Pro (niveau encadrement)',
    text: '[2-3 phrases — BTS Travaux Publics, BTS Électrotechnique, Licence Pro Travaux Publics. Alternance 12-24 mois. Accès aux métiers d\'encadrement : chef d\'équipe, chef de chantier, chargé d\'études.]',
  },
  {
    title: 'Ingénieur (niveau direction)',
    text: '[2-3 phrases — écoles d\'ingénieurs TP/Génie Civil (ESTP, INSA, Polytech...). Alternance 24-36 mois. Accès direct à la conduite de travaux. Formation managériale accélérée.]',
  },
]

export default function AlternanceTP() {
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
              { label: 'Nous rejoindre', to: '/nous-rejoindre' },
              { label: 'Alternance TP' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>Alternance en travaux publics chez ETPM</h1>
              <p className={styles.heroText}>
                [Texte 3-4 phrases — ETPM accueille des alternants sur tous ses métiers, du CAP au
                diplôme d'ingénieur. Vous apprenez sur de vrais chantiers, encadré par un tuteur
                dédié, dès le premier jour. VRD, éclairage public, réseaux d'énergie, IRVE : la
                diversité des chantiers ETPM vous forme à tous les aspects des travaux publics. Et à
                la fin ? X% de nos alternants sont embauchés en CDI (placeholder %). — KW :
                alternance travaux publics (140/mois)]
              </p>
              <Button to="/nous-rejoindre/offres">Voir les offres alternance</Button>
            </div>
            <Placeholder
              text="[Photo : jeune alternant sur chantier aux côtés de son tuteur — le tuteur montre un geste technique (lecture de plan, soudure, câblage), ambiance transmission et apprentissage. Terrain, gilets, casques.]"
              ratio="4/3"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — CHIFFRES */}
      <motion.section
        className={styles.chiffres}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.chiffresGrid}`}>
          <Counter value="X" label="alternants accueillis/an" light />
          <Counter value="X" label="% embauchés en CDI" light />
          <Counter value={7} label="agences d'accueil" light />
          <Counter value="X" label="métiers accessibles" light />
        </div>
      </motion.section>

      {/* BLOC 3 — LES MÉTIERS EN ALTERNANCE */}
      <section className={styles.metiers}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — l'alternance chez ETPM donne accès à l'ensemble de nos métiers terrain et encadrement]"
            >
              Quels métiers en alternance ?
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.metiersGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {METIERS_CARDS.map((card) => (
              <motion.div key={card.title} variants={fadeIn}>
                <Link to={card.to} className={styles.metierCard}>
                  <h3 className={styles.metierCardTitle}>{card.title}</h3>
                  <p className={styles.metierCardText}>{card.text}</p>
                  <span className={styles.metierCardLink}>Découvrir →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — COMMENT SE DÉROULE L'ALTERNANCE */}
      <section className={styles.process}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Comment se déroule l'alternance chez ETPM</SectionTitle>
          </motion.div>
          <div className={styles.processTimeline}>
            <ProcessTimeline steps={PROCESS_STEPS} />
          </div>
        </div>
      </section>

      {/* BLOC 5 — TÉMOIGNAGE ALTERNANT */}
      <motion.section
        className={styles.temoignage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.temoignageGrid}`}>
          <Placeholder
            text="[Photo : portrait d'un(e) alternant(e) ou ancien(ne) alternant(e) ETPM — jeune, souriant(e), sur chantier ou en agence]"
            ratio="4/3"
          />
          <div className={styles.temoignageContent}>
            <TestimonialBlock
              quote="Témoignage d'un alternant ou ancien alternant — 3-4 phrases. Son parcours : quel diplôme, quelle agence, ce qu'il a appris, ce qui l'a surpris positivement, et si embauché en CDI : comment ça s'est passé. Ex : « Je suis arrivé en BTS TP sans connaître les travaux publics. Mon tuteur m'a tout appris sur le terrain. Aujourd'hui je suis en CDI comme chef d'équipe à Muret. » — Placeholder, le vrai sera recueilli."
              author="[Prénom N., BTS Travaux Publics — Alternance 2023-2025, aujourd'hui chef d'équipe]"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — DIPLÔMES ET ÉCOLES */}
      <motion.section
        className={styles.diplomes}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.diplomesInner}>
            <SectionTitle>Quels diplômes pour l'alternance TP</SectionTitle>
            {DIPLOMES.map((d) => (
              <div key={d.title} className={styles.diplomeBlock}>
                <h3 className={styles.diplomeTitle}>{d.title}</h3>
                <p className={styles.diplomeText}>{d.text}</p>
              </div>
            ))}
            <p className={styles.diplomeSub}>
              [1-2 phrases — ETPM travaille avec des écoles partenaires dans le Sud-Ouest
              (placeholder — noms d'écoles à confirmer avec le client). Nous vous aidons à trouver
              votre école si vous n'en avez pas encore.]
            </p>
          </div>
        </div>
      </motion.section>

      {/* BLOC 7 — POSTULER EN ALTERNANCE */}
      <motion.section
        className={styles.postuler}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.postulerInner}>
            <SectionTitle>Postuler en alternance chez ETPM</SectionTitle>
            <p className={styles.postulerText}>
              [2-3 phrases — les recrutements alternance se font principalement de mars à septembre
              pour les rentrées de septembre. Mais n'hésitez pas à nous envoyer votre candidature
              toute l'année — nous anticipons nos besoins.]
            </p>
            <div className={styles.postulerCtas}>
              <Button to="/nous-rejoindre/offres">Voir les offres alternance</Button>
              <Button to="/contact" variant="secondary">Candidature spontanée</Button>
            </div>
            <p className={styles.postulerSub}>
              [1 phrase — vous pouvez aussi nous contacter directement dans l'agence la plus proche
              de chez vous]
            </p>
            <Link to="/territoires" className={styles.contextualLink}>
              Nos agences →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 8 — CTA BANDEAU */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Votre avenir commence sur le terrain</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — alternance TP dans le Sud-Ouest — 7 agences, tous les métiers, un tuteur
            dédié]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/nous-rejoindre/offres" variant="white">Postuler en alternance</Button>
            <Button to="/nous-rejoindre/metiers" variant="outlineWhite">Découvrir nos métiers</Button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
