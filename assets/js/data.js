/**
 * ==========================================================
 * L'ENXANETA — DONNÉES DU SITE
 * ----------------------------------------------------------
 * Toutes les informations modifiables sont ici.
 * Remplacez les textes entre crochets [ ] par les vraies
 * informations quand elles seront disponibles.
 * Les chemins d'images pointent vers assets/images/ —
 * remplacez simplement les fichiers en gardant le même nom
 * (ou changez le chemin ici).
 * ==========================================================
 */

const SITE = {
  name: "lo següent",
  tagline: "Restaurant & Glacerie — cuisine généreuse, glaces artisanales, art de vivre au soleil.",
  logo: "assets/images/logo.jpeg",

  nav: [
    { label: "Accueil", href: "index.html" },
    { label: "Menu", href: "menu.html" },
    { label: "Photos", href: "photos.html" },
    { label: "Contact", href: "contact.html" },
  ],

  hero: {
    image: "assets/images/hero-lenxaneta.jpg",
    title: "lo següent",
    tagline: "Un instant de soleil, à table.",
    ctaLabel: "Découvrir le menu",
    ctaHref: "menu.html",
  },

  intro: {
    eyebrow: "Bienvenue",
    text: "Chez lo següent, chaque repas est une invitation à ralentir : une cuisine généreuse préparée avec soin, des glaces artisanales pour prolonger le plaisir, et une ambiance chaleureuse pensée pour les longues tablées d'été comme pour les soirées entre amis.",
  },

  restaurant: {
    tag: "Restaurant",
    title: "Une cuisine généreuse et soignée",
    text: "[Texte à compléter] — présentation de la cuisine, des produits de saison et de l'expérience culinaire proposée par lo següent.",
    image: "assets/images/restaurant-section.jpg",
    ctaLabel: "Voir le menu du restaurant",
    ctaHref: "menu.html#restaurant",
  },

  glacerie: {
    tag: "Glacerie",
    title: "Des glaces artisanales, pleines de fraîcheur",
    text: "[Texte à compléter] — présentation des glaces, parfums signature et créations gourmandes de la glacerie L'Enxaneta.",
    image: "assets/images/gallery-10.jpg",
    ctaLabel: "Voir les parfums",
    ctaHref: "menu.html#glaces",
  },

  ambiance: {
    eyebrow: "L'expérience",
    title: "Se retrouver, prendre le temps",
    text: "En famille ou entre amis, en terrasse ou en salle, L'Enxaneta est pensé comme un lieu où l'on prend le temps de bien manger, de déguster une glace et de profiter du moment.",
    images: [
      { src: "assets/images/ambiance-1.jpg", alt: "Moment de convivialité en terrasse" },
      { src: "assets/images/ambiance-2.jpg", alt: "Dessert glacé servi à table" },
    ],
    ctaLabel: "Voir toutes les photos",
    ctaHref: "photos.html",
  },

  ctaFinal: {
    title: "Envie de nous rendre visite ?",
    text: "Découvrez notre carte, parcourez nos photos ou venez directement profiter d'un moment chez L'Enxaneta.",
    actions: [
      { label: "Voir le Menu", href: "menu.html", style: "solid" },
      { label: "Voir les Photos", href: "photos.html", style: "outline" },
      { label: "Nous trouver", href: "contact.html", style: "outline" },
    ],
  },

  footer: {
    blurb: "Restaurant & Glacerie — une cuisine généreuse et des glaces artisanales dans une ambiance chaleureuse et ensoleillée.",
    hours: [
      { day: "Lundi – Vendredi", hours: "[à compléter]" },
      { day: "Samedi", hours: "[à compléter]" },
      { day: "Dimanche", hours: "[à compléter]" },
    ],
    address: "[Adresse à compléter]",
    phone: "[Téléphone à compléter]",
    email: "[Email à compléter]",
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
    copyright: "© 2026 L'Enxaneta. Tous droits réservés.",
  },
};

/**
 * MENU — catégories modifiables.
 * Chaque plat : name, description, price, image (optionnelle).
 * NE JAMAIS inventer les vrais plats/prix : garder les
 * placeholders [ ] tant que les données réelles ne sont pas fournies.
 */
