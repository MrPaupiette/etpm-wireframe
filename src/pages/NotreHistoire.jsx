import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/Breadcrumb'
import Placeholder from '../components/Placeholder'
import AnimateOnScroll from '../components/AnimateOnScroll'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'

/* ── Timeline data ── */
const timelineItems = [
  {
    side: 'left',
    year: "60s",
    title: '[Titre — La fondation]',
    text: "[Intention — création de l’entreprise fondatrice, les débuts dans les travaux publics, premiers chantiers dans le Sud-Ouest — ancrage historique]",
    image: "[Photo d’archives — chantier années 60, matériel d’époque]",
  },
  {
    side: 'right',
    year: "80s",
    title: '[Titre — La croissance]',
    text: "[Intention — développement territorial, premières diversifications de métiers, enracinement Grand Sud-Ouest]",
  },
  {
    side: 'left',
    year: "00s",
    title: '[Titre — La structuration]',
    text: "[Intention — structuration en groupe, acquisitions des premières filiales (ETPM, FCTP), passage à l’échelle multi-métiers]",
    image: "[Photo — chantier années 2000, équipe plus large]",
  },
  {
    side: 'right',
    year: "10s",
    title: '[Titre — La diversification]',
    text: "[Intention — nouvelles filiales HP Elec (ferroviaire) et CAUM (fibre/télécoms), élargissement à de nouveaux métiers : caténaire, fibre optique, chaleur urbaine]",
  },
  {
    side: 'left',
    year: "20s",
    title: '[Titre — La consolidation]',
    text: "[Intention — acquisition Restech (Bretagne), croissance à 700 collaborateurs et 150M€ CA, présence Grand Sud-Ouest + Bretagne + La Réunion, sortie Roquebert et Lerma]",
    image: "[Photo — chantier récent, équipe nombreuse, matériel moderne]",
  },
  {
    side: 'right',
    year: "2025",
    title: '[Titre — Synelis est né]',
    text: "[Intention — naissance de Synelis : nouveau nom, nouvelle identité, même ADN. SYN = synergies entre filiales et expertises. LIS = liens entre équipes, partenaires et territoires. Un groupe à mission tourné vers l’humain. — KW : synelis, groupe synelis]",
    image: "[Visuel — logo Synelis ou photo événement de lancement]",
  },
]

/* ── Change/NoChange items ── */
const changes = [
  "[Le nom : Groupe Neys devient Groupe Synelis]",
  "[L’identité visuelle : nouveau logo, nouvelle charte graphique]",
  "[La vision : un groupe à mission, positionnement B2B2S — rendre possible la vie collective]",
  "[Le périmètre : 6 filiales recentrées (sortie Roquebert et Lerma)]",
]

const noChanges = [
  "[Les équipes : les mêmes femmes et hommes sur le terrain et en direction]",
  "[L’expertise : 60+ ans de savoir-faire en infrastructures et réseaux]",
  "[L’ancrage local : 25 agences, mêmes territoires, même proximité]",
  "[Les filiales : ETPM, HP Elec, CAUM, FCTP, E2R, Restech gardent leur nom et leur identité]",
]

/* ── CheckItem ── */
function CheckItem({ text, light = false }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: light ? 'rgba(255,255,255,0.2)' : '#E0E0E0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontSize: 14,
          color: light ? '#fff' : '#666',
          marginTop: 2,
        }}
      >
        ✓
      </div>
      <p
        style={{
          fontSize: 16,
          color: light ? 'rgba(255,255,255,0.8)' : '#444',
          lineHeight: 1.5,
        }}
      >
        {text}
      </p>
    </div>
  )
}

