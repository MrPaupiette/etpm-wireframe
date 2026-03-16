import { Link } from 'react-router-dom'
import Placeholder from './Placeholder'
import styles from './Card.module.css'

export default function Card({
  image,
  title,
  text,
  to,
  ratio = '16/10',
  tag,
  linkText = 'En savoir plus →',
  titleAs: TitleTag = 'h3',
  titleSerif = false,
  clickable = false,
}) {
  const titleClass = `${styles.title} ${titleSerif ? styles.titleSerif : ''}`.trim()

  const content = (
    <>
      <Placeholder text={image} ratio={ratio} className={styles.image} />
      <div className={styles.body}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <TitleTag className={titleClass}>{title}</TitleTag>
        {text && <p className={styles.text}>{text}</p>}
        {to && !clickable && (
          <Link to={to} className={styles.link}>
            {linkText}
          </Link>
        )}
        {to && clickable && (
          <span className={styles.link}>{linkText}</span>
        )}
      </div>
    </>
  )

  if (clickable && to) {
    return (
      <Link to={to} className={`${styles.card} ${styles.clickable}`}>
        {content}
      </Link>
    )
  }

  return <div className={styles.card}>{content}</div>
}
