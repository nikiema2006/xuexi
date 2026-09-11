# Architecture UI Globale — Application Scolaire (Version Élèves)

## 1. Concept Général

Application de tracking de performance scolaire pour élèves, avec une approche gamifiée portée par une mascotte interactive (style Duolingo). L'interface se veut moderne, motivante et intuitive.

### Philosophie de design
- **Gamification légère** : la mascotte encourage, félicite, motive
- **Clarté** : un élève doit trouver l'info en < 2 clics
- **Responsive** : conçu mobile-first, adaptable desktop/tablet
- **Accessible** : contrastes AA minimum, tailles de police ajustables

---

## 2. Design System

### Palette de couleurs
| Rôle | Couleur | Usage |
|------|---------|-------|
| Primaire | `#4F46E5` (Indigo) | Boutons principaux, liens, éléments actifs |
| Secondaire | `#7C3AED` (Violet) | Accents, badges, éléments gamifiés |
| Succès | `#10B981` (Emerald) | Bonnes notes, objectifs atteints, validations |
| Alerte | `#F59E0B` (Amber) | Avertissements, rappels, devoirs proches |
| Erreur | `#EF4444` (Red) | Erreurs, notes critiques, échéances dépassées |
| Background | `#F9FAFB` (Gray-50) | Fond général |
| Surface | `#FFFFFF` | Cards, modals, panels |
| Text Primary | `#111827` (Gray-900) | Titres, contenu principal |
| Text Secondary | `#6B7280` (Gray-500) | Sous-titres, métadonnées |

### Thèmes
- **Light** (défaut) : fond clair, surfaces blanches
- **Dark** : fond `#111827`, surfaces `#1F2937`, texte `#F9FAFB`
- Transition fluide entre les thèmes (animation 200ms)

### Typographie
- **Titres** : Inter Bold / SemiBold
- **Corps** : Inter Regular / Medium
- **Mono** : JetBrains Mono (notes, statistiques chiffrées)
- Échelle : 12px → 14px → 16px → 20px → 24px → 32px → 40px

### Espacement
- Unité de base : 4px
- Espacements courants : 8, 12, 16, 24, 32, 48px

### Composants récurrents
- **Cards** : border-radius 12px, shadow-sm, padding 16-24px
- **Boutons** : border-radius 8px, padding 10px 20px, transition 150ms
- **Badges** : border-radius full, padding 2px 10px, font-size 12px
- **Inputs** : border-radius 8px, border 1px solid gray-300, focus ring indigo
- **Avatars** : circulaires, tailles 24/32/40/56px
- **Tabs** : underline active, couleur primaire
- **Tooltips** : fond gray-800, texte blanc, border-radius 6px

---

## 3. Structure de Navigation

### Layout principal
```
┌─────────────────────────────────────────────────┐
│  TopBar (Logo + Search + Notifications + Avatar)│
├────────┬────────────────────────────────────────┤
│        │                                        │
│  Side  │          Content Area                  │
│  Nav   │          (page courante)               │
│        │                                        │
│        │                                        │
│        │                                        │
├────────┴────────────────────────────────────────┤
│  (Mascotte flottante en bas à droite)           │
└─────────────────────────────────────────────────┘
```

### Sidebar Navigation (Desktop/Tablet)
Items de navigation avec icônes + labels :
1. **Accueil** — Dashboard résumé (landing après login)
2. **Messagerie** — Conversations et groupes
3. **Ressources** — PDFs, devoirs, documents
4. **Statistiques** — Performance et classements
5. **Emploi du temps** — Planning et révisions
6. **Profil** — Infos personnelles

Icônes : Lucide Icons (style outline, cohérent)

### Bottom Navigation (Mobile)
5 items maximum visibles :
- Accueil | Messagerie | Ressources | Statistiques | Menu (→ profil, emploi du temps, paramètres)

### TopBar
- **Gauche** : Logo de l'app + nom
- **Centre** : Barre de recherche globale (matières, profs, messages)
- **Droite** :
  - Cloche de notifications (badge compteur)
  - Avatar de l'élève (menu dropdown : profil, paramètres, déconnexion)

---

## 4. Mascotte — Système Global

### Identité
- **Nom** : "Scolio" (ou personnalisable par l'élève)
- **Apparence** : Petit personnage rond, expressif, couleurs indigo/violet
- **Style** : Illustration vectorielle, animations fluides

### Emplacements dans l'app
- **Flottant** : en bas à droite, petit (64x64px), cliquable
- **Contextuel** : apparaît dans des moments clés (voir doc mascotte)

### États de la mascotte
| État | Déclencheur | Animation |
|------|-------------|-----------|
| Neutre | Par défaut | Respire doucement, cligne des yeux |
| Content | Bonne note, objectif atteint | Saute de joie, confettis |
| Encourageant | Note moyenne, streak en cours | Sourire, pouce levé |
| Inquiet | Baisse de performance, streak perdu | Air préoccupé, petit nuage |
| Célébration | Record personnel, top ranking | Danse, étoiles, feux d'artifice |
| Guide | Nouvelle fonctionnalité | Pointe du doigt, bulle d'aide |

---

## 5. Patterns UI Communs

### Système de notifications in-app
- **Toast** : apparaît en haut à droite, auto-dismiss 5s
- **Badge** : compteur rouge sur la cloche
- **Drawer** : panneau latéral droit avec liste de notifications

### États de chargement
- **Skeleton screens** : formes grises animées (pulse) pour les listes
- **Spinner** : cercle indigo tournant pour les actions
- **Progress bar** : barre de progression pour les uploads

### États vides
- Illustration de la mascotte + message contextuel
- Ex: "Aucun message pour l'instant ! Scolio t'accompagne quand même 🎒"

### Modals
- Overlay semi-transparent (black/50)
- Card centrée, max-width 480px
- Animation : fade-in + scale

---

## 6. Responsive Breakpoints
| Breakpoint | Largeur | Adaptation |
|-----------|---------|------------|
| Mobile | < 640px | Bottom nav, sidebar masquée, layout 1 colonne |
| Tablet | 640px - 1024px | Sidebar rétractable, layout adaptable |
| Desktop | > 1024px | Sidebar fixe, layout multi-colonnes |

---

## 7. Transitions & Animations
- **Page transitions** : fade 200ms
- **Hover** : scale 1.02 + shadow augmentée, 150ms
- **Click** : scale 0.98, 100ms
- **Drawer/Modal** : slide + fade, 250ms ease-out
- **Mascotte** : animations Lottie, 300-500ms
