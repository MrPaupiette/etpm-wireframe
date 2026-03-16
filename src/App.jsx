import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import HubExpertises from './pages/HubExpertises'
import VrdViabilisation from './pages/VrdViabilisation'
import EclairagePublic from './pages/EclairagePublic'
import IrveBornesRecharge from './pages/IrveBornesRecharge'
import ReseauxEnergie from './pages/ReseauxEnergie'
import TravauxPublicsTermassement from './pages/TravauxPublicsTermassement'
import HubTerritoires from './pages/HubTerritoires'
import TerritoireToulouse from './pages/TerritoireToulouse'
import TerritoireBordeaux from './pages/TerritoireBordeaux'
import TerritoirePaysBasque from './pages/TerritoirePaysBasque'
import Realisations from './pages/Realisations'
import ProjectPage from './pages/ProjectPage'
import HubRecrutement from './pages/HubRecrutement'
import EmploiTravauxPublics from './pages/EmploiTravauxPublics'
import IndexMetiers from './pages/IndexMetiers'
import FicheMetierPage from './pages/FicheMetierPage'
import OffresEmploi from './pages/OffresEmploi'
import AlternanceTP from './pages/AlternanceTP'
import ContactPage from './pages/ContactPage'
import RessourcePage from './pages/RessourcePage'
import {
  RESSOURCE_SOUDURE_PEHD,
  RESSOURCE_RESEAU_HTA,
  RESSOURCE_POSTE_HTA_BT,
  RESSOURCE_RELAMPING_LED,
  RESSOURCE_ECLAIRAGE_SOLAIRE,
  RESSOURCE_QSE,
} from './data/ressources'
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
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/expertises" element={<HubExpertises />} />
            <Route path="/expertises/vrd-viabilisation" element={<VrdViabilisation />} />
            <Route path="/expertises/eclairage-public" element={<EclairagePublic />} />
            <Route path="/expertises/irve-bornes-recharge" element={<IrveBornesRecharge />} />
            <Route path="/expertises/reseaux-energie" element={<ReseauxEnergie />} />
            <Route path="/expertises/travaux-publics-terrassement" element={<TravauxPublicsTermassement />} />
            <Route path="/territoires" element={<HubTerritoires />} />
            <Route path="/territoires/toulouse-haute-garonne" element={<TerritoireToulouse />} />
            <Route path="/territoires/bordeaux-gironde" element={<TerritoireBordeaux />} />
            <Route path="/territoires/pays-basque-landes" element={<TerritoirePaysBasque />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/realisations/:slug" element={<ProjectPage />} />
            <Route path="/nous-rejoindre" element={<HubRecrutement />} />
            <Route path="/nous-rejoindre/emploi-travaux-publics" element={<EmploiTravauxPublics />} />
            <Route path="/nous-rejoindre/metiers" element={<IndexMetiers />} />
            <Route path="/nous-rejoindre/alternance" element={<AlternanceTP />} />
            <Route path="/nous-rejoindre/offres" element={<OffresEmploi />} />
            <Route path="/ressources/soudure-pehd" element={<RessourcePage data={RESSOURCE_SOUDURE_PEHD} />} />
            <Route path="/ressources/reseau-hta" element={<RessourcePage data={RESSOURCE_RESEAU_HTA} />} />
            <Route path="/ressources/poste-hta-bt" element={<RessourcePage data={RESSOURCE_POSTE_HTA_BT} />} />
            <Route path="/ressources/relamping-led" element={<RessourcePage data={RESSOURCE_RELAMPING_LED} />} />
            <Route path="/ressources/eclairage-public-solaire" element={<RessourcePage data={RESSOURCE_ECLAIRAGE_SOLAIRE} />} />
            <Route path="/ressources/qse-signification" element={<RessourcePage data={RESSOURCE_QSE} />} />
            <Route path="/fiches-metiers/:slug" element={<FicheMetierPage />} />
            <Route path="/actualites" element={<PlaceholderPage title="Actualités" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PlaceholderPage title="Page non trouvée" />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}
