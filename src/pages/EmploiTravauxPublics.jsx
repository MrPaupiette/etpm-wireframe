import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Placeholder from '../components/ui/Placeholder'
import TestimonialBlock from '../components/ui/TestimonialBlock'
import JobCard from '../components/ui/JobCard'
import styles from './EmploiTravauxPublics.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const METIERS = [
  {
    title: 'Manœuvre TP',
    text: '[2-3 phrases — premier échelon d\'entrée dans les travaux publics. Pas de diplôme requis, formation sur le terrain. Aide aux travaux de terrassement, pose de canalisations, balisage. Le point de départ de nombreuses carrières chez ETPM. — KW : manœuvre tp emploi (70/mois)]',
    to: '/nous-rejoindre/offres',
  },
  {
    title: 'Chef d\'équipe',
    text: '[2-3 phrases — encadre 3-5 personnes sur le terrain. Gère l\'avancement quotidien, la sécurité, le matériel. Évolution naturelle après 2-3 ans comme ouvrier qualifié.]',
    to: '/nous-rejoindre/offres',
  },
  {
    title: 'Chef de chantier TP',
    text: '[2-3 phrases — pilote un ou plusieurs chantiers. Gestion des équipes, des délais, du budget, de la sécurité. Le métier le plus demandé dans les TP. — KW : chef de chantier tp (140/mois, distribué aussi vers la fiche métier)]',
    to: '/fiches-metiers/chef-de-chantier-tp',
  },
  {
    title: 'Monteur réseau électrique',
    text: '[2-3 phrases — le métier de base d\'ETPM. Pose de câbles, raccordement de réseaux HTA/BT pour Enedis. Habilitations électriques obligatoires (formation assurée par ETPM). — KW : monteur réseau électrique (110/mois, distribué vers la fiche métier)]',
    to: '/fiches-metiers/monteur-reseau-electrique',
  },
  {
    title: 'Conducteur de travaux',
    text: '[2-3 phrases — responsable de plusieurs chantiers simultanément. Prépare, organise, coordonne, contrôle. Profil ingénieur ou promotion interne. — KW : conducteur de travaux tp (70/mois)]',
    to: '/nous-rejoindre/offres',
  },
  {
    title: 'Technicien IRVE',
    text: '[2-3 phrases — installe et raccorde les bornes de recharge pour véhicules électriques. Métier en forte croissance. Formation spécifique assurée par ETPM. — KW : technicien irve emploi (40/mois)]',
    to: '/nous-rejoindre/offres',
  },
]

const POURQUOI_TP = [
  {
    title: 'Un travail concret et visible',
    text: '[3-4 phrases — dans les TP, vous voyez le résultat de votre travail chaque jour. La route que vous avez terrassée, le candélabre que vous avez posé, le réseau que vous avez raccordé — ça reste. C\'est l\'inverse d\'un job où vous ne savez pas à quoi vous servez. C\'est le retour de fierté autour du bleu de travail.]',
  },
  {
    title: 'Des métiers d\'avenir',
    text: '[3-4 phrases — la transition énergétique (IRVE, LED, réseaux intelligents), la rénovation des infrastructures, le développement des énergies renouvelables : les TP ne sont pas un secteur du passé, c\'est le secteur qui construit l\'avenir. Les besoins en recrutement sont massifs et durables. — KW : emploi vrd (40/mois), emploi éclairage public (40/mois)]',
  },
  {
    title: 'En extérieur, en équipe, jamais monotone',
    text: '[3-4 phrases — pas de bureau, pas de routine. Chaque chantier est différent : le terrain, l\'environnement, les contraintes. Vous travaillez en équipe, en mouvement, avec des engins. Si vous ne supportez pas d\'être assis 8 heures par jour, les TP sont faits pour vous.]',
  },
]