const MENU = [
  {
    id: "restaurant",
    label: "Restaurant",
    description: "Entrées, plats et suggestions de saison.",
    coverImage: "assets/images/menu-restaurant.jpg",
    items: [
      { name: "[Nom du plat]", description: "[Description courte du plat]", price: "[Prix] €" },
      { name: "[Nom du plat]", description: "[Description courte du plat]", price: "[Prix] €" },
      { name: "[Nom du plat]", description: "[Description courte du plat]", price: "[Prix] €" },
      { name: "[Nom du plat]", description: "[Description courte du plat]", price: "[Prix] €" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    description: "Douceurs et desserts faits maison.",
    coverImage: "assets/images/menu-desserts.jpg",
    items: [
      { name: "[Nom du dessert]", description: "[Description courte]", price: "[Prix] €" },
      { name: "[Nom du dessert]", description: "[Description courte]", price: "[Prix] €" },
      { name: "[Nom du dessert]", description: "[Description courte]", price: "[Prix] €" },
    ],
  },
  {
    id: "glaces",
    label: "Glaces",
    description: "Parfums artisanels, boules et coupes glacées.",
    coverImage: "assets/images/menu-glaces.jpg",
    items: [
      { name: "Chocolat", description: "[Description courte]", price: "6000Ar", image: "assets/images/menu-glace-item-1.jpg" },
      { name: "Citron meringue", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-2.jpg" },
      { name: "Kinder", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-3.jpg" },
      { name: "Yaourt fraise", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-4.jpg" },
      { name: "Yaourt abricot", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-5.jpg" },
      { name: "Chocolat rocher", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-6.jpg" },
      { name: "Oreo", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-7.jpg" },
      { name: "Bubble gum", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-8.jpg" },
      { name: "Menthe choco", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-9.jpg" },
      { name: "Coco", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-10.jpg" },
      { name: "Vanille", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-11.jpg" },
      { name: "Arc en ciel", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-12.jpg" },
      { name: "Café", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-13.jpg" },
      { name: "Capuccino", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-14.jpg" },
      { name: "Cookie", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-15.jpg" },
      { name: "Crème brulée", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-16.jpg" },
      { name: "Fruit de bois", description: "[Description courte]", price: "[Prix] €", image: "assets/images/menu-glace-item-17.jpg" },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    description: "Boissons chaudes, fraîches et cave.",
    coverImage: "assets/images/menu-boissons.jpg",
    items: [
      { name: "[Boisson]", description: "[Description courte]", price: "[Prix] €" },
      { name: "[Boisson]", description: "[Description courte]", price: "[Prix] €" },
      { name: "[Boisson]", description: "[Description courte]", price: "[Prix] €" },
    ],
  },
];

/**
 * GALERIE PHOTOS — page Photos.
 * Ajoutez / retirez librement des entrées ; la mise en page
 * s'adapte automatiquement (grille asymétrique en colonnes).
 */
const GALLERY = [
  { src: "assets/images/gallery-01.jpg", alt: "Plat du restaurant", category: "Plats" },
  { src: "assets/images/gallery-02.jpg", alt: "Glace artisanale", category: "Glaces" },
  { src: "assets/images/gallery-03.jpg", alt: "Dessert glacé", category: "Desserts" },
  { src: "assets/images/gallery-12.png", alt: "Intérieur du restaurant", category: "Intérieur" },
  { src: "assets/images/gallery-13.jpeg", alt: "Terrasse extérieure", category: "Extérieur" },
  { src: "assets/images/gallery-06.jpg", alt: "Détail de dressage", category: "Détails" },
  { src: "assets/images/gallery-07.jpg", alt: "Ambiance en salle", category: "Ambiance" },
  { src: "assets/images/gallery-08.jpg", alt: "Moment de convivialité", category: "Convivialité" },
  { src: "assets/images/gallery-09.jpg", alt: "En cuisine", category: "Cuisine" },
  { src: "assets/images/gallery-11.jpg", alt: "Vitrine de la glacerie", category: "Glacerie" },
  { src: "assets/images/gallery-10.jpg", alt: "Vitrine de la glacerie", category: "Glacerie" },
  { src: "assets/images/gallery-14.jpeg", alt: "Vitrine de la glacerie", category: "Glacerie" },
];

/**
 * CONTACT / INFORMATIONS PRATIQUES
 * Ne jamais inventer d'adresse, téléphone, horaires ou réseaux :
 * garder les placeholders jusqu'à réception des vraies données.
 */
const CONTACT = {
  address: {
    lines: ["Village touristique", "401, Majunga"],
  },
  phone: "[Téléphone à compléter]",
  email: "ainarakotondrazaka@gmail.com",
  hours: [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", hours: "16:00-21:00" },
    { day: "Mercredi", hours: "16:00-21:00" },
    { day: "Jeudi", hours: "16:00-21:00" },
    { day: "Vendredi", hours: "16:00-21:00" },
    { day: "Samedi", hours: "16:00-21:00" },
    { day: "Dimanche", hours: "16:00-21:00" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "https://web.facebook.com/Lo.Seguent.Madagascar" },
  ],
  mapImage: "assets/images/map-placeholder.jpg",
  reservation: {
    title: "Réservation",
    text: "La réservation en ligne sera bientôt disponible. En attendant, contactez-nous par téléphone.",
  },
};
