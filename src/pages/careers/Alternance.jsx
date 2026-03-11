import CareerTemplate from './CareerTemplate'

const alternanceData = {
  breadcrumbLabel: 'Alternance BTP',
  h1: 'Alternance et apprentissage BTP chez Synelis',
  subtitle: "[Accroche — formez-vous aux métiers des TP et de l’énergie dans l’une de nos 6 filiales — KW : alternance btp (480/mois), apprentissage btp (210/mois)]",
  heroImage: '[Photo — jeune alternant sur chantier avec tuteur]',
  introTitle: 'Votre avenir commence ici',
  introText: "[Texte guide — éduquer le candidat alternant : métiers accessibles en alternance (fibre, énergie, VRD, ferroviaire, génie civil), conditions (rémunération, durée, diplômes), parcours type. Puis convertir vers les offres. — KW : alternance btp (480/mois), apprentissage btp (210/mois), alternance travaux publics (140/mois)]",
  cards: [
    {
      icon: '⚡',
      title: 'Énergie & VRD',
      text: "[Intention — alternance chez ETPM, E2R, Restech : monteur réseau, canalisateur, conducteur d’engins — KW : alternance travaux publics]",
      tags: ['ETPM', 'E2R', 'Restech'],
    },
    {
      icon: '📡',
      title: 'Fibre & Télécoms',
      text: "[Intention — alternance chez CAUM : technicien fibre, tireur de câble, soudeur — KW : alternance fibre optique]",
      tags: ['CAUM'],
    },
    {
      icon: '🚆',
      title: 'Ferroviaire',
      text: "[Intention — alternance chez HP Elec : monteur caténaire, électricien ferroviaire — métier rare, formation unique — KW : alternance ferroviaire]",
      tags: ['HP Elec'],
    },
  ],
  testimonial: {
    image: '[Photo — alternant en situation, sourire, chantier]',
    name: '[Prénom — Alternant chez ETPM, 2ème année BTS TP]',
    quote: "[Témoignage — ce que l’alternance lui a apporté, le terrain vs la théorie, l’accompagnement par le tuteur, ses projets après le diplôme]",
  },
  faq: [
    { q: 'Quel salaire en alternance BTP ?', a: "[Intention — grille salariale selon âge et niveau de diplôme, chiffres concrets — vise Featured Snippet]" },
    { q: 'Quelle formation pour travailler dans les travaux publics ?', a: "[Intention — CAP, BTS, licence pro, parcours types accessibles]" },
    { q: "Alternance BTP sans diplôme, c’est possible ?", a: "[Intention — oui, parcours CAP, dispositifs spécifiques, prépas métiers]" },
    { q: 'Comment postuler en alternance chez Synelis ?', a: "[Intention — process candidature, périodes de recrutement, CV + motivation]" },
  ],
  ctaTitle: "Prêt à vous lancer ?",
  ctaText: "[Intention — consultez nos offres d’alternance ou envoyez une candidature spontanée]",
  ctaLabel: "Voir les offres d’alternance",
  ctaLink: '/nous-rejoindre/offres',
}

export default function Alternance() {
  return <CareerTemplate {...alternanceData} />
}
