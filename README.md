# L'Enxaneta — Site vitrine

Site statique (HTML / CSS / JS, aucune installation ni build requis).

## Voir le site

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local
(recommandé, pour que les polices et le comportement soient identiques à la production) :

```bash
# depuis le dossier lenxaneta/
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Modifier le contenu

**Toutes les données modifiables sont centralisées dans `assets/js/data.js`** :

- `SITE` → nom, accroche, textes de présentation, textes Restaurant / Glacerie,
  texte d'ambiance, footer (horaires courtes, adresse, téléphone, email, réseaux).
- `MENU` → catégories, plats, descriptions, prix, photo (optionnelle) — page Menu.
- `GALLERY` → toutes les photos de la page Photos (chemin, texte alternatif, catégorie).
- `CONTACT` → adresse complète, horaires détaillés, téléphone, email, réseaux,
  image de carte, texte de réservation — page Contact.

Il n'y a rien à toucher dans les fichiers `.html` pour changer un texte, un prix
ou une photo : tout part de `data.js`.

## Remplacer les photos

Toutes les images sont dans `assets/images/`. Ce sont actuellement des **placeholders**
(fonds dégradés avec une étiquette de description) — aucune vraie photo n'a été inventée.

Pour remplacer une image :
1. Préparez votre photo au même ratio si possible (portrait / paysage / carré selon le fichier).
2. Remplacez le fichier en gardant **exactement le même nom** (ex. `hero-lenxaneta.jpg`),
   ou changez le chemin dans `data.js` si vous préférez un autre nom de fichier.

## Remplacer le logo

Le logo est un placeholder SVG : `assets/images/logo-placeholder.svg`.
Remplacez ce fichier par votre logo réel (gardez le nom, ou mettez à jour le champ
`logo` dans `SITE` dans `data.js`). Il apparaît dans la navbar, le hero et le footer.

## Informations à compléter

Les champs suivants contiennent volontairement des placeholders entre crochets
(`[ ]`) car les vraies informations n'ont pas été fournies :
- Adresse, téléphone, email, horaires (`SITE.footer` et `CONTACT` dans `data.js`)
- Réseaux sociaux (liens `#` à remplacer par les vraies URLs)
- Plats, parfums de glace et prix (`MENU` dans `data.js`)
- Textes de présentation Restaurant / Glacerie (`SITE.restaurant.text`, `SITE.glacerie.text`)

## Structure du projet

```text
lenxaneta/
├── index.html / menu.html / photos.html / contact.html
├── assets/
│   ├── css/       base.css, components.css, animations.css
│   │               (chaque règle porte ses propres valeurs — pas de
│   │               variables CSS partagées ; pour changer une couleur,
│   │               une taille ou un espacement, on modifie directement
│   │               la règle concernée dans le fichier correspondant)
│   ├── js/        data.js (contenu), layout.js (navbar/footer),
│   │               main.js (animations), home-render.js, menu-render.js,
│   │               gallery-render.js, contact-render.js
│   └── images/    toutes les photos (placeholders à remplacer)
```

## Déploiement

Le site est 100 % statique : il peut être déposé tel quel sur n'importe quel
hébergement (Netlify, Vercel, OVH, o2switch, GitHub Pages, etc.), sans build.
