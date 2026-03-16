import styles from './FilterBar.module.css'

export default function FilterBar({ groups }) {
  return (
    <div className={styles.filterBar}>
      {groups.map((group) => (
        <div key={group.label} className={styles.filterGroup}>
          <span className={styles.filterLabel}>{group.label}</span>
          {group.filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.pill} ${filter.active ? styles.pillActive : ''}`}
              onClick={() => group.onToggle(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
