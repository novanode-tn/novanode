export const site = {
  name: "Novanode",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novanode.tn",
  locale: "fr-TN",
  ogLocale: "fr_TN",
  city: "Tunis",
  country: "Tunisie",
  countryCode: "TN",
  region: "TN-11",
  latitude: 36.8065,
  longitude: 10.1815,
  founder: "Amine Jameli",
  slogan: "Marketing, créativité et technologie. Connectés.",
  title: "Novanode — Marketing, création et technologie à Tunis",
  description:
    "Novanode prépare son lancement à Tunis. Marketing, création et technologie, réunis pour faire grandir les marques en Tunisie.",
  email: "bonjour@novanode.tn",
  pillars: [
    {
      title: "Marketing",
      text: "Stratégie, contenu et acquisition : des campagnes qui transforment l'attention en croissance.",
    },
    {
      title: "Création",
      text: "Identités de marque, design et expériences : une image qui parle de vous avant vous.",
    },
    {
      title: "Technologie",
      text: "Sites, produits et automatisation : la technique au service de votre ambition.",
    },
  ],
} as const;
