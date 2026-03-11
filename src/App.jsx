import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import NotreGroupe from './pages/NotreGroupe'
import NotreMission from './pages/NotreMission'
import NotreHistoire from './pages/NotreHistoire'
import NosEngagements from './pages/NosEngagements'
import NosActivites from './pages/NosActivites'
import NosRealisations from './pages/NosRealisations'
import NosFiliales from './pages/NosFiliales'
import ETPM from './pages/filiales/ETPM'
import NousRejoindre from './pages/NousRejoindre'
import Alternance from './pages/careers/Alternance'
import Candidature from './pages/Candidature'
import NosOffres from './pages/NosOffres'
import NosMetiers from './pages/NosMetiers'
import Actualites from './pages/Actualites'
import Contact from './pages/Contact'
import AIPR from './pages/resources/AIPR'
import PlaceholderPage from './pages/PlaceholderPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/notre-groupe" element={<NotreGroupe />} />
          <Route path="/notre-groupe/mission" element={<NotreMission />} />
          <Route path="/notre-groupe/histoire" element={<NotreHistoire />} />
          <Route path="/notre-groupe/equipe" element={<PlaceholderPage title="Notre équipe" />} />
          <Route path="/notre-groupe/engagements" element={<NosEngagements />} />
          <Route path="/nos-activites" element={<NosActivites />} />
          <Route path="/nos-activites/realisations" element={<NosRealisations />} />
          <Route path="/nos-filiales" element={<NosFiliales />} />
          <Route path="/nos-filiales/etpm" element={<ETPM />} />
          <Route path="/nos-filiales/hp-elec" element={<PlaceholderPage title="HP Elec" />} />
          <Route path="/nos-filiales/caum" element={<PlaceholderPage title="CAUM" />} />
          <Route path="/nos-filiales/fctp" element={<PlaceholderPage title="FCTP" />} />
          <Route path="/nos-filiales/restech" element={<PlaceholderPage title="Restech" />} />
          <Route path="/nos-filiales/e2r" element={<PlaceholderPage title="E2R" />} />
          <Route path="/nous-rejoindre" element={<NousRejoindre />} />
          <Route path="/nous-rejoindre/alternance" element={<Alternance />} />
          <Route path="/nous-rejoindre/metiers" element={<NosMetiers />} />
          <Route path="/nous-rejoindre/carrieres-fibre" element={<PlaceholderPage title="Carrières fibre optique" />} />
          <Route path="/nous-rejoindre/carrieres-tp" element={<PlaceholderPage title="Carrières travaux publics" />} />
          <Route path="/nous-rejoindre/reconversion" element={<PlaceholderPage title="Reconversion BTP" />} />
          <Route path="/nous-rejoindre/offres" element={<NosOffres />} />
          <Route path="/nous-rejoindre/candidature" element={<Candidature />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ressources/aipr" element={<AIPR />} />
          <Route path="/ressources/autorisation-voirie" element={<PlaceholderPage title="Autorisation de voirie" />} />
          <Route path="/ressources/dt-dict" element={<PlaceholderPage title="Réglementation DT-DICT" />} />
          <Route path="/ressources/certification-mase" element={<PlaceholderPage title="Certification MASE" />} />
          <Route path="/ressources/prevention-chantier" element={<PlaceholderPage title="Prévention chantier" />} />
          <Route path="/ressources/smart-grid" element={<PlaceholderPage title="Smart Grid" />} />
          <Route path="*" element={<PlaceholderPage title="Page non trouvée" />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
