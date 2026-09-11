# Page Messagerie — UI Design

## 1. Vue d'ensemble
Page de communication complète : groupes de classe par matière + messages personnels par invitation. Interface type messagerie moderne (inspirée de Discord/Teams) adaptée au contexte scolaire.

---

## 2. Layout de la page

```
┌──────────────────────────────────────────────────────────┐
│  Header: "Messagerie" + [Bouton "Nouveau message"]       │
├──────────────┬───────────────────────────────────────────┤
│              │                                           │
│  Sidebar     │         Zone de conversation              │
│  (listes)    │                                           │
│              │  ┌─────────────────────────────────────┐  │
│  [Onglets]   │  │  Header conversation                │  │
│  Groupes     │  │  (nom + avatar + membres + actions) │  │
│  Messages    │  ├─────────────────────────────────────┤  │
│              │  │                                     │  │
│  [Filtre]    │  │  Liste des messages                 │  │
│  [Recherche] │  │  (bulles gauche/droite)             │  │
│              │  │                                     │  │
│  [Liste      │  │                                     │  │
│   convos]    │  │                                     │  │
│              │  ├─────────────────────────────────────┤  │
│              │  │  Input message + pièces jointes     │  │
│              │  └─────────────────────────────────────┘  │
├──────────────┴───────────────────────────────────────────┤
└──────────────────────────────────────────────────────────┘
```

---

## 3. Sidebar — Liste des conversations

### Onglets de filtrage
Deux onglets en haut de la sidebar :
- **Groupes** — Groupes de classe par matière
- **Messages** — Conversations personnelles (1-to-1)

### Section "Groupes"
Chaque groupe = une matière. Liste verticale de cards :

```
┌────────────────────────────────┐
│ 🟢 Mathématiques               │
│ M. Dupont · 32 membres         │
│ 3 nouveaux messages            │
│ "Exercice 5 page 42 pour..."  │
│                    14:32       │
└────────────────────────────────┘
```

**Anatomie d'un item de groupe :**
- **Icône matière** : cercle coloré avec emoji/icône de la matière (📐 Maths, 🔬 Physique, 📚 Français, etc.)
- **Nom du groupe** : nom de la matière en gras
- **Nom du prof** : sous-titre "M. Dupont · N membres"
- **Badge** : compteur de messages non lus (cercle indigo avec numéro)
- **Dernier message** : aperçu tronqué (50 caractères) en texte secondaire
- **Horodatage** : heure ou date du dernier message, aligné à droite
- **Indicateur non-lu** : bordure gauche indigo sur la card

### Section "Messages"
Conversations personnelles. Même structure de card mais avec :
- **Avatar** de l'interlocuteur (photo ou initiales)
- **Nom** de l'interlocuteur
- **Statut** : pastille verte (en ligne) / grise (hors ligne)
- **Dernier message** : aperçu tronqué
- **Horodatage**
- **Badge** non lus

### Barre de recherche
Input en haut de la sidebar : "Rechercher une conversation..."
- Recherche par nom de matière, nom de prof, nom d'élève
- Résultats filtrés en temps réel

---

## 4. Zone de conversation

### Header de conversation
```
┌──────────────────────────────────────────────────┐
│ 📐 Mathématiques            📋 👥 📌 ⋮          │
│ M. Dupont · 32 membres                            │
└──────────────────────────────────────────────────┘
```
- **Gauche** : icône matière + nom du groupe + sous-titre (prof + nb membres)
- **Droite** : actions contextuelles :
  - 📋 Voir les ressources partagées dans ce groupe
  - 👥 Liste des membres
  - 📌 Messages épinglés
  - ⋮ Menu (muter, quitter le groupe, signaler)

### Bulles de messages

**Message d'un autre (aligné à gauche) :**
```
┌─────────────────────────────────────┐
│ [Avatar] Ahmed K.          14:30   │
│ ┌─────────────────────────────────┐ │
│ │ Quelqu'un a compris l'ex 5 ?   │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Message de l'élève (aligné à droite) :**
```
┌─────────────────────────────────────┐
│                       14:32  [Avatar]│
│ ┌─────────────────────────────────┐ │
│ │ Oui regarde le PDF de M. Dupont│ │
│ └─────────────────────────────────┘ │
│ ✓✓ Lu                              │
└─────────────────────────────────────┘
```

**Anatomie d'un message :**
- Avatar (32px) — initiales ou photo
- Nom de l'expéditeur (texte secondary)
- Bulle : fond gray-100 (autres) / fond indigo-100 (moi)
- Texte du message
- Horodatage en petit en dessous
- Indicateur de lecture : ✓ envoyé, ✓✓ lu (pour les messages personnels)

### Types de messages spéciaux
- **Message du prof épinglé** : bordure amber, badge "📌 Épinglé"
- **Fichier PDF partagé** : card avec icône PDF, nom du fichier, taille, bouton télécharger
- **Image** : thumbnail avec click pour agrandir
- **Message système** : centré, texte gris italic ("Ahmed a rejoint le groupe")

### Input de message
```
┌──────────────────────────────────────────────────┐
│ 📎  Écrire un message...          😊  🎤  [➤]  │
└──────────────────────────────────────────────────┘
```
- **📎** : joindre un fichier (PDF, image)
- **Zone texte** : auto-resize, placeholder "Écrire un message..."
- **😊** : emojis
- **🎤** : message vocal (maintenir pour enregistrer)
- **[➤]** : envoyer (bouton indigo)

---

## 5. Modal "Nouveau message personnel"

```
┌──────────────────────────────────────┐
│  Nouveau message                 [X] │
├──────────────────────────────────────┤
│  À : [Rechercher un élève...]       │
│                                      │
│  ┌────────────────────────────────┐  │
│  │ Ahmed K.          [Sélectionner]│  │
│  │ Fatima B.         [Sélectionner]│  │
│  └────────────────────────────────┘  │
│                                      │
│  [Envoyer le premier message...]     │
│                                      │
│            [Annuler]  [Envoyer]      │
└──────────────────────────────────────┘
```

**Note** : Les messages personnels fonctionnent par invitation. L'élève envoie une invitation, le destinataire doit accepter avant que la conversation ne soit active.

### Flow d'invitation
1. Élève A envoie une invitation → Élève B reçoit une notification
2. Élève B accepte → conversation créée
3. Si refusée → notification à Élève A "Invitation refusée"

---

## 6. États et cas limites

### État vide (aucune conversation)
- Mascotte Scolio au centre
- "Pas encore de messages ! Rejoins un groupe ou envoie une invitation."
- Boutons d'action : [Voir les groupes] [Inviter un camarade]

### État vide (groupe sans messages)
- "Aucun message dans ce groupe pour l'instant."
- Mascotte en petit dans le coin

### Messages non lus
- Badge sur l'icône de navigation
- Conversations non lues en gras dans la sidebar
- Séparateur "Nouveaux messages" dans le fil

### Responsive
- **Mobile** : sidebar = plein écran, click sur conversation = navigation vers la zone de chat (bouton retour)
- **Tablet** : sidebar réduite (72px, icônes seulement), hover = preview
- **Desktop** : sidebar 320px fixe

---

## 7. Interactions avec la mascotte
- **Nouveau message reçu** : Scolio apparaît avec une enveloppe animée "Tu as un nouveau message !"
- **Invitation reçue** : Scolio tient une lettre "Quelqu'un veut te parler !"
- **Prof a écrit dans le groupe** : Scolio avec un chapeau d'étudiant "Message important de M. Dupont !"
