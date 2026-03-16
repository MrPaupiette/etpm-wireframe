import { Link } from 'react-router-dom'
import styles from './MetierCard.module.css'

export default function MetierCard({ title, level, contract, salary, text, link, linkText, hasDetailPage }) {
  return (
    <div className={styles.card}>
      {hasDetailPage && <span className={styles.badge}>Fiche complète →</span>}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.infos}>
        {level && <span>{level}</span>}
        {contract && <span>{contract}</span>}
        {salary && <span>{salary}</span>}
      </div>
      <p className={styles.text}>{text}</p>
      <Link to={link} className={styles.link}>
        {linkText || 'Voir les offres →'}
      </Link>
    </div>
  )
}
