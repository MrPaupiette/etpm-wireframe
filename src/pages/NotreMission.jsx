import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'
import AlternatingBlocks from '../components/AlternatingBlocks'

/* ── BLOC 3 data ── */
const triptyque = [
  {
    icon: '[Icône — bureau d’études, plan, conception]',
    title: 'Concevoir',
    text: "[Intention — concevoir intelligemment des infrastructures sobres, durables, éco-conçues, adaptées aux défis climatiques — pousser : éco-conception, sobriété]",
    example: "[Exemple concret — un projet réel de conception, ex: dimensionnement réseau HTA pour une ZAC]",
  },
  {
    icon: '[Icône — chantier, grue, équipe terrain]',
    title: 'Construire',
    text: "[Intention — construire avec maîtrise et rigueur, exécution exemplaire, engagement sécurité — pousser : maîtrise, rigueur, exemplarité chantier]",
    example: "[Exemple concret — un chantier emblématique, ex: déploiement éclairage public LED d’une commune]",
  },
  {
    icon: '[Icône — astreinte 24/7, intervention rapide, maintenance]',
    title: 'Maintenir',
    text: "[Intention — maintenir avec réactivité, disponibilité 24/7, garantir la continuité de service — pousser : réactivité, continuité, astreinte]",
    example: "[Exemple concret — intervention d’urgence post-tempête ou maintenance réseau critique]",
  },
]

/* ── BLOC 5 data ── */
const possibleBlocks = [
  {
    image: '[Photo — village ou quartier éclairé la nuit, candélabres LED]',
    title: "L’éclairage qui sécurise",
    text: "[Intention — l’éclairage public qui sécurise un quartier, embellit une ville, réduit la consommation — pousser : éclairage public, sécurité, LED, sobriété]",
    tags: 'ETPM · Restech · E2R',
    link: { label: 'Découvrir ETPM →', url: 'https://etpm.fr' },
  },
  {
    image: '[Photo — TGV en mouvement, caténaire visible, lignes aériennes]',
    title: 'Le ferroviaire qui connecte',
    text: "[Intention — la caténaire et les sous-stations qui font circuler les trains, TGV, TER — pousser : caténaire, électrification ferroviaire, mobilité]",
    tags: 'HP Elec',
    link: { label: 'Découvrir HP Elec →', url: 'https://hpelec.fr' },
  },
  {
    image: '[Photo — technicien fibre optique, soudure, boîtier, zone rurale]',
    title: 'Le numérique qui relie',
    text: "[Intention — la fibre optique qui connecte un territoire rural, réduit la fracture numérique — pousser : fibre optique, déploiement FTTH, télécoms, numérique]",
    tags: 'CAUM · E2R · Restech',
    link: { label: 'Découvrir CAUM →', url: 'https://caum.fr' },
  },
  {
    image: '[Photo — canalisations réseau de chaleur, chantier urbain, tuyaux isolés]',
    title: 'La chaleur qui alimente',
    text: "[Intention — le réseau de chaleur urbain qui chauffe un quartier entier de manière sobre — pousser : réseau de chaleur, génie civil, énergie sobre]",
    tags: 'FCTP',
    link: { label: 'Découvrir FCTP →', url: 'https://fctp.fr' },
  },
]

/* ── Triptyque card ── */
function TriptyqueCard({ item, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <AnimateOnScroll delay={index * 0.12}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          textAlign: 'center',
          padding: 40,
          borderRadius: 16,
          transition: 'all 0.3s',
          background: hovered ? '#fff' : 'transparent',
          boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.06)' : 'none',
          transform: hovered ? 'translateY(-4px)' : 'none',
        }}
      >
        {/* Icon circle */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: '#E8E8E8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            fontSize: 12,
            margin: '0 auto 20px',
            fontFamily: 'var(--font-sans)',
            textAlign: 'center',
            padding: 8,
          }}
        >
          {item.icon}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 22,
            fontWeight: 700,
            color: '#111',
            marginBottom: 12,
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, marginBottom: 16 }}>
          {item.text}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 14,
            fontStyle: 'italic',
            color: '#999',
            lineHeight: 1.5,
          }}
        >
          {item.example}
        </p>
      </div>
    </AnimateOnScroll>
  )
}

