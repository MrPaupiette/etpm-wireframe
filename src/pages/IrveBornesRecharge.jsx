import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Placeholder from '../components/ui/Placeholder'
import DefinitionBox from '../components/ui/DefinitionBox'
import FAQAccordion from '../components/ui/FAQAccordion'
import ProcessTimeline from '../components/ui/ProcessTimeline'
import styles from './IrveBornesRecharge.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const QUALIFICATION_CARDS = [
  {
    title: 'P1 — Résidentiel',
    text: '[2-3 phrases — bornes jusqu\'à 22 kW sans configuration spécifique de communication, habitations individuelles et petits collectifs. Le niveau de base.]',
  },
  {
    title: 'P2 — Bornes communicantes',
    text: '[2-3 phrases — bornes jusqu\'à 22 kW avec configuration de communication et supervision. Copropriétés, parkings d\'entreprise, voirie. C\'est le niveau le plus demandé en B2B.]',
  },
  {
    title: 'P3 — Recharge rapide',
    text: '[2-3 phrases — bornes DC supérieures à 22 kW, recharge rapide et ultra-rapide. Stations de recharge publiques, aires d\'autoroute, flottes professionnelles. Le niveau le plus exigeant techniquement.]',
  },
]

const PROCESS_STEPS = [
  {
    number: '1',
    title: 'Audit et étude de faisabilité',
    text: '[2 phrases — visite technique du site, analyse de la capacité électrique existante, identification des contraintes (distance tableau, puissance dispo, accès parking)]',
  },
  {
    number: '2',
    title: 'Dimensionnement et devis',
    text: '[2 phrases — choix du nombre de bornes, de la puissance et du mode de gestion (load balancing, smart charging). Devis détaillé avec identification des aides disponibles.]',
  },
  {
    number: '3',
    title: 'Demande de raccordement',
    text: '[2 phrases — si la puissance existante est insuffisante, ETPM gère la demande d\'augmentation auprès d\'Enedis. Coordination avec le gestionnaire de réseau.]',
  },
  {
    number: '4',
    title: 'Installation et raccordement',
    text: '[2 phrases — pose des bornes, tirage de câbles, mise en place des protections, raccordement au TGBT, paramétrage de la supervision. Respect des normes NF C 15-100.]',
  },
  {
    number: '5',
    title: 'Mise en service et formation',
    text: '[2 phrases — tests de conformité, mise en service, formation des utilisateurs et du gestionnaire. Contrat de maintenance possible.]',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Comment choisir un installateur IRVE ?',
    answer: '[3-4 phrases — la qualification IRVE est obligatoire pour toute installation supérieure à 3,7 kW. Vérifier que l\'installateur possède la qualification au niveau correspondant au projet (P1, P2 ou P3). Demander des références de chantiers similaires. ETPM est qualifié IRVE et intervient depuis 60 ans sur les réseaux d\'énergie.]',
  },
  {
    question: 'Quelles aides pour les bornes de recharge en entreprise ?',
    answer: '[3-4 phrases — le programme Advenir finance jusqu\'à 50% du coût d\'installation. Les Certificats d\'Économie d\'Énergie (CEE) complètent le financement. L\'amortissement fiscal est accéléré. ETPM monte les dossiers de subvention pour ses clients.]',
  },
  {
    question: 'Quelle borne pour une copropriété ?',
    answer: '[3-4 phrases — deux options : l\'infrastructure collective (une colonne horizontale partagée avec des points de charge individuels) ou le raccordement individuel. L\'infrastructure collective est la solution recommandée car elle est mutualisée et évolutive. ETPM accompagne le syndic de A à Z.]',
  },
  {
    question: 'Combien de temps dure l\'installation de bornes IRVE ?',
    answer: '[3-4 phrases — de l\'audit à la mise en service : 4 à 8 semaines pour un parking d\'entreprise classique, 2 à 4 mois pour une copropriété (délais AG compris). L\'installation physique dure 1 à 5 jours selon le nombre de bornes. Le délai principal est la demande de raccordement Enedis si nécessaire.]',
  },
  {
    question: 'IRVE : quelles obligations pour les entreprises ?',
    answer: '[3-4 phrases — la loi LOM impose le pré-équipement des parkings neufs et le pré-câblage des existants de plus de 20 places. Les bâtiments tertiaires neufs doivent disposer d\'au moins 20% de places pré-équipées. ETPM accompagne la mise en conformité et l\'installation.]',
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

export default function IrveBornesRecharge() {
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
              { label: 'IRVE — Bornes de recharge' },
            ]}
          />
          <div className={styles.heroGrid}>
            <div>
              <h1 className={styles.heroTitle}>
                Installateur IRVE qualifié : bornes de recharge pour entreprises et copropriétés
              </h1>
              <p className={styles.heroText}>
                [Texte 2-3 phrases — ETPM est installateur IRVE qualifié dans le Grand Sud-Ouest
                (⚠️ à confirmer). Nous concevons, dimensionnons et installons des bornes de recharge
                pour véhicules électriques destinées aux entreprises, copropriétés, collectivités et
                parkings publics. De l'étude de faisabilité au raccordement réseau. — KW :
                installateur irve (590/mois), entreprise irve (70/mois)]
              </p>
              <Button to="/contact" variant="primary">
                Demander un devis IRVE
              </Button>
            </div>
            <Placeholder
              text="[Photo : borne de recharge moderne installée sur parking extérieur d'entreprise, véhicule électrique en charge, environnement propre et professionnel — ambiance B2B, pas résidentiel]"
              ratio="16/9"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — QUALIFICATION IRVE */}
      <section className={styles.qualification}>
        <div className="container">
          <motion.div
            className={styles.qualificationInner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>Qu'est-ce que la qualification IRVE ?</SectionTitle>
            <DefinitionBox>
              [Définition 40-60 mots — La qualification IRVE (Infrastructure de Recharge pour
              Véhicules Électriques) est une certification obligatoire pour tout installateur de
              bornes de recharge d'une puissance supérieure à 3,7 kW. Délivrée par des organismes
              accrédités (Qualifelec, AFNOR), elle garantit la compétence technique et la conformité
              des installations. — KW : qualification irve (320/mois)]
            </DefinitionBox>
          </motion.div>
          <motion.div
            className={styles.qualificationCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {QUALIFICATION_CARDS.map((card) => (
              <motion.div key={card.title} variants={fadeIn} className={styles.qualificationCard}>
                <h3 className={styles.qualificationCardTitle}>{card.title}</h3>
                <p className={styles.qualificationCardText}>{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className={styles.qualificationSub}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            [1-2 phrases — ETPM est qualifié IRVE niveaux P1, P2 et P3 (⚠️ niveaux exacts à
            confirmer avec le client). Cette qualification garantit à nos clients une installation
            conforme aux normes NF C 15-100 et NF EN 61851.]
          </motion.p>
        </div>
      </section>

      {/* BLOC 3 — BORNES POUR ENTREPRISES */}
      <motion.section
        className={styles.entreprises}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.entreprisesGrid}`}>
          <div>
            <SectionTitle>Bornes de recharge pour entreprises</SectionTitle>
            <p className={styles.sectionText}>
              [5-6 phrases — la loi LOM (Loi d'Orientation des Mobilités) impose le pré-équipement
              des parkings neufs et, à terme, l'installation de bornes dans les parkings existants
              de plus de 20 places. ETPM accompagne les entreprises dans cette transition : audit du
              parking existant, dimensionnement de l'installation (nombre de bornes, puissance,
              gestion de charge), choix des équipements, installation et raccordement au réseau.
              Solutions : bornes AC 7-22 kW pour le parking salarié, bornes rapides DC pour les
              flottes professionnelles. Aides financières : programme Advenir (jusqu'à 50% du coût
              pour les entreprises), CEE. — KW : borne de recharge entreprise (590/mois), borne de
              recharge parking (40/mois)]
            </p>
            <Link to="/contact" className={styles.contextualLink}>
              Demander une étude de faisabilité →
            </Link>
          </div>
          <Placeholder
            text="[Photo : parking d'entreprise avec plusieurs bornes de recharge installées en rangée, véhicules de société en charge, signalétique sol visible]"
            ratio="4/3"
          />
        </div>
      </motion.section>

      {/* BLOC 4 — BORNES EN COPROPRIÉTÉ */}
      <motion.section
        className={styles.copropriete}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.coproprieteGrid}`}>
          <Placeholder
            text="[Photo : parking souterrain de copropriété avec bornes installées, câblage propre visible le long du mur, éclairage de parking]"
            ratio="4/3"
          />
          <div>
            <SectionTitle>Bornes de recharge en copropriété</SectionTitle>
            <p className={styles.sectionText}>
              [5-6 phrases — la copropriété est LE cas d'usage en tension : droit à la prise (tout
              copropriétaire peut demander l'installation), infrastructure collective vs solution
              individuelle, passage en AG, contraintes techniques des parkings souterrains. ETPM
              propose deux approches : l'infrastructure collective (colonne horizontale partagée,
              bornes individuelles) et le raccordement individuel (compteur propre). Nous
              accompagnons le syndic de copropriété de l'étude à la livraison. Aides : programme
              Advenir infrastructure collective (jusqu'à 8 000€ par point de recharge). — KW : borne
              recharge copropriété (210/mois), irve copropriété (20/mois)]
            </p>
            <Link to="/contact" className={styles.contextualLink}>
              Accompagner ma copropriété →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 5 — PROCESS */}
      <motion.section
        className={styles.process}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.processInner}`}>
          <SectionTitle
            chapeau="[1 ligne — de l'étude de faisabilité à la mise en service, ETPM gère l'ensemble du projet]"
          >
            Notre process d'installation IRVE
          </SectionTitle>
          <ProcessTimeline steps={PROCESS_STEPS} />
        </div>
      </motion.section>

      {/* BLOC 6 — AIDES ET FINANCEMENT */}
      <section className={styles.aides}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle
              chapeau="[1 ligne — plusieurs dispositifs existent pour financer l'installation de bornes IRVE en entreprise et en copropriété]"
            >
              Aides financières pour les bornes de recharge
            </SectionTitle>
          </motion.div>
          <motion.div
            className={styles.aidesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn} className={styles.aideCard}>
              <h3 className={styles.aideCardTitle}>Programme Advenir</h3>
              <p className={styles.aideCardText}>
                [3-4 phrases — Advenir finance jusqu'à 50% du coût d'installation pour les
                entreprises (plafonné) et jusqu'à 8 000€ par point de recharge pour les copropriétés
                en infrastructure collective. ETPM monte les dossiers Advenir pour ses clients.
                Conditions : installateur qualifié IRVE obligatoire (c'est le cas d'ETPM ⚠️ à
                confirmer).]
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.aideCard}>
              <h3 className={styles.aideCardTitle}>Obligations loi LOM</h3>
              <p className={styles.aideCardText}>
                [3-4 phrases — la loi LOM impose le pré-équipement des parkings neufs (bâtiments
                résidentiels, tertiaires, commerciaux) et le pré-câblage des parkings existants de
                plus de 20 places d'ici 2025. Ne pas s'y conformer expose à des sanctions. ETPM
                accompagne la mise en conformité.]
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOC 7 — ETPM INSTALLATEUR IRVE */}
      <motion.section
        className={styles.installateur}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.installateurGrid}`}>
          <div>
            <SectionTitle>ETPM : votre installateur IRVE dans le Sud-Ouest</SectionTitle>
            <p className={styles.installateurText}>
              [5-6 phrases — ETPM est qualifié IRVE (⚠️ niveaux à confirmer) et intervient sur tout
              le Grand Sud-Ouest depuis ses 7 agences. Notre force : une maîtrise complète de la
              chaîne, du{' '}
              <Link to="/expertises/reseaux-energie" className={styles.contextualLink}>
                raccordement réseau
              </Link>{' '}
              (ETPM intervient sur les réseaux Enedis depuis 60 ans) à la pose des bornes. Nous ne
              sommes pas un simple installateur de bornes — nous sommes une entreprise de réseaux
              d'énergie qui installe aussi des IRVE. Cette double compétence garantit des
              installations fiables et dimensionnées correctement. 354 collaborateurs, certifications
              ISO et MASE, filiale du Groupe Synelis. — KW : installateur irve (590/mois),
              entreprise irve (70/mois)]
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
            <div className={styles.installateurCtas}>
              <Button to="/contact" variant="primary">
                Demander un devis
              </Button>
              <Link to="/realisations" className={styles.contextualLink}>
                Voir nos réalisations →
              </Link>
            </div>
          </div>
          <Placeholder
            text="[Photo : technicien ETPM en gilet et casque procédant à l'installation d'une borne de recharge, outils visibles, tableau électrique en arrière-plan — ambiance professionnelle et rassurante]"
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
            <SectionTitle>Installation IRVE dans le Sud-Ouest</SectionTitle>
          </motion.div>
          <div className={styles.zonesGrid}>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Toulouse & Haute-Garonne</h3>
              <p className={styles.zoneText}>
                [1-2 lignes — installation bornes de recharge entreprises et copropriétés dans le 31,
                agences Muret et Toulouse]
              </p>
              <Link to="/territoires/toulouse-haute-garonne" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Bordeaux & Gironde</h3>
              <p className={styles.zoneText}>
                [1-2 lignes — agence Pessac, IRVE parkings d'entreprise et copropriétés en Gironde]
              </p>
              <Link to="/territoires/bordeaux-gironde" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.zoneCard}>
              <h3 className={styles.zoneTitle}>Pays Basque & Landes</h3>
              <p className={styles.zoneText}>
                [1-2 lignes — siège Arcangues, installation IRVE au Pays Basque et dans les Landes]
              </p>
              <Link to="/territoires/pays-basque-landes" className={styles.contextualLink}>
                En savoir plus →
              </Link>
            </motion.div>
          </div>
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
          <SectionTitle>Questions fréquentes sur les bornes de recharge</SectionTitle>
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
          <h2 className={styles.ctaFinalTitle}>Un projet de bornes de recharge ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — entreprise, copropriété ou collectivité — ETPM dimensionne et installe vos
            bornes IRVE]
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
