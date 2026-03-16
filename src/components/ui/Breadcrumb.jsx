import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ items }) {
  const structured = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.to ? { item: `https://etpm.fr${item.to}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
      />
      <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
        {items.map((item, i) => (
          <span key={item.label} className={styles.item}>
            {i > 0 && <span className={styles.separator}>→</span>}
            {item.to ? (
              <Link to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
