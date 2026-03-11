import ResourceTemplate from './ResourceTemplate'

const aiprData = {
  breadcrumbLabel: 'Guide AIPR',
  h1: "Guide AIPR : tout savoir sur l'autorisation d'intervention à proximité des réseaux",
  subtitle: '[KW : aipr (930/mois, KD 9-11) — quick win #1 site groupe]',
  heroImage: '[Photo — chantier avec balisage réseaux, DT-DICT, marquage au sol]',
  definitionTitle: "Qu'est-ce que l'AIPR ?",
  definitionText: "[Définition 40-60 mots — vise Featured Snippet. L'AIPR (Autorisation d'Intervention à Proximité des Réseaux) est une attestation de compétences obligatoire pour toute personne intervenant à proximité de réseaux aériens ou enterrés. 3 profils concernés : concepteur, encadrant, opérateur.]",
  definitionSource: '[Source — décret du 22 octobre 2018, arrêté du 15 février 2012 modifié]',
  sections: [
    {
      title: '[H2 — Les 3 profils AIPR : concepteur, encadrant, opérateur]',
      text: "[Intention — expliquer les 3 profils, qui est concerné, quelles responsabilités pour chacun, exemples concrets de postes — KW : aipr concepteur, aipr encadrant, aipr opérateur]",
      image: '[Schéma — les 3 profils AIPR avec leurs responsabilités]',
    },
    {
      title: "[H2 — Comment passer l'AIPR : formation et examen]",
      text: "[Intention — parcours de formation, examen QCM sur la plateforme du CEREMA, organismes agréés, durée, coût, taux de réussite — KW : formation aipr, examen aipr, passer aipr]",
    },
    {
      title: '[H2 — AIPR pour les entreprises : obligations employeur]',
      text: "[Intention — obligation légale pour les entreprises TP, responsabilité de l'employeur, sanctions, lien avec DT-DICT, comment Synelis forme ses équipes — KW : aipr obligatoire, aipr entreprise]",
      note: 'En lien avec la réglementation DT-DICT →',
      noteLink: '/ressources/dt-dict',
      noteLinkLabel: 'réglementation DT-DICT →',
    },
  ],
  faq: [
    {
      q: "Combien de temps est valable l'AIPR ?",
      a: "[Intention — 5 ans, renouvellement obligatoire, process de renouvellement — vise le Featured Snippet]",
    },
    {
      q: "L'AIPR est-elle obligatoire ?",
      a: "[Intention — oui depuis le 1er janvier 2018, pour toute intervention à proximité des réseaux — sanctions]",
    },
    {
      q: "Combien coûte la formation AIPR ?",
      a: "[Intention — 150-400€ selon profil et organisme, prise en charge OPCO possible]",
    },
    {
      q: "Peut-on passer l'AIPR en ligne ?",
      a: "[Intention — la formation peut être en ligne, l'examen QCM se passe sur la plateforme CEREMA]",
    },
  ],
  relatedResources: [
    {
      title: 'Réglementation DT-DICT',
      description: '[Guide complet des déclarations de travaux à proximité des réseaux]',
      link: '/ressources/dt-dict',
    },
    {
      title: 'Autorisation de voirie',
      description: '[Guide des autorisations pour travaux sur la voie publique]',
      link: '/ressources/autorisation-voirie',
    },
  ],
  ctaText: "[Intention — Synelis forme toutes ses équipes à l'AIPR. Vous avez un projet de travaux à proximité des réseaux ? Nos équipes sont qualifiées et certifiées.]",
}

export default function AIPR() {
  return <ResourceTemplate {...aiprData} />
}
