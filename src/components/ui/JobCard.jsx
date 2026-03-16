import { Link } from 'react-router-dom'
import Tag from './Tag'
import styles from './JobCard.module.css'

export default function JobCard({ title, tags = [], to }) {
  return (
    <Link to={to} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
      <span className={styles.link}>Voir l'offre →</span>
    </Link>
  )
}
