import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Placeholder from '../components/ui/Placeholder'
import Card from '../components/ui/Card'
import FAQAccordion from '../components/ui/FAQAccordion'
import styles from './RessourcePage.module.css'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function RessourcePage({ data }) {
  const {
    title,
    tag = 'Ressource technique',
    intro,
    heroImage,
    sections,
    normes,
    expertise,
    pillarParent,
    pillarRelated,
    cta,
    faq,
  } = data

  return (
    <>
      {/* BLOC 1 — HERO RESSOURCE */}
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
              { label: 'Ressources techniques' },
              { label: title.split(' : ')[0] },
            ]}
          />
          <span className={styles.heroTag}>{tag}</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroText}>{intro}</p>
          <Placeholder text={heroImage} ratio="16/9" />
        </div>
      </motion.section>

      {/* BLOC 2 & 3 — CONTENT SECTIONS */}
      {sections.map((section, i) => {
        const isGray = i % 2 === 0
        const bgClass = isGray ? styles.sectionGray : styles.sectionWhite

        // Symmetric two-column layout (like techniques de soudure)
        if (section.columns) {
          return (
            <motion.section
              key={i}
              className={bgClass}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeIn}
            >
              <div className="container">
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.twoColSymmetric}>
                  {section.columns.map((col, j) => (
                    <div key={j}>
                      <Placeholder text={col.image} ratio="4/3" />
                      <h3 className={styles.colTitle} style={{ marginTop: 20 }}>{col.title}</h3>
                      <p className={styles.colText}>{col.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )
        }

        // Standard two-column layout
        const layoutClass = section.layout === 'text-right' ? styles.twoColReverse : styles.twoCol
        return (
          <motion.section
            key={i}
            className={bgClass}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <div className="container">
              <div className={layoutClass}>
                {section.layout === 'text-right' ? (
                  <>
                    <Placeholder text={section.image} ratio="4/3" />
                    <div>
                      <h2 className={styles.sectionTitle}>{section.title}</h2>
                      <p className={styles.sectionText}>{section.text}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className={styles.sectionTitle}>{section.title}</h2>
                      <p className={styles.sectionText}>{section.text}</p>
                    </div>
                    <Placeholder text={section.image} ratio="4/3" />
                  </>
                )}
              </div>
            </div>
          </motion.section>
        )
      })}

      {/* BLOC 4 — NORMES (if provided) */}
      {normes && (
        <motion.section
          className={styles.sectionGray}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <div className="container">
            <div className={styles.narrow}>
              <h2 className={styles.sectionTitle}>{normes.title}</h2>
              <p className={styles.sectionText}>{normes.text}</p>
            </div>
          </div>
        </motion.section>
      )}

      {/* BLOC 5 — EXPERTISE ETPM */}
      <motion.section
        className={styles.sectionWhite}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.sectionTitle}>{expertise.title}</h2>
              <p className={styles.sectionText}>{expertise.text}</p>
              <div style={{ marginTop: 24 }}>
                <Button to="/contact">Demander un devis</Button>
              </div>
            </div>
            <Placeholder text={expertise.image} ratio="4/3" />
          </div>
        </div>
      </motion.section>

      {/* FAQ (QSE only) */}
      {faq && (
        <motion.section
          className={styles.faq}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
        >
          <div className="container">
            <div className={styles.faqInner}>
              <SectionTitle>Questions fréquentes</SectionTitle>
              <FAQAccordion items={faq} />
            </div>
          </div>
        </motion.section>
      )}

      {/* BLOC 6 — LIEN ASCENDANT PILLAR */}
      <section className={styles.sectionGray}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <SectionTitle>En savoir plus sur nos expertises</SectionTitle>
          </motion.div>
          <motion.div
            className={styles.pillarGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <Card
                title={pillarParent.name}
                text={pillarParent.text}
                to={pillarParent.link}
                linkText="Découvrir →"
                clickable
              />
            </motion.div>
            {pillarRelated && (
              <motion.div variants={fadeIn}>
                <Card
                  title={pillarRelated.name}
                  text={pillarRelated.text}
                  to={pillarRelated.link}
                  linkText="Découvrir →"
                  clickable
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* BLOC 7 — CTA BANDEAU */}
      <motion.section
        className={styles.ctaFinal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeIn}
      >
        <div className={`container ${styles.ctaFinalInner}`}>
          <h2 className={styles.ctaFinalTitle}>{cta.title}</h2>
          <p className={styles.ctaFinalText}>{cta.text}</p>
          <Button to="/contact" variant="white">Demander un devis</Button>
        </div>
      </motion.section>
    </>
  )
}
