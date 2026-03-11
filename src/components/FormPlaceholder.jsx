export default function FormPlaceholder({ fields = [], submitLabel = 'Envoyer' }) {
  return (
    <div style={{ background: '#F5F5F5', borderRadius: 20, padding: 48 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {fields.map((field) => (
          <div key={field.label}>
            <label
              style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: 1,
                color: '#999',
                marginBottom: 8,
              }}
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid #E0E0E0',
                  height: 120,
                  padding: '14px 16px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: '#999',
                }}
              >
                {field.placeholder || ''}
              </div>
            ) : field.type === 'select' ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid #E0E0E0',
                  height: 48,
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: '#999',
                }}
              >
                <span>{field.placeholder || 'Sélectionner...'}</span>
                <span style={{ fontSize: 12 }}>▼</span>
              </div>
            ) : field.type === 'file' ? (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '2px dashed #E0E0E0',
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
                  color: '#999',
                }}
              >
                {field.placeholder || 'Glissez un fichier ici ou cliquez pour parcourir'}
              </div>
            ) : (
              <div
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '1px solid #E0E0E0',
                  height: 48,
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 15,
                  color: '#999',
                }}
              >
                {field.placeholder || ''}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="btn-pill btn-pill-dark"
        style={{
          width: '100%',
          marginTop: 32,
          justifyContent: 'center',
        }}
      >
        {submitLabel}
      </button>
    </div>
  )
}
