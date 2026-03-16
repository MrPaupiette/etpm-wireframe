import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 72 }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
