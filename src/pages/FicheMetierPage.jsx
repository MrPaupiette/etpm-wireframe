import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Tag from '../components/ui/Tag'
import Placeholder from '../components/ui/Placeholder'
import TestimonialBlock from '../components/ui/TestimonialBlock'
import styles from './FicheMetierPage.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── DONNÉES FICHES MÉTIERS ── */
const FICHES = {
  'chef-de-chantier-tp': {
    title: 'Chef de chantier TP : fiche métier, salaire et évolution',
    family: 'Encadrement',
    summary: {
      level: 'BTS Travaux Publics / Licence Pro TP — ou promotion interne',
      experience: '3-5 ans sur chantier TP (ou diplôme + 1-2 ans)',
      salary: '[XX 000 — XX 000 € brut/an — placeholder, le client fournira]',
      contract: 'CDI',
      location: '7 agences Sud-Ouest (Toulouse, Bordeaux, Pays Basque)',
      sector: 'Travaux publics, réseaux d\'énergie, VRD, éclairage',
    },
    missions:
      '[5-7 phrases structurées — le chef de chantier TP pilote un ou plusieurs chantiers de travaux publics de A à Z. Ses missions au quotidien chez ETPM : préparer le chantier (lecture de plans, métré, approvisionnement matériaux), organiser les équipes (3 à 15 personnes selon le chantier), gérer l\'avancement et les délais, assurer le respect du budget, veiller à la sécurité (plan de prévention, accueil sécurité, port des EPI), être l\'interlocuteur du client sur le terrain (collectivité, promoteur, bureau d\'études). Chez ETPM, le chef de chantier intervient sur des chantiers variés : VRD, éclairage public, réseaux HTA/BT, IRVE, terrassement. — KW : chef de chantier tp (140/mois)]',
    missionsImage:
      '[Photo : chef de chantier ETPM sur le terrain — plan à la main, gilet et casque, équipe en arrière-plan, chantier VRD ou réseau visible]',
    skillsTechnical:
      '[Liste 5-6 items en intentions — lecture de plans et métrés, connaissance des réseaux (eau, gaz, électricité, télécom), maîtrise des techniques de terrassement et de pose, gestion budgétaire de chantier, connaissance des normes sécurité (AIPR, habilitations électriques), utilisation d\'outils de suivi (planning, compte-rendu).]',
    skillsPersonal:
      '[Liste 5-6 items en intentions — leadership naturel et capacité à fédérer, rigueur et sens de l\'organisation, réactivité face aux imprévus de chantier, bon relationnel (client, équipes, sous-traitants), résistance physique et goût du terrain, autonomie et prise de décision.]',
    trainingDiploma:
      '[3-4 phrases — BTS Travaux Publics, BTS Bâtiment, Licence Pro Travaux Publics, DUT Génie Civil. Après le diplôme, 1-2 ans comme conducteur de travaux junior ou chef d\'équipe avant de prendre un chantier en autonomie. Les écoles partenaires d\'ETPM dans le Sud-Ouest (placeholder — à confirmer avec le client).]',
    trainingInternal:
      '[3-4 phrases — chez ETPM, de nombreux chefs de chantier sont arrivés sans diplôme. Le parcours type : manœuvre → ouvrier qualifié → chef d\'équipe → chef de chantier en 5-8 ans. ETPM accompagne la montée en compétences par la formation continue (CACES, habilitations, management). C\'est la voie la plus fréquente dans les TP.]',
    salaryDetail:
      '[3-4 phrases — le salaire d\'un chef de chantier TP varie selon l\'expérience, la zone géographique et la taille des chantiers. Fourchette indicative : XX 000 à XX 000 € brut/an (placeholder). Chez ETPM : CDI, mutuelle groupe, intéressement, véhicule de service, téléphone. Les primes chantier et les heures supplémentaires complètent significativement la rémunération.]',
    evolution:
      '[3-4 phrases — le chef de chantier TP peut évoluer vers conducteur de travaux (supervision de plusieurs chantiers), responsable d\'agence, ou se spécialiser (chantiers HTA, éclairage intelligent, IRVE). Chez ETPM, la promotion interne est la norme : les responsables d\'agence actuels sont souvent d\'anciens chefs de chantier. Le groupe Synelis offre aussi des mobilités entre filiales.]',
    etpmSpecific:
      '[4-5 phrases — ce qui différencie le poste chez ETPM : la variété des chantiers (VRD un jour, éclairage public le lendemain, réseau HTA la semaine suivante), le matériel en propre (pas d\'attente de location), des chantiers dans le Sud-Ouest (pas de grands déplacements), un groupe solide (Synelis, 700 personnes) avec une ambiance terrain. Le chef de chantier ETPM n\'est pas un numéro — il connaît le directeur d\'agence, il forme les apprentis, il voit ses chantiers de la première tranchée à la réception.]',
    etpmImage:
      '[Photo : chef de chantier ETPM en fin de journée — discussion avec un collaborateur, ambiance de terrain détendue, soleil couchant sur le chantier]',
    testimonial: {
      quote:
        'Témoignage d\'un chef de chantier ETPM — 3-4 phrases. Son parcours (promotion interne ou diplômé), ce qu\'il aime (variété, autonomie, équipe), ce qui le fait rester (ambiance, formation, stabilité). — Placeholder, le vrai sera recueilli.',
      author: '[Prénom N., Chef de chantier — Agence de XX — X ans chez ETPM]',
      avatar:
        '[Photo : portrait chef de chantier ETPM, casque, gilet, regard caméra]',
    },
    relatedExpertises: [
      { name: 'VRD & Viabilisation', link: '/expertises/vrd-viabilisation' },
      { name: 'Éclairage public', link: '/expertises/eclairage-public' },
      { name: 'Réseaux d\'énergie', link: '/expertises/reseaux-energie' },
      { name: 'TP & Terrassement', link: '/expertises/travaux-publics-terrassement' },
    ],
    relatedExpertisesIntro:
      '[1 ligne — le chef de chantier ETPM intervient sur l\'ensemble de nos métiers]',
    adjacentMetiers: [
      { name: 'Chef d\'équipe', description: '[1-2 lignes — encadre 3-5 personnes, première marche d\'encadrement]', link: '/nous-rejoindre/metiers' },
      { name: 'Conducteur de travaux', description: '[1-2 lignes — supervise plusieurs chantiers, poste à responsabilité]', link: '/nous-rejoindre/metiers' },
      { name: 'Monteur réseau électrique', description: '[1-2 lignes — pose de câbles HTA/BT, métier terrain complémentaire]', link: '/fiches-metiers/monteur-reseau-electrique' },
    ],
  },
  'monteur-reseau-electrique': {
    title: 'Monteur réseau électrique : fiche métier, formation et salaire',
    family: 'Terrain',
    summary: {
      level: 'CAP/BEP Électrotechnique — ou formation interne ETPM',
      experience: 'Débutant accepté (habilitations obligatoires)',
      salary: '[XX 000 — XX 000 € brut/an — placeholder]',
      contract: 'CDI',
      location: '7 agences Sud-Ouest (Toulouse, Bordeaux, Pays Basque)',
      sector: 'Réseaux d\'énergie, éclairage public, VRD',
    },
    missions:
      '[5-7 phrases — le monteur réseau électrique pose et raccorde les réseaux de distribution d\'électricité (HTA et BT) pour Enedis et les collectivités. Chez ETPM, il intervient sur des chantiers neufs (lotissements, ZAC) et de renouvellement (remplacement de réseaux aériens par du souterrain). Travaux en tranchée (pose de câbles, fourreaux, chambres de tirage) et en aérien (travaux sous tension, raccordement en nacelle). Intervient aussi sur les postes de transformation HTA/BT : génie civil, équipement, mise en service. C\'est LE métier historique d\'ETPM — le plus recruté et le plus formé en interne. — KW : monteur réseau électrique (110/mois)]',
    missionsImage:
      '[Photo : monteur réseau ETPM en nacelle ou en tranchée — câbles visibles, gestes techniques, équipement de sécurité]',
    skillsTechnical:
      '[Liste 5-6 items — habilitations électriques H1/B1/B2/H2 (formation assurée par ETPM), lecture de schémas électriques, connaissance des réseaux HTA/BT, travail en hauteur (nacelle — CACES R486), utilisation d\'appareillage de mesure et de consignation, connaissance de la norme NF C 11-201.]',
    skillsPersonal:
      '[Liste 5-6 items — rigueur absolue (sécurité électrique), sang-froid et concentration, aptitude au travail en hauteur, esprit d\'équipe, sens de l\'observation (détection d\'anomalies), bonne condition physique.]',
    trainingDiploma:
      '[3-4 phrases — CAP Électricien, Bac Pro MELEC (Métiers de l\'Électricité et de ses Environnements Connectés), BTS Électrotechnique. Les habilitations électriques sont obligatoires et renouvelées tous les 3 ans. ETPM assure la formation initiale et le recyclage des habilitations pour tous ses monteurs.]',
    trainingInternal:
      '[3-4 phrases — ETPM recrute aussi des profils sans diplôme électrique et les forme en interne. Le parcours : intégration en binôme avec un monteur expérimenté, passage des habilitations (H1/B1 en 2-3 mois), montée en compétences progressive. Après 1-2 ans, le monteur peut se spécialiser (HTA, postes de transformation, éclairage public).]',
    salaryDetail:
      '[3-4 phrases — le salaire d\'un monteur réseau électrique varie selon les habilitations détenues et l\'expérience. Fourchette : XX 000 à XX 000 € brut/an (placeholder). Chez ETPM : CDI, mutuelle, primes de chantier, heures supplémentaires payées. Les monteurs habilités HTA sont les profils les mieux rémunérés du terrain.]',
    evolution:
      '[3-4 phrases — le monteur réseau peut évoluer vers chef d\'équipe (encadrement de 3-5 personnes), se spécialiser en HTA (travaux sous tension, postes de transformation) ou bifurquer vers le métier de technicien IRVE (bornes de recharge). À plus long terme : chef de chantier spécialisé réseaux. Le groupe Synelis offre aussi des mobilités vers Restech (réseaux secs Bretagne) ou HP Elec (ferroviaire).]',
    etpmSpecific:
      '[4-5 phrases — ETPM est avant tout une entreprise de réseaux électriques — c\'est le métier fondateur depuis 1965. Le monteur réseau chez ETPM travaille avec du matériel récent et en propre. Les chantiers sont dans le Sud-Ouest, pas de grands déplacements. La formation est continue (recyclage habilitations, nouveaux matériels, évolution normes). Et le parcours d\'évolution est réel — le directeur technique actuel a commencé comme monteur.]',
    etpmImage:
      '[Photo : monteur réseau ETPM sur poste de transformation ou en tranchée, ambiance technique, matériel visible]',
    testimonial: null,
    relatedExpertises: [
      { name: 'Réseaux d\'énergie', link: '/expertises/reseaux-energie' },
      { name: 'Éclairage public', link: '/expertises/eclairage-public' },
      { name: 'VRD & Viabilisation', link: '/expertises/vrd-viabilisation' },
    ],
    relatedExpertisesIntro:
      '[1 ligne — le monteur réseau ETPM intervient principalement sur les réseaux d\'énergie et l\'éclairage]',
    adjacentMetiers: [
      { name: 'Canalisateur', description: '[1-2 lignes — pose de canalisations eau/gaz, métier terrain complémentaire]', link: '/nous-rejoindre/metiers' },
      { name: 'Chef d\'équipe', description: '[1-2 lignes — première marche d\'encadrement après 2-3 ans]', link: '/nous-rejoindre/metiers' },
      { name: 'Technicien IRVE', description: '[1-2 lignes — spécialisation bornes de recharge, métier en croissance]', link: '/nous-rejoindre/metiers' },
    ],
  },
}

