import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FilterBar from '../components/FilterBar'
import ArticleCard from '../components/ArticleCard'

const filters = ['Toutes', 'Groupe', 'Chantiers', 'Recrutement', 'RSE']

const articles = [
  {
    date: '12 mars 2026',
    category: 'Chantiers',
    title: "[Titre — ETPM inaugure le relamping LED de la commune de X]",
    excerpt: "[Extrait 2 lignes — résumé de l'actualité, ton factuel]",
    image: '[Photo — inauguration éclairage LED, ruban coupé]',
  },
  {
    date: '8 mars 2026',
    category: 'Recrutement',
    title: "[Titre — Synelis recrute 50 alternants pour la rentrée 2026]",
    excerpt: "[Extrait — campagne alternance groupe, 6 filiales, métiers ouverts]",
    image: '[Photo — alternants en formation, terrain]',
  },
  {
    date: '5 mars 2026',
    category: 'RSE',
    title: "[Titre — Renouvellement certification MASE pour le Groupe Synelis]",
    excerpt: "[Extrait — audit réussi, indicateurs sécurité, engagement continu]",
    image: '[Photo — remise certification, équipe fière]',
  },
  {
    date: '28 fév 2026',
    category: 'Chantiers',
    title: "[Titre — CAUM déploie la fibre dans 3 communes du Béarn]",
    excerpt: "[Extrait — déploiement FTTH, 1 500 prises, zone blanche]",
    image: '[Photo — technicien fibre, armoire de rue]',
  },
  {
    date: '22 fév 2026',
    category: 'Chantiers',
    title: "[Titre — HP Elec sur le chantier de la LGV Bordeaux-Toulouse]",
    excerpt: "[Extrait — caténaire, électrification, avancement]",
    image: '[Photo — caténaire en cours de pose]',
  },
  {
    date: '15 fév 2026',
    category: 'Groupe',
    title: "[Titre — Synelis au Salon des Maires 2026]",
    excerpt: "[Extrait — stand, rencontres collectivités, présentation offres]",
    image: '[Photo — stand salon, équipe commerciale]',
  },
  {
    date: '10 fév 2026',
    category: 'Recrutement',
    title: "[Titre — 10 alternants recrutés en CDI chez ETPM]",
    excerpt: "[Extrait — parcours alternance → embauche, témoignages]",
    image: '[Photo — anciens alternants sur chantier, sourires]',
  },
  {
    date: '5 fév 2026',
    category: 'Chantiers',
    title: "[Titre — Restech achève les travaux d'eau potable à Crac'h]",
    excerpt: "[Extrait — adduction, canalisations PEHD, commune satisfaite]",
    image: '[Photo — chantier eau potable terminé, Bretagne]',
  },
  {
    date: '1 fév 2026',
    category: 'RSE',
    title: "[Titre — FCTP réduit de 20% ses émissions carbone sur les chantiers IdF]",
    excerpt: "[Extrait — actions concrètes, résultats mesurables]",
    image: '[Photo — chantier propre, tri déchets]',
  },
]

export default function Actualites() {
  return (
    <main>
      {/* BLOC 1 — HERO */}
      <section
        style={{
          minHeight: '50vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Placeholder height="100%" text="[Photo — événement Synelis, salon professionnel, inauguration chantier]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Actualités' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Actualités
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — les dernières nouvelles du groupe et de nos filiales]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — FILTRES */}
      <section style={{ padding: '100px 0 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <FilterBar filters={filters} activeFilter="Toutes" />
        </div>
      </section>

      {/* BLOC 3 — GRILLE ARTICLES */}
      <section style={{ padding: '40px 0 clamp(80px, 10vw, 140px)', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div
            className="articles-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
          >
            {articles.map((a, i) => (
              <AnimateOnScroll key={a.title} delay={i * 0.08}>
                <ArticleCard {...a} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .articles-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 4 — PAGINATION */}
      <section style={{ padding: '40px 0 80px', background: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <button className="btn-pill btn-pill-outline" style={{ marginBottom: 16 }}>
            Charger plus d'articles
          </button>
          <p style={{ fontSize: 14, color: '#999', fontStyle: 'italic' }}>
            [En production : pagination infinie ou bouton load more — 2 à 4 articles/mois prévus]
          </p>
        </div>
      </section>
    </main>
  )
}
