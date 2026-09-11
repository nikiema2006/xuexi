# Système de Mascotte "Scolio" — UI Design

## 1. Vue d'ensemble
Mascotte interactive de l'application, style Duolingo. Personnage animé qui accompagne, encourage et guide l'élève dans son parcours scolaire. Présente dans toute l'application avec différents niveaux d'interaction.

---

## 2. Identité de la mascotte

### Design
- **Nom** : Scolio (personnalisable par l'élève)
- **Apparence** : Petit personnage rond, type hibou/hamster stylisé
- **Couleurs** : corps indigo, yeux expressifs, petites oreilles
- **Taille** : 64x64px (flottant), 128x128px (contextuel), 256x256px (célébration)
- **Style** : Illustration vectorielle, animations fluides type Lottie

### Personnalité
- **Ton** : bienveillant, encourageant, jamais condescendant
- **Style** : messages courts et dynamiques, emojis modérés
- **Rôle** : coach scolaire virtuel, compagnon d'étude

---

## 3. Emplacements dans l'application

### A. Flottant (permanent)
```
┌──────────────────────────────────────────┐
│                                            │
│         (contenu de la page)               │
│                                            │
│                                            │
│                                            │
│                              ┌──────┐      │
│                              │Scolio│ ←─── │
│                              │ 64px │      │
│                              └──────┘      │
└──────────────────────────────────────────┘
```
- **Position** : fixed, bottom: 24px, right: 24px
- **Taille** : 64x64px
- **Z-index** : au-dessus de tout le contenu
- **Click** : ouvre un mini-panel avec message du jour + actions rapides
- **Draggable** : l'élève peut le déplacer (position sauvegardée)
- **Animations passives** : respiration, clignement d'yeux, léger balancement

### B. Contextuel (événements)
Apparaît à des endroits précis selon le contexte :

**En haut d'une page** :
```
┌──────────────────────────────────────────┐
│  ┌────────────────────────────────────┐  │
│  │ [Scolio]  Bienvenue dans tes       │  │
│  │           statistiques ! Ta        │  │
│  │           moyenne est de 14.2      │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

**À côté d'un élément** :
- Bulle pointant vers un élément spécifique (ex: un devoir en retard)
- Disparaît après 5 secondes ou au click

### C. Plein écran (célébrations)
```
┌──────────────────────────────────────────┐
│                                            │
│         🎉 🎊 ✨ 🌟 ✨ 🎊 🎉            │
│                                            │
│         ┌──────────────┐                   │
│         │              │                   │
│         │   [Scolio    │                   │
│         │    256px]    │                   │
│         │              │                   │
│         └──────────────┘                   │
│                                            │
│         Bravo ! Record battu !             │
│         Tu es passé de 12 à 14.5           │
│         de moyenne !                       │
│                                            │
│              [Merci Scolio !]              │
│                                            │
└──────────────────────────────────────────┘
```
- Overlay avec fond semi-transparent
- Animation de confettis / étoiles / feux d'artifice
- Message de félicitation
- Bouton pour fermer

---

## 4. États et animations

### États de la mascotte

| État | Déclencheur | Animation | Durée |
|------|-------------|-----------|-------|
| Neutre | Par défaut | Respiration + clignement | Loop |
| Content | Bonne note, objectif atteint | Saute de joie | 2s |
| Encourageant | Note moyenne, effort | Sourire + pouce levé | 2s |
| Inquiet | Baisse de perf, streak perdu | Air préoccupé, petit nuage | 3s |
| Célébration | Record, top ranking | Danse + confettis | 4s |
| Guide | Nouvelle fonctionnalité | Pointe du doigt + bulle | 3s |
| Endormi | Inactivité > 3 jours | Dort avec Zzz | Loop |
| Excité | Devoir à venir, événement | Rebondit rapidement | 2s |
| Triste | Échec, mauvaise note | Regard baissé, console | 3s |
| Lecteur | Document ouvert | Lunettes + livre | Loop |
| Sport | Révision terminée | Essuie la sueur | 2s |

### Transitions entre états
- Fondu enchaîné (fade) entre les états : 300ms
- Pas de transition brutale
- État neutre repris après 5 secondes si pas d'événement

---

## 5. Messages de Scolio

### Catalogue de messages

#### Messages d'accueil (selon l'heure)
- Matin (7h-12h) : "Bonjour Ahmed ! Prêt pour une nouvelle journée ?"
- Après-midi (12h-18h) : "Bon après-midi ! Tu as des révisions aujourd'hui."
- Soir (18h-22h) : "Bonsoir ! N'oublie pas de réviser un peu ce soir."
- Nuit (22h-7h) : "Il est tard ! Pense à te reposer pour être en forme demain."

#### Messages contextuels par page

**Page Statistiques** :
- Bonne moyenne (> 16) : "Incroyable ! Tu es dans le top !"
- Moyenne en hausse : "Tu progresses ! Continue comme ça !"
- Moyenne en baisse : "Courage, tu vas remonter ! Je crois en toi !"
- Première visite : "Ici tu peux suivre tes performances. Clique sur une matière pour voir les détails !"

**Page Ressources** :
- Nouveau document : "Nouveau document de M. Dupont ! Va voir !"
- Devoir qui approche : "Ton devoir de maths est dans 2 jours !"
- Tous les devoirs rendus : "Bravo, tout est à jour !"

**Page Emploi du temps** :
- Journée chargée : "Grosse journée aujourd'hui, tu vas gérer !"
- Journée libre : "Journée légère, profite-en pour réviser !"
- Weekend : "Bon weekend ! N'oublie pas tes révisions."

**Page Messagerie** :
- Nouveau message : "Tu as un nouveau message de M. Dupont !"
- Invitation : "Quelqu'un veut te parler ! Accepte l'invitation."

**Page Profil** :
- Nouveau badge : "Nouveau badge débloqué : [Nom] !"
- Streak record : "Nouveau record de streak !"

#### Messages d'encouragement aléatoires
- "Tu fais du bon travail ! Continue !"
- "Chaque effort compte. Je suis fier de toi !"
- "N'abandonne jamais, même quand c'est dur !"
- "Tu es plus fort que tu ne le crois !"
- "La régularité est la clé du succès !"

#### Messages de rappel
- Devoir en retard : "Ton DM est en retard ! Vite !"
- Révision oubliée : "Tu avais prévu de réviser les maths aujourd'hui !"
- Inactivité : "Ça fait 2 jours... Tu me manques !"

---

## 6. Interactions

### Click sur la mascotte flottante
Ouvre un mini-panel :
```
┌──────────────────────────────────────────┐
│  ┌────────────────────────────────────┐  │
│  │ [Scolio]  Salut Ahmed !            │  │
│  │          Tu as 3 devoirs cette      │  │
│  │          semaine. Courage !         │  │
│  └────────────────────────────────────┘  │
│                                            │
│  Actions rapides :                         │
│  [📝 Voir devoirs] [📖 Réviser] [📊 Stats]│
│                                            │
│  [✏️ Renommer] [🔇 Muter] [⚙️ Paramètres]│
│                                            │
└──────────────────────────────────────────┘
```

### Renommer la mascotte
- Modal : "Donne un nom à ta mascotte !"
- Input avec suggestion : "Scolio" (par défaut)
- Max 20 caractères
- Le nom est affiché dans les messages

### Muter la mascotte
- Toggle dans les paramètres ou via le mini-panel
- Scolio reste visible mais n'affiche plus de messages automatiques
- Click = toujours accessible

---

## 7. Personnalisation

### Thèmes de la mascotte
L'élève peut changer l'apparence de Scolio (future feature) :
- **Classique** : indigo/violet (défaut)
- **Sport** : bandeau rouge, sifflet
- **Lecteur** : lunettes, béret
- **Fête** : chapeau de fête, confettis
- **Saison** : père Noël, lapin de Pâques, etc.

### Niveaux de la mascotte
La mascotte "grandit" avec l'activité de l'élève :
- **Niveau 1** (0-7 jours) : petit, basique
- **Niveau 2** (8-30 jours) : accessoire débloqué
- **Niveau 3** (31-90 jours) : animation spéciale
- **Niveau 4** (90+ jours) : apparence complète

---

## 8. Accessibilité

### Options
- **Taille** : Petit (48px) / Normal (64px) / Grand (80px)
- **Animations réduites** : mode statique (pas d'animation) pour les utilisateurs sensibles
- **Contraste** : version haute contraste disponible
- **Screen reader** : texte alternatif descriptif pour chaque état
- **Position** : repositionnable (coins de l'écran)

### Respect
- Ne jamais bloquer le contenu
- Ne pas surcharger l'écran
- Messages courts et lisibles
- Option de désactivation complète

---

## 9. Responsive

### Mobile
- Mascotte plus petite (48px)
- Mini-panel en bottom sheet
- Célébrations en overlay plein écran

### Tablet
- Mascotte taille normale (64px)
- Mini-panel en popover

### Desktop
- Mascotte taille normale (64px)
- Mini-panel en popover avec plus de détails
