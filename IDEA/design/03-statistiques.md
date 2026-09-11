# Page Statistiques — UI Design

## 1. Vue d'ensemble
Page de tracking de performance scolaire de l'élève. Inclut les notes, moyennes, évolution, classements et comparaisons. Approche data-visualization avec graphiques interactifs.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Statistiques"                                   │
│  Période: [Ce mois ▾]  [Trimestre 1 ▾]  [Annuel ▾]     │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────── CARDS RÉSUMÉ ──────────────────────┐  │
│  │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │  │
│  │ │ Moy.   │ │ Rank   │ │ Notes  │ │ Streak │       │  │
│  │ │ Générale│ │ Classe │ │ Total  │ │ Jours  │       │  │
│  │ │ 14.2   │ │ 5/32   │ │ 24     │ │ 12 🔥  │       │  │
│  │ │ ↑ +0.5 │ │ ↑ +2   │ │        │ │        │       │  │
│  │ └────────┘ └────────┘ └────────┘ └────────┘       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌──────── GRAPHIQUE ÉVOLUTION ───────────────────────┐  │
│  │  Moyenne générale au fil du temps                  │  │
│  │  📈 [Ligne avec points de données]                 │  │
│  │  ─── Moyenne classe (pointillés)                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Performance par matière (Radar/Bar chart)         │  │
│  │  📊 [Graphique radar ou barres horizontales]       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Classement                                        │  │
│  │  🏆 Liste ranking avec position, nom, moyenne      │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Cards Résumé (KPIs)

Quatre cards en ligne en haut de page :

### Card 1 — Moyenne Générale
```
┌────────────────────┐
│  📊 Moyenne        │
│                    │
│  14.2 / 20         │
│  ↑ +0.5 vs dernier │
│  ─────────────     │
│  [Barre couleur    │
│   progression]     │
└────────────────────┘
```
- **Valeur** : grande, en gras, police mono
- **Tendance** : flèche verte (↑) ou rouge (↓) + delta
- **Barre de progression** : fill proportionnel (0-20), couleur selon niveau :
  - Rouge : < 8
  - Orange : 8-10
  - Jaune : 10-12
  - Vert : 12-14
  - Emerald : 14-16
  - Indigo : 16-20

### Card 2 — Rang / Classement
```
┌────────────────────┐
│  🏆 Rang           │
│                    │
│  5ᵉ / 32 élèves   │
│  ↑ +2 places       │
│  ─────────────     │
│  Top 15%           │
└────────────────────┘
```
- **Position** : grande avec suffixe ordinal (1er, 2e, 3e, etc.)
- **Total** : "sur N élèves"
- **Variation** : montée/descente depuis la dernière période
- **Percentile** : "Top X%" en badge

### Card 3 — Notes Total
```
┌────────────────────┐
│  📝 Notes          │
│                    │
│  24 évaluations    │
│  Moy. classe: 12.8 │
│  ─────────────     │
│  vs moy: +1.4      │
└────────────────────┘
```
- **Total** : nombre d'évaluations sur la période
- **Comparaison** : moyenne de la classe en référence
- **Delta** : écart avec la moyenne de classe

### Card 4 — Streak d'étude
```
┌────────────────────┐
│  🔥 Streak         │
│                    │
│  12 jours          │
│  Record: 21 jours  │
│  ─────────────     │
│  [Mini calendrier  │
│   last 7 jours]    │
└────────────────────┘
```
- **Streak actuel** : nombre de jours consécutifs avec activité
- **Record personnel** : meilleur streak
- **Mini calendrier** : 7 derniers jours, cases vertes (actif) / grises (inactif)

---

## 4. Graphique d'évolution (Line Chart)

```
│  18 ┤
│  16 ┤                          ●───●
│  14 ┤        ●───●───●───●───●
│  12 ┤  ●───●                    \
│  10 ┤                              ●
│   8 ┤
│     └──┬───┬───┬───┬───┬───┬───┬──→
│       Sep  Oct  Nov  Déc  Jan  Fév  Mar
│
│  ─── Ma moyenne    - - - Moyenne classe
```

**Caractéristiques :**
- **Ligne principale** : couleur indigo, épaisseur 2px, points interactifs
- **Ligne référence** : moyenne de la classe en pointillés gris
- **Tooltip au hover** : "Janvier — Moyenne: 14.5 — Rang: 4e"
- **Zoom** : possibilité de zoomer sur une période
- **Légende** : toggle pour afficher/masquer les lignes

---

## 5. Performance par matière (Radar/Bar Chart)

### Option A — Radar Chart (vue d'ensemble)
```
        Maths
       /     \
  Physique   Français
     |         |
  Histoire   Anglais
       \     /
       SVT
```
- Chaque axe = une matière
- Surface colorée = niveau de l'élève
- Surface grise = moyenne de la classe (comparaison)
- Hover sur un point = détail de la matière

