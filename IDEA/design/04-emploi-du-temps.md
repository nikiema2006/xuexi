# Page Emploi du Temps — UI Design

## 1. Vue d'ensemble
Page centrale de planification : emploi du temps de classe + révisions personnelles + gestion des devoirs. L'élève peut voir son planning, programmer ses révisions, et organiser ses devoirs dans des sections dédiées.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Emploi du temps"                                │
│  [Onglets: Planning | Révisions | Devoirs]                │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  (Contenu selon l'onglet actif — voir ci-dessous)         │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Onglet "Planning" — Emploi du temps

### Vue hebdomadaire (défaut)

```
┌──────────────────────────────────────────────────────────┐
│  Semaine du 9 Sep 2026             [Aujourd'hui] [Sem ▾]│
├────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┤
│  Heure │ Lun  │ Mar  │ Mer  │ Jeu  │ Ven  │ Sam  │ Dim  │
├────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│  8:00  │      │      │      │      │      │      │      │
│  8:30  │ 📐   │ 🔬   │ 📐   │ 📚   │ 📐   │      │      │
│        │Maths │Phy   │Maths │Fr    │Maths │      │      │
│  9:00  │S.12  │S.4   │S.12  │S.8   │S.12  │      │      │
│  9:30  │      │      │      │      │      │      │      │
│ 10:00  │      │      │      │      │      │      │      │
│ 10:30  │ 📚   │ 📐   │ 🌍   │ 🔬   │ 🇬🇧   │      │      │
│        │Fr    │Maths │Hist  │Phy   │Angl  │      │      │
│ 11:00  │S.8   │S.12  │S.5   │S.4   │S.3   │      │      │
│ 11:30  │      │      │      │      │      │      │      │
│ 12:00  │ Pause│ Pause│ Pause│ Pause│ Pause│      │      │
│ 12:30  │      │      │      │      │      │      │      │
│ 13:00  │      │      │      │      │      │      │      │
│ 13:30  │ 🧪   │ 🇬🇧   │ 📚   │ 🧪   │      │      │      │
│        │SVT   │Angl  │Fr    │SVT   │      │      │      │
│ 14:00  │S.6   │S.3   │S.8   │S.6   │      │      │      │
│ 14:30  │      │      │      │      │      │      │      │
│ 15:00  │ 🌍   │ 🎨   │ 📝   │ 🎵   │      │      │      │
│        │Hist  │Arts  │Devoir│Musiq │      │      │      │
│ 15:30 │S.5   │S.2   │      │S.2   │      │      │      │
└────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘
```

### Anatomie d'un bloc de cours
```
┌────────────────────┐
│  📐 Mathématiques  │  <- Icône matière + Nom
│  M. Dupont         │  <- Prof
│  Salle 12          │  <- Salle
│  8:30 - 9:30       │  <- Horaires
│  ─────────────     │
│  [📄 3 ressources] │  <- Lien vers ressources de la matière
└────────────────────┘
```

**Code couleur par matière** (cohérent dans toute l'app) :
- Maths : Indigo
- Physique : Violet
- Français : Rose
- Histoire : Amber
- Anglais : Emerald
- SVT : Green
- Arts : Orange
- Musique : Cyan

**Types de blocs spéciaux :**
- **Cours normal** : fond coloré (matière) à 15% d'opacité, bordure gauche colorée
- **Pause/Déjeuner** : fond gris clair, icône repas
- **Devoir/Interro** : fond rouge clair, badge "Devoir" ou "Interro"
- **Révision perso** : fond indigo clair, bordure pointillée, badge "Révision"
- **Cours annulé** : fond gris, texte barré, badge "Annulé"

### Navigation temporelle
- **Flèches** : semaine précédente / suivante
- **Bouton "Aujourd'hui"** : retour à la semaine courante
- **Sélecteur** : vue Jour / Semaine / Mois

### Vue Jour (zoom)
```
┌──────────────────────────────────────────┐
│  Jeudi 12 Septembre                      │
├──────────────────────────────────────────┤
│  8:00 ─────────────────────────────────  │
│  8:30 │ 📚 Français — M. Lefèvre        │
│  9:00 │ Salle 8                          │
│  9:30 ─────────────────────────────────  │
│  10:00│ 🔬 Physique — Mme. Benali       │
│  10:30│ Salle 4                          │
│  11:00 ─────────────────────────────────  │
│  ...                                     │
└──────────────────────────────────────────┘
```

---

## 4. Onglet "Révisions" — Planification personnelle

### Vue d'ensemble des révisions
```
┌──────────────────────────────────────────────────────────┐
│  [📖 Mes révisions]                    [+ Planifier]     │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── Aujourd'hui ────────────────────────────────────┐  │
│  │                                                    │  │
│  │  17:00-18:00  📐 Réviser Maths — Ch.4             │  │
│  │               ████████░░░░░░░░ 60%                 │  │
│  │               [✓ Terminé] [Modifier]               │  │
│  │                                                    │  │
│  │  18:30-19:30  🔬 Réviser Physique — Atomes         │  │
│  │               ████░░░░░░░░░░░░ 30%                 │  │
│  │               [✓ Terminé] [Modifier]               │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── Demain ──────────────────────────────────────────┐  │
│  │  16:00-17:00  📚 Réviser Français — Dissertation    │  │
│  │               ░░░░░░░░░░░░░░░░ 0%                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── Cette semaine ───────────────────────────────────┐  │
│  │  Mer 18:00  🌍 Histoire — Réviser Ch.3              │  │
│  │  Jeu 17:00  🇬🇧 Anglais — Vocabulaire Unit 4         │  │
│  │  Ven 16:00  🧪 SVT — TP Comptage                    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Modal "Planifier une révision"
```
┌──────────────────────────────────────────┐
│  Planifier une révision              [X] │
├──────────────────────────────────────────┤
│                                          │
│  Matière : [📐 Mathématiques ▾]         │
│  Sujet   : [Chapitre 4 — Fonctions...]  │
│                                          │
│  Date    : [15 Sep 2026]                │
│  Début   : [17:00 ▾]                    │
│  Fin     : [18:00 ▾]                    │
│                                          │
│  Priorité : ○ Haute  ● Moyenne  ○ Basse│
│                                          │
│  Rappels :                               │
│  [x] 30 min avant                        │
│  [ ] 1 jour avant                        │
│  [ ] 1 semaine avant                     │
│                                          │
│  Notes :                                 │
│  ┌──────────────────────────────────┐    │
│  │ Relire le cours, faire les ex 3 │    │
│  │ et 5, revoir les formules...    │    │
│  └──────────────────────────────────┘    │
│                                          │
│           [Annuler]  [Planifier]         │
└──────────────────────────────────────────┘
```

### Fonctionnalités des révisions
- **Drag and drop** : déplacer une révision dans le temps
- **Répétition** : option "Répéter chaque semaine"
- **Progression** : slider ou checkbox pour marquer l'avancement
- **Terminé** : barré vert, badge "Fait"
- **En retard** : badge rouge "En retard"
- **Lien ressources** : bouton pour accéder aux PDFs de la matière

---

## 5. Onglet "Devoirs" — Suivi des devoirs

### Vue Kanban (par statut)
```
┌──────────────────┬──────────────────┬────────────────────┐
│  À faire         │  En cours        │  Terminé           │
├──────────────────┼──────────────────┼────────────────────┤
│ ┌──────────────┐ │ ┌──────────────┐ │ ┌──────────────┐   │
│ │DM Maths n°5  │ │ │Exo Physique  │ │ │DM Français   │   │
│ │📐 Maths      │ │ │🔬 Physique   │ │ │📚 Français   │   │
│ │⏰ 18 Sep     │ │ │⏰ 15 Sep     │ │ │✅ 10 Sep     │   │
│ │🔴 Urgent     │ │ │🟡 Moyen      │ │ │Note: 15/20   │   │
│ │              │ │ │              │ │ │              │   │
│ │[> En cours]  │ │ │[> Terminé]   │ │ │[📄 Corrigé]  │   │
│ └──────────────┘ │ └──────────────┘ │ └──────────────┘   │
│                  │                  │                    │
│ ┌──────────────┐ │                  │ ┌──────────────┐   │
│ │Exo Anglais   │ │                  │ │Exo Maths     │   │
│ │🇬🇧 Anglais    │ │                  │ │📐 Maths      │   │
│ │⏰ 20 Sep     │ │                  │ │✅ 8 Sep      │   │
│ │🟡 Moyen      │ │                  │ │Note: 17/20   │   │
│ └──────────────┘ │                  │ └──────────────┘   │
└──────────────────┴──────────────────┴────────────────────┘
```

### Anatomie d'une card de devoir
```
┌────────────────────────┐
│  DM Maths n°5          │  <- Titre
│  📐 Mathématiques      │  <- Matière (badge coloré)
│  ⏰ À rendre : 18 Sep  │  <- Échéance
│  ─────────────────     │
│  🔴 Urgent             │  <- Priorité (rouge/amber/vert)
│  📎 2 fichiers liés    │  <- Pièces jointes
│                        │
│  Actions :             │
│  [> En cours]          │  <- Changer le statut
│  [📄 Voir l'énoncé]    │  <- Lien vers ressource
│  [📎 Ajouter fichier]  │  <- Joindre un rendu
└────────────────────────┘
```

### Timeline des devoirs
```
┌──────────────────────────────────────────────────────────┐
│  📅 Timeline                                              │
│                                                            │
│  --- Cette semaine ─────────────────────────────────────  │
│  Lun 15  ●─── Exo Physique (En cours)                     │
│  Mer 18  ●─── DM Maths n°5 (À faire)                      │
│  Ven 20  ●─── Exo Anglais (À faire)                       │
│                                                            │
│  --- Semaine prochaine ──────────────────────────────────  │
│  Lun 22  ●─── Contrôle Histoire (À faire)                 │
│  Mer 24  ●─── DM Français (À faire)                       │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

---

## 6. Interactions et fonctionnalités

### Drag and Drop
- Déplacer un bloc de cours (seulement les révisions perso, pas les cours de classe)
- Redimensionner un bloc de révision (ajuster la durée)
- Déplacer un devoir entre les colonnes Kanban

### Synchronisation
- Export iCal / Google Calendar
- Notification de synchronisation

### Filtres
- Par matière
- Par type (cours / révision / devoir / interro)
- Par statut (à faire / en cours / terminé)

---

## 7. États et cas limites

### État vide (aucune révision planifiée)
- Mascotte Scolio avec un agenda vide
- "Aucune révision planifiée. Commence par planifier ta première session !"
- Bouton : [+ Planifier ma première révision]

### État vide (aucun devoir)
- Mascotte en célébration
- "Aucun devoir en cours ! Profite-en pour réviser !"

### Conflit de planning
- Si deux révisions se chevauchent : alerte visuelle (bordure rouge)
- Message : "Attention, tes révisions de Maths et Physique se chevauchent !"

### Responsive
- **Mobile** : vue jour par défaut, swipe gauche/droite pour naviguer, Kanban en scroll horizontal
- **Tablet** : vue semaine 3 jours visibles, scroll pour les autres
- **Desktop** : vue semaine complète

---

## 8. Interactions avec la mascotte
- **Révision terminée** : Scolio saute de joie "Bravo, session terminée !"
- **Devoir en retard** : Scolio inquiet "Ton DM de maths est en retard ! Vite !"
- **Journée chargée** : Scolio avec des livres "Grosse journée aujourd'hui, tu vas gérer !"
- **Weekend libre** : Scolio en détente "Pas de cours demain, profite bien !"
- **Streak de révisions** : Scolio avec un feu "5 jours de révisions d'affilée !"
