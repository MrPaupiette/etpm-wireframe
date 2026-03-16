import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import DefinitionBox from '../components/ui/DefinitionBox'
import FAQAccordion from '../components/ui/FAQAccordion'
import styles from './EclairagePublic.module.css'

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
    image: '[Photo : chantier installation de mâts d\'éclairage neufs, nacelle en action, câblage visible]',
    title: 'Installation neuve',
    text: '[2-3 phrases — pose de candélabres, mâts et luminaires, câblage souterrain ou aérien, raccordement au réseau, armoires de commande. Lotissements, ZAC, voies communales, parkings, ronds-points. — KW : mât d\'éclairage public (90/mois), candélabre éclairage public (20/mois)]',
  },
  {
    image: '[Photo : avant/après relamping — ancien luminaire SHP remplacé par LED sur le même candélabre]',
    title: 'Rénovation et relamping LED',
    text: '[2-3 phrases — remplacement des luminaires sodium/mercure par des LED, mise aux normes, modernisation des armoires. Économies de 40 à 70% sur la facture énergétique. — KW : éclairage public led (210/mois), rénovation éclairage public (30/mois)]',
    linkTo: '/ressources/relamping-led',
    linkLabel: 'Guide complet du relamping LED →',
  },
  {
    image: '[Photo : luminaire avec capteur de détection de mouvement ou boîtier de pilotage intelligent sur candélabre]',
    title: 'Éclairage intelligent',
    text: '[2-3 phrases — détection de présence, gradation automatique, pilotage à distance, supervision en temps réel. Le smart lighting génère 30 à 50% d\'économies supplémentaires par rapport au LED seul. Protocoles DALI, Zhaga, Nema. — KW : éclairage public intelligent (170/mois)]',
  },
  {
    image: '[Photo : monument historique illuminé de nuit — église, pont ou château mis en valeur par un éclairage architectural]',
    title: 'Mise en lumière du patrimoine',
    text: '[2-3 phrases — illumination de monuments, édifices publics, ponts, sites historiques. Études photométriques, scénarios lumière, intégration paysagère. Une expertise locale qu\'ETPM porte dans tout le Sud-Ouest. — KW : mise en lumière patrimoine (10/mois)]',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Comment passer à l\'éclairage public LED dans ma commune ?',
    answer: '[3-4 phrases — les étapes : audit du parc existant, étude de dimensionnement, choix des luminaires et niveaux d\'éclairement (norme EN 13201), programmation des travaux. ETPM réalise l\'ensemble de ces étapes, de l\'audit au relamping. Possibilité de financement par les CEE.]',
  },
  {
    question: 'Quel est le coût d\'une rénovation d\'éclairage public ?',
    answer: '[3-4 phrases — le coût dépend du nombre de points lumineux, du type de luminaires choisis, de la nécessité ou non de remplacer les mâts. Fourchette indicative. Les CEE et subventions réduisent significativement l\'investissement. ETPM réalise des études chiffrées gratuites.]',
  },
  {
    question: 'Qu\'est-ce que l\'éclairage public intelligent ?',
    answer: '[3-4 phrases — un éclairage piloté à distance avec détection de présence, gradation automatique et supervision en temps réel. Permet 30-50% d\'économies supplémentaires par rapport au LED seul. ETPM installe des systèmes de pilotage DALI et Zhaga.]',
  },
  {
    question: 'L\'éclairage public solaire est-il fiable ?',
    answer: '[3-4 phrases — les technologies actuelles offrent une autonomie de 3 à 5 nuits sans soleil selon le dimensionnement. Adapté aux zones sans réseau, parkings, voies piétonnes. ETPM installe des solutions solaires et hybrides dans le Sud-Ouest.]',
  },
  {
    question: 'Quelles normes pour l\'éclairage public ?',
    answer: '[3-4 phrases — norme EN 13201 pour les niveaux d\'éclairement, arrêté du 27 décembre 2018 sur les nuisances lumineuses, réglementation extinction nocturne. ETPM conçoit ses installations en conformité avec ces normes.]',
  },
]

const OTHER_EXPERTISES = [
  {
    title: 'VRD & Viabilisation',
    text: '[1 ligne — raccordement réseaux, terrassement, tranchées]',
    image: '[Photo : tranchée VRD]',
    to: '/expertises/vrd-viabilisation',
  },
  {
    title: 'IRVE — Bornes de recharge',
    text: '[1 ligne — installation bornes entreprises et copropriétés]',
    image: '[Photo : borne de recharge]',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    title: 'Réseaux d\'énergie',
    text: '[1 ligne — réseaux HTA/BT, postes de transformation]',
    image: '[Photo : poste HTA/BT]',
    to: '/expertises/reseaux-energie',
  },
  {
    title: 'TP & Terrassement',
    text: '[1 ligne — terrassement, tranchées, canalisations enterrées]',
    image: '[Photo : terrassement]',
    to: '/expertises/travaux-publics-terrassement',
  },
]

