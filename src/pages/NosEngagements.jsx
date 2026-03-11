import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'
import MiniCounters from '../components/MiniCounters'

/* ── Pillar block ── */
function PillarBlock({ emoji, title, text, image, counters, link, imageLeft = true, bgColor = '#F5F5F5' }) {
  const [hovered, setHovered] = useState(false)

  const imageEl = (
    <div className="pillar-image" style={{ width: '45%', flexShrink: 0 }}>
      <Placeholder height="100%" aspectRatio="4/3" text={image} />
    </div>
  )

  const contentEl = (
    <div className="pillar-content" style={{ width: '55%', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <span style={{ fontSize: 36 }}>{emoji}</span>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(26px, 3vw, 32px)',
            fontWeight: 400,
            color: '#111',
          }}
        >
          {title}
        </h2>
      </div>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, marginBottom: 0 }}>
        {text}
      </p>
      {counters && <MiniCounters items={counters} />}
      {link && (
        <Link
          to={link.path}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            color: '#111',
            textDecoration: 'underline',
            textUnderlineOffset: 3,
            marginTop: 20,
            display: 'inline-block',
          }}
        >
          {link.label}
        </Link>
      )}
    </div>
  )

  return (
    <section style={{ padding: 'clamp(60px, 8vw, 120px) 0', background: bgColor }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <AnimateOnScroll direction={imageLeft ? 'left' : 'right'}>
          <div
            className="pillar-block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: 'flex',
              flexDirection: imageLeft ? 'row' : 'row-reverse',
              background: '#fff',
              borderRadius: 20,
              overflow: 'hidden',
              transition: 'box-shadow 0.3s',
              boxShadow: hovered ? '0 12px 30px rgba(0,0,0,0.07)' : '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            {imageEl}
            {contentEl}
          </div>
        </AnimateOnScroll>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pillar-block { flex-direction: column !important; }
          .pillar-image { width: 100% !important; min-height: 220px; }
          .pillar-content { width: 100% !important; padding: 32px !important; }
        }
      `}</style>
    </section>
  )
}

/* ── Resource card ── */
function ResourceCard({ title, kwHint, text, linkLabel, linkPath }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 20,
        borderLeft: '4px solid #333',
        padding: 32,
        transition: 'box-shadow 0.3s',
        boxShadow: hovered ? '0 8px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 4 }}>
        {title}
      </h3>
      <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, fontFamily: 'var(--font-sans)' }}>
        {kwHint}
      </p>
      <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
        {text}
      </p>
      <Link
        to={linkPath}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          color: '#111',
          textDecoration: 'underline',
          textUnderlineOffset: 3,
        }}
      >
        {linkLabel}
      </Link>
    </div>
  )
}

/* ── PAGE ── */
export default function NosEngagements() {
  return (
    <main>
      {/* BLOC 1 — HERO COMPACT */}
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
          <Placeholder height="100%" text="[Photo — chantier sécurisé, EPI complets, balisage, équipe en briefing sécurité matin]" />
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.15))',
            zIndex: 1,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px 60px',
            width: '100%',
          }}
        >
          <Breadcrumb
            items={[
              { label: 'Accueil', path: '/' },
              { label: 'Notre Groupe', path: '/notre-groupe' },
              { label: 'Nos engagements' },
            ]}
          />
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              color: '#fff',
              marginBottom: 12,
            }}
          >
            Nos engagements
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 650,
              lineHeight: 1.5,
            }}
          >
            [Accroche — sécurité, environnement, humain : les 3 piliers de notre action quotidienne — KW : rse btp (70/mois), qse btp (30/mois)]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(32px, 4vw, 42px)',
                fontWeight: 400,
                color: '#111',
                marginBottom: 32,
              }}
            >
              Nos 3 piliers
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.8, color: '#333' }}>
              [Texte 2-3 phrases — sécurité et environnement sont les 2 sujets n°1 des marchés publics. Cette page est un concentré de preuves : certifications, chiffres, actions concrètes. Pas du greenwashing, des faits. — KW : rse btp, qse btp, engagement sécurité, prévention chantier]
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — PILIER SÉCURITÉ */}
      <PillarBlock
        emoji="🛡️"
        title="Sécurité"
        text="[Intention — certification MASE pour tout le groupe, plan de prévention systématique, culture sécurité quotidienne. Chaque matin commence par un briefing sécurité. Zéro compromis. — KW : certification mase (50/mois, KD 16), plan prévention (110/mois)]"
        image="[Photo — équipe en briefing sécurité matin, EPI, casques, gilets, visages concentrés]"
        counters={[
          { value: '[XX]', label: 'Taux de fréquence' },
          { value: '[XX]', label: 'Heures formation sécurité/an' },
          { value: '[XX]', label: 'Jours sans accident grave' },
        ]}
        link={{ label: 'Guide certification MASE →', path: '/ressources/certification-mase' }}
        imageLeft={true}
        bgColor="#F5F5F5"
      />

      {/* BLOC 4 — PILIER ENVIRONNEMENT */}
      <PillarBlock
        emoji="🌱"
        title="Environnement"
        text="[Intention — réduction d'impact des chantiers, tri et recyclage des déchets, sobriété énergétique des engins, éco-conception des réseaux, véhicules propres en cours de déploiement — KW : rse btp (70/mois), environnement chantier, sobriété énergétique]"
        image="[Photo — chantier propre, tri des déchets, zone de stockage organisée, végétalisation post-chantier]"
        counters={[
          { value: '[XX%]', label: 'Déchets recyclés' },
          { value: '[XX%]', label: 'Réduction conso carburant' },
          { value: 'ISO 14001', label: 'Certifié' },
        ]}
        imageLeft={false}
        bgColor="#fff"
      />

      {/* BLOC 5 — PILIER HUMAIN */}
      <PillarBlock
        emoji="👥"
        title="Humain"
        text="[Intention — formation continue pour tous les collaborateurs, mobilité interne entre les 6 filiales, accompagnement des reconversions professionnelles, tutorat des alternants, bien-être au travail — KW : formation btp, mobilité interne, bien-être travail]"
        image="[Photo — formation en salle, mentor avec jeune alternant, sourires, transmission de savoir]"
        counters={[
          { value: '[XX]h', label: 'Formation/collaborateur/an' },
          { value: '[XX]', label: 'Alternants recrutés/an' },
          { value: '[XX%]', label: 'Taux de rétention' },
        ]}
        link={{ label: 'Nous rejoindre →', path: '/nous-rejoindre' }}
        imageLeft={true}
        bgColor="#F5F5F5"
      />

      {/* BLOC 6 — CERTIFICATIONS */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <SectionTitle
              title="Nos certifications"
              subtitle="[Preuves tangibles — logos des certifications du groupe et des filiales]"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 32,
              }}
            >
              {['[Logo MASE]', '[Logo ISO 9001]', '[Logo ISO 14001]', '[Logo Qualibat]', '[Logo AIPR]', '[Logo Qualifelec]'].map((cert) => (
                <div
                  key={cert}
                  style={{
                    width: 140,
                    height: 80,
                    background: '#F0F0F0',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#999',
                    fontSize: 12,
                    fontFamily: 'var(--font-sans)',
                    textAlign: 'center',
                    padding: 8,
                  }}
                >
                  {cert}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 7 — LIENS RESSOURCES */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 20,
                fontWeight: 700,
                color: '#111',
                textAlign: 'center',
                marginBottom: 32,
              }}
            >
              Aller plus loin
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
              }}
              className="resources-grid"
            >
              <ResourceCard
                title="Certification MASE"
                kwHint="KW : certification mase — 50/mois"
                text="[Guide complet sur la certification MASE employeur : processus, critères, avantages]"
                linkLabel="Lire le guide →"
                linkPath="/ressources/certification-mase"
              />
              <ResourceCard
                title="Guide AIPR"
                kwHint="KW : aipr — 930/mois"
                text="[Guide complet AIPR : formation, examen, renouvellement]"
                linkLabel="Lire le guide →"
                linkPath="/ressources/aipr"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .resources-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 8 — CTA */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 400,
                color: '#111',
                marginBottom: 16,
              }}
            >
              Vous êtes donneur d'ordre ?
            </h2>
            <p style={{ fontSize: 17, color: '#666', lineHeight: 1.6, marginBottom: 32 }}>
              [Intention — vous évaluez un prestataire pour un marché public ? Contactez-nous pour recevoir nos dossiers certifications, nos références et nos indicateurs sécurité.]
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
