import { useState } from 'react'
import styles from './FAQAccordion.module.css'

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      <div className={styles.answerWrap} style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ items, schemaId }) {
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
      />
      <div className={styles.accordion}>
        {items.map((item, i) => (
          <FAQItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </>
  )
}
