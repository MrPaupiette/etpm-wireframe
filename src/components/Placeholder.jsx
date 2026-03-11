export default function Placeholder({ height = '300px', text = '[Image]', aspectRatio }) {
  return (
    <div
      style={{
        background: '#E8E8E8',
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#999',
        fontSize: 15,
        fontFamily: 'var(--font-sans)',
        width: '100%',
        padding: '20px',
        ...(aspectRatio
          ? { aspectRatio, height: 'auto' }
          : { height }),
      }}
    >
      {text}
    </div>
  )
}
