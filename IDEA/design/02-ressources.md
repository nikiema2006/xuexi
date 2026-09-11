# Page Ressources — UI Design

## 1. Vue d'ensemble
Page centralisée de tous les documents partagés par les professeurs : PDFs de cours, exercices, devoirs, corrigés. Organisation par matière avec filtrage et recherche.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Ressources" + [Toggle Vue: Grille/Liste]       │
├──────────────────────────────────────────────────────────┤
│  Barre de filtre                                           │
│  [Toutes] [Maths] [Physique] [Français] [...] [+ Filtre] │
│  Type: [Tous ▾]  Statut: [Tous ▾]  Tri: [Récent ▾]     │
├──────────────────────────────────────────────────────────┤
│  Barre de recherche                                        │
│  🔍 Rechercher un document...                             │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Section: 📐 Mathématiques — M. Dupont                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 📄       │ │ 📄       │ │ 📄       │ │ 📄       │    │
│  │ Cours    │ │ Exo      │ │ Devoir   │ │ Corrigé  │    │
│  │ Ch.3     │ │ Fonctions│ │ DM n°4   │ │ DM n°3   │    │
│  │ 2.1 MB   │ │ 850 KB   │ │ 1.5 MB   │ │ 980 KB   │    │
│  │ 10 Sep   │ │ 9 Sep    │ │ 8 Sep    │ │ 5 Sep    │    │
│  │ [⬇] [⋮] │ │ [⬇] [⋮] │ │ [⬇] [⋮] │ │ [⬇] [⋮] │    │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
│                                                            │
│  Section: 🔬 Physique — Mme. Benali                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                  │
│  │ 📄       │ │ 📄       │ │ 📄       │                  │
│  │ TP       │ │ Cours    │ │ Exo      │                  │
│  │ Chimie   │ │ Atomes   │ │ Forces   │                  │
│  │ 3.2 MB   │ │ 1.8 MB   │ │ 620 KB   │                  │
│  │ 11 Sep   │ │ 7 Sep    │ │ 6 Sep    │                  │
│  │ [⬇] [⋮] │ │ [⬇] [⋮] │ │ [⬇] [⋮] │                  │
│  └──────────┘ └──────────┘ └──────────┘                  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Barre de filtres

### Filtres par matière (pills horizontaux)
- Pills scrollables horizontalement si beaucoup de matières
- **Toutes** : sélectionné par défaut, fond indigo, texte blanc
- Chaque matière : fond gray-100, texte gray-700, icône de la matière
- Click = filtre les ressources de cette matière
- Multi-sélection possible (chips avec X pour retirer)

### Filtres avancés (dropdowns)
- **Type de document** : Tous / Cours / Exercice / Devoir / Corrigé / TP
- **Statut** : Tous / Non rendu (devoirs) / À venir / Archivé
- **Tri** : Plus récent / Plus ancien / Nom A-Z / Taille

### Barre de recherche
- Recherche full-text dans le nom des documents
- Recherche dans le nom de la matière
- Autocomplete avec suggestions

---

## 4. Card de ressource (Vue Grille)

```
┌────────────────────────┐
│  📄                    │  ← Icône type (PDF, IMG, etc.)
│                        │
│  Cours Chapitre 3      │  ← Nom du document (max 2 lignes, tronqué)
│  ─────────             │
│  📐 Mathématiques      │  ← Matière (badge coloré)
│  📅 10 Sep 2026        │  ← Date d'upload
│  💾 2.1 MB             │  ← Taille du fichier
│                        │
│  [⬇ Télécharger] [⋮]  │  ← Actions
└────────────────────────┘
```

### Anatomie détaillée
- **Icône type** : grande icône colorée selon le type
  - PDF : icône rouge
  - Image : icône verte
  - Document : icône bleue
- **Nom** : Inter SemiBold 14px, max 2 lignes
- **Badge matière** : petite pill colorée (couleur associée à la matière)
- **Date** : format relatif ("Il y a 2 jours") ou absolu ("10 Sep")
- **Taille** : format humain (KB, MB)
- **Actions** :
  - ⬇ Télécharger directement
  - ⋮ Menu contextuel : Aperçu, Télécharger, Signaler

