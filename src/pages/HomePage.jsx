import Hero from '../sections/Hero'
import Introduction from '../sections/Introduction'
import Activities from '../sections/Activities'
import KeyFigures from '../sections/KeyFigures'
import Subsidiaries from '../sections/Subsidiaries'
import JoinUs from '../sections/JoinUs'
import Commitments from '../sections/Commitments'
import News from '../sections/News'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Activities />
      <KeyFigures />
      <Subsidiaries />
      <JoinUs />
      <Commitments />
      <News />
    </main>
  )
}
