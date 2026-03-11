import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const menuData = {
  'Notre Groupe': {
    path: '/notre-groupe',
    links: [
      { label: 'Notre mission', path: '/notre-groupe/mission' },
      { label: 'Notre histoire', path: '/notre-groupe/histoire' },
      { label: 'Notre équipe', path: '/notre-groupe/equipe' },
      { label: 'Nos engagements', path: '/notre-groupe/engagements' },
    ],
  },
  'Nos activités': {
    path: '/nos-activites',
    links: [{ label: 'Réalisations', path: '/nos-activites/realisations' }],
  },
  'Nos filiales': {
    path: '/nos-filiales',
    links: [
      { label: 'ETPM', path: '#', external: true },
      { label: 'HP Elec', path: '#', external: true },
      { label: 'CAUM', path: '#', external: true },
      { label: 'FCTP', path: '#', external: true },
      { label: 'E2R', path: '#', external: true },
      { label: 'Restech', path: '#', external: true },
    ],
  },
  'Nous rejoindre': {
    path: '/nous-rejoindre',
    links: [
      { label: 'Alternance BTP', path: '/nous-rejoindre/alternance' },
      { label: 'Nos métiers', path: '/nous-rejoindre/metiers' },
      { label: 'Carrières fibre optique', path: '/nous-rejoindre/carrieres-fibre' },
      { label: 'Carrières travaux publics', path: '/nous-rejoindre/carrieres-tp' },
      { label: 'Reconversion BTP', path: '/nous-rejoindre/reconversion' },
      { label: 'Nos offres', path: '/nous-rejoindre/offres' },
    ],
  },
  'Actualités': { path: '/actualites', links: null },
  'Contact': { path: '/contact', links: null },
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#fff',
        borderBottom: '1px solid #E0E0E0',
        transition: 'box-shadow 0.3s',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? 70 : 80,
          transition: 'height 0.3s',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: isScrolled ? 22 : 24, fontWeight: 700, color: '#111', lineHeight: 1, transition: 'font-size 0.3s' }}>
            SYNELIS
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 3, color: '#999', marginTop: 2 }}>
            Groupe
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {Object.entries(menuData).map(([label, data]) => (
            <div
              key={label}
              onMouseEnter={() => data.links && setActiveMenu(label)}
              style={{ position: 'relative' }}
            >
              <Link
                to={data.path}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: '#111',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '8px 0',
                }}
              >
                {label}
                <span
                  style={{
                    display: 'block',
                    height: 1.5,
                    background: '#111',
                    width: activeMenu === label ? '100%' : 0,
                    transition: 'width 0.3s ease',
                    marginTop: 4,
                  }}
                />
              </Link>
            </div>
          ))}
        </nav>

        {/* Burger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="burger-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'all 0.3s', transform: isMobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'all 0.3s', opacity: isMobileOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#111', transition: 'all 0.3s', transform: isMobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && menuData[activeMenu]?.links && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={() => setActiveMenu(null)}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#fff',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              padding: '40px 0',
              borderTop: '1px solid #E0E0E0',
            }}
          >
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {menuData[activeMenu].links.map((link) =>
                link.external ? (
                  <a key={link.label} href={link.path} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: '#333', textDecoration: 'none', padding: '8px 0' }}>
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.path} onClick={() => setActiveMenu(null)} style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: '#333', textDecoration: 'none', padding: '8px 0' }}>
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-overlay"
            style={{
              position: 'fixed',
              top: isScrolled ? 70 : 80,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#fff',
              zIndex: 999,
              overflowY: 'auto',
              padding: '32px 24px',
            }}
          >
            {Object.entries(menuData).map(([label, data]) => (
              <div key={label} style={{ marginBottom: 24 }}>
                <Link
                  to={data.path}
                  onClick={() => setIsMobileOpen(false)}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: 18, fontWeight: 600, color: '#111', textDecoration: 'none', display: 'block', marginBottom: 8 }}
                >
                  {label}
                </Link>
                {data.links && (
                  <div style={{ paddingLeft: 16 }}>
                    {data.links.map((link) => (
                      <Link
                        key={link.label}
                        to={link.external ? '#' : link.path}
                        onClick={() => setIsMobileOpen(false)}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: '#666', textDecoration: 'none', display: 'block', padding: '6px 0' }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
