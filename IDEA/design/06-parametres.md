# Page Paramètres — UI Design

## 1. Vue d'ensemble
Page de configuration de l'application. Permet à l'élève de personnaliser son expérience : thème, notifications, langue, accessibilité, et compte.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Paramètres"                                     │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── Sidebar paramètres (desktop) ──┐  ┌─────────────┐ │
│  │                                    │  │             │ │
│  │  🎨 Apparence                     │  │  (Contenu   │ │
│  │  🔔 Notifications                 │  │   de la     │ │
│  │  🌐 Langue & Région               │  │   section   │ │
│  │  ♿ Accessibilité                  │  │   active)   │ │
│  │  🔒 Confidentialité               │  │             │ │
│  │  📱 Appareils & Session           │  │             │ │
│  │  ℹ️ À propos                       │  │             │ │
│  │  🚪 Déconnexion                   │  │             │ │
│  │                                    │  │             │ │
│  └────────────────────────────────────┘  └─────────────┘ │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

**Layout** :
- **Desktop** : sidebar gauche (240px) + contenu à droite
- **Mobile** : liste verticale de sections, click = navigation vers la sous-page

---

## 3. Section "Apparence"

### Thème
```
┌──────────────────────────────────────────────────────────┐
│  🎨 Apparence                                             │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Thème                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐               │
│  │ ☀️       │  │ 🌙       │  │ 💻       │               │
│  │  Clair   │  │  Sombre  │  │  Système │               │
│  │          │  │          │  │          │               │
│  │ [preview]│  │ [preview]│  │ [preview]│               │
│  └──────────┘  └──────────┘  └──────────┘               │
│                                                            │
│  Couleur d'accentuation                                   │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐             │
│  │ 🔵 │ │ 🟣 │ │ 🔴 │ │ 🟢 │ │ 🟠 │ │ ⚫ │             │
│  │Indigo│ │Violet│ │Rouge│ │Vert │ │Orange│ │Noir│             │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘             │
│                                                            │
│  Taille de police                                         │
│  ───●──────────────────  Petit                            │
│  ───────●──────────────  Normal (défaut)                  │
│  ────────────●─────────  Grand                            │
│  ────────────────●─────  Très grand                       │
│                                                            │
│  Densité de l'interface                                   │
│  ○ Compact  ● Confortable  ○ Spacieux                     │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Options détaillées
- **Thème** : 3 options (Clair / Sombre / Système)
  - Preview miniature de chaque thème
  - Transition animée lors du changement
- **Couleur d'accentuation** : 6 choix de couleur primaire
  - Preview en temps réel sur les boutons et éléments actifs
- **Taille de police** : slider 4 niveaux
- **Densité** : Compact / Confortable / Spacieux (affecte l'espacement)

---

## 4. Section "Notifications"

```
┌──────────────────────────────────────────────────────────┐
│  🔔 Notifications                                         │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Notifications push                                       │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Nouveaux messages              [Toggle: ON]       │  │
│  │  Nouveaux documents             [Toggle: ON]       │  │
│  │  Rappels de devoirs             [Toggle: ON]       │  │
│  │  Rappels de révisions           [Toggle: ON]       │  │
│  │  Résultats de notes             [Toggle: ON]       │  │
│  │  Changements d'emploi du temps  [Toggle: OFF]      │  │
│  │  Messages de la mascotte        [Toggle: ON]       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  Notifications dans l'app                                 │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Afficher le badge compteur     [Toggle: ON]       │  │
│  │  Son des notifications          [Toggle: OFF]      │  │
│  │  Vibrations (mobile)            [Toggle: ON]       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  Rappels de devoirs                                       │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Délai de rappel : [1 jour avant ▾]               │  │
│  │  [x] La veille à 18h                              │  │
│  │  [ ] Le matin même à 7h                           │  │
│  │  [x] 2 jours avant                                │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  Heures de silence                                        │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Activer les heures de silence  [Toggle: ON]       │  │
│  │  De : [22:00]  À : [07:00]                        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Options détaillées
- **Toggles** : chaque type de notification activable/désactivable indépendamment
- **Rappels de devoirs** : configuration du délai et des horaires
- **Heures de silence** : plage horaire sans notifications (pour la nuit)
- **Son et vibration** : contrôles séparés

---

## 5. Section "Langue & Région"

```
┌──────────────────────────────────────────────────────────┐
│  🌐 Langue & Région                                       │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Langue de l'interface                                    │
│  [Français ▾]                                             │
│                                                            │
│  Fuseau horaire                                           │
│  [Europe/Paris (UTC+1) ▾]                                │
│                                                            │
│  Format de date                                           │
│  ○ JJ/MM/AAAA  ○ MM/JJ/AAAA  ○ AAAA-MM-JJ              │
│                                                            │
│  Premier jour de la semaine                               │
│  ○ Lundi  ○ Dimanche                                      │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 6. Section "Accessibilité"

```
┌──────────────────────────────────────────────────────────┐
│  ♿ Accessibilité                                          │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Contraste élevé                      [Toggle: OFF]       │
│  Réduire les animations               [Toggle: OFF]       │
│  Mode daltonien                       [▾ Aucun]           │
│  Lecteur d'écran optimisé             [Toggle: OFF]       │
│  Taille de la mascotte                [Normal ▾]          │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 7. Section "Confidentialité"

```
┌──────────────────────────────────────────────────────────┐
│  🔒 Confidentialité                                       │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Profil visible par les autres élèves  [Toggle: ON]       │
│  Afficher dans les classements         [Toggle: ON]       │
│  Autoriser les messages personnels     [Toggle: ON]       │
│  Afficher le statut en ligne           [Toggle: ON]       │
│                                                            │
│  Données                                                  │
│  [📥 Exporter mes données]                                │
│  [🗑️ Supprimer mon compte]                                │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 8. Section "Appareils & Session"

```
┌──────────────────────────────────────────────────────────┐
│  📱 Appareils & Session                                   │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Appareil actuel                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  💻 Chrome — Windows 11              (Cet appareil)│  │
│  │  Dernière connexion : maintenant                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  Autres appareils                                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │  📱 iPhone 15 — Safari                             │  │
│  │  Dernière connexion : il y a 2h                    │  │
│  │  [Déconnecter]                                     │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  [Déconnecter tous les autres appareils]                  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 9. Section "À propos"

```
┌──────────────────────────────────────────────────────────┐
│  ℹ️ À propos                                               │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Version de l'application : 1.0.0                         │
│  Nom du code : "Rentrée"                                   │
│                                                            │
│  📋 Conditions d'utilisation                              │
│  🔒 Politique de confidentialité                          │
│  ❓ Centre d'aide                                          │
│  📧 Contacter le support                                  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 10. Bouton "Déconnexion"
- En bas de la sidebar
- Couleur rouge
- Confirmation modal : "Es-tu sûr de vouloir te déconnecter ?"
- Boutons : [Rester connecté] [Se déconnecter]

---

## 11. Responsive
- **Mobile** : sections en liste verticale, chaque section = une sous-page avec retour
- **Tablet** : sidebar réduite (icônes), contenu pleine largeur
- **Desktop** : sidebar 240px + contenu 720px centré
