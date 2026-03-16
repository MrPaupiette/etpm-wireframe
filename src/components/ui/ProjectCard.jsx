import { Link } from 'react-router-dom'
import Tag from './Tag'
import Placeholder from './Placeholder'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ title, image, tags, text, ratio = '16/10', to }) {
  const content = (
    <>
      <Placeholder text={image} ratio={ratio} />
      <div className={styles.body}>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={styles.card}>
        {content}
      </Link>
    )
  }

  return <div className={styles.card}>{content}</div>
}
