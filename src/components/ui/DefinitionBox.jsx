import styles from './DefinitionBox.module.css'

export default function DefinitionBox({ children }) {
  return (
    <blockquote className={styles.box}>
      {children}
    </blockquote>
  )
}
