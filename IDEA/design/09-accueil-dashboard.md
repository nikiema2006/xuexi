# Page Accueil / Dashboard — UI Design

## 1. Vue d'ensemble
Page d'accueil après connexion. Résumé visuel de tout ce qui compte pour l'élève : prochaines échéances, dernières notes, messages récents, streak, et message de la mascotte.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Bonjour, Ahmed !" + date du jour               │
│  [Scolio] "Prêt pour cette journée ? Tu as 2 cours..."   │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── CARDS RAPIDES ──────────────────────────────────┐  │
│  │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │  │
│  │ │ Moy.   │ │ Rang   │ │ Streak │ │ Devoirs│       │ │
│  │ │ 14.2   │ │ 5/32   │ │ 12 🔥  │ │ 3      │       │ │
│  │ │ ↑ +0.5 │ │ ↑ +2   │ │ Record!│ │ à faire│       │ │
│  │ └────────┘ └────────┘ └────────┘ └────────┘       │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────┐  ┌────────────────────────────┐ │
│  │  PROCHAIN COURS     │  │  DEVOIRS URGENTS           │ │
│  │                     │  │                            │ │
│  │  📐 Mathématiques   │  │  🔴 DM Maths n°5           │ │
│  │  M. Dupont          │  │     À rendre dans 2j       │ │
│  │  Salle 12           │  │     ██████░░░░░░ 40%       │ │
│  │  8:30 - 9:30        │  │                            │ │
│  │  [Y aller →]        │  │  🟡 Exo Physique           │ │
│  │                     │  │     À rendre dans 5j       │ │
│  └─────────────────────┘  │     ░░░░░░░░░░░░ 0%        │ │
│                            │                            │ │
│  ┌─────────────────────┐  │  [Voir tous →]             │ │
│  │  DERNIÈRES NOTES    │  └────────────────────────────┘ │
│  │                     │                                  │
│  │  📐 Maths  15/20   │  ┌────────────────────────────┐ │
│  │  ↑ +2 vs dernier    │  │  MESSAGES RÉCENTS          │ │
│  │                     │  │                            │ │
│  │  🔬 Physique 13/20 │  │  💬 Maths (M. Dupont)      │ │
│  │  → Identique        │  │     "Exercice 5 pour..."   │ │
│  │                     │  │     Il y a 30 min          │ │
│  │  [Voir stats →]     │  │                            │ │
│  └─────────────────────┘  │  💬 Physique (Mme. Benali) │ │
│                            │     "N'oubliez pas le TP"  │ │
│  ┌─────────────────────┐  │     Il y a 2h              │ │
│  │  RÉVISIONS DU JOUR  │  │                            │ │
│  │                     │  │  [Ouvrir messagerie →]     │ │
│  │  📖 17:00 Maths     │  └────────────────────────────┘ │
│  │     Ch.4 - Fonctions│                                  │
│  │     [Commencer →]   │                                  │
│  │                     │                                  │
│  │  📖 18:30 Physique  │                                  │
│  │     Atomes          │                                  │
│  │     [Commencer →]   │                                  │
│  └─────────────────────┘                                  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Header d'accueil

### Message personnalisé
- "Bonjour, Ahmed !" (selon l'heure : Bonjour / Bon après-midi / Bonsoir)
- Date du jour : "Vendredi 11 Septembre 2026"
- Météo scolaire (optionnel) : "Belle journée pour apprendre !"

### Message de Scolio
- Bulle de dialogue au-dessus de la mascotte
- Message contextuel selon l'heure, les événements du jour, le streak
- Exemples :
  - "Tu as 5 cours aujourd'hui. Le premier : Maths à 8h30 !"
  - "Journée libre ! Profite-en pour réviser."
  - "Ton streak est à 12 jours ! Ne le casse pas !"

---

## 4. Cards rapides
4 cards condensées avec les KPIs principaux. Click = navigation vers la page concernée.

| Card | Valeur | Sous-texte | Navigation |
|------|--------|-----------|-----------|
| Moyenne | 14.2 | ↑ +0.5 vs dernier | Statistiques |
| Rang | 5/32 | ↑ +2 places | Statistiques > Ranking |
| Streak | 12 🔥 | Record : 21 jours | Profil |
| Devoirs | 3 | à faire | Emploi du temps > Devoirs |

---

## 5. Section "Prochain cours"
- **Contenu** : le prochain cours de la journée avec horaires, prof, salle
- **Bouton "Y aller"** : scroll vers l'emploi du temps du jour
- **Si pas de cours** : "Pas de cours maintenant. C'est le moment de réviser !"
- **Si weekend** : "Bon weekend ! Prochain cours : Lundi 8h30"

---

## 6. Section "Devoirs urgents"
- Top 3 des devoirs les plus proches
- Code couleur par urgence (rouge < 2j, amber 2-5j, vert > 5j)
- Barre de progression si l'élève a marqué de l'avancement
- Bouton "Voir tous" = navigation vers l'onglet Devoirs

---

## 7. Section "Dernières notes"
- 3 dernières notes obtenues
- Indicateur de tendance (↑ ↓ →)
- Click = navigation vers les statistiques détaillées

---

## 8. Section "Révisions du jour"
- Révisions planifiées pour aujourd'hui
- Bouton "Commencer" = marque comme en cours
- Si aucune révision : "Pas de révision prévue. [Planifier une révision]"

---

## 9. Section "Messages récents"
- 3 derniers messages (groupes ou personnels)
- Aperçu du contenu
- Click = navigation vers la conversation

---

## 10. Responsive
- **Mobile** : sections empilées verticalement, cards en 2x2
- **Tablet** : layout 2 colonnes (gauche : cours + notes + révisions, droite : devoirs + messages)
- **Desktop** : layout 3 colonnes ou 2 colonnes avec sections plus aérées

---

## 11. Interactions avec la mascotte
- **Matin** : Scolio souhaite bonjour et résume la journée
- **Avant un cours** : "Ton cours de maths commence dans 15 min !"
- **Après les cours** : "C'est l'heure des révisions ! Tu commences par quoi ?"
- **Soir** : "Bonne soirée ! N'oublie pas de préparer tes affaires pour demain."
- **Inactivité** : "Tu n'as rien fait aujourd'hui. Demain est un nouveau départ !"
