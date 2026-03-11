import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'
import FilialeDetailCard from '../components/FilialeDetailCard'

const filiales = [
  {
    name: 'ETPM',
    subtitle: "Réseaux d’énergie & éclairage public — 354 collaborateurs — 63M€ CA",
    text: "[Intention — filiale historique du groupe, réseaux électriques HTA/BT, VRD & viabilisation, éclairage public, IRVE bornes de recharge, 7 agences Grand Sud-Ouest, 60 ans d’expérience — KW : entreprise travaux publics toulouse, éclairage public, viabilisation]",
    zone: 'Toulouse · Bordeaux · Pau · Bayonne · Agen · Périgueux · Cahors',
    dgName: '[Prénom Nom — Directeur ETPM]',
    dgQuote: '[Citation courte sur ETPM]',
    image: '[Photo — chantier ETPM, éclairage public, gilets orange, Sud-Ouest]',
    link: { label: 'Découvrir ETPM →', url: 'https://etpm.fr' },
    side: 'left',
  },
  {
    name: 'HP Elec',
    subtitle: 'Caténaire & électrification ferroviaire — National',
    text: "[Intention — seul spécialiste caténaire du groupe, sous-stations, signalisation, qualification SNCF, interventions TGV/TER, tramway — expertise rare en France — KW : caténaire (480/mois), monteur caténaire]",
    zone: 'National — Brétigny-sur-Orge (siège)',
    dgName: '[Prénom Nom — Directeur HP Elec]',
    dgQuote: '[Citation courte sur HP Elec]',
    image: '[Photo — monteur caténaire en hauteur, ligne ferroviaire, TGV]',
    link: { label: 'Découvrir HP Elec →', url: 'https://hpelec.fr' },
    side: 'right',
  },
  {
    name: 'CAUM',
    subtitle: 'Fibre optique & télécommunications — 156 collaborateurs — 13M€ CA',
    text: "[Intention — déploiement FTTH, câblage VDI entreprises, vidéosurveillance & sécurité, infrastructure télécom, +20 RIP réalisés — KW : entreprise fibre optique, déploiement ftth]",
    zone: 'Grand Sud-Ouest & National — Lescar (siège)',
    dgName: '[Prénom Nom — Directeur CAUM]',
    dgQuote: '[Citation courte sur CAUM]',
    image: '[Photo — technicien fibre, soudure optique, boîtier PBO, terrain]',
    link: { label: 'Découvrir CAUM →', url: 'https://caum.fr' },
    side: 'left',
  },
  {
    name: 'FCTP',
    subtitle: "Génie civil & réseaux de chaleur — Île-de-France",
    text: "[Intention — réseaux de chaleur urbains, génie civil souterrain, travaux en milieu urbain dense, expertise grands projets IdF — KW : réseau de chaleur, génie civil, travaux publics ile de france]",
    zone: 'Île-de-France',
    dgName: '[Prénom Nom — Directeur FCTP]',
    dgQuote: '[Citation courte sur FCTP]',
    image: '[Photo — chantier urbain, canalisations réseau de chaleur, Île-de-France]',
    link: { label: 'Découvrir FCTP →', url: 'https://fctp.fr' },
    side: 'right',
  },
  {
    name: 'Restech',
    subtitle: 'Multi-réseaux — ~40 collaborateurs — Morbihan & Finistère',
    text: "[Intention — eau potable & adduction, réseaux électriques Enedis, éclairage public, fibre optique en Bretagne, 2 agences Crac’h et Melgven, parc matériel propre — KW : adduction eau potable (260/mois), entreprise tp bretagne]",
    zone: "Crac’h (Morbihan) · Melgven (Finistère)",
    dgName: '[Prénom Nom — Directeur Restech]',
    dgQuote: '[Citation courte sur Restech]',
    image: '[Photo — chantier eau potable Bretagne, canalisation PEHD, paysage breton]',
    link: { label: 'Découvrir Restech →', url: 'https://restech.fr' },
    side: 'left',
  },
  {
    name: 'E2R',
    subtitle: "Réseaux & énergie — 37 collaborateurs — 5M€ CA — La Réunion",
    text: "[Intention — réseaux d’énergie HTB/HTA/BT, éclairage public, fibre optique THD Réunion, VRD, bureau d’études intégré, terrain volcanique et tropical — KW : entreprise btp 974]",
    zone: 'Le Port (97420) — La Réunion',
    dgName: '[Prénom Nom — Directeur E2R]',
    dgQuote: '[Citation courte sur E2R]',
    image: "[Photo — chantier E2R La Réunion, terrain volcanique, paysage tropical]",
    link: { label: 'Découvrir E2R →', url: 'https://e2r.re' },
    side: 'right',
  },
]

export default function NosFiliales() {
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
          <Placeholder height="100%" text="[Photo — vue aérienne ou montage multi-chantiers, couverture nationale]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nos filiales' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Nos filiales
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — un groupe, six expertises complémentaires, 25 agences sur le territoire]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — CARTE INTERACTIVE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Un groupe, six expertises"
            subtitle="[Sous-titre — chaque filiale porte un savoir-faire unique, toutes partagent le même ADN]"
          />
          <AnimateOnScroll>
            <Placeholder height="400px" text="[Carte de France interactive — 25 implantations marquées par des points, zones d’intervention colorées par filiale, survol = info-bulle avec nom + métier + zone]" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — FICHES FILIALES */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {filiales.map((f, i) => (
              <FilialeDetailCard key={f.name} {...f} index={i} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .filiale-card { flex-direction: column !important; }
            .filiale-card-image { width: 100% !important; min-height: 220px; }
            .filiale-card-content { width: 100% !important; padding: 32px !important; }
          }
        `}</style>
      </section>

      {/* BLOC 4 — CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 400, color: '#111', marginBottom: 16 }}>
              Un projet ?
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Intention — quel que soit votre besoin infrastructure, une de nos filiales a l’expertise. Contactez-nous, on vous oriente.]
            </p>
            <Link to="/contact" className="btn-pill btn-pill-dark">
              Nous contacter
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