### Option B — Barres horizontales (plus lisible)
```
┌────────────────────────────────────┐
│  📐 Maths       ████████████░░ 15.2│
│  🔬 Physique    ██████████░░░░ 13.0│
│  📚 Français    ██████████████ 16.5│
│  🌍 Histoire    ████████░░░░░░ 11.0│
│  🇬🇧 Anglais    ███████████░░░ 14.0│
│  🧪 SVT         ████████████████ 17.0│
└────────────────────────────────────┘
```
- Barre colorée : niveau de l'élève
- Marqueur : moyenne de la classe (ligne verticale pointillée)
- Couleur de la barre : selon le niveau (même code que cards)
- Click sur une matière = drill-down vers le détail

---

## 6. Page de détail par matière (drill-down)

Quand l'élève clique sur une matière :

```
┌──────────────────────────────────────────────────────────┐
│  ← Retour    📐 Mathématiques — M. Dupont                │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  Moyenne: 15.2 / 20   │  Rang: 3/32  │  ↑ +1.2          │
│                                                            │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Détail des évaluations                            │  │
│  │                                                    │  │
│  │  📝 Contrôle Ch.1      14/20   Coeff 2   12 Sep   │  │
│  │  📝 DM Fonctions       16/20   Coeff 1   8 Sep    │  │
│  │  📝 Interrogation      12/20   Coeff 1   15 Sep   │  │
│  │  📝 Contrôle Ch.2      17/20   Coeff 2   28 Sep   │  │
│  │                                                    │  │
│  │  ┌────────────────────────────────────────────┐    │  │
│  │  │  📈 Évolution des notes (mini line chart)  │    │  │
│  │  └────────────────────────────────────────────┘    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

- **Liste des évaluations** : type, note, coefficient, date
- **Code couleur** : vert (≥ 14), jaune (10-14), rouge (< 10)
- **Mini graphique** : évolution des notes dans cette matière
- **Moyenne calculée** : avec prise en compte des coefficients

---

## 7. Section Classement (Ranking)

### Vue ranking mensuel/trimestriel
```
┌──────────────────────────────────────────────────────┐
│  🏆 Classement — Septembre 2026                      │
│  [Mensuel ▾]  [Trimestre 1 ▾]  [Annuel ▾]          │
├──────────────────────────────────────────────────────┤
│                                                      │
│  🥇  1.  Fatima B.        17.8   ━━━━━━━━━━━━━━━    │
│  🥈  2.  Karim M.         17.2   ━━━━━━━━━━━━━━     │
│  🥉  3.  Léa P.           16.5   ━━━━━━━━━━━━━      │
│      4.  Ahmed K.         15.8   ━━━━━━━━━███       │
│  ┌─────────────────────────────────────────────┐     │
│  │  ★ 5.  TOI (Ahmed K.)   14.2   ━━━━━━━█    │     │
│  └─────────────────────────────────────────────┘     │
│      6.  Sarah L.         13.8   ━━━━━━━            │
│      7.  Youssef H.       13.2   ━━━━━█             │
│      ...                                             │
│                                                      │
│  Ta position : 5ᵉ sur 32 (Top 15%)                  │
│  Évolution : ↑ +2 vs mois dernier                    │
└──────────────────────────────────────────────────────┘
```

**Caractéristiques :**
- **Top 3** : médailles or/argent/bronze, mise en valeur
- **Position de l'élève** : toujours visible, mise en surbrillance (card indigo)
- **Barre de performance** : proportionnelle à la moyenne
- **Toggle période** : mensuel / trimestriel / annuel / personnalisé
- **Évolution** : comparaison avec la période précédente

### Anonymat optionnel
- Option pour masquer les noms des autres élèves (respect de la vie privée)
- Mode "Classement anonyme" : juste les positions et moyennes

---

## 8. États et cas limites

### État vide (aucune note)
- Mascotte Scolio avec un cahier vide
- "Pas encore de notes ! C'est le moment de briller !"
- Pas de graphiques affichés, juste les placeholders

### Première note
- Mascotte en célébration
- "Ta première note ! C'est le début de l'aventure ! 🚀"

### Pas de classement
- Si l'option d'anonymat est activée globalement
- Message : "Le classement n'est pas disponible pour cette période."

### Responsive
- **Mobile** : cards en 2x2, graphiques en pleine largeur, scroll vertical
- **Tablet** : cards en 2x2 ou 4 en ligne, graphiques adaptatifs
- **Desktop** : cards en 4 en ligne, graphiques côte à côte si espace

---

## 9. Interactions avec la mascotte
- **Bonne moyenne (> 16)** : Scolio en célébration "Incroyable ! Tu es dans le top ! 🌟"
- **Moyenne en hausse** : Scolio avec un graphique "Tu progresses ! Continue comme ça !"
- **Moyenne en baisse** : Scolio encourageant "Courage, tu vas remonter ! Je crois en toi !"
- **Nouveau record** : Scolio avec des feux d'artifice "Record personnel battu ! 🎆"
- **Streak perdu** : Scolio inquiet "Oh non, ton streak... On repart demain ensemble !"
