import styles from './ApplicationForm.module.css'

const POSTES = [
  'Chef de chantier',
  'Monteur réseau électrique',
  'Canalisateur',
  'Technicien IRVE',
  'Conducteur de travaux',
  'Manœuvre',
  'Autre',
]

const AGENCES = [
  'Muret (31)',
  'Toulouse (31)',
  'Pessac (33)',
  'Arcangues (64)',
  'Bayonne (64)',
  'Auch (32)',
  'Autre',
]

export default function ApplicationForm() {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()} id="postuler">
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Nom *</label>
          <input type="text" className={styles.input} placeholder="Votre nom" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Prénom *</label>
          <input type="text" className={styles.input} placeholder="Votre prénom" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Email *</label>
          <input type="email" className={styles.input} placeholder="votre@email.com" />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Téléphone *</label>
          <input type="tel" className={styles.input} placeholder="06 XX XX XX XX" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Poste souhaité</label>
          <select className={styles.select}>
            <option value="">— Sélectionner —</option>
            {POSTES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Agence préférée</label>
          <select className={styles.select}>
            <option value="">— Sélectionner —</option>
            {AGENCES.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>CV * (PDF, DOC)</label>
        <div className={styles.upload}>
          <span className={styles.uploadText}>[Glisser-déposer votre CV ou cliquer pour parcourir]</span>
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Message (optionnel)</label>
        <textarea className={styles.textarea} rows={4} placeholder="Présentez-vous en quelques mots..." />
      </div>
      <button type="submit" className={styles.submit}>
        Envoyer ma candidature
      </button>
      <p className={styles.rgpd}>
        [Mention légale — vos données sont traitées par ETPM dans le cadre du recrutement. Durée de
        conservation : 24 mois. Contact DPO : placeholder.]
      </p>
    </form>
  )
}
