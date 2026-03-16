import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import Tag from '../components/ui/Tag'
import styles from './TravauxPublicsTermassement.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const TRAVAUX = [
  {
    image: '[Photo : terrassement pleine masse, pelle mécanique, terre excavée, chantier en cours]',
    title: 'Terrassement',
    text: '[2-3 phrases — terrassement en pleine masse, décaissement, déblai/remblai, préparation de plateforme. ETPM intervient sur tous types de sols, y compris les argiles du bassin toulousain et les terrains rocheux du Pays Basque. — KW : terrassement vrd (390/mois)]',
  },
  {
    image: '[Photo : tranchée étroite en milieu urbain, canalisations multiples visibles (eau, élec, gaz, télécom)]',
    title: 'Tranchées et réseaux enterrés',
    text: '[2-3 phrases — tranchées ouvertes et fermées pour la pose de réseaux secs (électricité, télécom) et humides (eau, gaz, assainissement). Travaux en milieu urbain, à proximité de réseaux existants, avec blindage si nécessaire.]',
  },
  {
    image: '[Photo : pose de canalisations PEHD ou PVC dans tranchée, raccords visibles]',
    title: 'Pose de canalisations',
    text: '[2-3 phrases — canalisations PEHD, PVC, fonte et acier pour réseaux eau potable, gaz, assainissement. Soudure PEHD bout à bout et électrosoudage.]',
    linkTo: '/ressources/soudure-pehd',
    linkLabel: 'En savoir plus sur la soudure PEHD →',
  },
  {
    image: '[Photo : remise en état de chaussée après travaux VRD, enrobé, bordures]',
    title: 'Voirie et remise en état',
    text: '[2-3 phrases — réfection de voirie après travaux, pose de bordures, enrobés, trottoirs. ETPM assure la remise en état complète des surfaces après intervention sur les réseaux.]',
  },
]

const REFERENCES = [
  {
    image: '[Photo : chantier VRD terminé — lotissement viabilisé, voirie neuve, maisons en construction]',
    title: 'Viabilisation lotissement — Muret (31)',
    tags: ['VRD', 'Terrassement'],
    text: '[1-2 lignes — X lots viabilisés, réseaux eau/électricité/gaz/télécom/assainissement, voirie]',
  },
  {
    image: '[Photo : chantier terrassement urbain — tranchée blindée en centre-ville]',
    title: 'Extension réseau — Bordeaux Métropole',
    tags: ['Réseaux', 'Terrassement'],
    text: '[1-2 lignes — extension réseau Enedis, X mètres linéaires de tranchée en milieu urbain]',
  },
  {
    image: '[Photo : chantier VRD en zone rurale — aspiration RSP à proximité de réseaux existants]',
    title: 'Terrassement sécurisé — Pays Basque',
    tags: ['Aspiration', 'VRD'],
    text: '[1-2 lignes — utilisation de l\'aspiratrice RSP pour travaux à proximité de réseaux gaz existants]',
  },
]

const CHIFFRES = [
  { value: '63 M€', label: 'de CA' },
  { value: '354', label: 'collaborateurs' },
  { value: '7', label: 'agences Sud-Ouest' },
  { value: '60', label: 'ans d\'expérience' },
  { value: '1', label: 'groupe — Synelis' },
]

