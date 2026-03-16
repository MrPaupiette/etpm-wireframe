import styles from './SectionTitle.module.css'

export default function SectionTitle({ children, chapeau, light = false, align = 'left' }) {
  return (
    <div className={`${styles.wrapper} ${light ? styles.light : ''}`} style={{ textAlign: align }}>
      <h2 className={styles.title}>{children}</h2>
      {chapeau && <p className={styles.chapeau}>{chapeau}</p>}
    </div>
  )
}
