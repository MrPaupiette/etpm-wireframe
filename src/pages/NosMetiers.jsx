import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'
import FilterBar from '../components/FilterBar'
import MetierCard from '../components/MetierCard'

const filters = ['Tous', 'Énergie', 'Télécom', 'Ferroviaire', 'Génie civil', 'Multi-réseaux']

const metiers = [
  {
    title: 'Chef de chantier TP',
    family: 'Énergie · VRD',
    filiales: 'ETPM · Restech · FCTP',
    text: "[Intention — pilotage d'un chantier de A à Z, coordination équipes, relation client, planning, sécurité — le poste clé du terrain — KW : chef de chantier tp (140/mois)]",
    externalLink: 'https://etpm.fr',
    externalLabel: 'Fiche complète sur etpm.fr →',
  },
  {
    title: 'Technicien fibre optique',
    family: 'Télécom',
    filiales: 'CAUM · E2R',
    text: "[Intention — soudure, raccordement, tirage de câble, maintenance réseau, boîtier PBO — métier en tension, recrutement massif — KW : technicien fibre optique (1 300/mois)]",
    externalLink: 'https://caum.fr',
    externalLabel: 'Fiche complète sur caum.fr →',
  },
  {
    title: 'Monteur caténaire',
    family: 'Ferroviaire',
    filiales: 'HP Elec',
    text: "[Intention — métier unique en France, travail en hauteur sur les lignes aériennes, qualification SNCF, TGV/TER — KW : monteur caténaire (90/mois)]",
    externalLink: 'https://hpelec.fr',
    externalLabel: 'Fiche complète sur hpelec.fr →',
  },
  {
    title: 'Conducteur de travaux',
    family: 'Tous domaines',
    filiales: 'ETPM · FCTP · CAUM',
    text: "[Intention — pilotage de projets, coordination multi-corps, suivi budget et planning, interface client — évolution naturelle après chef de chantier]",
    externalLink: 'https://etpm.fr',
    externalLabel: 'Fiche complète →',
  },
  {
    title: 'Monteur réseau électrique',
    family: 'Énergie',
    filiales: 'ETPM · E2R · Restech',
    text: "[Intention — raccordement HTA/BT, travaux sous tension, aérien et souterrain, intervention Enedis — KW : monteur réseau électrique (110/mois)]",
    externalLink: 'https://etpm.fr',
    externalLabel: 'Fiche complète sur etpm.fr →',
  },
  {
    title: 'Canalisateur',
    family: 'Multi-réseaux · Eau',
    filiales: 'Restech · FCTP',
    text: "[Intention — pose canalisations eau potable et assainissement, PEHD, branchements, travaux de tranchée — métier physique et concret]",
    externalLink: 'https://restech.fr',
    externalLabel: 'Fiche complète sur restech.fr →',
  },
  {
    title: "Conducteur d'engins",
    family: 'Énergie · VRD',
    filiales: 'ETPM · Restech',
    text: "[Intention — mini-pelle, chargeur, tractopelle, terrassement, tranchée — CACES nécessaires, formation possible en interne]",
    externalLink: 'https://etpm.fr',
    externalLabel: 'Fiche complète →',
  },
  {
    title: 'Électricien éclairage public',
    family: 'Énergie',
    filiales: 'ETPM · E2R · Restech',
    text: "[Intention — installation et maintenance candélabres, relamping LED, smart lighting, travail de nuit ponctuel — KW : éclairage public emploi]",
    externalLink: 'https://etpm.fr',
    externalLabel: 'Fiche complète →',
  },
]

export default function NosMetiers() {
  return (
    <main>
      {/* BLOC 1 — HERO */}
      <section
        style={{
          minHeight: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Placeholder height="100%" text="[Photo — collage métiers : technicien fibre, chef de chantier VRD, monteur caténaire, canalisateur]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nous rejoindre', path: '/nous-rejoindre' }, { label: 'Nos métiers' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Nos métiers
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — des dizaines de métiers terrain dans 6 filiales, de l'énergie à la fibre en passant par le ferroviaire — KW : métier travaux publics (210/mois), travailler dans les travaux publics]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO */}
      <section style={{ padding: 'clamp(60px, 8vw, 120px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 400, color: '#111', marginBottom: 32 }}>
              Trouvez votre voie
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.8, color: '#333' }}>
              [Texte 2-3 phrases — chez Synelis on ne fait pas que des travaux publics : on fait circuler l'énergie, on connecte les territoires à la fibre, on fait rouler les trains, on distribue l'eau potable. Chaque filiale a ses métiers propres, mais l'esprit d'équipe est le même partout. — KW : métier travaux publics, emploi génie civil]
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — FILTRES + GRILLE MÉTIERS */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FilterBar filters={filters} activeFilter="Tous" />
          <div
            className="metiers-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
          >
            {metiers.map((m, i) => (
              <AnimateOnScroll key={m.title} delay={i * 0.08}>
                <MetierCard {...m} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .metiers-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 4 — RECONVERSION */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div style={{ background: '#F5F5F5', borderRadius: 20, padding: 48, textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: '#111', marginBottom: 16 }}>
                Envie de changer de voie ?
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: '#666', lineHeight: 1.7, marginBottom: 28 }}>
                [Intention — beaucoup de nos métiers sont accessibles sans diplôme BTP, via la reconversion professionnelle. On forme en interne. — pousser : reconversion btp, océan bleu]
              </p>
              <Link to="/nous-rejoindre/reconversion" className="btn-pill btn-pill-dark">
                Découvrir la reconversion BTP
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 5 — CTA DOUBLE */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
              <Link to="/nous-rejoindre/offres" className="btn-pill btn-pill-dark">
                Voir nos offres
              </Link>
              <Link to="/nous-rejoindre/candidature" className="btn-pill btn-pill-outline">
                Candidature spontanée
              </Link>
            </div>
            <Link
              to="/nous-rejoindre"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: '#999', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              Retour à Nous rejoindre →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
