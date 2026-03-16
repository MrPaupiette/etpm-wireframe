import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import DefinitionBox from '../components/ui/DefinitionBox'
import FAQAccordion from '../components/ui/FAQAccordion'
import styles from './VrdViabilisation.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const RESEAUX = [
  {
    num: '1',
    title: 'Raccordement au réseau d\'eau potable',
    image: '[Photo : canalisation PEHD eau potable en tranchée, joint visible]',
    text: '[3-4 phrases — adduction depuis le réseau communal, canalisation PEHD, branchement individuel ou collectif, normes ARS. ETPM pose les canalisations et réalise les branchements. — KW intégré naturellement : canalisation pehd (170/mois)]',
  },
  {
    num: '2',
    title: 'Raccordement au réseau électrique',
    image: '[Photo : câble électrique BT en tranchée ou coffret de raccordement]',
    text: (
      <>
        [3-4 phrases — branchement au réseau Enedis, câblage souterrain ou aérien, poste de
        transformation si nécessaire. ETPM intervient sur les réseaux HTA et BT. — Lien contextuel
        vers <Link to="/expertises/reseaux-energie">réseaux d'énergie</Link> et{' '}
        <Link to="/ressources/reseau-hta">réseau HTA</Link>]
      </>
    ),
  },
  {
    num: '3',
    title: 'Raccordement au réseau de gaz',
    image: '[Photo : canalisation gaz PE jaune en tranchée, soudure visible]',
    text: (
      <>
        [3-4 phrases — canalisation PE ou acier, branchement GRDF, soudure PEHD pour les
        raccordements. — Lien contextuel vers{' '}
        <Link to="/ressources/soudure-pehd">soudure PEHD</Link> — KW : branchement gaz (140/mois),
        canalisation gaz (140/mois)]
      </>
    ),
  },
  {
    num: '4',
    title: 'Raccordement au réseau télécom et fibre optique',
    image: '[Photo : fourreaux télécom en tranchée ou chambre de tirage]',
    text: (
      <>
        [3-4 phrases — pose de fourreaux, chambre de tirage, préparation pour le passage fibre. Dans
        le cadre d'un lotissement, ETPM prépare l'infrastructure télécom pour les opérateurs. — Lien
        contextuel inter-sites vers{' '}
        <a href="https://caum.fr" target="_blank" rel="noopener noreferrer">
          caum.fr
        </a>{' '}
        (CAUM est la filiale fibre optique du groupe)]
      </>
    ),
  },
  {
    num: '5',
    title: 'Réseau d\'assainissement',
    image: '[Photo : canalisations EU/EP en tranchée, regard de visite]',
    text: '[3-4 phrases — eaux usées (EU) et eaux pluviales (EP), canalisations gravitaires, raccordement au réseau communal ou assainissement autonome. ETPM réalise les réseaux d\'assainissement dans le cadre de la viabilisation.]',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Quel est le coût de viabilisation d\'un terrain ?',
    answer: '[3-4 phrases — le coût dépend de la distance aux réseaux, du nombre de branchements, de la nature du sol. Fourchette indicative pour un terrain individuel et pour un lotissement. ETPM réalise des études préalables gratuites pour chiffrer précisément. CTA : demander un devis.]',
  },
  {
    question: 'Qui s\'occupe de la viabilisation d\'un terrain ?',
    answer: '[3-4 phrases — le maître d\'ouvrage (particulier, promoteur, collectivité) mandate une entreprise de travaux publics spécialisée en VRD. ETPM coordonne l\'ensemble des intervenants et gère les démarches auprès des concessionnaires (Enedis, GRDF, opérateurs télécom).]',
  },
  {
    question: 'Quelles démarches administratives pour viabiliser un terrain ?',
    answer: '[3-4 phrases — permis de construire ou d\'aménager, DT-DICT (déclaration de travaux à proximité de réseaux), demandes de raccordement auprès de chaque concessionnaire. ETPM accompagne ses clients dans ces démarches.]',
  },
  {
    question: 'Quelle est la différence entre VRD et viabilisation ?',
    answer: '[3-4 phrases — la viabilisation est l\'objectif (rendre un terrain constructible), le VRD est l\'ensemble des travaux nécessaires pour y parvenir (voirie et réseaux divers). ETPM réalise les deux. — KW : voirie et réseaux divers (260/mois)]',
  },
  {
    question: 'Combien de temps durent les travaux de viabilisation ?',
    answer: '[2-3 phrases — terrain individuel vs lotissement, fourchettes de délais, facteurs de variation.]',
  },
]