const OFFRES = [
  {
    title: 'Chef de chantier VRD — Muret (31)',
    tags: ['CDI', 'Toulouse & 31'],
  },
  {
    title: 'Monteur réseau électrique — Pessac (33)',
    tags: ['CDI', 'Bordeaux & 33'],
  },
  {
    title: 'Alternant conducteur de travaux — Arcangues (64)',
    tags: ['Alternance', 'Pays Basque & 64'],
  },
]

const TERRITOIRES = [
  {
    title: 'Toulouse & Haute-Garonne',
    text: '[1-2 lignes — agences Muret et Toulouse, postes ouverts en VRD, éclairage, réseaux]',
    to: '/territoires/toulouse-haute-garonne',
  },
  {
    title: 'Bordeaux & Gironde',
    text: '[1-2 lignes — agence Pessac, recrutements en cours]',
    to: '/territoires/bordeaux-gironde',
  },
  {
    title: 'Pays Basque & Landes',
    text: '[1-2 lignes — siège Arcangues, agence Bayonne]',
    to: '/territoires/pays-basque-landes',
  },
]

export default function EmploiTravauxPublics() {
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
              { label: 'Travailler chez ETPM' },
            ]}
          />
          <h1 className={styles.heroTitle}>
            Emploi dans les travaux publics : rejoignez ETPM
          </h1>
          <p className={styles.heroText}>
            [Texte 3-4 phrases — ETPM recrute en permanence dans le Grand Sud-Ouest. Manœuvres,
            chefs d'équipe, chefs de chantier, conducteurs de travaux, techniciens IRVE, monteurs
            réseau : nos métiers sont variés, concrets et utiles. Pas besoin de diplôme pour
            commencer — on forme sur le terrain. Et pour les profils expérimentés, ETPM offre la
            solidité d'un groupe de 700 personnes avec des chantiers à la porte de chez vous. — KW :
            emploi travaux publics (210/mois)]
          </p>
          <Button to="/nous-rejoindre/offres">Voir les offres en cours</Button>
          <div className={styles.heroImage}>
            <Placeholder
              text="[Photo : équipe ETPM en action sur chantier — pas posée, du vrai travail en cours. Diversité des profils visibles (jeune, expérimenté, femme si possible). Ambiance collective, effort, terrain.]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — LES MÉTIERS TP CHEZ ETPM */}
      <section className={styles.metiers}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — du premier emploi sans diplôme au poste d'encadrement, les travaux publics offrent des parcours pour tous les profils]"
            >
              Nos métiers
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.metiersGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {METIERS.map((metier) => (
              <motion.div key={metier.title} className={styles.metierCard} variants={fadeIn}>
                <h3 className={styles.metierTitle}>{metier.title}</h3>
                <p className={styles.metierText}>{metier.text}</p>
                <Link to={metier.to} className={styles.contextualLink}>
                  {metier.to.includes('fiches-metiers') ? 'Fiche métier →' : 'Voir les offres →'}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 3 — POURQUOI LES TP */}
      <motion.section
        className={styles.pourquoiTp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.pourquoiTpInner}>
            <SectionTitle>Pourquoi travailler dans les travaux publics</SectionTitle>
            {POURQUOI_TP.map((item) => (
              <div key={item.title} className={styles.pourquoiTpBlock}>
                <h3 className={styles.pourquoiTpTitle}>{item.title}</h3>
                <p className={styles.pourquoiTpText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BLOC 4 — POURQUOI ETPM */}
      <motion.section
        className={styles.pourquoiEtpm}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.pourquoiEtpmGrid}`}>
          <div>
            <SectionTitle>Pourquoi ETPM</SectionTitle>
            <p className={styles.pourquoiEtpmText}>
              [5-6 phrases — ETPM n'est pas un grand groupe où vous êtes un numéro. C'est une
              filiale de 354 personnes où le directeur connaît les chefs de chantier. Vous
              bénéficiez de la solidité du Groupe Synelis (700 personnes, 6 filiales) avec
              l'ambiance d'une équipe à taille humaine. Les chantiers sont dans le Sud-Ouest — vous
              rentrez chez vous le soir. Le matériel est en propre (pas de location, pas d'attente).
              ETPM investit dans la formation : habilitations, CACES, soudure, sécurité. Et les
              parcours d'évolution sont réels — le directeur d'agence a souvent commencé sur le
              terrain.]
            </p>
            <div className={styles.pourquoiEtpmChiffres}>
              <span><strong>354</strong> collaborateurs</span>
              <span><strong>7</strong> agences</span>
              <span><strong>60</strong> ans</span>
              <span><strong>Groupe Synelis</strong></span>
            </div>
          </div>
          <Placeholder
            text="[Photo : moment humain — pause café sur chantier, rires entre collègues, ou transmission tuteur/apprenti. PAS une photo corporate, du VRAI quotidien.]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 5 — TÉMOIGNAGE */}
      <motion.section
        className={styles.temoignage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className={styles.temoignageAvatar}>
            <Placeholder
              text="[Photo : portrait collaborateur ETPM, regard caméra, sourire, casque/gilet]"
              ratio="1/1"
            />
          </div>
          <TestimonialBlock
            quote="Témoignage d'un collaborateur qui a évolué chez ETPM — 3-4 phrases. Ex parcours : arrivé comme manœuvre/apprenti, aujourd'hui chef de chantier ou conducteur de travaux. Ce qui l'a fait rester : l'ambiance, la confiance, la formation, les chantiers variés. — Placeholder, le vrai sera recueilli."
            author="[Prénom N., Poste — Agence — X ans chez ETPM]"
          />
        </div>
      </motion.section>

      {/* BLOC 6 — POSTES OUVERTS */}
      <section className={styles.offres}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Nos postes ouverts</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.offresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {OFFRES.map((offre) => (
              <motion.div key={offre.title} variants={fadeIn}>
                <JobCard
                  title={offre.title}
                  tags={offre.tags}
                  to="/nous-rejoindre/offres"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className={styles.offresCtas}>
            <Button to="/nous-rejoindre/offres">Voir toutes les offres</Button>
            <Link to="/contact" className={styles.contextualLink}>
              Candidature spontanée →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOC 7 — ALTERNANCE */}
      <motion.section
        className={styles.alternance}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.alternanceGrid}`}>
          <Placeholder
            text="[Photo : alternant jeune sur chantier avec tuteur expérimenté, apprentissage en situation, geste technique montré]"
            ratio="4/3"
          />
          <div>
            <SectionTitle>L'alternance chez ETPM</SectionTitle>
            <p className={styles.alternanceText}>
              [3-4 phrases — ETPM forme X alternants par an (placeholder chiffre). Du CAP
              Constructeur de réseaux au diplôme d'ingénieur TP, tous les niveaux sont accueillis.
              L'alternant est encadré par un tuteur et travaille sur de vrais chantiers dès le
              premier jour. X% des alternants sont embauchés en CDI à l'issue de leur formation
              (placeholder %). — KW : alternance travaux publics (140/mois)]
            </p>
            <Link to="/nous-rejoindre/alternance" className={styles.contextualLink}>
              Découvrir l'alternance TP →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 8 — NOS TERRITOIRES DE RECRUTEMENT */}
      <section className={styles.territoires}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Où recrutons-nous ?</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.territoiresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {TERRITOIRES.map((t) => (
              <motion.div key={t.title} variants={fadeIn}>
                <Link to={t.to} className={styles.territoireCard}>
                  <h3 className={styles.territoireCardTitle}>{t.title}</h3>
                  <p className={styles.territoireCardText}>{t.text}</p>
                  <span className={styles.territoireCardLink}>Découvrir →</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 9 — CTA BANDEAU */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Prêt à construire l'avenir ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — envoyez votre candidature ou consultez nos offres — ETPM recrute dans tout le
            Sud-Ouest]
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
