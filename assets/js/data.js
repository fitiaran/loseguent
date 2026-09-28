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
    tagline: "Un instant de plaisir, à table.",
    ctaLabel: "Découvrir le menu",
    ctaHref: "menu.html",
  },

  intro: {
    eyebrow: "Bienvenue chez Lo següent",
    text: "Ici, chaque repas est une invitation à ralentir : une cuisine généreuse préparée avec soin, des glaces artisanales pour prolonger le plaisir, et une ambiance chaleureuse pensée pour les longues tablées d'été comme pour les soirées entre amis.",
  },

  restaurant: {
    tag: "Restaurant",
    title: "Une cuisine généreuse et soignée",
    text: "Une cuisine italienne faite maison, préparée avec des produits frais et artisanaux. Des plats savoureux, raffinés et soigneusement présentés.",
    image: "assets/images/restaurant-section.jpg",
    ctaLabel: "Voir le menu du restaurant",
    ctaHref: "menu.html#restaurant",
  },

  glacerie: {
    tag: "Glacerie",
    title: "Des glaces artisanales, pleines de fraîcheur",
    text: "Plus de 17 parfums artisanaux à découvrir, élaborés avec des ingrédients frais pour des glaces onctueuses, gourmandes et pleines de saveurs.",
    image: "assets/images/gallery-10.jpg",
    ctaLabel: "Voir les parfums",
    ctaHref: "menu.html#glaces",
  },

  ambiance: {
    eyebrow: "L'expérience",
    title: "Se retrouver, prendre le temps",
    text: "En famille ou entre amis, en terrasse ou en salle, lo següent est pensé comme un lieu où l'on prend le temps de bien manger, de déguster une glace et de profiter du moment.",
    images: [
      { src: "assets/images/ambiance-1.jpg", alt: "Moment de convivialité en terrasse" },
      { src: "assets/images/ambiance-2.jpg", alt: "Dessert glacé servi à table" },
    ],
    ctaLabel: "Voir toutes les photos",
    ctaHref: "photos.html",
  },

  ctaFinal: {
    title: "Envie de nous rendre visite ?",
    text: "Découvrez notre carte, parcourez nos photos ou venez directement profiter d'un moment chez lo següent.",
    actions: [
      { label: "Voir le Menu", href: "menu.html", style: "solid" },
      { label: "Voir les Photos", href: "photos.html", style: "outline" },
      { label: "Nous trouver", href: "contact.html", style: "outline" },
    ],
  },

  footer: {
    blurb: "Restaurant & Glacerie — une cuisine généreuse et des glaces artisanales dans une ambiance chaleureuse et ensoleillée.",
    hours: [
      { day: "lundi", hours: "fermé" },
      { day: "mardi – dimanche", hours: "16h-21h" },
    ],
    address: "Majunga, village touristique",
    phone: "[Téléphone à compléter]",
    email: "ainarakotondrazaka14@gmail.com",
    social: [
      { label: "Instagram : Lo_seguent_madagascar", href: "https://www.facebook.com/Lo.Seguent.Madagascar?_rdc=1&_rdr#" },
      { label: "Facebook : Lo següent madagascar", href: "https://www.instagram.com/lo_seguent_madagascar" },
    ],
    copyright: "© 2026 Lo següent. Tous droits réservés.",
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
    id: "Divers",
    label: "Divers",
    description: "Entrées, plats et suggestions de saison.",
    coverImage: "assets/images/menu-restaurant.jpg",
    items: [
      { name: "Gaufre aux fruits de mer", description: "", price: "16.000Ar" },
      { name: "Salade de fruits de mer", description: "", price: "16.000Ar" },
      { name: "Soupe de riz", description: "", price: "17.000Ar" },
      { name: "Soupe aux nouilles", description: "", price: "17.000Ar" },
      { name: "Nouilles sautées", description: "", price: "17.000Ar" },
      { name: "Hamburger poulet nuggets", description: "", price: "17.000Ar" },
      { name: "Nuggets poulet", description: "", price: "16.000Ar" },
    ],
  },
   {
    id: "Pizza",
    label: "Pizza",
    description: "Découvrez nos pizzas",
    coverImage: "assets/images/menu-pizza.jpg",
    items: [
      { name: "Margherita", description: "Sauce tomate, mozzarella, feuille de basilic", price: "23.000Ar" },
      { name: "04 fromages", description: "Crème, mozzarella, fromage bleu, olive", price: "31.000Ar" },
      { name: "Végétarienne", description: "Sauce tomate, fromage, courgette, poivron, oignon, olive, feuille de basilic, chou-fleur. Accompagnement salade", price: "25.000Ar" },
      { name: "Poulet", description: "Sauce tomate, fromage, courgette, poivron, champignon, oignon, tomate", price: "27.000Ar" },
      { name: "Viande de zébu", description: "Sauce tomate, viande de zébu, fromage, poivron, oignon, tomate, olive, feuille de basilic. Accompagnement salade", price: "27.000Ar" },
      { name: "Poulet fumé", description: "Sauce tomate, fromage, poulet fumé, champignon, feuille de basilic. Accompagnement salade", price: "29.000Ar" },
      { name: "Fruits de mer", description: "Crème, fromage, filet de poisson, crevettes, calmar, oignon. Accompagnement salade", price: "29.000Ar" },
      { name: "Calzone", description: "Crème, délice de dinde, fromage, champignon. Accompagnement salade", price: "27.000Ar" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    description: "Douceurs et desserts faits maison.",
    coverImage: "assets/images/menu-desserts.jpg",
    items: [
      { name: "Gaufre au nutella", description: "", price: "15.000Ar" },
      { name: "Pancakes glacés", description: "", price: "18.000Ar" },
    ],
  },
  {
    id: "glaces",
    label: "Glaces",
    description: "Parfums artisanels, boules et coupes glacées.",
    coverImage: "assets/images/menu-glaces.jpg",
    items: [
      { name: "Chocolat", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-1.jpg" },
      { name: "Citron meringue", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-2.jpg" },
      { name: "Kinder", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-3.jpg" },
      { name: "Yaourt fraise", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-4.jpg" },
      { name: "Yaourt abricot", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-5.jpg" },
      { name: "Chocolat rocher", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-6.jpg" },
      { name: "Oreo", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-7.jpg" },
      { name: "Bubble gum", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-8.jpg" },
      { name: "Menthe choco", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-9.jpg" },
      { name: "Coco", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-10.jpg" },
      { name: "Vanille", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-11.jpg" },
      { name: "Arc en ciel", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-12.jpg" },
      { name: "Café", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-13.jpg" },
      { name: "Capuccino", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-14.jpg" },
      { name: "Cookie", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-15.jpg" },
      { name: "Crème brulée", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-16.jpg" },
      { name: "Fruit de bois", description: "", price: "[Prix] Ar", image: "assets/images/menu-glace-item-17.jpg" },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    description: "Boissons chaudes, fraîches.",
    coverImage: "assets/images/menu-boissons.jpg",
    items: [
      { name: "Jus de fruits naturel", description: "", price: "5.000Ar" },
      { name: "Jus de fruits naturel carafe 1,3L", description: "", price: "20.000Ar" },
      { name: "Milkshake", description: "", price: "15.000Ar" },
      { name: "Boisson star PM", description: "", price: "4.000Ar" },
      { name: "Boisson star GM", description: "", price: "7.000Ar" },
      { name: "Eau vive PM", description: "", price: "3.000Ar" },
      { name: "Eau vive GM", description: "", price: "6.000Ar" },
    ],
  },
];

/**
 * GALERIE PHOTOS — page Photos.
 * Ajoutez / retirez librement des entrées ; la mise en page
 * s'adapte automatiquement (grille asymétrique en colonnes).
 */
const GALLERY = [
  { src: "assets/images/gallery-01.jpg", category: "Plats" },
  { src: "assets/images/gallery-02.jpg",  category: "Glaces" },
  { src: "assets/images/gallery-03.jpg", category: "Desserts" },
  { src: "assets/images/gallery-04.jpg", category: "Desserts" },
  { src: "assets/images/gallery-06.jpg", category: "Détails" },
  { src: "assets/images/gallery-07.jpg", category: "Ambiance" },
  { src: "assets/images/gallery-08.jpg", category: "Convivialité" },
  { src: "assets/images/gallery-09.jpg", category: "Cuisine" },
  { src: "assets/images/gallery-10.jpg", category: "Glacerie" },
  { src: "assets/images/gallery-11.jpg", category: "Glacerie" },
  { src: "assets/images/gallery-12.png", category: "Intérieur" },
  { src: "assets/images/gallery-13.jpeg", category: "Extérieur" },
  { src: "assets/images/gallery-14.jpeg", category: "Extérieur" },
  { src: "assets/images/gallery-15.jpeg", category: "Extérieur" },
  { src: "assets/images/gallery-16.jpeg", category: "Extérieur" },
  { src: "assets/images/gallery-17.jpeg", category: "Extérieur" },
  { src: "assets/images/ambiance-2.jpg", category: "Glacerie" },
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