export default function TravauxPublicsTermassement() {
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
              { label: 'TP & Terrassement' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Entreprise VRD et terrassement dans le Sud-Ouest — ETPM
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — ETPM est une entreprise de travaux publics spécialisée en VRD
                et terrassement dans le Grand Sud-Ouest depuis 60 ans. Terrassement, tranchées, pose
                de canalisations et réseaux enterrés pour les promoteurs, collectivités et
                aménageurs. 354 collaborateurs, 7 agences, un parc matériel lourd. — KW : entreprise
                vrd (590/mois), terrassement vrd (390/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Demander un devis
              </Button>
            </div>
            <Placeholder
              text="[Photo : chantier de terrassement grande envergure — pelle mécanique en action, tranchée ouverte, engins lourds, vue panoramique du chantier]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — NOS TRAVAUX VRD */}
      <section className={styles.travaux}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — ETPM intervient sur l'ensemble des travaux de voirie et réseaux divers, de la tranchée au raccordement final]"
            >
              Nos travaux VRD
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.travauxGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {TRAVAUX.map((item) => (
              <motion.div key={item.title} variants={fadeIn} className={styles.travauxCard}>
                <Placeholder text={item.image} ratio="4/3" />
                <div className={styles.travauxBody}>
                  <h3 className={styles.travauxTitle}>{item.title}</h3>
                  <p className={styles.travauxText}>{item.text}</p>
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

      {/* BLOC 3 — PARC MATÉRIEL */}
      <motion.section
        className={styles.materiel}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.materielGrid}`}>
          <div>
            <SectionTitle>Un parc matériel adapté aux chantiers les plus exigeants</SectionTitle>
            <p className={styles.materielText}>
              [4-5 phrases — ETPM dispose d'un parc matériel lourd en propre : pelles mécaniques de
              2 à 30 tonnes, mini-pelles pour tranchées urbaines, aspiratrice excavatrice RSP
              (aspiration de déblais sans risque de casse sur les réseaux existants — engin rare dans
              la région), nacelles, compacteurs, plaques vibrantes. Ce parc en propre garantit la
              réactivité : pas d'attente de location, pas de dépendance à un sous-traitant. — KW :
              aspiratrice excavatrice (20/mois)]
            </p>
          </div>
          <Placeholder
            text="[Photo : parc matériel ETPM aligné — 3-4 engins (pelle, mini-pelle, aspiratrice RSP), ambiance professionnelle et impressionnante]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 4 — ZONES D'INTERVENTION */}
      <section className={styles.zones}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — 7 agences couvrent le Grand Sud-Ouest, de Toulouse au Pays Basque en passant par Bordeaux]"
            >
              VRD et terrassement dans le Sud-Ouest
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.zonesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <Placeholder
                text="[Photo : chantier VRD dans zone urbaine toulousaine, brique rose en arrière-plan]"
                ratio="16/9"
              />
              <div className={styles.zoneBody}>
                <h3 className={styles.zoneTitle}>
                  Entreprise VRD à Toulouse et en Haute-Garonne
                </h3>
                <p className={styles.zoneText}>
                  [3-4 phrases — agences Muret et Toulouse, ETPM intervient sur les chantiers VRD de
                  la métropole et du département 31 : lotissements, ZAC, réseaux communaux,
                  viabilisation. Références : chantiers pour Toulouse Métropole, promoteurs
                  immobiliers, syndicats d'énergie. — KW : entreprise vrd toulouse (40/mois)]
                </p>
                <Link to="/territoires/toulouse-haute-garonne" className={styles.contextualLink}>
                  Découvrir ETPM Toulouse →
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <Placeholder
                text="[Photo : chantier terrassement en zone péri-urbaine bordelaise]"
                ratio="16/9"
              />
              <div className={styles.zoneBody}>
                <h3 className={styles.zoneTitle}>
                  Entreprise VRD à Bordeaux et en Gironde
                </h3>
                <p className={styles.zoneText}>
                  [3-4 phrases — agence Pessac, travaux VRD sur Bordeaux Métropole et la Gironde.
                  Terrassement, réseaux, viabilisation de lotissements. L'arbitrage
                  anti-cannibalisation est clair : ETPM = TP et VRD en Gironde, FCTP = génie civil
                  spécialisé. — KW : entreprise vrd bordeaux (20/mois)]
                </p>
                <Link to="/territoires/bordeaux-gironde" className={styles.contextualLink}>
                  Découvrir ETPM Bordeaux →
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <Placeholder
                text="[Photo : chantier VRD en zone rurale ou péri-urbaine basque, paysage vert]"
                ratio="16/9"
              />
              <div className={styles.zoneBody}>
                <h3 className={styles.zoneTitle}>
                  VRD au Pays Basque et dans les Landes
                </h3>
                <p className={styles.zoneText}>
                  [3-4 phrases — siège historique Arcangues (64), berceau d'ETPM. Interventions VRD
                  au Pays Basque, dans les Landes et le Béarn. L'ancrage local de 60 ans est un
                  argument de confiance pour les collectivités et les promoteurs du territoire.]
                </p>
                <Link to="/territoires/pays-basque-landes" className={styles.contextualLink}>
                  Découvrir ETPM Pays Basque →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOC 5 — RÉFÉRENCES CHANTIERS */}
      <section className={styles.references}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — quelques-uns de nos chantiers récents en VRD et terrassement dans le Sud-Ouest]"
            >
              Nos références VRD et terrassement
            </SectionTitle>
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
                  ratio="16/10"
                  tag={ref.tags.join(' · ')}
                />
              </motion.div>
            ))}
          </motion.div>
          <Link to="/realisations" className={styles.contextualLink}>
            Voir toutes nos réalisations →
          </Link>
        </div>
      </section>

      {/* BLOC 6 — ETPM EN CHIFFRES */}
      <motion.section
        className={styles.chiffres}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.chiffresGrid}`}>
          <div className={styles.chiffresCounters}>
            {CHIFFRES.map((c) => (
              <div key={c.label} className={styles.chiffreItem}>
                <span className={styles.chiffreValue}>{c.value}</span>
                <span className={styles.chiffreLabel}>{c.label}</span>
              </div>
            ))}
          </div>
          <div>
            <SectionTitle>ETPM en chiffres</SectionTitle>
            <p className={styles.chiffresText}>
              [3-4 phrases — ETPM est la principale filiale du{' '}
              <a href="https://synelis.fr" target="_blank" rel="noopener noreferrer">
                Groupe Synelis
              </a>
              . 60 ans d'expérience en travaux publics et VRD, des certifications ISO 9001/14001 et
              MASE, une présence territoriale de Toulouse à Bayonne. Nous sommes partenaire d'Enedis,
              GRDF et des collectivités du Grand Sud-Ouest.]
            </p>
            <Button to="/contact" variant="primary">
              Demander un devis
            </Button>
          </div>
        </div>
      </motion.section>

      {/* BLOC 7 — EXPERTISE COMPLÉMENTAIRE : VIABILISATION */}
      <motion.section
        className={styles.complementaire}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.complementaireGrid}`}>
          <Placeholder
            text="[Photo : terrain en cours de viabilisation — tranchées multiples, plan de réseau en surimpression ou panneau de chantier]"
            ratio="4/3"
          />
          <div>
            <SectionTitle>Vous cherchez un guide sur la viabilisation ?</SectionTitle>
            <p className={styles.complementaireText}>
              [3-4 phrases — si vous cherchez des informations sur les étapes, les coûts et les
              démarches de viabilisation d'un terrain, consultez notre guide complet. ETPM vous
              explique les 5 réseaux à raccorder, les différences entre lotissement et terrain
              individuel, et les normes en vigueur.]
            </p>
            <Button to="/expertises/vrd-viabilisation" variant="primary">
              Lire le guide viabilisation →
            </Button>
            <p className={styles.complementaireText} style={{ marginTop: 20 }}>
              [1 ligne — voir aussi nos autres expertises :]
            </p>
            <div className={styles.complementaireLinks}>
              <Link to="/expertises/eclairage-public" className={styles.contextualLink}>
                Éclairage public →
              </Link>
              <Link to="/expertises/irve-bornes-recharge" className={styles.contextualLink}>
                IRVE — Bornes de recharge →
              </Link>
              <Link to="/expertises/reseaux-energie" className={styles.contextualLink}>
                Réseaux d'énergie →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 8 — CTA FINAL */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Un projet VRD ou de terrassement ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — ETPM intervient dans tout le Sud-Ouest, de Toulouse au Pays Basque]
          </p>
          <div className={styles.ctaFinalButtons}>
            <Button to="/contact" variant="white">
              Demander un devis
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
