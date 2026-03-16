import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
