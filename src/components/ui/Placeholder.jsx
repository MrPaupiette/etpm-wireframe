import styles from './Placeholder.module.css'

export default function Placeholder({ text, ratio = '16/10', className = '' }) {
  return (
    <div
      className={`${styles.placeholder} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
    >
      <span className={styles.text}>{text}</span>
    </div>
  )
}
