export default function MiniCounters({ items = [] }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        marginTop: 24,
        flexWrap: 'wrap',
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            flex: 1,
            minWidth: 100,
            background: '#fff',
            borderRadius: 12,
            padding: 20,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 28,
              fontWeight: 700,
              color: '#111',
              marginBottom: 4,
            }}
          >
            {item.value}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              color: '#999',
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
