import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'

const reasons = [
  { icon: '🌳', title: "Travail en extérieur", text: "[Intention — pas de bureau, des chantiers, du terrain, de l’air frais, des paysages qui changent chaque jour]" },
  { icon: '🤝', title: "Esprit d’équipe", text: "[Intention — on ne travaille jamais seul, solidarité chantier, entraide quotidienne, liens forts]" },
  { icon: '📈', title: "Évolution interne", text: "[Intention — mobilité entre les 6 filiales, formation continue, progression rapide, tutorat]" },
  { icon: '💡', title: "Sens du métier", text: "[Intention — rendre possible la vie collective, utilité publique concrète, fierté du résultat visible]" },
]

const thematiques = [
  {
    to: '/nous-rejoindre/alternance',
    image: '[Photo — alternant terrain, casque, formation]',
    title: 'Alternance & apprentissage BTP',
    text: '[KW : alternance btp 480/mois + apprentissage btp 210/mois = 690/mois — quick win #2]',
  },
  {
    to: '/nous-rejoindre/metiers',
    image: '[Photo — diversité métiers, collage]',
    title: 'Nos métiers',
    text: '[KW : métier travaux publics 210/mois — hub distribution vers fiches filiales]',
  },
  {
    to: '/nous-rejoindre/carrieres-fibre',
    image: '[Photo — technicien fibre optique]',
    title: 'Carrières fibre optique',
    text: '[KW : emploi fibre optique 470/mois — secteur en tension]',
  },
  {
    to: '/nous-rejoindre/carrieres-tp',
    image: '[Photo — chantier VRD, terrassement]',
    title: 'Carrières travaux publics',
    text: '[KW : emploi travaux publics 420/mois]',
  },
  {
    to: '/nous-rejoindre/reconversion',
    image: '[Photo — reconversion, formation, nouveau départ]',
    title: 'Reconversion BTP',
    text: '[Océan bleu — personne ne parle aux reconvertis, positionnement unique]',
  },
  {
    to: '/nous-rejoindre/offres',
    image: '[Icône — moteur de recherche, loupe, liste]',
    title: "Nos offres d’emploi",
    text: '[Toutes les offres du groupe, filtrables par filiale/métier/zone]',
  },
]

function ReasonCard({ icon, title, text, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#fff',
          borderRadius: 20,
          padding: 40,
          textAlign: 'center',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 12 }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>{text}</p>
      </div>
    </AnimateOnScroll>
  )
}

function ThematiqueCard({ to, image, title, text, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.1}>
      <Link
        to={to}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'block',
          background: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          textDecoration: 'none',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.08)' : '0 2px 8px rgba(0,0,0,0.03)',
        }}
      >
        <Placeholder height="200px" text={image} />
        <div style={{ padding: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 8 }}>
            {title}
          </h3>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.5 }}>{text}</p>
        </div>
      </Link>
    </AnimateOnScroll>
  )
}

export default function NousRejoindre() {
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
          <Placeholder height="100%" text="[Photo — équipe diverse terrain, fin de journée chantier, sourires, esprit collectif]" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))', zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 24px 60px', width: '100%' }}
        >
          <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Nous rejoindre' }]} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: '#fff', marginBottom: 12 }}>
            Rejoignez l’aventure
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 650, lineHeight: 1.5 }}>
            [Accroche — 700 collaborateurs, 6 filiales, des métiers qui ont du sens — on recrute des gens engagés, pas des CV parfaits — KW : recrutement travaux publics (40/mois), recrutement btp]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — POURQUOI NOUS REJOINDRE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Pourquoi nous rejoindre"
            subtitle="[4 raisons qui font la différence Synelis]"
          />
          <div
            className="reasons-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}
          >
            {reasons.map((r, i) => (
              <ReasonCard key={r.title} {...r} index={i} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .reasons-grid { grid-template-columns: 1fr !important; }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .reasons-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* BLOC 3 — EXPLORER PAR THÉMATIQUE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle title="Explorer par thématique" />
          <div
            className="thematiques-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}
          >
            {thematiques.map((t, i) => (
              <ThematiqueCard key={t.to} {...t} index={i} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .thematiques-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 4 — CANDIDATURE SPONTANÉE */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 400, color: '#111', marginBottom: 16 }}>
              Pas d’offre qui vous correspond ?
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Intention — nous recrutons régulièrement dans toutes nos filiales, envoyez votre profil même sans offre correspondante]
            </p>
            <Link to="/nous-rejoindre/candidature" className="btn-pill btn-pill-dark">
              Candidature spontanée
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
