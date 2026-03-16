import { useState } from 'react'
import styles from './ContactForm.module.css'

const TABS = [
  { key: 'devis', label: 'Demande de devis' },
  { key: 'candidature', label: 'Candidature' },
  { key: 'autre', label: 'Autre demande' },
]

const TERRITOIRES = ['Toulouse & 31', 'Bordeaux & 33', 'Pays Basque & 64', 'Autre']
const PROJETS = ['VRD & Viabilisation', 'Éclairage public', 'IRVE - Bornes de recharge', 'Réseaux d\'énergie', 'Terrassement', 'Autre']
const POSTES = ['Chef de chantier', 'Monteur réseau électrique', 'Canalisateur', 'Technicien IRVE', 'Conducteur de travaux', 'Chargé d\'études', 'Manœuvre', 'Autre']
const AGENCES = ['Arcangues (64)', 'Muret (31)', 'Toulouse (31)', 'Pessac (33)', 'Bayonne (64)', 'Auch (32)', 'Pluvigner (56)']

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState('devis')

  return (
    <div>
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {/* Devis */}
        {activeTab === 'devis' && (
          <>
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
            <div className={styles.field}>
              <label className={styles.label}>Entreprise / Collectivité</label>
              <input type="text" className={styles.input} placeholder="Nom de votre structure" />
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
                <label className={styles.label}>Territoire concerné</label>
                <select className={styles.select}>
                  <option value="">— Sélectionner —</option>
                  {TERRITOIRES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Type de projet</label>
                <select className={styles.select}>
                  <option value="">— Sélectionner —</option>
                  {PROJETS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Description du projet</label>
              <textarea className={styles.textarea} rows={5} placeholder="Décrivez votre projet..." />
            </div>
            <button type="submit" className={styles.submit}>Envoyer ma demande</button>
          </>
        )}

        {/* Candidature */}
        {activeTab === 'candidature' && (
          <>
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
                  {POSTES.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Agence préférée</label>
                <select className={styles.select}>
                  <option value="">— Sélectionner —</option>
                  {AGENCES.map((a) => <option key={a} value={a}>{a}</option>)}
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
            <button type="submit" className={styles.submit}>Envoyer ma candidature</button>
          </>
        )}

        {/* Autre */}
        {activeTab === 'autre' && (
          <>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Nom *</label>
                <input type="text" className={styles.input} placeholder="Votre nom" />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email *</label>
                <input type="email" className={styles.input} placeholder="votre@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Téléphone</label>
              <input type="tel" className={styles.input} placeholder="06 XX XX XX XX" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Message *</label>
              <textarea className={styles.textarea} rows={5} placeholder="Votre message..." />
            </div>
            <button type="submit" className={styles.submit}>Envoyer</button>
          </>
        )}

        <p className={styles.rgpd}>
          [Vos données sont traitées par ETPM — Groupe Synelis pour répondre à votre demande. Durée : 24 mois. Contact DPO : placeholder.]
        </p>
      </form>
    </div>
  )
}
