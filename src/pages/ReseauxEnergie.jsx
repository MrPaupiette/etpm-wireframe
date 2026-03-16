import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import styles from './ReseauxEnergie.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const MATERIEL = [
  {
    image: '[Photo : aspiratrice excavatrice RSP d\'ETPM en action, opérateur aux commandes]',
    title: 'Aspiratrice excavatrice RSP',
    text: '[2 phrases — aspiration de terre et de déblais autour des réseaux existants sans risque de casse. Idéale pour les chantiers en zone urbaine dense ou à proximité de réseaux sensibles.]',
  },
  {
    image: '[Photo : nacelle élévatrice sur chantier réseau aérien ou poste de transformation]',
    title: 'Nacelles et engins spécialisés',
    text: '[2 phrases — nacelles pour travaux en hauteur sur réseaux aériens, pelles mécaniques, mini-pelles pour tranchées étroites en milieu urbain.]',
  },
  {
    image: '[Photo : véhicule atelier ETPM équipé, outils et matériel électrique visible]',
    title: 'Véhicules atelier équipés',
    text: '[2 phrases — véhicules atelier pour les interventions de maintenance et de branchement. Autonomie complète sur le terrain.]',
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
    title: 'Éclairage public',
    text: '[1 ligne — installation, rénovation LED, éclairage intelligent]',
    image: '[Photo : candélabre LED]',
    to: '/expertises/eclairage-public',
  },
  {
    title: 'IRVE — Bornes de recharge',
    text: '[1 ligne — installation bornes entreprises et copropriétés]',
    image: '[Photo : borne de recharge]',
    to: '/expertises/irve-bornes-recharge',
  },
  {
    title: 'TP & Terrassement',
    text: '[1 ligne — terrassement, tranchées, canalisations enterrées]',
    image: '[Photo : terrassement]',
    to: '/expertises/travaux-publics-terrassement',
  },
]

