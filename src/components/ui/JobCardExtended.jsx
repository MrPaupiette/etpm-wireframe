import Tag from './Tag'
import styles from './JobCardExtended.module.css'

export default function JobCardExtended({ title, tags = [], agency, summary, date, onApply }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
      <div className={styles.meta}>
        {agency && <span className={styles.agency}>Agence : {agency}</span>}
        {date && <span className={styles.date}>Publié le {date}</span>}
      </div>
      {summary && <p className={styles.summary}>{summary}</p>}
      <button className={styles.cta} onClick={onApply}>
        Postuler →
      </button>
    </div>
  )
}
