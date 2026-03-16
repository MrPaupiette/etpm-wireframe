import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const NAV = [
  {
    label: 'Nos expertises',
    to: '/expertises',
    children: [
      { label: 'VRD & Viabilisation', to: '/expertises/vrd-viabilisation' },
      { label: 'Éclairage public', to: '/expertises/eclairage-public' },
      { label: 'IRVE — Bornes de recharge', to: '/expertises/irve-bornes-recharge' },
      { label: 'Réseaux d\'énergie', to: '/expertises/reseaux-energie' },
      { label: 'TP & Terrassement', to: '/expertises/travaux-publics-terrassement' },
    ],
  },
  {
    label: 'Nos territoires',
    to: '/territoires',
    children: [
      { label: 'Toulouse & Haute-Garonne', to: '/territoires/toulouse-haute-garonne' },
      { label: 'Bordeaux & Gironde', to: '/territoires/bordeaux-gironde' },
      { label: 'Pays Basque & Landes', to: '/territoires/pays-basque-landes' },
    ],
  },
  { label: 'Réalisations', to: '/realisations' },
  {
    label: 'Nous rejoindre',
    children: [
      { label: 'Travailler chez ETPM', to: '/nous-rejoindre/emploi-travaux-publics' },
      { label: 'Nos métiers', to: '/nous-rejoindre/metiers' },
      { label: 'Alternance TP', to: '/nous-rejoindre/alternance' },
      { label: 'Nos offres', to: '/nous-rejoindre/offres' },
    ],
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          ETPM — Groupe Synelis
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {NAV.map((item) => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.to ? (
                <Link to={item.to} className={styles.navLink}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.navLink}>{item.label}</span>
              )}
              {item.children && openDropdown === item.label && (
                <div className={styles.dropdown}>
                  {item.children.map((child) => (
                    <Link key={child.to} to={child.to} className={styles.dropdownLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className={styles.ctaNav}>
            Contact
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className={styles.mobileNav}>
          {NAV.map((item) => (
            <div key={item.label} className={styles.mobileGroup}>
              {item.to ? (
                <Link
                  to={item.to}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={styles.mobileLabel}>{item.label}</span>
              )}
              {item.children && (
                <div className={styles.mobileChildren}>
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className={styles.mobileChildLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className={styles.mobileCtaLink}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
