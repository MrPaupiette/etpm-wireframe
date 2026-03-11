import { Link } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function Introduction() {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#fff' }}>
      <AnimateOnScroll>
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 16,
              fontStyle: 'italic',
              color: '#999',
              marginBottom: 24,
            }}
          >
            Anciennement Groupe Neys
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(17px, 2vw, 19px)',
              lineHeight: 1.8,
              color: '#333',
              marginBottom: 32,
            }}
          >
            Synelis conçoit, construit et maintient les infrastructures qui permettent à
            l'énergie de circuler dans les territoires du Grand Sud-Ouest. De l'éclairage
            public à la fibre optique, du réseau électrique à la caténaire ferroviaire —
            nous relions les énergies pour rendre la vie collective possible.
          </p>

          <Link
            to="/notre-groupe/histoire"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: '#111',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              display: 'inline-block',
            }}
          >
            Découvrir notre histoire →
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
