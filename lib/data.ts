export type Service = {
  slug: string
  name: string
  desc: string
  price: string
  wixHref: string
}

export type Category = {
  slug: string
  num: string
  name: string
  type: string
  color: string
  colorPale: string
  bgWord1: string
  bgWord2: string
  tagline: string
  startingAt: string
  logoSrc: string
  services: Service[]
  inclus: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

export const CATEGORIES: Category[] = [
  {
    slug: 'apero',
    num: '01',
    name: "L'APÉRO",
    type: 'Infographie',
    color: '#4a8c5c',
    colorPale: 'rgba(74,140,92,.08)',
    bgWord1: 'ENNUYANT',
    bgWord2: 'BROUILLON',
    tagline: "Des documents visuels qui font bonne impression. <strong>Présentations Powerpoint et plans d'affaires</strong> — clairs, pros, prêts à livrer.",
    startingAt: 'À PARTIR DE 100$',
    logoSrc: 'https://static.wixstatic.com/shapes/603d87_30652102cab24c9e83d9405fe124ee69.svg',
    services: [
      { slug: 'toastvisuel', name: 'Présentation Powerpoint', desc: 'Design professionnel de présentation, mise en page soignée et cohérente', price: '100,00$', wixHref: 'https://www.cocktailmedia.ca/menu/apero/toastvisuel' },
      { slug: 'plan-signature', name: "Création de plan d'affaires", desc: "Document structuré, visuel et prêt à présenter aux investisseurs", price: '200,00$', wixHref: 'https://www.cocktailmedia.ca/menu/apero/plan-signature' },
    ],
    inclus: [
      { title: 'DESIGN SUR MESURE', desc: "Aucun template générique. Chaque document est créé selon ton image de marque." },
      { title: 'FICHIER MODIFIABLE', desc: "Tu reçois le fichier source (PPTX ou PDF) que tu peux modifier toi-même par la suite." },
      { title: 'FORMAT PRÉSENTATION + PDF', desc: "Version Powerpoint modifiable et version PDF fixe pour envoi ou impression." },
      { title: 'LIVRAISON NUMÉRIQUE', desc: "Fichiers livrés par lien de téléchargement. Accès simple et rapide." },
      { title: '1 REVISITE INCLUSE', desc: "Une ronde de modifications incluse. Ajustements précis selon tes commentaires." },
      { title: 'DÉLAI DE 5 JOURS', desc: "Livraison standard en 5 jours ouvrables. Option express disponible." },
    ],
    faqs: [
      { q: 'Est-ce que je peux modifier la présentation moi-même après livraison ?', a: "Oui. Tu reçois le fichier source PPTX que tu peux modifier dans PowerPoint ou Google Slides. La mise en page est verrouillée par style, pas par mot de passe." },
      { q: "C'est quoi la différence entre la présentation et le plan d'affaires ?", a: "La présentation PowerPoint, c'est un outil de communication visuel — idéal pour pitcher, présenter tes services ou ton équipe. Le plan d'affaires, c'est un document de fond structuré : résumé exécutif, marché cible, projections financières, stratégie. Les deux sont produits avec soin, mais le plan demande plus d'information de ta part." },
      { q: 'Combien de diapositives sont incluses ?', a: "Pour la présentation PowerPoint : entre 10 et 20 diapositives selon le contenu fourni. Pour le plan d'affaires : entre 15 et 30 pages. Si tu as besoin de plus, on s'ajuste — un supplément peut s'appliquer." },
      { q: "Qu'est-ce que je dois fournir pour commencer ?", a: "Ton logo (si tu en as un), les textes ou points clés à inclure, les couleurs de ta marque, et quelques exemples de styles qui t'inspirent. Le reste, on s'en occupe." },
    ],
  },
  {
    slug: 'les-roses',
    num: '02',
    name: 'LES ROSÉS',
    type: 'Graphisme',
    color: '#d4728c',
    colorPale: 'rgba(212,114,140,.08)',
    bgWord1: 'GÉNÉRIQUE',
    bgWord2: 'INVISIBLE',
    tagline: "Une identité visuelle qui te ressemble et qui se démarque. <strong>Logo, supports imprimés, supports numériques, refonte</strong> — tout est là.",
    startingAt: 'À PARTIR DE 75$',
    logoSrc: 'https://static.wixstatic.com/shapes/603d87_a748d18eac8848e2b12f2731acfeaeb1.svg',
    services: [
      { slug: 'creation-logo-personnalise', name: "Création d'un logo personnalisé", desc: "Logo original conçu selon ton image de marque, livré en tous formats", price: '200,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-roses/creation-logo-personnalise' },
      { slug: 'refonte-identite-visuelle', name: "Refonte d'identité visuelle", desc: "Mise à jour de ton logo et de ton univers graphique existant", price: '150,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-roses/refonte-identite-visuelle' },
      { slug: 'creation-supports-imprimes', name: 'Supports imprimables', desc: "Carte d'affaires, affiche, dépliant — conçus pour l'impression", price: '75$ / 1 visuel — 200$ / 4', wixHref: 'https://www.cocktailmedia.ca/menu/les-roses/creation-supports-imprimes' },
      { slug: 'creation-supports-numeriques', name: 'Supports numériques', desc: "Bannière web, publication réseaux sociaux, signature courriel", price: '75$ / 1 visuel — 200$ / 4', wixHref: 'https://www.cocktailmedia.ca/menu/les-roses/creation-supports-numeriques' },
    ],
    inclus: [
      { title: 'CONCEPT ORIGINAL', desc: "Chaque création part de zéro — aucun template revendu." },
      { title: 'TOUS LES FORMATS', desc: "PNG, JPG, PDF, SVG ou AI selon le service. Prêt à l'emploi partout." },
      { title: 'POLICE ET COULEURS', desc: "Guide des couleurs et polices inclus pour maintenir la cohérence." },
      { title: '1 REVISITE INCLUSE', desc: "Une ronde de modifications comprises dans le prix." },
      { title: 'DROITS CÉDÉS', desc: "Les fichiers t'appartiennent entièrement après livraison." },
      { title: 'DÉLAI DE 10 JOURS', desc: "Livraison en 10 jours ouvrables. Option express disponible." },
    ],
    faqs: [
      { q: "Est-ce que je reçois le fichier source du logo ?", a: "Oui. Tu reçois les fichiers sources (AI ou PDF vectoriel) ainsi que les exports PNG/JPG en haute résolution. Le logo t'appartient entièrement." },
      { q: "Combien de concepts de logo recevrai-je ?", a: "On te propose 1 concept développé basé sur ton brief. Si la direction ne convient pas, on ajuste lors de la revisite incluse. Tu paies pour une direction créative réfléchie, pas pour un buffet de logos." },
      { q: "Est-ce que vous faites des cartes d'affaires en impression ?", a: "On s'occupe du design. Pour l'impression physique, on peut te référer à des imprimeurs locaux, mais le service couvre uniquement la création des fichiers prêts à imprimer." },
    ],
  },
  {
    slug: 'les-blancs',
    num: '03',
    name: 'LES BLANCS',
    type: 'Vidéographie',
    color: '#c9a84c',
    colorPale: 'rgba(201,168,76,.08)',
    bgWord1: 'FLOU',
    bgWord2: 'MONOTONE',
    tagline: "Des vidéos professionnelles qui captivent et convertissent. <strong>Corporate, événements, immobilier, drone, réseaux sociaux</strong> — on tourne.",
    startingAt: 'À PARTIR DE 200$',
    logoSrc: 'https://static.wixstatic.com/shapes/603d87_8c1734c96e2d46389e682f8b32278949.svg',
    services: [
      { slug: 'videoscorporatives', name: 'Vidéo corporatif', desc: "Présentation d'entreprise, témoignage client ou vidéo institutionnelle", price: '300,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-blancs/videoscorporatives' },
      { slug: 'couverturedevenements', name: "Couverture d'évènements / 3H", desc: "Captation complète de ton événement sur 3 heures, montage livré", price: '300,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-blancs/couverturedevenements' },
      { slug: 'videoimmobiliere', name: 'Vidéos immobiliers', desc: "Visite virtuelle et mise en valeur de propriété à vendre ou louer", price: '200,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-blancs/videoimmobiliere' },
      { slug: 'videopardrone', name: 'Vidéos aériens (drone)', desc: "Prises de vue aériennes professionnelles par drone certifié", price: '200,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-blancs/videopardrone' },
      { slug: 'videos-reseaux-sociaux', name: 'Forfait Short/Reel', desc: "3 courts formats verticaux optimisés Instagram/TikTok/YouTube Shorts", price: '330,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-blancs/videos-reseaux-sociaux' },
    ],
    inclus: [
      { title: 'TOURNAGE PROFESSIONNEL', desc: "Équipement professionnel, cadrage soigné et direction de scène." },
      { title: 'MONTAGE COMPLET', desc: "Montage, étalonnage couleur, musique libre de droits incluse." },
      { title: 'FORMAT WEB ET SOCIAL', desc: "Livraison en MP4 optimisé pour le web, les réseaux et la présentation." },
      { title: '1 REVISITE INCLUSE', desc: "Une ronde de modifications sur le montage final." },
      { title: "DROITS D'UTILISATION", desc: "Vidéo livrée avec droits d'utilisation commerciale complets." },
      { title: 'DÉLAI DE 14 JOURS', desc: "Livraison en 14 jours ouvrables après tournage." },
    ],
    faqs: [
      { q: "Le déplacement est-il inclus dans le prix ?", a: "Oui, partout en Mauricie. Hors Mauricie, le déplacement est gratuit pour toute commande de 500$ et plus." },
      { q: "Est-ce que la musique de fond est incluse ?", a: "Oui. On sélectionne une musique libre de droits adaptée au ton de ta vidéo. Si tu as une préférence ou une playlist, dis-le nous — on essaie de s'y coller." },
      { q: "Combien de temps dure la vidéo finale ?", a: "Ça dépend du service. Corporatif : 1 à 3 minutes. Événement : 2 à 4 minutes. Shorts/Reels : 15 à 60 secondes chacun. Immobilier : 1 à 2 minutes." },
    ],
  },
  {
    slug: 'les-rouges',
    num: '04',
    name: 'LES ROUGES',
    type: 'Photographie',
    color: '#E83B14',
    colorPale: 'rgba(232,59,20,.08)',
    bgWord1: 'FLOU',
    bgWord2: 'AMATEUR',
    tagline: "Des photos professionnelles qui mettent en valeur ton entreprise. <strong>Produits, portraits, évènements, immobilier, drone</strong> — on couvre tout.",
    startingAt: 'À PARTIR DE 50$',
    logoSrc: 'https://static.wixstatic.com/shapes/603d87_26a759fec56b434d996293b5902ea3e7.svg',
    services: [
      { slug: 'photo-de-produits', name: 'Photos de produits', desc: "Mise en valeur de tes produits sur fond blanc ou en situation", price: '175,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/photo-de-produits' },
      { slug: 'photos-entreprise', name: 'Photos en actions', desc: "Captation de ton équipe et de ton environnement de travail", price: '250,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/photos-entreprise' },
      { slug: 'couverture-evenements', name: "Couverture d'évènement / 3H", desc: "Photoreportage complet de ton événement sur 3 heures", price: '250,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/couverture-evenements' },
      { slug: 'portrait-corporatif', name: 'Portraits professionnels / 3 personnes', desc: "Portraits d'affaires retouchés, fond au choix, livraison rapide", price: '100,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/portrait-corporatif' },
      { slug: 'retouches-avancees', name: 'Retouches de photos existantes', desc: "Amélioration, correction couleur et retouche de tes photos existantes", price: '50,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/retouches-avancees' },
      { slug: 'photographie-immobiliere', name: 'Photographies immobilières (incluent le drone)', desc: "Photos intérieur/extérieur + prises aériennes pour une propriété", price: '150,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/photographie-immobiliere' },
      { slug: 'photographie-par-drone', name: 'Photographies par drone', desc: "Prises de vue aériennes haute résolution par drone certifié", price: '200,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-rouges/photographie-par-drone' },
    ],
    inclus: [
      { title: 'RETOUCHES INCLUSES', desc: "Chaque photo livrée est retouchée — exposition, couleur, cadrage." },
      { title: 'HAUTE RÉSOLUTION', desc: "Fichiers JPG haute résolution prêts pour le web et l'impression." },
      { title: 'GALERIE EN LIGNE', desc: "Livraison via galerie privée en ligne. Téléchargement facile." },
      { title: '1 REVISITE INCLUSE', desc: "Une ronde de retouches supplémentaires incluse." },
      { title: 'DROITS CÉDÉS', desc: "Utilisation commerciale complète — web, impression, réseaux sociaux." },
      { title: 'DÉLAI DE 10 JOURS', desc: "Livraison 10 jours ouvrables après la séance." },
    ],
    faqs: [
      { q: "Combien de photos est-ce que je reçois ?", a: "Ça dépend du service. Portraits : 10 à 15 photos retouchées. Photos en actions : 20 à 30 photos. Événement : 50 à 80 photos. Immobilier : 20 à 30 photos intérieur/extérieur. Produits : 5 à 10 photos par produit." },
      { q: "Est-ce que je peux choisir les photos avant retouche ?", a: "Oui. On te partage une sélection préliminaire et tu choisis les photos que tu veux retoucher. Le nombre inclus dépend du service choisi." },
      { q: "Est-ce que le drone nécessite des autorisations ?", a: "On s'occupe de tout. On est certifiés Transport Canada pour les opérations de drone. Toutes les autorisations requises sont gérées de notre côté." },
    ],
  },
  {
    slug: 'les-digestifs',
    num: '05',
    name: 'LES DIGESTIFS',
    type: 'Site web',
    color: '#e8731a',
    colorPale: 'rgba(232,115,26,.08)',
    bgWord1: 'DÉMODÉ',
    bgWord2: 'INVISIBLE',
    tagline: "Un site web simple, efficace et professionnel pour ta PME. <strong>Site vitrine, boutique en ligne, refonte</strong> — clé en main.",
    startingAt: 'À PARTIR DE 150$',
    logoSrc: 'https://static.wixstatic.com/shapes/603d87_2841476480cb44b48a46eb7ffe2c32bc.svg',
    services: [
      { slug: 'creation-site-web-simple', name: 'Création de site web simple', desc: "Site vitrine jusqu'à 5 pages, responsive, optimisé SEO de base", price: '500,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-digestifs/creation-site-web-simple' },
      { slug: 'boutique-en-ligne-simple', name: "Création d'une boutique en ligne", desc: "Boutique e-commerce jusqu'à 20 produits, paiement en ligne intégré", price: '1 000,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-digestifs/boutique-en-ligne-simple' },
      { slug: 'refonte-site-web-existant', name: 'Refonte de site web existant', desc: "Rafraîchissement visuel et technique de ton site actuel", price: '150,00$', wixHref: 'https://www.cocktailmedia.ca/menu/les-digestifs/refonte-site-web-existant' },
    ],
    inclus: [
      { title: 'DESIGN PERSONNALISÉ', desc: "Design adapté à ton identité visuelle — pas un thème générique." },
      { title: 'RESPONSIVE MOBILE', desc: "Ton site s'affiche parfaitement sur téléphone, tablette et écran." },
      { title: 'SEO DE BASE', desc: "Titres, descriptions et structure optimisés pour Google." },
      { title: '1 RÉVISION COMPLÈTE', desc: "Une ronde de retours et ajustements incluse." },
      { title: 'MISE EN LIGNE', desc: "On s'occupe du déploiement. Tu reçois un site en ligne, pas un fichier." },
      { title: 'DÉLAI DE 21 JOURS', desc: "Livraison en 21 jours ouvrables. Option express disponible." },
    ],
    faqs: [
      { q: "Les frais d'hébergement sont-ils inclus ?", a: "Non. L'hébergement et le nom de domaine sont des frais récurrents annuels que tu gères toi-même (ex. : Wix, Squarespace, Vercel, GoDaddy). On peut te guider dans le choix selon ton budget." },
      { q: "Sur quelle plateforme mon site sera-t-il construit ?", a: "On choisit selon tes besoins : Wix ou Squarespace pour les sites vitrine simples (tu pourras modifier toi-même), Next.js ou WordPress pour plus de flexibilité. On t'explique les options avant de commencer." },
      { q: "Est-ce que je pourrai modifier mon site après livraison ?", a: "Oui, si on utilise Wix ou Squarespace — l'interface est faite pour ça. Pour les sites custom (Next.js, WordPress), une formation de base est incluse." },
    ],
  },
]

export const EXTRAS = [
  { name: 'Livraisons express', price: '20$ — 100$' },
  { name: 'Revisite supplémentaire', price: '10$ — 30$' },
  { name: "Ajout d'une personne", price: '50,00$' },
  { name: 'Photos supplémentaires', price: '30$ — 75$' },
  { name: 'Séance prolongée', price: '50$ — 100$' },
  { name: 'Entrevue en directe', price: '100,00$' },
]

export const FAQS = [
  { q: "C'est quoi Cocktail Média exactement ?", a: "Cocktail Média, c'est une production créative à la carte basée en Mauricie. On offre de la photo, de la vidéo, du graphisme, de l'infographie et de la création de site web pour les PME. Pas une agence — pas de réunion de 3 heures, pas de soumission mystère. Tu choisis ton service, tu paies, on produit." },
  { q: "Pourquoi les prix sont affichés ?", a: "Parce qu'on croit que la transparence, c'est la base. Tu sais exactement combien ça coûte avant de commander. Pas de négociation, pas de devis surprise à la fin. Comme au restaurant — le prix est sur le menu." },
  { q: "Comment ça marche pour commander ?", a: "Tu consultes le menu, tu choisis le service qui te convient, tu réserves un appel de 15 minutes pour qu'on comprenne ton besoin, puis tu paies en ligne. On te contacte et on produit. Simple de même." },
  { q: "Est-ce que vous vous déplacez ?", a: "Oui. Le déplacement est inclus partout en Mauricie — Trois-Rivières, Shawinigan, Louiseville, Bécancour, Victoriaville et environs. Hors Mauricie, le déplacement est gratuit pour toute commande de 500$ et plus." },
  { q: "C'est quoi la différence avec une agence ?", a: "Une agence, c'est des rencontres, des comités, des soumissions et des délais. Chez Cocktail Média, tu parles directement à la personne qui produit ton projet. Moins d'intermédiaires, plus de résultats, et des prix accessibles." },
  { q: "Est-ce qu'il y a des frais cachés ?", a: "Non. Le prix affiché sur le menu, c'est le prix que tu paies. Les seuls frais supplémentaires possibles sont les extras que tu choisis toi-même (livraison express, revisites supplémentaires, etc.)." },
]

export const TEAM = [
  {
    name: 'FÉLIX DUMONT',
    role: 'FONDATEUR & PRODUCTION',
    desc: "Photo, vidéo, graphisme, web — je travaille directement sur tes projets. Tu m'appelles, je comprends ton idée, je la produis.",
    photo: 'https://static.wixstatic.com/media/603d87_b970aeee33b94a9db8d7fc52a1f4115a~mv2.jpg',
  },
  {
    name: 'MARIE-CHRISTINE BLANCHETTE',
    role: 'FINANCES & SERVICE CLIENTÈLE',
    desc: "Suivi de projets, facturation et communication. Du début à la fin, c'est clair et sans complication.",
    photo: 'https://static.wixstatic.com/media/603d87_606be45782ec4229b5f042e29fa2d109~mv2.png',
  },
]

export const LOGO_SRC = 'https://static.wixstatic.com/shapes/603d87_aa27ced6fb9d4d8db0b6b99ebe3b88a6.svg'
export const COUPE_SRC = 'https://static.wixstatic.com/shapes/603d87_c9b09d330c54453fbf1b8edd389c9cfa.svg'
