# Page Profil — UI Design

## 1. Vue d'ensemble
Page personnelle de l'élève. Affiche les informations de profil, les statistiques rapides, les badges et récompenses, et permet l'accès aux paramètres.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│                                                            │
│  ┌──────────────── HEADER PROFIL ─────────────────────┐  │
│  │                                                    │  │
│  │         [Photo de profil]                          │  │
│  │         ─── 56px ───                               │  │
│  │                                                    │  │
│  │         Ahmed K.                                   │  │
│  │         ahmed.k@ecole.fr                           │  │
│  │         Classe : 3ème A                            │  │
│  │         N° élève : #2024-0156                      │  │
│  │                                                    │  │
│  │         [Modifier le profil]                       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌──────── STATS RAPIDES ─────────────────────────────┐  │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐   │  │
│  │  │ Moy.   │  │ Rang   │  │ Streak │  │ Notes  │   │  │
│  │  │ 14.2   │  │ 5/32   │  │ 12 🔥  │  │ 24     │   │  │
│  │  └────────┘  └────────┘  └────────┘  └────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌──────── BADGES & RÉCOMPENSES ──────────────────────┐  │
│  │  🏅 Badges obtenus                                 │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │  │
│  │  │ 🌟   │ │ 📚   │ │ 🔥   │ │ 🏆   │ │ 💎   │    │  │
│  │  │Premier│ │Lecteur│ │Streak│ │Top 5 │ │Perfec│    │  │
│  │  │ note  │ │      │ │7j    │ │      │ │ tion  │    │  │
│  │  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘    │  │
│  │                                                    │  │
│  │  🔒 Badges à débloquer                             │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐                       │  │
│  │  │ 🔒   │ │ 🔒   │ │ 🔒   │                       │  │
│  │  │Streak│ │Top 1 │ │Master│                       │  │
│  │  │30j   │ │      │ │      │                       │  │
│  │  └──────┘ └──────┘ └──────┘                       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌──────── MATIÈRES ──────────────────────────────────┐  │
│  │  📐 Maths    ████████████░░ 15.2                   │  │
│  │  🔬 Physique ██████████░░░░ 13.0                   │  │
│  │  📚 Français ██████████████ 16.5                   │  │
│  │  🌍 Histoire ████████░░░░░░ 11.0                   │  │
│  │  🇬🇧 Anglais  ███████████░░░ 14.0                   │  │
│  │  🧪 SVT      ████████████████ 17.0                 │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌──────── ACTIVITÉ RÉCENTE ──────────────────────────┐  │
│  │  📝 A rendu le DM Maths n°4        Il y a 2h       │  │
│  │  📖 Révision Physique terminée      Il y a 5h       │  │
│  │  📄 A téléchargé Cours Ch.3        Hier            │  │
│  │  🏅 Badge "Streak 7 jours" obtenu  Il y a 3j       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Header de profil

### Photo de profil
- **Par défaut** : avatar avec initiales (fond indigo, texte blanc)
- **Personnalisée** : photo uploadée par l'élève
- **Forme** : circulaire, 80px, bordure 3px indigo
- **Click** : ouvre le modal de modification

### Informations affichées
- **Nom complet** : Prénom + Nom, Inter Bold 24px
- **Email scolaire** : texte secondaire, avec icône email
- **Classe** : badge indigo "3ème A"
- **N° élève** : texte mono, petit

### Bouton "Modifier le profil"
- Ouvre un modal avec les champs éditables :
  - Photo de profil (upload)
  - Prénom (non modifiable)
  - Nom (non modifiable)
  - Email (non modifiable)
  - Bio / Status (optionnel, 160 caractères max)
  - Nom de la mascotte (personnalisation)

---

## 4. Stats rapides
Mini-cards identiques à celles de la page Statistiques, mais en version condensée. Click sur une card = navigation vers la page Statistiques.

---

## 5. Badges & Récompenses

### Système de badges
Badges obtenables par l'élève selon ses actions et performances :

| Badge | Condition | Icône |
|-------|-----------|-------|
| Première note | Obtenir sa première note | 🌟 |
| Lecteur | Télécharger 10 ressources | 📚 |
| Streak 7j | 7 jours consécutifs d'activité | 🔥 |
| Streak 30j | 30 jours consécutifs | 🔥💎 |
| Top 5 | Être dans le top 5 du classement | 🏆 |
| Top 1 | Être premier du classement | 🏆👑 |
| Perfection | Obtenir 20/20 | 💎 |
| Social | Rejoindre 5 groupes de matière | 💬 |
| Organisé | Planifier 10 révisions | 📋 |
| Ponctuel | Rendre 10 devoirs à temps | ⏰ |
| Polyvalent | Moyenne > 14 dans toutes les matières | 🎯 |
| Comeback | Progresser de 5+ rangs en un mois | 📈 |

### Affichage
- **Badges obtenus** : affichés en couleur, avec nom et condition
- **Badges à débloquer** : grisés avec cadenas, condition visible au hover
- **Progression** : barre de progression pour les badges en cours
- **Click sur un badge** : modal avec détail, date d'obtention, stats associées

---

## 6. Section Matières
Barres de performance condensées (identiques aux stats). Click = navigation vers le détail de la matière dans Statistiques.

---

## 7. Activité récente
Timeline verticale des dernières actions de l'élève :
- Notes obtenues
- Devoirs rendus
- Révisions effectuées
- Documents téléchargés
- Badges obtenus
- Messages importants

**Format** : icône + description + timestamp relatif
**Limite** : 10 dernières actions, bouton "Voir tout" (future feature)

---

## 8. Modal "Modifier le profil"

```
┌──────────────────────────────────────────┐
│  Modifier le profil                  [X] │
├──────────────────────────────────────────┤
│                                          │
│         [📷 Changer la photo]            │
│         ┌────────┐                       │
│         │  Photo  │                       │
│         │  80px   │                       │
│         └────────┘                       │
│                                          │
│  Prénom    : Ahmed        🔒             │
│  Nom       : K.           🔒             │
│  Email     : ahmed@ecole  🔒             │
│  Classe    : 3ème A       🔒             │
│                                          │
│  Bio / Status :                          │
│  ┌──────────────────────────────────┐    │
│  │ "Motivé à fond cette année !"    │    │
│  └──────────────────────────────────┘    │
│  32 / 160 caractères                     │
│                                          │
│  Nom de la mascotte :                    │
│  ┌──────────────────────────────────┐    │
│  │ Scolio                           │    │
│  └──────────────────────────────────┘    │
│                                          │
│           [Annuler]  [Sauvegarder]       │
└──────────────────────────────────────────┘
```

**Champs verrouillés (🔒)** : informations gérées par l'administration scolaire
**Champs éditables** : Bio, photo, nom de la mascotte

---

## 9. États et cas limites

### Profil sans photo
- Avatar par défaut avec initiales colorées
- Fond dégradé indigo-violet

### Aucun badge
- "Pas encore de badges. Continue comme ça pour en débloquer !"
- Mascotte encourageante

### Responsive
- **Mobile** : header centré, stats en 2x2, badges en scroll horizontal
- **Tablet** : header centré, stats en 4 en ligne, badges en grille 3 colonnes
- **Desktop** : header avec photo à gauche + infos à droite, stats en 4, badges en grille 5 colonnes

---

## 10. Interactions avec la mascotte
- **Nouveau badge** : Scolio en célébration avec le badge "Nouveau badge débloqué : [Nom] !"
- **Profil complété** : Scolio avec un miroir "Ton profil est parfait !"
- **Record de streak** : Scolio avec un feu "Nouveau record de streak !"
