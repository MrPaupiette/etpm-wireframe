import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const EXPERTISES = [
  { label: 'VRD & Viabilisation', to: '/expertises/vrd-viabilisation' },
  { label: 'Éclairage public', to: '/expertises/eclairage-public' },
  { label: 'IRVE — Bornes de recharge', to: '/expertises/irve-bornes-recharge' },
  { label: 'Réseaux d\'énergie', to: '/expertises/reseaux-energie' },
  { label: 'TP & Terrassement', to: '/expertises/travaux-publics-terrassement' },
]

const TERRITOIRES = [
  { label: 'Toulouse & Haute-Garonne', to: '/territoires/toulouse-haute-garonne' },
  { label: 'Bordeaux & Gironde', to: '/territoires/bordeaux-gironde' },
  { label: 'Pays Basque & Landes', to: '/territoires/pays-basque-landes' },
]

const REJOINDRE = [
  { label: 'Nos métiers', to: '/nous-rejoindre/metiers' },
  { label: 'Alternance TP', to: '/nous-rejoindre/alternance' },
  { label: 'Nos offres', to: '/nous-rejoindre/offres' },
  { label: 'Candidature spontanée', to: '/contact' },
]

const RESSOURCES = [
  { label: 'Soudure PEHD', to: '/ressources/soudure-pehd' },
  { label: 'Réseau HTA', to: '/ressources/reseau-hta' },
  { label: 'Poste HTA/BT', to: '/ressources/poste-hta-bt' },
  { label: 'Relamping LED', to: '/ressources/relamping-led' },
  { label: 'Éclairage public solaire', to: '/ressources/eclairage-public-solaire' },
  { label: 'QSE signification', to: '/ressources/qse-signification' },
]

const GROUPE_LINKS = [
  { label: 'synelis.fr', href: 'https://synelis.fr' },
  { label: 'caum.fr', href: 'https://caum.fr' },
  { label: 'hpelec.fr', href: 'https://hpelec.fr' },
  { label: 'fctp.fr', href: 'https://fctp.fr' },
  { label: 'restech.fr', href: 'https://restech.fr' },
  { label: 'e2r.re', href: 'https://e2r.re' },
]

function FooterColumn({ title, links }) {
  return (
    <div className={styles.column}>
      <h4 className={styles.columnTitle}>{title}</h4>
      <ul className={styles.columnList}>
        {links.map((link) => (
          <li key={link.to || link.label}>
            <Link to={link.to} className={styles.columnLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.columns}>
          <FooterColumn title="NOS EXPERTISES" links={EXPERTISES} />
          <FooterColumn title="NOS TERRITOIRES" links={TERRITOIRES} />
          <FooterColumn title="NOUS REJOINDRE" links={REJOINDRE} />
          <FooterColumn title="RESSOURCES TECHNIQUES" links={RESSOURCES} />
        </div>

        <div className={styles.groupe}>
          <span className={styles.groupeLabel}>GROUPE SYNELIS</span>
          <div className={styles.groupeLinks}>
            {GROUPE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.groupeLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© ETPM 2026 — Filiale du Groupe Synelis</p>
          <div className={styles.copyrightLinks}>
            <Link to="/mentions-legales">Mentions légales</Link>
            <span>|</span>
            <Link to="/contact">Contact</Link>
          </div>
          <p className={styles.seoLine}>
            Réseaux d'énergie, éclairage public, VRD, IRVE — Grand Sud-Ouest
          </p>
        </div>
      </div>
    </footer>
  )
}
