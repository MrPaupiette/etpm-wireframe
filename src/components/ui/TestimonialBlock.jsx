import styles from './TestimonialBlock.module.css'

export default function TestimonialBlock({ quote, author, role }) {
  if (!quote) return null

  return (
    <div className={styles.block}>
      <p className={styles.quote}>« {quote} »</p>
      {author && <p className={styles.author}>{author}</p>}
      {role && <p className={styles.role}>{role}</p>}
    </div>
  )
}
