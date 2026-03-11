import FilialeTemplate from './FilialeTemplate'

const etpmData = {
  name: 'ETPM',
  tagline: "[Accroche — réseaux d’énergie, éclairage public, VRD et IRVE dans le Grand Sud-Ouest — 354 collaborateurs, 63M€ CA]",
  heroImage: "[Photo — chantier ETPM, éclairage public, gilets orange]",
  description: "[Intention 4-5 phrases — filiale historique du groupe Synelis, spécialisée dans les réseaux d’énergie HTA/BT, l’éclairage public, le VRD & viabilisation, et les bornes IRVE. 354 collaborateurs, 63M€ CA, 7 agences dans le Grand Sud-Ouest. Plus de 60 ans d’expérience. — KW : entreprise travaux publics toulouse, éclairage public, viabilisation terrain]",
  externalUrl: 'https://etpm.fr',
  dgPortrait: '[Photo portrait DG ETPM]',
  dgName: '[Prénom Nom]',
  dgRole: 'Directeur ETPM',
  dgQuote: "[Citation — vision terrain, fierté du métier, ancrage Sud-Ouest]",
  expertises: [
    { icon: '⚡', title: 'VRD & Viabilisation', text: "[Intention — terrassement, réseaux secs et humides, lotissements, ZAC — KW : viabilisation (1 600/mois), entreprise vrd (720/mois)]" },
    { icon: '💡', title: 'Éclairage public', text: "[Intention — candélabres, LED, relamping, smart lighting, maintenance — KW : éclairage public (4 400/mois, océan bleu)]" },
    { icon: '🔌', title: 'IRVE — Bornes de recharge', text: "[Intention — installation bornes collectivités et entreprises, qualification IRVE — KW : installateur irve (660/mois)]" },
    { icon: '⚙️', title: "Réseaux d’énergie", text: "[Intention — HTA/BT, postes de transformation, raccordements Enedis — KW : réseau hta (320/mois)]" },
    { icon: '🚜', title: 'Travaux publics & terrassement', text: "[Intention — terrassement, assainissement VRD, enrobés — KW : entreprise travaux publics (480/mois)]" },
  ],
  agencies: [
    'Toulouse · Haute-Garonne (31)',
    'Bordeaux · Gironde (33)',
    'Pau · Pyrénées-Atlantiques (64)',
    'Bayonne · Pyrénées-Atlantiques (64)',
    'Agen · Lot-et-Garonne (47)',
    'Périgueux · Dordogne (24)',
    'Cahors · Lot (46)',
  ],
  mapPlaceholder: '[Carte Grand Sud-Ouest — 7 agences ETPM, zones d’intervention]',
  stats: [
    { number: '354', label: 'Collaborateurs' },
    { number: '63M€', label: "Chiffre d’affaires" },
    { number: '7', label: 'Agences' },
    { number: '60+', label: "Années d’expertise" },
  ],
  projects: [
    { image: '[Photo — éclairage LED commune]', title: '[Relamping LED commune de X, 300 points lumineux]', text: '[Résumé court]' },
    { image: '[Photo — chantier VRD]', title: '[Viabilisation ZAC X, réseaux secs et humides]', text: '[Résumé court]' },
    { image: '[Photo — bornes IRVE]', title: '[Installation IRVE collectivité X, 20 bornes]', text: '[Résumé court]' },
  ],
  recruitText: "[Intention — ETPM recrute dans le Sud-Ouest : chefs de chantier, monteurs réseau, conducteurs de travaux, alternants. 7 agences, mobilité interne possible vers les autres filiales Synelis.]",
  recruitUrl: 'https://etpm.fr/nous-rejoindre',
}

export default function ETPM() {
  return <FilialeTemplate {...etpmData} />
}
