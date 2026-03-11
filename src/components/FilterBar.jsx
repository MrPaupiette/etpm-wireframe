export default function FilterBar({ filters = [], activeFilter = 'Tous' }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 48,
      }}
    >
      {filters.map((f) => (
        <button
          key={f}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 24px',
            borderRadius: 50,
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: f === activeFilter ? 'none' : '1px solid #E0E0E0',
            background: f === activeFilter ? '#111' : '#fff',
            color: f === activeFilter ? '#fff' : '#666',
          }}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