### Indicateurs spéciaux sur la card
- **Devoir avec échéance** : badge amber "⏰ À rendre le 15 Sep"
- **Nouveau (< 24h)** : badge indigo "Nouveau" en haut à droite
- **Corrigé disponible** : petite coche verte "✓ Corrigé"

---

## 5. Vue Liste (alternative)

```
┌──────────────────────────────────────────────────────────┐
│ 📄 Cours Chapitre 3    │ Maths  │ 2.1 MB │ 10 Sep │ ⬇ ⋮│
│ 📄 Exercice Fonctions  │ Maths  │ 850 KB │ 9 Sep  │ ⬇ ⋮│
│ 📄 Devoir DM n°4       │ Maths  │ 1.5 MB │ 8 Sep  │ ⬇ ⋮│
│ 📄 TP Chimie           │ Physique│ 3.2 MB │ 11 Sep │ ⬇ ⋮│
└──────────────────────────────────────────────────────────┘
```
- Table avec colonnes : Nom | Matière | Taille | Date | Actions
- Lignes hoverables, cliquables (ouvre aperçu)
- Tri par colonne (click sur header)

---

## 6. Aperçu de document (Modal/Panel)

Quand l'élève clique sur un document :

```
┌──────────────────────────────────────────────────────┐
│  Cours Chapitre 3 — Mathématiques              [X]   │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌────────────────────────────────────────────────┐  │
│  │                                                │  │
│  │         PDF Viewer / Preview                   │  │
│  │         (render du document)                   │  │
│  │                                                │  │
│  │                                                │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  [⬇ Télécharger]  [↗ Partager]  [🔖 Marquer]       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- **PDF Viewer** intégré (render natif ou iframe)
- **Actions** : Télécharger, Partager (lien), Marquer comme lu/favori
- **Info** : uploadé par M. Dupont, le 10 Sep, 2.1 MB

---

## 7. Section "Devoirs" (sous-section spéciale)

Les devoirs ont un traitement spécial avec suivi de statut :

```
┌──────────────────────────────────────────┐
│  📝 Devoirs en cours                     │
├──────────────────────────────────────────┤
│  ┌────────────────────────────────────┐  │
│  │ DM Math n°4 — Fonctions           │  │
│  │ 📐 Maths · M. Dupont              │  │
│  │ ⏰ À rendre le 15 Sep (dans 4j)   │  │
│  │ ████████░░░░░░░░ 50%              │  │
│  │ [📄 Voir l'énoncé] [✓ Marquer fait]│  │
│  └────────────────────────────────────┘  │
│  ┌────────────────────────────────────┐  │
│  │ Exo Physique — Les forces          │  │
│  │ 🔬 Physique · Mme. Benali          │  │
│  │ ⏰ À rendre le 18 Sep (dans 7j)    │  │
│  │ ░░░░░░░░░░░░░░░░ 0%               │  │
│  │ [📄 Voir l'énoncé] [✓ Marquer fait]│  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

- **Barre de progression** : l'élève marque manuellement l'avancement
- **Compte à rebours** : temps restant avant échéance
- **Code couleur** : vert (> 5 jours), amber (2-5 jours), rouge (< 2 jours)
- **Statuts** : À faire / En cours / Rendu / Corrigé

---

## 8. États et cas limites

### État vide (aucune ressource)
- Mascotte Scolio avec une pile de livres vide
- "Aucune ressource pour l'instant. Tes profs vont bientôt en ajouter !"

### État vide (filtre sans résultat)
- "Aucun document ne correspond à tes filtres."
- Bouton [Réinitialiser les filtres]

### Upload en cours (côté prof, visible élève après)
- L'élève ne voit pas l'upload en cours
- Notification push quand nouveau document disponible

### Responsive
- **Mobile** : vue grille 2 colonnes, filtres en drawer horizontal scrollable
- **Tablet** : vue grille 3 colonnes
- **Desktop** : vue grille 4-5 colonnes

---

## 9. Interactions avec la mascotte
- **Nouveau document** : Scolio apparaît avec un livre "Nouveau document de M. Dupont !"
- **Devoir qui approche** : Scolio avec une montre "⏰ Ton devoir de maths est dans 2 jours !"
- **Tous les devoirs rendus** : Scolio célèbre "Bravo, tout est à jour ! 🎉"