const OTHER_EXPERTISES = [
  {
    title: 'Éclairage public',
    text: '[1 ligne — installation, rénovation LED, éclairage intelligent]',
    image: '[Photo : candélabres LED]',
    to: '/expertises/eclairage-public',
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

const TERRITOIRES = [
  {
    title: 'Toulouse & Haute-Garonne',
    text: '[1-2 lignes — agences Muret et Toulouse, viabilisation lotissements et terrains dans le 31 — KW : entreprise vrd toulouse (40/mois)]',
    to: '/territoires/toulouse-haute-garonne',
  },
  {
    title: 'Bordeaux & Gironde',
    text: '[1-2 lignes — agence Pessac, VRD et viabilisation en Gironde — KW : entreprise vrd bordeaux (20/mois)]',
    to: '/territoires/bordeaux-gironde',
  },
  {
    title: 'Pays Basque & Landes',
    text: '[1-2 lignes — siège historique Arcangues, travaux VRD au Pays Basque et dans les Landes]',
    to: '/territoires/pays-basque-landes',
  },
]

export default function VrdViabilisation() {
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
              { label: 'VRD & Viabilisation' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Viabilisation de terrain : travaux VRD et réseaux par ETPM
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — la viabilisation consiste à raccorder un terrain aux réseaux
                publics (eau, électricité, gaz, télécommunications, assainissement). ETPM réalise
                l'ensemble des travaux VRD pour les promoteurs, aménageurs et collectivités du Grand
                Sud-Ouest depuis 60 ans. — KW : viabilisation (720/mois), viabilisation terrain
                (2 400/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Demander un devis VRD
              </Button>
            </div>
            <Placeholder
              text="[Photo aérienne : chantier VRD en cours sur lotissement — tranchées ouvertes, canalisations visibles, engins de terrassement, vue d'ensemble du terrain]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — DÉFINITION FEATURED SNIPPET */}
      <motion.section
        className={styles.definition}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.definitionInner}`}>
          <SectionTitle>Qu'est-ce que la viabilisation ?</SectionTitle>
          <DefinitionBox>
            [Définition 40-60 mots — La viabilisation consiste à raccorder un terrain nu aux réseaux
            publics indispensables à la construction : eau potable, électricité, gaz,
            télécommunications et assainissement. Ces travaux de VRD (Voirie et Réseaux Divers) sont
            obligatoires avant toute construction et sont réalisés par une entreprise de travaux
            publics spécialisée. — KW : viabilisation terrain (2 400/mois), voirie et réseaux divers
            (260/mois)]
          </DefinitionBox>
          <p className={styles.definitionText}>
            [Texte 2-3 phrases — expliquer que la viabilisation s'adresse aussi bien aux
            particuliers (terrain à bâtir) qu'aux promoteurs (lotissements, ZAC) et aux collectivités
            (extensions de réseaux). ETPM intervient sur l'ensemble de ces typologies dans le Grand
            Sud-Ouest. — KW : réseau vrd (170/mois)]
          </p>
        </div>
      </motion.section>

      {/* BLOC 3 — LES 5 RÉSEAUX */}
      <section className={styles.reseaux}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1-2 phrases — chaque viabilisation implique le raccordement à 5 réseaux distincts, chacun avec ses normes, ses concessionnaires et ses contraintes techniques]"
            >
              Les étapes de la viabilisation : les 5 réseaux à raccorder
            </SectionTitle>
          </motion.div>
          <div className={styles.reseauxList}>
            {RESEAUX.map((item) => (
              <motion.div
                key={item.num}
                className={styles.reseauItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeIn}
              >
                <div className={styles.reseauContent}>
                  <h3 className={styles.reseauTitle}>
                    {item.num}. {item.title}
                  </h3>
                  <p className={styles.reseauText}>{item.text}</p>
                </div>
                <Placeholder
                  text={item.image}
                  ratio="16/9"
                  className={styles.reseauImage}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC 4 — LOTISSEMENT vs TERRAIN INDIVIDUEL */}
      <motion.section
        className={styles.comparison}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>VRD lotissement et viabilisation de terrain individuel</SectionTitle>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCol}>
              <h3 className={styles.comparisonH3}>Viabilisation de lotissement</h3>
              <Placeholder
                text="[Photo : vue d'ensemble lotissement en cours de viabilisation, parcelles tracées]"
                ratio="4/3"
              />
              <p className={styles.comparisonText}>
                [4-5 phrases — le cas spécifique du lotissement : permis d'aménager, coordination
                multi-réseaux simultanée, plan de masse, phasage des travaux. ETPM gère l'ensemble de
                la viabilisation lotissement en tant qu'interlocuteur unique pour le promoteur. — KW :
                vrd lotissement (70/mois), viabilisation lotissement (40/mois)]
              </p>
            </div>
            <div className={styles.comparisonCol}>
              <h3 className={styles.comparisonH3}>Viabilisation de terrain à bâtir</h3>
              <Placeholder
                text="[Photo : terrain individuel avec tranchée de raccordement en cours]"
                ratio="4/3"
              />
              <p className={styles.comparisonText}>
                [4-5 phrases — la viabilisation d'un terrain individuel : démarches auprès de chaque
                concessionnaire, DT-DICT obligatoire, étude de sol, délais moyens. ETPM accompagne les
                particuliers et les constructeurs. — KW : viabilisation terrain (2 400/mois)]
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 5 — TERRASSEMENT ET TECHNIQUES */}
      <motion.section
        className={styles.techniques}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Terrassement et tranchées VRD : nos techniques</SectionTitle>
          <p className={styles.techniquesText}>
            [4-5 phrases — les types de terrassement VRD (pleine masse, tranchée étroite,
            décaissement), les engins utilisés (pelle mécanique, mini-pelle, aspiratrice-excavatrice
            RSP pour zones sensibles), les contraintes spécifiques (sols argileux du Sud-Ouest, nappes
            phréatiques, réseaux existants). ETPM dispose d'un parc matériel lourd incluant une
            aspiratrice-excavatrice RSP, rare dans la région. — KW : terrassement vrd (390/mois),
            tranchée vrd (30/mois), aménagement vrd (40/mois)]
          </p>
          <Placeholder
            text="[Photo : aspiratrice excavatrice RSP d'ETPM en action sur chantier urbain, avec opérateur]"
            ratio="16/9"
          />
          <p className={styles.techniquesSub}>
            [2 phrases — les normes de sécurité sur les tranchées VRD, le balisage, la signalisation.
            Lien vers les certifications ETPM et les démarches DT-DICT.]
          </p>
          <div className={styles.techniquesLinks}>
            <Link to="/expertises/travaux-publics-terrassement" className={styles.contextualLink}>
              Découvrir notre expertise TP & Terrassement →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — ETPM PARTENAIRE VRD */}
      <motion.section
        className={styles.partenaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.partenaireGrid}`}>
          <div className={styles.partenaireContent}>
            <SectionTitle>ETPM : votre entreprise VRD dans le Grand Sud-Ouest</SectionTitle>
            <p className={styles.partenaireText}>
              [5-6 phrases — positionner ETPM comme LE partenaire VRD du Sud-Ouest : 60 ans
              d'expérience, 354 collaborateurs, 7 agences, 63M€ de CA. Interventions sur tous types de
              chantiers VRD : lotissements, ZAC, extensions de réseaux, rénovation urbaine. Références
              majeures : collectivités, promoteurs, aménageurs. Certifications ISO, MASE, AIPR.
              Filiale du Groupe Synelis. — KW : entreprise vrd (590/mois)]
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
            text="[Photo : équipe ETPM devant un chantier VRD terminé, gilets, casques, sourires — ambiance fierté du travail accompli]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 7 — ZONES D'INTERVENTION */}
      <section className={styles.zones}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>VRD et viabilisation : nos zones d'intervention</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.zonesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {TERRITOIRES.map((item) => (
              <motion.div key={item.title} variants={fadeIn}>
                <div className={styles.zoneCard}>
                  <h3 className={styles.zoneTitle}>{item.title}</h3>
                  <p className={styles.zoneText}>{item.text}</p>
                  <Link to={item.to} className={styles.contextualLink}>
                    En savoir plus →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 8 — FAQ */}
      <motion.section
        className={styles.faq}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.faqInner}`}>
          <SectionTitle>Questions fréquentes sur la viabilisation</SectionTitle>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </motion.section>

      {/* BLOC 9 — AUTRES EXPERTISES */}
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

      {/* BLOC 10 — CTA FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>
            Un projet de viabilisation dans le Sud-Ouest ?
          </h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — ETPM vous accompagne de l'étude de faisabilité à la réception de chantier]
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