const DEFAULT_FICHE = FICHES['chef-de-chantier-tp']

export default function FicheMetierPage() {
  const { slug } = useParams()
  const fiche = FICHES[slug] || DEFAULT_FICHE

  const summaryRows = [
    { label: 'Niveau d\'études', value: fiche.summary.level },
    { label: 'Expérience requise', value: fiche.summary.experience },
    { label: 'Salaire', value: fiche.summary.salary },
    { label: 'Type de contrat', value: fiche.summary.contract },
    { label: 'Lieu', value: fiche.summary.location },
    { label: 'Secteur', value: fiche.summary.sector },
  ]

  return (
    <>
      {/* BLOC 1 — HERO FICHE MÉTIER */}
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
              { label: 'Nos métiers', to: '/nous-rejoindre/metiers' },
              { label: fiche.title.split(':')[0].trim() },
            ]}
          />
          <div className={styles.heroTag}>
            <Tag>{fiche.family}</Tag>
          </div>
          <h1 className={styles.heroTitle}>{fiche.title}</h1>
          <div className={styles.summaryBox}>
            {summaryRows.map((row) => (
              <div key={row.label} className={styles.summaryRow}>
                <span className={styles.summaryLabel}>{row.label}</span>
                <span className={styles.summaryValue}>{row.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.heroCta}>
            <Button to="/nous-rejoindre/offres">
              Voir les offres {fiche.title.split(':')[0].toLowerCase().trim()}
            </Button>
          </div>
        </div>
      </motion.section>

      {/* BLOC 2 — MISSIONS */}
      <motion.section
        className={styles.missions}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.twoCol}`}>
          <div>
            <SectionTitle>
              Les missions {fiche.family === 'Terrain' ? 'du' : 'du'} {fiche.title.split(':')[0].toLowerCase().trim()}
            </SectionTitle>
            <p className={styles.bodyText}>{fiche.missions}</p>
          </div>
          <Placeholder text={fiche.missionsImage} ratio="4/3" />
        </div>
      </motion.section>

      {/* BLOC 3 — COMPÉTENCES */}
      <motion.section
        className={styles.competences}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Compétences et qualités requises</SectionTitle>
          <div className={styles.competencesGrid}>
            <div>
              <h3 className={styles.subTitle}>Compétences techniques</h3>
              <p className={styles.bodyText}>{fiche.skillsTechnical}</p>
            </div>
            <div>
              <h3 className={styles.subTitle}>Qualités personnelles</h3>
              <p className={styles.bodyText}>{fiche.skillsPersonal}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 4 — FORMATION ET ACCÈS */}
      <motion.section
        className={styles.formation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.formationInner}>
            <SectionTitle>
              Comment devenir {fiche.title.split(':')[0].toLowerCase().trim()}
            </SectionTitle>
            <div className={styles.formationBlock}>
              <h3 className={styles.subTitle}>Parcours diplômé</h3>
              <p className={styles.bodyText}>{fiche.trainingDiploma}</p>
            </div>
            <div className={styles.formationBlock}>
              <h3 className={styles.subTitle}>Parcours promotion interne</h3>
              <p className={styles.bodyText}>{fiche.trainingInternal}</p>
            </div>
            <Link to="/nous-rejoindre/metiers" className={styles.contextualLink}>
              Voir le parcours d'évolution complet →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 5 — SALAIRE ET ÉVOLUTION */}
      <motion.section
        className={styles.salaireEvolution}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <SectionTitle>Salaire et perspectives d'évolution</SectionTitle>
          <div className={styles.competencesGrid}>
            <div>
              <h3 className={styles.subTitle}>Rémunération</h3>
              <p className={styles.bodyText}>{fiche.salaryDetail}</p>
            </div>
            <div>
              <h3 className={styles.subTitle}>Perspectives d'évolution</h3>
              <p className={styles.bodyText}>{fiche.evolution}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* BLOC 6 — LE MÉTIER CHEZ ETPM */}
      <motion.section
        className={styles.chezEtpm}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.twoCol}`}>
          <div>
            <SectionTitle>
              {fiche.title.split(':')[0].trim()} chez ETPM
            </SectionTitle>
            <p className={styles.bodyText}>{fiche.etpmSpecific}</p>
            <div className={styles.chezEtpmChiffres}>
              <span><strong>354</strong> collaborateurs</span>
              <span><strong>7</strong> agences</span>
              <span><strong>60</strong> ans d'expérience</span>
            </div>
            <div className={styles.chezEtpmCtas}>
              <Button to="/nous-rejoindre/offres">
                Postuler comme {fiche.title.split(':')[0].toLowerCase().trim()}
              </Button>
              <Link to="/contact" className={styles.contextualLink}>
                Candidature spontanée →
              </Link>
            </div>
          </div>
          <Placeholder text={fiche.etpmImage} ratio="4/3" />
        </div>
      </motion.section>

      {/* BLOC 7 — TÉMOIGNAGE (optionnel) */}
      {fiche.testimonial && (
        <motion.section
          className={styles.temoignage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className={styles.temoignageAvatar}>
              <Placeholder text={fiche.testimonial.avatar} ratio="1/1" />
            </div>
            <TestimonialBlock
              quote={fiche.testimonial.quote}
              author={fiche.testimonial.author}
            />
          </div>
        </motion.section>
      )}

      {/* BLOC 8 — EXPERTISES LIÉES */}
      <motion.section
        className={styles.expertises}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeIn}>
            <SectionTitle>
              Les expertises {fiche.family === 'Terrain' ? 'du' : 'du'} {fiche.title.split(':')[0].toLowerCase().trim()} chez ETPM
            </SectionTitle>
            <p className={styles.expertisesIntro}>{fiche.relatedExpertisesIntro}</p>
          </motion.div>
          <div className={styles.expertisesGrid}>
            {fiche.relatedExpertises.map((exp) => (
              <motion.div key={exp.name} variants={fadeIn}>
                <Link to={exp.link} className={styles.expertiseCard}>
                  {exp.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* BLOC 9 — AUTRES MÉTIERS */}
      <motion.section
        className={styles.autresMetiers}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={stagger}
      >
        <div className="container">
          <motion.div variants={fadeIn}>
            <SectionTitle>Découvrir d'autres métiers</SectionTitle>
          </motion.div>
          <div className={styles.autresMetiersGrid}>
            {fiche.adjacentMetiers.map((metier) => (
              <motion.div key={metier.name} variants={fadeIn}>
                <Link to={metier.link} className={styles.autreMetierCard}>
                  <h3 className={styles.autreMetierTitle}>{metier.name}</h3>
                  <p className={styles.autreMetierText}>{metier.description}</p>
                  <span className={styles.autreMetierLink}>
                    {metier.link.includes('fiches-metiers') ? 'Lire la fiche métier →' : 'Voir le métier →'}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className={styles.autresMetiersBack}>
            <Link to="/nous-rejoindre/metiers" className={styles.contextualLink}>
              ← Voir tous les métiers
            </Link>
          </div>
        </div>
      </motion.section>

      {/* BLOC 10 — CTA BANDEAU */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>Le poste vous intéresse ?</h2>
          <p className={styles.ctaFinalText}>
            [1 ligne — ETPM recrute des {fiche.title.split(':')[0].toLowerCase().trim()}s dans ses 7 agences du Sud-Ouest]
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