export default function ReseauxEnergie() {
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
              { label: 'Réseaux d\'énergie' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Réseaux d'énergie : électricité HTA/BT, gaz et postes de transformation
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — ETPM construit, raccorde et maintient les réseaux d'énergie du
                Grand Sud-Ouest depuis 60 ans. Réseaux électriques haute et basse tension pour
                Enedis, canalisations gaz pour GRDF, postes de transformation, branchements neufs et
                extensions. Du câble souterrain au poste source. — KW : réseau hta (320/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Demander un devis réseau
              </Button>
            </div>
            <Placeholder
              text="[Photo : chantier de pose de câble HTA souterrain en tranchée, touret de câble visible, équipe ETPM en gilets et casques]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — RÉSEAUX ÉLECTRIQUES */}
      <motion.section
        className={styles.reseauxElec}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.twoColGrid}`}>
          <div>
            <SectionTitle>Réseaux électriques : HTA, BT et HTB</SectionTitle>
            <p className={styles.sectionText}>
              [5-6 phrases — ETPM intervient sur les trois niveaux de tension des réseaux de
              distribution et de transport d'électricité. HTA (Haute Tension A, 20 kV) : le réseau
              de distribution Enedis qui alimente les postes de transformation. BT (Basse Tension,
              400 V) : le réseau de desserte finale vers les bâtiments. HTB (Haute Tension B,
              63-225 kV) : le réseau de transport qui alimente les postes sources. ETPM réalise la
              pose de câbles souterrains et aériens, les raccordements, les extensions et les
              renforcements de réseau. — KW : réseau hta (320/mois), réseau basse tension (70/mois),
              réseau htb (30/mois), réseau électrique souterrain (20/mois)]
            </p>
            <Link to="/ressources/reseau-hta" className={styles.contextualLink}>
              En savoir plus sur le réseau HTA →
            </Link>
          </div>
          <Placeholder
            text="[Photo : câble HTA en cours de déroulage dans une tranchée, ou poteau électrique BT avec transformateur aérien visible]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 3 — POSTES DE TRANSFORMATION */}
      <motion.section
        className={styles.postes}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.twoColGridReversed}`}>
          <Placeholder
            text="[Photo : poste de transformation HTA/BT en construction ou livré — bâtiment préfabriqué ouvert, transformateur visible, câblage en cours]"
            ratio="4/3"
          />
          <div>
            <SectionTitle>Postes de transformation HTA/BT</SectionTitle>
            <p className={styles.sectionText}>
              [4-5 phrases — le poste de transformation est le point de conversion entre la moyenne
              tension (HTA, 20 kV) et la basse tension (BT, 400 V). ETPM conçoit, construit et
              raccorde des postes préfabriqués et maçonnés : génie civil, équipements électriques
              (transformateur, cellules HTA, TGBT), raccordement au réseau Enedis. Nous intervenons
              également sur les postes sources (HTB/HTA) pour le transport d'électricité. — KW :
              poste source électrique (90/mois)]
            </p>
            <Link to="/ressources/poste-hta-bt" className={styles.contextualLink}>
              Tout savoir sur le poste HTA/BT →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 4 — RÉSEAUX GAZ */}
      <motion.section
        className={styles.gaz}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.twoColGrid}`}>
          <div>
            <SectionTitle>Réseaux gaz : canalisations et branchements</SectionTitle>
            <p className={styles.sectionText}>
              [4-5 phrases — ETPM pose des canalisations gaz en polyéthylène haute densité (PEHD) et
              en acier pour GRDF et les collectivités. Branchements individuels et collectifs,
              extensions de réseau, renouvellement de conduites vétustes. La soudure PEHD (bout à
              bout et électrosoudage) est une compétence clé de nos équipes, certifiées selon les
              normes NF EN 12007. Nous intervenons sur les réseaux gaz basse pression et moyenne
              pression. — KW : canalisation gaz (140/mois), branchement gaz (140/mois), réseau gaz
              naturel (10/mois)]
            </p>
            <Link to="/ressources/soudure-pehd" className={styles.contextualLink}>
              En savoir plus sur la soudure PEHD →
            </Link>
          </div>
          <Placeholder
            text="[Photo : canalisation gaz PEHD jaune en tranchée, machine de soudure bout à bout visible, technicien ETPM en action]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 5 — BRANCHEMENTS */}
      <motion.section
        className={styles.branchements}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.branchementsInner}`}>
          <SectionTitle>Branchements électriques et gaz</SectionTitle>
          <p className={styles.sectionText}>
            [4-5 phrases — le branchement est le raccordement final d'un bâtiment au réseau public
            d'électricité ou de gaz. ETPM réalise les branchements neufs (construction neuve,
            lotissement), les extensions (augmentation de puissance), et les renforcements pour le
            compte d'Enedis et GRDF. Chaque branchement comprend : le tirage de câble ou la pose de
            canalisation depuis le réseau public, la mise en place du coffret de raccordement, et le
            raccordement au compteur. — KW : branchement électrique (1 900/mois — secondaire long
            terme, SERP B2C dominée par Enedis/EDF, mais la page capte la longue traîne
            professionnelle)]
          </p>
        </div>
      </motion.section>

      {/* BLOC 6 — PARC MATÉRIEL */}
      <section className={styles.materiel}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — ETPM dispose d'un parc matériel lourd adapté aux chantiers de réseaux les plus exigeants]"
            >
              Nos moyens techniques
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.materielGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {MATERIEL.map((item) => (
              <motion.div key={item.title} variants={fadeIn} className={styles.materielCard}>
                <Placeholder text={item.image} ratio="4/3" />
                <div className={styles.materielBody}>
                  <h3 className={styles.materielTitle}>{item.title}</h3>
                  <p className={styles.materielText}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOC 7 — ETPM PARTENAIRE RÉSEAUX */}
      <motion.section
        className={styles.partenaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.twoColGrid}`}>
          <div>
            <SectionTitle>ETPM : 60 ans d'expertise réseau dans le Sud-Ouest</SectionTitle>
            <p className={styles.partenaireText}>
              [5-6 phrases — ETPM est un partenaire historique d'Enedis et de GRDF dans le Grand
              Sud-Ouest. Nos équipes interviennent au quotidien sur les réseaux de distribution et de
              transport d'énergie : pose de câbles, construction de postes, branchements, maintenance
              préventive et curative. 354 collaborateurs formés et habilités, certifications ISO
              9001/14001, MASE, habilitations électriques H1/B1. Filiale du Groupe Synelis, ETPM
              bénéficie de la solidité d'un groupe multi-réseaux couvrant l'énergie, les télécoms et
              le ferroviaire.]
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
            text="[Photo : équipe ETPM sur chantier réseau terminé, poste de transformation en arrière-plan, ambiance fierté collective]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 8 — ZONES D'INTERVENTION */}
      <motion.section
        className={styles.zones}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeIn}>
            <SectionTitle>Réseaux d'énergie dans le Sud-Ouest</SectionTitle>
          </motion.div>
          <div className={styles.zonesGrid}>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Toulouse & Haute-Garonne</h3>
              <p className={styles.zoneText}>
                [1-2 lignes — travaux réseau Enedis et GRDF dans le 31, agences Muret et Toulouse]
              </p>
              <Link to="/territoires/toulouse-haute-garonne" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Bordeaux & Gironde</h3>
              <p className={styles.zoneText}>
                [1-2 lignes — agence Pessac, réseaux électriques et gaz en Gironde]
              </p>
              <Link to="/territoires/bordeaux-gironde" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Pays Basque & Landes</h3>
              <p className={styles.zoneText}>
                [1-2 lignes — siège historique Arcangues, réseaux d'énergie au Pays Basque et Landes]
              </p>
              <Link to="/territoires/pays-basque-landes" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 9 — MAILLAGE INTER-SITES */}
      <motion.section
        className={styles.maillage}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.maillageInner}`}>
          <SectionTitle>Les réseaux d'énergie au sein du Groupe Synelis</SectionTitle>
          <p className={styles.maillageText}>
            [Texte 3-4 phrases — ETPM est la filiale énergie principale du{' '}
            <a href="https://synelis.fr" target="_blank" rel="noopener noreferrer">
              Groupe Synelis
            </a>
            .{' '}
            <a href="https://restech.fr" target="_blank" rel="noopener noreferrer">
              Restech
            </a>{' '}
            complète ce maillage en Bretagne, où elle intervient sur les réseaux électriques Enedis
            dans le Morbihan et le Finistère.{' '}
            <a href="https://e2r.re" target="_blank" rel="noopener noreferrer">
              E2R
            </a>{' '}
            assure les mêmes missions à La Réunion, avec une expertise spécifique sur les
            contraintes insulaires et cycloniques. Ensemble, les trois filiales couvrent les réseaux
            d'énergie de la métropole aux outre-mer.]
          </p>
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
          <h2 className={styles.ctaFinalTitle}>Un projet de réseau d'énergie ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — électricité HTA/BT, gaz, postes de transformation — ETPM intervient sur tous
            les réseaux du Sud-Ouest]
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