export default function EclairagePublic() {
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
              { label: 'Nos expertises', to: '/expertises' },
              { label: 'Éclairage public' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Éclairage public : installation, rénovation et maintenance par ETPM
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — L'éclairage public est un enjeu majeur pour les collectivités :
                sécurité des usagers, transition énergétique, cadre de vie. ETPM installe, rénove et
                maintient les parcs d'éclairage public dans le Grand Sud-Ouest depuis 60 ans, de la
                pose de candélabres au pilotage intelligent. — KW : éclairage public (4 400/mois),
                entreprise éclairage public (90/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Demander un devis éclairage
              </Button>
            </div>
            <Placeholder
              text="[Photo grand format : avenue urbaine éclairée par candélabres LED modernes au crépuscule, lumière chaude dorée, perspective longue — ambiance ville vivante le soir]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — ENJEUX */}
      <motion.section
        className={styles.enjeux}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.enjeuxInner}`}>
          <SectionTitle>L'éclairage public en France : enjeux et transition</SectionTitle>
          <DefinitionBox>
            [Définition 40-60 mots — L'éclairage public désigne l'ensemble des dispositifs lumineux
            installés sur le domaine public pour éclairer les voies de circulation, les espaces
            publics et les bâtiments patrimoniaux. En France, il représente environ 11 millions de
            points lumineux gérés par les collectivités, et constitue leur deuxième poste de dépense
            énergétique. — KW : éclairage public (4 400/mois)]
          </DefinitionBox>
          <p className={styles.enjeuxText}>
            [3-4 phrases — les grands enjeux actuels : réduction des consommations (loi APER, arrêté
            extinction nocturne), passage au LED (à peine 30% du parc converti), éclairage
            intelligent, biodiversité et pollution lumineuse. Pourquoi les collectivités investissent
            massivement dans la rénovation de leur parc.]
          </p>
        </div>
      </motion.section>

      {/* BLOC 3 — NOS INTERVENTIONS */}
      <section className={styles.interventions}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — ETPM accompagne les collectivités sur l'ensemble du cycle de vie de leur éclairage public]"
            >
              Nos interventions en éclairage public
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.interventionsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {INTERVENTIONS.map((item) => (
              <motion.div key={item.title} variants={fadeIn} className={styles.interventionCard}>
                <Placeholder text={item.image} ratio="4/3" />
                <div className={styles.interventionBody}>
                  <h3 className={styles.interventionTitle}>{item.title}</h3>
                  <p className={styles.interventionText}>{item.text}</p>
                  {item.linkTo && (
                    <Link to={item.linkTo} className={styles.contextualLink}>
                      {item.linkLabel}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 4 — LED EN DÉTAIL */}
      <motion.section
        className={styles.ledDetail}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ledDetailGrid}`}>
          <div className={styles.ledDetailContent}>
            <SectionTitle>Éclairage public LED : pourquoi la transition</SectionTitle>
            <p className={styles.ledDetailText}>
              [5-6 phrases — pourquoi passer au LED : réduction de 40-70% de la consommation, durée
              de vie x5 (50 000h vs 10 000h pour le SHP), meilleur rendu des couleurs, réduction de
              la pollution lumineuse, conformité aux normes EN 13201, éligibilité aux CEE
              (Certificats d'Économie d'Énergie). ETPM a converti plus de X points lumineux en LED
              dans le Sud-Ouest (chiffre à confirmer). Le relamping est souvent le premier pas vers
              un éclairage intelligent. — KW : éclairage public led (210/mois)]
            </p>
            <div className={styles.ledDetailLinks}>
              <Link to="/ressources/relamping-led" className={styles.contextualLink}>
                Tout savoir sur le relamping LED →
              </Link>
              <Link to="/ressources/eclairage-public-solaire" className={styles.contextualLink}>
                En savoir plus sur l'éclairage solaire →
              </Link>
            </div>
          </div>
          <Placeholder
            text="[Photo : gros plan sur un luminaire LED moderne installé sur candélabre, éclairé de nuit, design épuré]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 5 — SOLAIRE */}
      <motion.section
        className={styles.solaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.solaireGrid}`}>
          <Placeholder
            text="[Photo : candélabre solaire autonome installé le long d'un chemin piéton ou dans un parking — panneau visible en haut du mât, environnement vert/naturel]"
            ratio="4/3"
          />
          <div className={styles.solaireContent}>
            <SectionTitle>Éclairage public solaire : des solutions autonomes</SectionTitle>
            <p className={styles.solaireText}>
              [4-5 phrases — les candélabres solaires autonomes sont une alternative pour les zones
              sans réseau ou les communes rurales : zéro tranchée, zéro raccordement, autonomie
              énergétique. Technologies : panneaux intégrés, batteries lithium, détection
              crépusculaire. ETPM installe des solutions solaires et hybrides dans le Grand
              Sud-Ouest. Cas d'usage : parkings, chemins piétons, zones rurales, sites isolés. — KW :
              éclairage public solaire (590/mois)]
            </p>
            <Link to="/ressources/eclairage-public-solaire" className={styles.contextualLink}>
              Guide complet de l'éclairage solaire →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — MÂTS ET CANDÉLABRES */}
      <motion.section
        className={styles.mats}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Mâts et candélabres d'éclairage public</SectionTitle>
          <p className={styles.matsText}>
            [3-4 phrases — ETPM pose et remplace tous types de supports d'éclairage public : mâts
            droits, mâts crosses, candélabres décoratifs, consoles murales. Hauteurs de 3 à 12
            mètres selon l'application. Fourniture, pose, scellement, raccordement. Nous intervenons
            aussi sur les armoires de commande et les coffrets de protection. — KW : mât d'éclairage
            public (90/mois), candélabre éclairage public (20/mois)]
          </p>
          <motion.div
            className={styles.matsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <Placeholder
                text="[Photo : mât d'éclairage public droit en acier galvanisé, 8m, luminaire LED]"
                ratio="3/4"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Placeholder
                text="[Photo : candélabre décoratif en centre-ville historique, style classique]"
                ratio="3/4"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Placeholder
                text="[Photo : armoire de commande éclairage public ouverte, disjoncteurs et horloge astronomique visibles]"
                ratio="3/4"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* BLOC 7 — ZONES D'INTERVENTION */}
      <motion.section
        className={styles.zones}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle
            chapeau="[1 ligne — ETPM intervient en éclairage public sur l'ensemble du Grand Sud-Ouest, depuis ses 7 agences]"
          >
            Éclairage public dans le Sud-Ouest
          </SectionTitle>
          <div className={styles.zonesGrid}>
            <div className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Éclairage public à Bordeaux et en Gironde</h3>
              <p className={styles.zoneText}>
                [2-3 phrases — agence Pessac, références de chantiers d'éclairage en Gironde
                (relamping, installations neuves, mise en lumière). ETPM accompagne les communes et
                intercommunalités bordelaises. — KW : éclairage public bordeaux (90/mois)]
              </p>
              <Link to="/territoires/bordeaux-gironde" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </div>
            <div className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Éclairage public à Toulouse et en Haute-Garonne</h3>
              <p className={styles.zoneText}>
                [2-3 phrases — agences Muret et Toulouse, interventions sur le parc d'éclairage des
                communes du 31, rénovation LED et éclairage intelligent. — KW : éclairage public
                toulouse (30/mois)]
              </p>
              <Link to="/territoires/toulouse-haute-garonne" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </div>
          </div>
          <Link to="/territoires/pays-basque-landes" className={styles.contextualLink}>
            Voir toutes nos implantations →
          </Link>
        </div>
      </motion.section>

      {/* BLOC 8 — ETPM PARTENAIRE */}
      <motion.section
        className={styles.partenaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.partenaireGrid}`}>
          <div className={styles.partenaireContent}>
            <SectionTitle>ETPM : votre entreprise d'éclairage public</SectionTitle>
            <p className={styles.partenaireText}>
              [5-6 phrases — ETPM accompagne les collectivités et les syndicats d'énergie dans tous
              leurs projets d'éclairage public : audit du parc existant, études photométriques,
              fourniture et pose, raccordement, maintenance préventive et curative. 60 ans
              d'expérience, 354 collaborateurs, certifications ISO et MASE. Filiale du Groupe
              Synelis, ETPM bénéficie de la solidité d'un groupe de 700 personnes. — KW : entreprise
              éclairage public (90/mois)]
            </p>
            <div className={styles.miniCounters}>
              <div className={styles.miniCounter}>
                <span className={styles.miniValue}>60</span>
                <span className={styles.miniLabel}>ans</span>
              </div>
              <div className={styles.miniCounter}>
                <span className={styles.miniValue}>7</span>
                <span className={styles.miniLabel}>agences</span>
              </div>
              <div className={styles.miniCounter}>
                <span className={styles.miniValue}>354</span>
                <span className={styles.miniLabel}>collaborateurs</span>
              </div>
            </div>
            <div className={styles.partenaireCtas}>
              <Button to="/contact" variant="primary">
                Demander un devis
              </Button>
              <Link to="/realisations" className={styles.contextualLink}>
                Voir nos réalisations →
              </Link>
            </div>
          </div>
          <Placeholder
            text="[Photo : équipe ETPM en nacelle intervenant sur candélabre, tenue de travail, casques, crépuscule — ambiance professionnelle et humaine]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 9 — FAQ */}
      <motion.section
        className={styles.faq}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.faqInner}`}>
          <SectionTitle>Questions fréquentes sur l'éclairage public</SectionTitle>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </motion.section>

      {/* BLOC 10 — AUTRES EXPERTISES */}
      <section className={styles.autres}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Nos autres expertises</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.autresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {OTHER_EXPERTISES.map((item) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card
                  image={item.image}
                  title={item.title}
                  text={item.text}
                  to={item.to}
                  ratio="16/10"
                  clickable
                  linkText="Découvrir →"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 11 — CTA FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Un projet d'éclairage public ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — rénovation LED, éclairage intelligent, installation neuve ou mise en lumière —
            ETPM vous accompagne]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/contact" variant="white">
              Demander un devis
            </Button>
            <Button to="/realisations" variant="outlineWhite">
              Nos réalisations
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  )
}