/* ── PAGE ── */
export default function NotreMission() {
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
          <Placeholder
            height="100%"
            text="[Photo — chantier au lever du soleil, équipe en action, terrain authentique]"
          />
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
              { label: 'Notre mission' },
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
            Rendre possible la vie collective
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 600,
              lineHeight: 1.5,
            }}
          >
            [Accroche — ce que cette phrase signifie concrètement : l'énergie circule dans les territoires grâce à nos réseaux]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — LA RAISON D'ÊTRE */}
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
              Pourquoi nous existons
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 19,
                lineHeight: 1.8,
                color: '#333',
                marginBottom: 48,
              }}
            >
              [Texte narratif 3-4 phrases — positionnement B2B2S : votre métier n'est pas de tirer des câbles, c'est de permettre à un village d'avoir la lumière, au TGV de rouler, à un hôpital de fonctionner — pousser : mission service public, rendre possible, vie collective, réseaux essentiels]
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <blockquote
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontStyle: 'italic',
                color: '#333',
                borderLeft: '3px solid #111',
                paddingLeft: 32,
                textAlign: 'left',
                margin: '0 auto',
                maxWidth: 650,
                lineHeight: 1.6,
              }}
            >
              [Citation du dirigeant Synelis — incarner la mission avec des mots humains, pas corporate — ton : fierté sobre, concret]
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — CONCEVOIR / CONSTRUIRE / MAINTENIR */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="Notre mission au quotidien"
            subtitle="[Sous-titre — les 3 temps de notre métier, de la conception à la maintenance]"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
              maxWidth: 1100,
              margin: '0 auto',
            }}
            className="triptyque-grid"
          >
            {triptyque.map((item, i) => (
              <TriptyqueCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .triptyque-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 4 — LA VISION */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#fff' }}>
        <AnimateOnScroll>
          <div
            style={{
              textAlign: 'center',
              maxWidth: 900,
              margin: '0 auto',
              padding: '0 24px',
            }}
          >
            {/* Decorative line */}
            <div
              style={{
                width: 60,
                height: 3,
                background: '#111',
                margin: '0 auto 40px',
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                color: '#111',
                lineHeight: 1.4,
                marginBottom: 32,
              }}
            >
              La transformation et la résilience des territoires repose sur la qualité de ses fondations.
            </motion.p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 17,
                color: '#666',
                maxWidth: 700,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              [Texte 2-3 phrases — Synelis veut être le socle expert et responsable qui bâtit les réseaux alimentant la vie collective et soutenant les transitions énergétiques et environnementales — positionnement vision long terme pour donneurs d'ordre publics]
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* BLOC 5 — CE QUE NOUS RENDONS POSSIBLE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle title="Ce que nous rendons possible" />
          <AlternatingBlocks items={possibleBlocks} startSide="left" />
        </div>
      </section>

      {/* BLOC 6 — CTA DOUBLE */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 40,
              }}
              className="cta-double-grid"
            >
              {/* Left — light */}
              <div
                style={{
                  background: '#F5F5F5',
                  borderRadius: 20,
                  padding: 48,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#111',
                    marginBottom: 12,
                  }}
                >
                  Découvrez nos métiers
                </h3>
                <p style={{ fontSize: 16, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
                  [Intention — ce que nos équipes font concrètement chaque jour sur le terrain, la diversité des métiers — pousser : métiers, expertises, terrain]
                </p>
                <Link to="/nos-activites" className="btn-pill btn-pill-dark">
                  Nos activités
                </Link>
              </div>

              {/* Right — dark */}
              <div
                style={{
                  background: '#111',
                  borderRadius: 20,
                  padding: 48,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: 12,
                  }}
                >
                  Rejoignez l'aventure
                </h3>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 24 }}>
                  [Intention — 700 collaborateurs qui donnent du sens à leur métier, rejoindre un collectif engagé — pousser : recrutement, collectif, sens]
                </p>
                <Link to="/nous-rejoindre" className="btn-pill btn-pill-outline">
                  Nous rejoindre
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .cta-double-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </main>
  )
}
