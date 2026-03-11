import AnimateOnScroll from './AnimateOnScroll'

const filialeSites = {
  ETPM: 'https://etpm.fr',
  'HP Elec': 'https://hpelec.fr',
  CAUM: 'https://caum.fr',
  FCTP: 'https://fctp.fr',
  E2R: 'https://e2r.fr',
  Restech: 'https://restech.fr',
}

const domains = [
  { emoji: '⚡', label: 'Énergie' },
  { emoji: '📡', label: 'Numérique' },
  { emoji: '🚆', label: 'Ferroviaire' },
  { emoji: '🔥', label: 'Chaleur' },
]

const rows = [
  {
    action: 'Concevoir',
    cells: [['ETPM'], ['CAUM'], ['HP Elec'], ['FCTP']],
  },
  {
    action: 'Construire',
    cells: [['ETPM', 'E2R'], ['CAUM', 'E2R'], ['HP Elec'], ['FCTP']],
  },
  {
    action: 'Maintenir',
    cells: [['ETPM', 'E2R'], ['CAUM'], ['HP Elec'], []],
  },
]

function FilialeLink({ name }) {
  const url = filialeSites[name]
  return (
    <a
      href={url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#111',
        textDecoration: 'underline',
        textUnderlineOffset: 3,
      }}
    >
      {name}
    </a>
  )
}

function CellContent({ filiales }) {
  if (!filiales || filiales.length === 0) {
    return <span style={{ color: '#ccc' }}>—</span>
  }
  return (
    <span>
      {filiales.map((f, i) => (
        <span key={f}>
          {i > 0 && <span style={{ color: '#ccc' }}> · </span>}
          <FilialeLink name={f} />
        </span>
      ))}
    </span>
  )
}

export default function ActivityMatrix() {
  return (
    <AnimateOnScroll>
      {/* Desktop table */}
      <div className="matrix-desktop" style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            background: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr style={{ background: '#111' }}>
              <th style={{ ...thStyle, width: 120 }}></th>
              {domains.map((d) => (
                <th key={d.label} style={thStyle}>
                  {d.emoji} {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.action}>
                <td
                  style={{
                    ...cellStyle,
                    fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                    fontSize: 14,
                    color: '#111',
                    background: '#FAFAFA',
                  }}
                >
                  {row.action}
                </td>
                {row.cells.map((filiales, i) => (
                  <td key={i} style={cellStyle}>
                    <CellContent filiales={filiales} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="matrix-mobile" style={{ display: 'none' }}>
        {domains.map((domain, di) => (
          <div
            key={domain.label}
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 24,
              marginBottom: 16,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 18,
                fontWeight: 700,
                color: '#111',
                marginBottom: 16,
              }}
            >
              {domain.emoji} {domain.label}
            </h4>
            {rows.map((row) => (
              <div
                key={row.action}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid #F0F0F0',
                }}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: '#444' }}>
                  {row.action}
                </span>
                <span style={{ textAlign: 'right' }}>
                  <CellContent filiales={row.cells[di]} />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: 14,
          color: '#999',
          textAlign: 'center',
          marginTop: 24,
          fontFamily: 'var(--font-sans)',
        }}
      >
        [Chaque nom de filiale est un lien vers son site — ce tableau distribue l'autorité vers tout l'écosystème]
      </p>

      <style>{`
        @media (max-width: 768px) {
          .matrix-desktop { display: none !important; }
          .matrix-mobile { display: block !important; }
        }
      `}</style>
    </AnimateOnScroll>
  )
}

const thStyle = {
  padding: '16px 14px',
  color: '#fff',
  fontSize: 14,
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: 1,
  textAlign: 'center',
}

const cellStyle = {
  padding: 16,
  border: '1px solid #E0E0E0',
  textAlign: 'center',
  verticalAlign: 'middle',
  fontSize: 14,
}
