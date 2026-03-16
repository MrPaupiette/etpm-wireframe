import Placeholder from './Placeholder'
import styles from './AgencyCard.module.css'

export default function AgencyCard({ image, name, address, phone, text }) {
  return (
    <div className={styles.card}>
      <Placeholder text={image} ratio="4/3" />
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.address}>{address}</p>
        {phone && <p className={styles.phone}>{phone}</p>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </div>
  )
}
