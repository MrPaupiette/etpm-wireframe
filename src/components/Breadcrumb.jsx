import { Link } from 'react-router-dom'

export default function Breadcrumb({ items = [] }) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        marginBottom: 16,
      }}
    >
      {items.map((item, i) => (
        <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {i > 0 && <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'>'}</span>}
          {item.path ? (
            <Link
              to={item.path}
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
