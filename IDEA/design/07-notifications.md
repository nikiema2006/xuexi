# Système de Notifications — UI Design

## 1. Vue d'ensemble
Système de notifications multi-canal : notifications push (navigateur/mobile), notifications in-app (dans l'interface), et interactions avec la mascotte. Couvre tous les événements de l'application.

---

## 2. Types de notifications

### Catégories
| Catégorie | Icône | Couleur | Exemples |
|-----------|-------|---------|----------|
| Message | 💬 | Indigo | Nouveau message, invitation |
| Ressource | 📄 | Emerald | Nouveau PDF, nouveau devoir |
| Note | 📊 | Violet | Nouvelle note publiée |
| Rappel | ⏰ | Amber | Devoir à rendre, révision |
| Classement | 🏆 | Amber | Mise à jour du ranking |
| Système | ⚙️ | Gray | Mise à jour app, maintenance |
| Mascotte | 🐾 | Secondaire | Messages de Scolio |

### Priorités
- **Haute** : son + vibration + badge + toast (devoir demain, note publiée)
- **Normale** : badge + toast (nouveau message, nouveau document)
- **Basse** : badge seulement (mise à jour classement, suggestion)

---

## 3. Notification In-App — Drawer

### Structure du drawer (panneau latéral droit)

```
┌──────────────────────────────────────────┐
│  🔔 Notifications           [Tout marquer │
│                              comme lu]    │
├──────────────────────────────────────────┤
│                                            │
│  ┌─── Aujourd'hui ─────────────────────┐  │
│  │                                      │  │
│  │  ┌────────────────────────────────┐  │  │
│  │  │ 💬 M. Dupont          14:30    │  │  │
│  │  │ Nouveau message dans            │  │  │
│  │  │ Mathématiques : "Exercice 5..." │  │  │
│  │  │                    [Non lu ●]   │  │  │
│  │  └────────────────────────────────┘  │  │
│  │                                      │  │
│  │  ┌────────────────────────────────┐  │  │
│  │  │ 📄 Mme. Benali        11:00    │  │  │
│  │  │ Nouveau document :              │  │  │
│  │  │ "TP Chimie - Compte rendu"      │  │  │
│  │  │                    [Non lu ●]   │  │  │
│  │  └────────────────────────────────┘  │  │
│  │                                      │  │
│  │  ┌────────────────────────────────┐  │  │
│  │  │ 📊 Notes              09:00    │  │  │
│  │  │ Note publiée : Maths 15/20      │  │  │
│  │  │ (Contrôle Chapitre 1)           │  │  │
│  │  │                    [Non lu ●]   │  │  │
│  │  └────────────────────────────────┘  │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌─── Hier ────────────────────────────┐  │
│  │  ┌────────────────────────────────┐  │  │
│  │  │ ⏰ Rappel             18:00    │  │  │
│  │  │ Devoir de Physique à            │  │  │
│  │  │ rendre demain !                 │  │  │
│  │  │                    [Lu ✓]       │  │  │
│  │  └────────────────────────────────┘  │  │
│  │                                      │  │
│  │  ┌────────────────────────────────┐  │  │
│  │  │ 🏆 Classement         16:00    │  │  │
│  │  │ Classement mis à jour :         │  │  │
│  │  │ Tu es 5ème (+2 places)          │  │  │
│  │  │                    [Lu ✓]       │  │  │
│  │  └────────────────────────────────┘  │  │
│  └──────────────────────────────────────┘  │
│                                            │
│  ┌─── Cette semaine ───────────────────┐  │
│  │  ...                                 │  │
│  └──────────────────────────────────────┘  │
│                                            │
└──────────────────────────────────────────┘
```

### Anatomie d'une notification
- **Icône catégorie** : à gauche, couleur selon la catégorie
- **Source** : nom du prof ou du système
- **Horodatage** : relatif ("Il y a 2h") ou absolu ("Hier 14:30")
- **Titre** : court, descriptif
- **Corps** : détail du message (max 2 lignes, tronqué)
- **Indicateur non-lu** : pastille indigo à droite
- **Click** : navigation vers la page concernée

### Actions sur les notifications
- **Click** : ouvre la page liée + marque comme lue
- **Swipe gauche** (mobile) : supprimer
- **Long press** : menu contextuel (supprimer, muter cette catégorie)
- **"Tout marquer comme lu"** : bouton en haut

---

## 4. Toast Notifications

### Apparition
- En haut à droite de l'écran (au-dessus du contenu)
- Stack vertical (max 3 visibles, les autres en attente)
- Auto-dismiss après 5 secondes
- Animation : slide-in depuis la droite + fade

### Structure d'un toast
```
┌──────────────────────────────────────────┐
│ 💬  Nouveau message de M. Dupont    [X]  │
│     "Exercice 5 page 42 pour demain"     │
│                                          │
│     [Voir le message]                    │
└──────────────────────────────────────────┘
```

- **Icône** : selon la catégorie
- **Titre** : court
- **Corps** : aperçu
- **Bouton d'action** : optionnel, navigation directe
- **[X]** : fermer manuellement

### Code couleur des toasts
- **Info** : fond indigo clair, bordure indigo
- **Succès** : fond emerald clair, bordure emerald
- **Warning** : fond amber clair, bordure amber
- **Erreur** : fond red clair, bordure red

---

## 5. Badge Compteur

### Emplacements
- **Cloche dans la TopBar** : cercle rouge avec le nombre de notifications non lues
- **Icône de navigation "Messagerie"** : badge avec nb messages non lus
- **Icône de navigation "Ressources"** : badge "Nouveau" si documents récents

### Comportement
- **Compteur** : nombre total de notifications non lues
- **Max** : affiche "99+" au-delà de 99
- **Animation** : pulse léger quand un nouveau notification arrive
- **Click** : ouvre le drawer de notifications

---

## 6. Notifications Push (Navigateur/Mobile)

### Format
```
┌──────────────────────────────────────────┐
│  📐 Mathématiques — M. Dupont            │
│  ──────────────────────────────────────  │
│  Nouveau message dans le groupe :        │
│  "Exercice 5 page 42 pour demain"        │
│                                          │
│  [Ouvrir]  [Marquer lu]                  │
└──────────────────────────────────────────┘
```

### Comportement
- **Permission** : demandée au premier accès (modal d'explication)
- **Click** : ouvre l'app sur la page concernée
- **Regroupement** : notifications du même groupe = 1 notification empilée
- **Respecte les heures de silence** configurées dans les paramètres

---

## 7. Pages de destination (Deep Links)

| Notification | Page de destination |
|-------------|-------------------|
| Nouveau message | Messagerie > conversation concernée |
| Nouveau document | Ressources > section de la matière |
| Nouvelle note | Statistiques > détail de la matière |
| Rappel devoir | Emploi du temps > onglet Devoirs |
| Rappel révision | Emploi du temps > onglet Révisions |
| Classement mis à jour | Statistiques > section Ranking |
| Badge débloqué | Profil > section Badges |
| Invitation message | Messagerie > modal d'acceptation |

---

## 8. États et cas limites

### Aucune notification
- Drawer vide avec mascotte Scolio
- "Aucune notification pour l'instant. Tout est à jour !"
- Illustration de Scolio qui dort paisiblement

### Beaucoup de notifications
- Virtualisation de la liste (performance)
- Section "Anciennes" après 50 notifications
- Bouton "Charger plus" en bas de liste

### Notifications désactivées
- Toggle global dans les paramètres
- Message : "Les notifications sont désactivées. Tu risques de manquer des infos importantes !"
- La mascotte apparaît quand même in-app

---

## 9. Interactions avec la mascotte

### Messages de Scolio dans les notifications
Scolio peut envoyer des notifications personnalisées :
- **Matin** : "Bonjour Ahmed ! Prêt pour une nouvelle journée ? 📚"
- **Avant un contrôle** : "N'oublie pas ton contrôle de maths demain. Tu vas gérer !"
- **Après une bonne note** : "Bravo pour ton 17 en français ! Continue comme ça !"
- **Streak** : "12 jours d'affilée ! Tu es en feu ! 🔥"
- **Inactivité** : "Ça fait 2 jours que tu n'es pas venu. Tu me manques !"

### Mascotte comme indicateur de notification
- Quand Scolio flottant a une bulle "!" = il y a des notifications importantes
- Click sur Scolio = ouvre le drawer de notifications