/* ── PAGE ── */
export default function NotreHistoire() {
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
            text="[Photo — montage avant/après ou archives chantier historique années 60-70]"
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
              { label: 'Notre histoire' },
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
            De Groupe Neys à Synelis
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
            [Accroche — ce qui change : le nom. Ce qui ne change pas : les équipes, l'expertise, l'ancrage local — KW : groupe neys, ex groupe neys, synelis anciennement]
          </p>
        </motion.div>
      </section>

      {/* BLOC 2 — INTRO TRANSITION */}
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
              Notre histoire
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 19,
                lineHeight: 1.8,
                color: '#333',
              }}
            >
              [Texte 3-4 phrases — Synelis, anciennement Groupe Neys, est un groupe d'infrastructures et de réseaux du Grand Sud-Ouest. Plus de 60 ans de construction, 6 filiales, 700 collaborateurs, 25 agences. Le nom change, l'ADN reste. — KW : groupe neys (210/mois), synelis anciennement, groupe infrastructures réseaux Grand Sud-Ouest]
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BLOC 3 — TIMELINE INTERACTIVE */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F5F5F5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <SectionTitle
            title="60 ans de construction"
            subtitle="[Sous-titre — les dates clés qui ont fait le groupe d'aujourd'hui]"
          />
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* BLOC 4 — CE QUI CHANGE / CE QUI NE CHANGE PAS */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <AnimateOnScroll>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 40,
              }}
              className="change-grid"
            >
              {/* Left — Ce qui change */}
              <div style={{ background: '#F5F5F5', borderRadius: 20, padding: 48 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#111',
                    marginBottom: 28,
                  }}
                >
                  Ce qui change
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {changes.map((text) => (
                    <CheckItem key={text} text={text} />
                  ))}
                </div>
              </div>

              {/* Right — Ce qui ne change pas */}
              <div style={{ background: '#111', borderRadius: 20, padding: 48 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: 28,
                  }}
                >
                  Ce qui ne change pas
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {noChanges.map((text) => (
                    <CheckItem key={text} text={text} light />
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .change-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* BLOC 5 — CITATION DIRIGEANT */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#F5F5F5' }}>
        <AnimateOnScroll>
          <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ width: 60, height: 3, background: '#111', margin: '0 auto 40px' }} />
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontStyle: 'italic',
                color: '#111',
                lineHeight: 1.5,
                margin: '0 0 24px',
                border: 'none',
                padding: 0,
              }}
            >
              [Citation du dirigeant sur le changement de nom — ton : fierté du chemin parcouru, continuité, ambition pour la suite — incarner le passage de Neys à Synelis avec des mots humains]
            </motion.blockquote>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: '#999',
                marginBottom: 16,
              }}
            >
              [Prénom Nom — Président du Groupe Synelis]
            </p>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: '#E8E8E8',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: 11,
                fontFamily: 'var(--font-sans)',
              }}
            >
              [Portrait]
            </div>
          </div>
        </AnimateOnScroll>
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
              className="cta-histoire-grid"
            >
              <div style={{ background: '#F5F5F5', borderRadius: 20, padding: 48 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#111',
                    marginBottom: 12,
                  }}
                >
                  Les visages ne changent pas
                </h3>
                <p style={{ fontSize: 16, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
                  [Intention — les mêmes dirigeants, les mêmes équipes terrain — découvrir qui pilote Synelis aujourd'hui — pousser : équipe, visages, continuité humaine]
                </p>
                <Link to="/notre-groupe/equipe" className="btn-pill btn-pill-dark">
                  Notre équipe
                </Link>
              </div>

              <div style={{ background: '#F5F5F5', borderRadius: 20, padding: 48 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 400,
                    color: '#111',
                    marginBottom: 12,
                  }}
                >
                  Découvrir le nouveau Synelis
                </h3>
                <p style={{ fontSize: 16, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
                  [Intention — explorer ce que le groupe est devenu, ses activités, ses filiales, sa mission — invitation à découvrir la HP]
                </p>
                <Link to="/" className="btn-pill btn-pill-dark">
                  Accueil Synelis
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .cta-histoire-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </main>
  )
}
