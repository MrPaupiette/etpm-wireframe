import styles from './AgencyList.module.css'

export default function AgencyList({ agencies }) {
  return (
    <div className={styles.grid}>
      {agencies.map((a) => (
        <div key={a.name} className={`${styles.card} ${a.isHQ ? styles.hq : ''}`}>
          {a.isHQ && <span className={styles.badge}>Siège social</span>}
          <h3 className={styles.name}>{a.name}</h3>
          <p className={styles.city}>{a.city} ({a.department})</p>
          <p className={styles.address}>{a.address}</p>
          <p className={styles.phone}>{a.phone}</p>
        </div>
      ))}
    </div>
  )
}
