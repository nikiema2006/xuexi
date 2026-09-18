# Spécification UI/UX — EduSchool (Version Élèves)

> **Document de référence unique** pour l'audit UI/UX et la refonte complète de l'application mobile de suivi de performance scolaire EduSchool.
> Ce document est autonome : un designer ou développeur doit pouvoir l'utiliser comme source unique pour implémenter l'intégralité de la refonte.

---

## Sommaire

- [SECTION 1 : AUDIT DES FONCTIONNALITÉS](#section-1--audit-des-fonctionnalités)
  - [1.1 Page Accueil (Dashboard)](#11-page-accueil-dashboard)
  - [1.2 Page Statistiques](#12-page-statistiques)
  - [1.3 Page Messagerie](#13-page-messagerie)
  - [1.4 Page Ressources](#14-page-ressources)
  - [1.5 Page Emploi du temps](#15-page-emploi-du-temps)
  - [1.6 Fonctionnalités transversales](#16-fonctionnalités-transversales)
  - [1.7 Synthèse de l'audit — Problèmes identifiés](#17-synthèse-de-laudit--problèmes-identifiés)
- [SECTION 2 : PROPOSITION DE REFONTE UI/UX PAR PAGE](#section-2--proposition-de-refonte-uiux-par-page)
  - [2.1 Dashboard](#21-dashboard)
  - [2.2 Statistiques](#22-statistiques)
  - [2.3 Messagerie](#23-messagerie)
  - [2.4 Ressources](#24-ressources)
  - [2.5 Emploi du temps](#25-emploi-du-temps)
- [SECTION 3 : DESIGN SYSTEM COMPLET](#section-3--design-system-complet)
  - [3.1 Palette de couleurs](#31-palette-de-couleurs)
  - [3.2 Typographie](#32-typographie)
  - [3.3 Composants récurrents](#33-composants-récurrents)

---

# SECTION 1 : AUDIT DES FONCTIONNALITÉS

> Inventaire exhaustif et structuré de toutes les fonctionnalités de l'application, organisé par page puis par catégorie. Chaque fonctionnalité est décrite avec son comportement attendu, ses données affichées et ses interactions.

---

## 1.1 Page Accueil (Dashboard)

Page d'atterrissage après connexion. Role : donner en un coup d'œil l'état complet de la vie scolaire de l'élève.

### 1.1.1 En-tête personnalisé

| Fonctionnalité | Description | Données affichées | Interaction |
|---|---|---|---|
| Salutation temporelle | Message adapté selon l'heure de la journée | "Bonjour" (7h-12h), "Bon après-midi" (12h-18h), "Bonsoir" (18h-22h) | Aucune — statique |
| Prénom de l'élève | Personnalisation de la salutation | Prénom de l'élève connecté | Aucune — statique |
| Date du jour | Date complète en français | "Vendredi 11 Septembre 2026" | Aucune — statique |
| Message météo scolaire | Message contextuel optionnel | "Belle journée pour apprendre !" ou similaire | Aucune — décoratif |
| Bulle Scolio contextuelle | Message de la mascotte dans une bulle de dialogue | Message dynamique selon heure, événements du jour, streak | Click = interactions mascotte |

**Exemples de messages Scolio :**
- "Tu as 5 cours aujourd'hui. Le premier : Maths à 8h30 !"
- "Journée libre ! Profite-en pour réviser."
- "Ton streak est à 12 jours ! Ne le casse pas !"

### 1.1.2 Cartes KPI (4 cartes)

Toutes les cartes sont **cliquables** et redirigent vers la page liée.

| KPI | Icône | Valeur affichée | Tendance / Variation | Police valeur | Page cible |
|---|---|---|---|---|---|
| Moyenne générale | 📊 | `14.2` / 20 | ↑ +0.5 vs dernière période | JetBrains Mono Bold | Statistiques |
| Rang | 🏆 | `5` / 32 élèves | ↑ +2 places | JetBrains Mono Bold | Statistiques → Classement |
| Streak | 🔥 | `12` jours | Record : 21 jours | JetBrains Mono Bold | Profil / Streak |
| Devoirs en attente | 📝 | `3` devoirs | — | JetBrains Mono Bold | Emploi du temps → Devoirs |

**Comportements :**
- La tendance utilise un code couleur : flèche verte (↑) pour progression, flèche rouge (↓) pour régression
- Le streak affiche le record personnel en sous-texte
- Les devoirs en attente : click → onglet Devoirs de l'Emploi du temps

### 1.1.3 Prochain cours

| Élément | Description | Données |
|---|---|---|
| Matière + icône | Nom de la matière avec icône colorée | "📐 Mathématiques" |
| Professeur | Nom du prof | "M. Dupont" |
| Salle | Numéro de salle | "Salle 12" |
| Horaires | Début et fin du cours | "8:30 - 9:30" |
| Countdown | Temps restant avant le début | "Dans 45 min" (temps réel) |
| Bouton "Y aller" | Navigation vers le détail du cours | — |
| État alternatif | Si pas de cours prochain | Message : "Pas de cours prochain" + suggestion de réviser |

### 1.1.4 Devoirs urgents (Top 3)

Affichage des 3 devoirs les plus proches par échéance, en scroll horizontal si nécessaire.

| Élément | Description | Code couleur |
|---|---|---|
| Titre du devoir | Nom du devoir | Texte normal |
| Matière | Matière concernée avec badge coloré | Couleur de la matière |
| Countdown | Temps restant avant échéance | Rouge < 2j, Ambre 2-5j, Vert > 5j |
| Barre de progression | Avancement déclaré par l'élève | Fill proportionnel |
| Bouton "Voir tous" | Lien vers liste complète | → Emploi du temps → Devoirs |

### 1.1.5 Dernières notes (Top 3)

Affichage compact des 3 dernières notes uniquement (PAS la liste complète).

| Élément | Description |
|---|---|
| Matière | Nom + icône de la matière |
| Note | Valeur sur 20 en JetBrains Mono |
| Tendance | ↑ (hausse), ↓ (baisse), → (stable) vs dernière note même matière |
| Lien "Voir stats" | Navigation vers page Statistiques |

### 1.1.6 Révisions du jour

| Élément | Description |
|---|---|
| Matière + sujet | "📖 17:00 Maths — Ch.4 Fonctions" |
| Bouton "Commencer" | Lance la session de révision |
| État alternatif | "Pas de révision prévue" + lien pour planifier |

### 1.1.7 Messages récents (Top 3)

| Élément | Description |
|---|---|
| Source | Nom du groupe ou de la personne |
| Aperçu | Extrait du dernier message (tronqué ~50 caractères) |
| Timestamp | "Il y a 30 min", "Il y a 2h" |
| Lien | Navigation vers la messagerie |

### 1.1.8 Interactions Scolio (Dashboard)

| Déclencheur | État de Scolio | Message |
|---|---|---|
| Connexion matin | Content | "Bonjour Ahmed ! Prêt pour une nouvelle journée ?" |
| Streak actif | Excité | "Ton streak est à 12 jours ! Continue !" |
| Devoir proche | Inquiet | "Attention, ton DM de maths est dans 2 jours !" |
| Journée chargée | Guide | "Grosse journée aujourd'hui, tu vas gérer !" |
| Inactivité > 3j | Endormi | Zzz... "Tu me manques !" |

---

## 1.2 Page Statistiques

Page de tracking de performance. Role : visualiser l'évolution des notes, moyennes, classements et comparer avec la classe.

### 1.2.1 Sélecteur de période

| Option | Description |
|---|---|
| Mensuel | Données du mois en cours |
| Trimestriel | Données du trimestre sélectionné |
| Annuel | Données de l'année scolaire complète |

**Comportement** : le sélecteur impacte toutes les données de la page (KPIs, graphique, classement).

### 1.2.2 Cartes KPI (4 cartes)

| KPI | Contenu | Détail visuel |
|---|---|---|
| Moyenne générale | Valeur / 20 + barre colorée proportionnelle (0-20) | Couleur selon niveau : Rouge <8, Orange 8-10, Jaune 10-12, Vert 12-14, Émeraude 14-16, Indigo 16-20 |
| Rang + Percentile | Position / total élèves + "Top X%" | Médailles 🥇🥈🥉 pour top 3, variation depuis dernière période |
| Total évaluations | Nombre d'évaluations + moyenne classe + écart | "24 évaluations — Moy. classe : 12.8 — vs moy : +1.4" |
| Streak d'étude | Jours consécutifs + record + mini-calendrier 7j | Cases vertes (actif) / grises (inactif) sur les 7 derniers jours |

### 1.2.3 Graphique d'évolution (Line Chart)

| Caractéristique | Description |
|---|---|
| Type | Courbe interactive (line chart) |
| Ligne principale | Moyenne personnelle — couleur indigo, épaisseur 2px, points interactifs |
| Ligne référence | Moyenne de la classe — pointillés gris |
| Tooltips | Au hover : "Janvier — Moyenne: 14.5 — Rang: 4e" |
| Zoom | Possibilité de zoomer sur une période |
| Légende | Toggle pour afficher/masquer chaque ligne |
| Axes | X = mois, Y = moyenne sur 20 |

### 1.2.4 Performance par matière

| Caractéristique | Description |
|---|---|
| Type | Barres horizontales (Option B privilégiée pour lisibilité) |
| Contenu | Une barre par matière avec icône + nom + valeur |
| Couleur | Code couleur matière cohérent avec le reste de l'app |
| Marqueur classe | Ligne verticale pointillée = moyenne de la classe |
| Interaction | Click sur une matière → drill-down vers détail |

### 1.2.5 Page détail matière (drill-down)

| Élément | Description |
|---|---|
| En-tête | Bouton retour + nom matière + prof |
| Résumé | Moyenne, Rang, Tendance (en ligne) |
| Liste évaluations | Type, note /20, coefficient, date — code couleur vert (≥14), jaune (10-14), rouge (<10) |
| Mini courbe | Évolution des notes dans cette matière |
| Moyenne pondérée | Calculée avec coefficients |

### 1.2.6 Classement (Ranking)

| Élément | Description |
|---|---|
| Liste rangs | Position, nom, moyenne, barre de performance proportionnelle |
| Médailles top 3 | 🥇 Or, 🥈 Argent, 🥉 Bronze — mise en valeur visuelle |
| Position élève | Toujours visible, mise en surbrillance (card indigo) |
| Toggle période | Mensuel / Trimestriel / Annuel |
| Évolution | Comparaison avec période précédente (↑↓) |
| Mode anonymat | Optionnel — masque les noms, affiche juste positions et moyennes |

### 1.2.7 États vides et réactions Scolio

| État | Comportement |
|---|---|
| Aucune note | Scolio avec cahier vide — "Pas encore de notes ! C'est le moment de briller !" |
| Première note | Scolio en célébration — "Ta première note ! C'est le début de l'aventure ! 🚀" |
| Bonne moyenne (>16) | Scolio en célébration — "Incroyable ! Tu es dans le top ! 🌟" |
| Moyenne en hausse | Scolio avec graphique — "Tu progresses ! Continue comme ça !" |
| Moyenne en baisse | Scolio encourageant — "Courage, tu vas remonter ! Je crois en toi !" |
| Pas de classement | Message : "Le classement n'est pas disponible pour cette période." |

---

## 1.3 Page Messagerie

Interface de communication complète : groupes de classe par matière + messages personnels par invitation. Inspirée Discord/Teams adapté au contexte scolaire.

### 1.3.1 Sidebar conversations

#### Onglets

| Onglet | Contenu |
|---|---|
| Groupes | Groupes de classe par matière |
| Messages | Conversations personnelles 1-to-1 |

#### Liste des groupes

Chaque groupe = une matière. Anatomie d'un item :

| Élément | Description |
|---|---|
| Icône matière | Cercle coloré avec emoji/icône de la matière (📐 Maths, 🔬 Physique, 📚 Français, etc.) |
| Nom du groupe | Nom de la matière en gras |
| Nom du prof + nb membres | Sous-titre : "M. Dupont · 32 membres" |
| Aperçu dernier message | Texte tronqué (~50 caractères) en texte secondaire |
| Horodatage | Heure ou date du dernier message, aligné à droite |
| Badge non-lus | Cercle indigo avec nombre de messages non lus |
| Indicateur non-lu | Bordure gauche indigo sur la card |

#### Liste des messages (1-to-1)

| Élément | Description |
|---|---|
| Avatar | Photo ou initiales de l'interlocuteur |
| Nom | Nom de l'interlocuteur |
| Statut en ligne | Pastille verte (en ligne) / grise (hors ligne) |
| Aperçu dernier message | Texte tronqué |
| Horodatage | Heure ou date |
| Badge non-lus | Cercle indigo avec nombre |

#### Barre de recherche

- Input : "Rechercher une conversation..."
- Recherche par nom de matière, nom de prof, nom d'élève
- Résultats filtrés en temps réel

### 1.3.2 Zone conversation

#### En-tête de conversation

| Élément | Description |
|---|---|
| Icône + nom | Icône matière + nom du groupe |
| Sous-titre | Prof + nb membres |
| Action 📋 | Voir les ressources partagées dans ce groupe |
| Action 👥 | Liste des membres |
| Action 📌 | Messages épinglés |
| Action ⋮ | Menu (muter, quitter le groupe, signaler) |

#### Bulles de messages

| Type | Alignement | Style |
|---|---|---|
| Message d'un autre | Gauche | Fond gray-100, avatar 32px + nom au-dessus |
| Message de l'élève | Droite | Fond indigo-100, pas d'avatar |

**Anatomie d'un message :**
- Avatar (32px) — initiales ou photo
- Nom de l'expéditeur (texte secondaire)
- Bulle avec texte du message
- Horodatage en petit en dessous
- Indicateur de lecture : ✓ envoyé, ✓✓ lu (pour messages personnels)

### 1.3.3 Types de messages spéciaux

| Type | Style visuel |
|---|---|
| Message épinglé | Bordure ambre, badge "📌 Épinglé" |
| PDF partagé | Card avec icône PDF, nom du fichier, taille, bouton télécharger |
| Image | Thumbnail avec click pour agrandir |
| Message système | Centré, texte gris italic ("Ahmed a rejoint le groupe") |

### 1.3.4 Barre de saisie

| Élément | Description |
|---|---|
| 📎 Pièce jointe | Joindre un fichier (PDF, image) |
| Zone texte | Auto-resize, placeholder "Écrire un message..." |
| 😊 Emoji | Sélecteur d'emojis |
| 🎤 Vocal | Message vocal (maintenir pour enregistrer) |
| ➤ Envoi | Bouton indigo pour envoyer |

### 1.3.5 Nouveau message (modal)

| Élément | Description |
|---|---|
| Recherche élève | Input avec autocomplete |
| Liste résultats | Nom + bouton "Sélectionner" |
| Système d'invitation | L'envoi d'un message = envoi d'une invitation |
| Flow invitation | Élève A envoie → Élève B reçoit notification → B accepte → conversation créée |
| Refus | Notification à Élève A "Invitation refusée" |

### 1.3.6 États vides et indicateurs

| État | Comportement |
|---|---|
| Aucune conversation | Scolio au centre — "Pas encore de messages ! Rejoins un groupe ou envoie une invitation." + CTAs |
| Groupe sans messages | "Aucun message dans ce groupe pour l'instant." + Scolio |
| Non-lus sidebar | Conversations non lues en gras, séparateur "Nouveaux messages" dans le fil |
| Badge nav | Badge compteur sur l'icône de navigation Messagerie |

### 1.3.7 Réactions Scolio (Messagerie)

| Déclencheur | État | Message |
|---|---|---|
| Nouveau message reçu | Avec enveloppe animée | "Tu as un nouveau message !" |
| Invitation reçue | Tenant une lettre | "Quelqu'un veut te parler !" |
| Message du prof | Avec chapeau d'étudiant | "Message important de M. Dupont !" |

---

## 1.4 Page Ressources

Page centralisée de tous les documents partagés par les professeurs : PDFs de cours, exercices, devoirs, corrigés. Organisation par matière avec filtrage et recherche.

### 1.4.1 Barre de filtres

#### Pills matières (multi-sélection)

| Caractéristique | Description |
|---|---|
| Style | Pills scrollables horizontalement |
| "Toutes" | Sélectionné par défaut, fond indigo, texte blanc |
| Chaque matière | Fond gray-100, texte gray-700, icône de la matière |
| Multi-sélection | Click = filtre, chips avec X pour retirer |

#### Filtres avancés (dropdowns)

| Filtre | Options |
|---|---|
| Type de document | Tous / Cours / Exercice / Devoir / Corrigé / TP |
| Statut | Tous / Non rendu (devoirs) / À venir / Archivé |
| Tri | Plus récent / Plus ancien / Nom A-Z / Taille |

#### Barre de recherche

- Placeholder : "Rechercher un document..."
- Recherche full-text dans nom des documents et matières
- Autocomplete avec suggestions

### 1.4.2 Vue grille (par défaut)

Anatomie d'une card de ressource :

| Élément | Description |
|---|---|
| Icône type | Grande icône colorée : PDF (rouge), Image (vert), Document (bleu) |
| Nom du document | Inter SemiBold 14px, max 2 lignes, tronqué |
| Badge matière | Petite pill colorée (couleur associée à la matière) |
| Date relative | "Il y a 2 jours" ou absolu "10 Sep" |
| Taille fichier | Format humain (KB, MB) |
| Actions | ⬇ Télécharger directement + ⋮ Menu contextuel (Aperçu, Télécharger, Signaler) |

**Regroupement** : les documents sont regroupés par matière avec en-tête de section (icône + nom matière + prof).

### 1.4.3 Indicateurs spéciaux sur les cards

| Badge | Condition | Style |
|---|---|---|
| Deadline | Devoir avec échéance | Badge ambre "⏰ À rendre le 15 Sep" |
| Nouveau | Document uploadé < 24h | Badge indigo "Nouveau" en haut à droite |
| Corrigé | Corrigé disponible | Coche verte "✓ Corrigé" |

### 1.4.4 Vue liste (alternative)

| Caractéristique | Description |
|---|---|
| Format | Tableau avec colonnes : Nom · Matière · Taille · Date · Actions |
| Tri | Click sur header de colonne pour trier |
| Lignes | Hoverables, cliquables (ouvre aperçu) |
| Toggle | Bouton pour basculer entre vue grille et vue liste |

### 1.4.5 Aperçu document (modal viewer)

| Élément | Description |
|---|---|
| PDF Viewer | Render intégré (natif ou iframe) du document |
| En-tête modal | Nom du document + matière + bouton fermer |
| Actions | ⬇ Télécharger, ↗ Partager (lien), 🔖 Marquer comme lu/favori |
| Infos | Uploadé par, date, taille |

### 1.4.6 Suivi devoirs en cours

Section spéciale pour les devoirs avec suivi de statut :

| Élément | Description |
|---|---|
| Titre du devoir | Nom + matière + prof |
| Countdown | "⏰ À rendre le 15 Sep (dans 4j)" |
| Barre de progression | Avancement déclaré manuellement par l'élève |
| Code couleur échéance | Vert (> 5 jours), Ambre (2-5 jours), Rouge (< 2 jours) |
| Statuts | À faire / En cours / Rendu / Corrigé |
| Actions | "📄 Voir l'énoncé" + "✓ Marquer fait" |

### 1.4.7 États vides et réactions Scolio

| État | Comportement |
|---|---|
| Aucune ressource | Scolio avec pile de livres vide — "Aucune ressource pour l'instant. Tes profs vont bientôt en ajouter !" |
| Filtre sans résultat | "Aucun document ne correspond à tes filtres." + bouton [Réinitialiser les filtres] |
| Nouveau document | Scolio avec livre — "Nouveau document de M. Dupont !" |
| Devoir qui approche | Scolio avec montre — "⏰ Ton devoir de maths est dans 2 jours !" |
| Tous devoirs rendus | Scolio célèbre — "Bravo, tout est à jour ! 🎉" |

---

## 1.5 Page Emploi du temps

Page de planification : emploi du temps de classe + révisions personnelles + gestion des devoirs. 3 onglets distincts.

### 1.5.1 Structure en 3 onglets

| Onglet | Contenu principal |
|---|---|
| Planning | Emploi du temps de classe (grille hebdomadaire) |
| Révisions | Planification personnelle des sessions de révision |
| Devoirs | Suivi des devoirs en vue Kanban |

### 1.5.2 Onglet Planning — Vue semaine (grille 7 jours × créneaux)

#### Navigation temporelle

| Élément | Description |
|---|---|
| Titre | "Semaine du 9 Sep 2026" |
| Flèches prev/next | Semaine précédente / suivante |
| Bouton "Aujourd'hui" | Retour à la semaine courante |
| Sélecteur vue | Jour / Semaine / Mois |

#### Types de blocs

| Type | Style visuel |
|---|---|
| Cours normal | Fond coloré (matière) à 15% d'opacité + bordure gauche colorée |
| Pause / Déjeuner | Fond gris clair, icône repas |
| Devoir / Interro | Fond rouge clair, badge "Devoir" ou "Interro" |
| Révision perso | Fond indigo clair, bordure pointillée, badge "Révision" |
| Cours annulé | Fond gris, texte barré, badge "Annulé" |

#### Anatomie d'un bloc de cours

| Élément | Description |
|---|---|
| Icône + nom matière | "📐 Mathématiques" |
| Professeur | "M. Dupont" |
| Salle | "Salle 12" |
| Horaires | "8:30 - 9:30" |
| Lien ressources | "📄 3 ressources" → page Ressources filtrée |

#### Code couleur matières (planning)

| Matière | Couleur |
|---|---|
| Maths | Indigo #6366F1 |
| Physique | Violet #8B5CF6 |
| Français | Rose #F43F5E |
| Histoire-Géo | Ambre #F59E0B |
| Anglais | Émeraude #10B981 |
| SVT | Vert #22C55E |
| Arts | Orange #F97316 |
| Musique | Cyan #06B6D4 |

### 1.5.3 Vue jour (timeline verticale)

| Caractéristique | Description |
|---|---|
| Format | Timeline verticale avec créneaux horaires |
| Contenu | Blocs de cours positionnés selon l'horaire |
| Navigation | Swipe gauche/droite (mobile) pour changer de jour |
| Usage | Vue par défaut sur mobile |

### 1.5.4 Onglet Révisions — Planification personnelle

#### Sections temporelles

| Section | Contenu |
|---|---|
| Aujourd'hui | Révisions du jour avec progression |
| Demain | Révisions du lendemain |
| Cette semaine | Révisions restantes de la semaine |

#### Modal "Planifier une révision"

| Champ | Type | Description |
|---|---|---|
| Matière | Select | Choix parmi les matières |
| Sujet | Texte | Description du sujet à réviser |
| Date | Date picker | Date de la session |
| Heure début | Time picker | Début de la session |
| Heure fin | Time picker | Fin de la session |
| Priorité | Radio | Haute / Moyenne / Basse |
| Rappels | Checkboxes | 30 min avant, 1 jour avant, 1 semaine avant |
| Notes | Textarea | Notes personnelles |

#### Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| Drag & drop | Déplacer une révision dans le temps |
| Progression | Slider ou checkbox pour avancement |
| Terminé | Barré vert, badge "Fait" |
| En retard | Badge rouge "En retard" |
| Récurrence | Option "Répéter chaque semaine" |
| Lien ressources | Bouton vers PDFs de la matière |
| Détection conflits | Alerte si deux révisions se chevauchent (bordure rouge) |

### 1.5.5 Onglet Devoirs — Vue Kanban

#### 3 colonnes

| Colonne | Statut | Couleur |
|---|---|---|
| À faire | Devoirs non commencés | — |
| En cours | Devoirs en progression | — |
| Terminé | Devoirs rendus | Vert |

#### Anatomie d'une card de devoir

| Élément | Description |
|---|---|
| Titre | Nom du devoir |
| Matière | Badge coloré |
| Échéance | "⏰ À rendre : 18 Sep" |
| Priorité | 🔴 Urgent / 🟡 Moyen / 🟢 Lointain |
| Pièces jointes | "📎 2 fichiers liés" |
| Actions | Changer statut, Voir énoncé, Ajouter fichier |

#### Drag & drop

- Déplacer un devoir entre les colonnes Kanban
- Changement de statut automatique

#### Timeline des devoirs (vue alternative)

| Caractéristique | Description |
|---|---|
| Format | Timeline verticale groupée par semaine |
| Contenu | Devoirs avec statut et échéance |
| Code couleur | Selon urgence |

### 1.5.6 Filtres multi-critères

| Filtre | Options |
|---|---|
| Matière | Toutes / matières individuelles |
| Type | Cours / Révision / Devoir / Interro |
| Statut | À faire / En cours / Terminé |

### 1.5.7 Export et synchronisation

| Fonctionnalité | Description |
|---|---|
| Export iCal | Fichier .ical pour import dans calendriers externes |
| Google Calendar | Synchronisation avec Google Calendar |
| Notification sync | Confirmation de synchronisation |

### 1.5.8 États vides et réactions Scolio

| État | Comportement |
|---|---|
| Aucune révision | Scolio avec agenda vide — "Aucune révision planifiée. Commence par planifier ta première session !" + bouton CTA |
| Aucun devoir | Scolio en célébration — "Aucun devoir en cours ! Profite-en pour réviser !" |
| Conflit planning | Alerte visuelle (bordure rouge) — "Attention, tes révisions de Maths et Physique se chevauchent !" |
| Révision terminée | Scolio saute de joie — "Bravo, session terminée !" |
| Devoir en retard | Scolio inquiet — "Ton DM de maths est en retard ! Vite !" |
| Journée chargée | Scolio avec livres — "Grosse journée aujourd'hui, tu vas gérer !" |
| Weekend libre | Scolio en détente — "Pas de cours demain, profite bien !" |

---

## 1.6 Fonctionnalités transversales

Fonctionnalités accessibles depuis plusieurs pages ou via la navigation globale.

### 1.6.1 Profil

#### Identité étudiant

| Élément | Description |
|---|---|
| Photo de profil | Circulaire 80px, bordure 3px indigo. Par défaut : initiales fond indigo-violet |
| Nom complet | Prénom + Nom, Inter Bold 24px |
| Email scolaire | Texte secondaire avec icône |
| Classe | Badge indigo "3ème A" |
| N° élève | Texte mono, petit |
| Bio / Status | Optionnel, 160 caractères max |
| Nom de la mascotte | Personnalisable (défaut : "Scolio") |
| Bouton modifier | Modal avec champs éditables (bio, photo, nom mascotte). Champs verrouillés : prénom, nom, email, classe |

#### 4 mini-stats

| Stat | Valeur | Lien |
|---|---|---|
| Moyenne | Valeur / 20 | → Statistiques |
| Rang | Position / total | → Statistiques |
| Streak | Jours consécutifs | → Streak |
| Notes | Total évaluations | → Statistiques |

#### 12 badges avec progression

| Badge | Condition | Icône |
|---|---|---|
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

**Affichage** :
- Badges obtenus : couleur, avec nom et condition
- Badges à débloquer : grisés avec cadenas, condition au hover
- Progression : barre de progression pour les badges en cours
- Click sur badge : modal avec détail, date d'obtention, stats associées

#### Feed d'activité

Timeline verticale des 10 dernières actions :
- Notes obtenues, devoirs rendus, révisions effectuées
- Documents téléchargés, badges obtenus, messages importants
- Format : icône + description + timestamp relatif

### 1.6.2 Paramètres

#### Apparence

| Option | Valeurs | Description |
|---|---|---|
| Thème | 3 cartes : Clair ☀️ / Sombre 🌙 / Système 💻 | Preview miniature de chaque thème, transition animée |
| Couleur d'accentuation | 6 swatches : Indigo, Violet, Rouge, Vert, Orange, Noir | Preview en temps réel sur boutons et éléments actifs |
| Taille de police | Slider 4 niveaux : Petit, Normal (défaut), Grand, Très grand | Affecte toute l'interface |
| Densité interface | 3 options radio : Compact / Confortable (défaut) / Spacieux | Affecte l'espacement global |

#### Notifications

| Option | Description |
|---|---|
| Toggles push par catégorie | Messages, Documents, Rappels devoirs, Rappels révisions, Notes, Changements emploi du temps, Messages mascotte |
| In-app : badge compteur | Toggle on/off |
| In-app : son | Toggle on/off |
| In-app : vibration (mobile) | Toggle on/off |
| Rappels devoirs | Délai (1 jour avant), La veille à 18h, Le matin à 7h, 2 jours avant |
| Heures silencieuses | Toggle + plage horaire (ex: 22:00 → 07:00) |

#### Langue & région

| Option | Valeurs |
|---|---|
| Langue | Français (défaut), autres langues |
| Fuseau horaire | Europe/Paris (UTC+1) |
| Format de date | JJ/MM/AAAA, MM/JJ/AAAA, AAAA-MM-JJ |
| Premier jour semaine | Lundi / Dimanche |

#### Accessibilité

| Option | Description |
|---|---|
| Contraste élevé | Toggle — augmente les contrastes |
| Réduire les animations | Toggle — désactive les animations |
| Mode daltonien | Dropdown : Aucun / Protanopie / Deutéranopie / Tritanopie |
| Screen reader optimisé | Toggle — améliore la compatibilité |
| Taille de la mascotte | Dropdown : Petit (48px) / Normal (64px) / Grand (80px) |

#### Confidentialité

| Option | Description |
|---|---|
| Profil visible | Toggle — visible par les autres élèves |
| Classements | Toggle — afficher dans les classements |
| Messages personnels | Toggle — autoriser les messages 1-to-1 |
| Statut en ligne | Toggle — afficher le statut en ligne |
| Exporter mes données | Bouton — export complet des données |
| Supprimer mon compte | Bouton (destructif) — suppression du compte |

#### Appareils & session

| Élément | Description |
|---|---|
| Appareil actuel | Nom du navigateur + OS, mention "(Cet appareil)" |
| Autres appareils | Liste avec "Dernière connexion" + bouton "Déconnecter" |
| Déconnexion globale | Bouton "Déconnecter tous les autres appareils" |

#### À propos

| Élément | Description |
|---|---|
| Version | Numéro de version + nom du code |
| Liens | Conditions d'utilisation, Politique de confidentialité, Centre d'aide, Contacter le support |

#### Déconnexion

- Bouton rouge en bas de sidebar
- Modal de confirmation : "Es-tu sûr de vouloir te déconnecter ?"
- Boutons : [Rester connecté] [Se déconnecter]

### 1.6.3 Notifications

#### 7 catégories

| Catégorie | Icône | Couleur | Exemples |
|---|---|---|---|
| Message | 💬 | Indigo #4F46E5 | Nouveau message, invitation |
| Ressource | 📄 | Émeraude #10B981 | Nouveau PDF, nouveau devoir |
| Note | 📊 | Violet #7C3AED | Nouvelle note publiée |
| Rappel | ⏰ | Ambre #F59E0B | Devoir à rendre, révision |
| Classement | 🏆 | Ambre #F59E0B | Mise à jour du ranking |
| Système | ⚙️ | Gris #6B7280 | Mise à jour app, maintenance |
| Mascotte | 🐾 | Secondaire #7C3AED | Messages de Scolio |

#### 3 niveaux de priorité

| Priorité | Comportement | Exemples |
|---|---|---|
| Haute | Son + vibration + badge + toast | Devoir demain, note publiée |
| Normale | Badge + toast | Nouveau message, nouveau document |
| Basse | Badge seulement | Mise à jour classement, suggestion |

#### Tiroir in-app (drawer)

| Élément | Description |
|---|---|
| Structure | Panneau latéral droit, groupé par jour (Aujourd'hui, Hier, Cette semaine) |
| Bouton global | "Tout marquer comme lu" en en-tête |
| Anatomie notification | Icône catégorie colorée + Source + Timestamp + Titre + Corps (2 lignes max, tronqué) + Dot non-lu indigo |
| Actions | Click → page liée + marque comme lue. Swipe gauche (mobile) → supprimer. Long press → menu contextuel |

#### Toasts

| Caractéristique | Description |
|---|---|
| Position | Top-right (haut à droite) |
| Stack | Max 3 visibles simultanément |
| Auto-dismiss | 5 secondes |
| Animation | Slide-in depuis la droite + fade |
| Structure | Icône + Titre + Corps + Bouton action optionnel + [X] fermer |
| Code couleur | Info : indigo clair. Succès : emerald clair. Warning : ambre clair. Erreur : rouge clair |

#### Badges compteurs

| Emplacement | Description |
|---|---|
| Cloche TopBar | Cercle rouge avec nombre de notifications non lues, max "99+" |
| Animation | Pulse léger quand nouvelle notification arrive |
| Click | Ouvre le drawer de notifications |

#### Push navigateur/mobile

| Caractéristique | Description |
|---|---|
| Permission | Demandée au premier accès (modal d'explication) |
| Click | Ouvre l'app sur la page concernée |
| Regroupement | Notifications du même groupe = 1 notification empilée |
| Heures silencieuses | Respecte la configuration des paramètres |

#### Deep links

| Notification | Page de destination |
|---|---|
| Nouveau message | Messagerie → conversation concernée |
| Nouveau document | Ressources → section de la matière |
| Nouvelle note | Statistiques → détail de la matière |
| Rappel devoir | Emploi du temps → onglet Devoirs |
| Rappel révision | Emploi du temps → onglet Révisions |
| Classement MAJ | Statistiques → section Ranking |
| Badge débloqué | Profil → section Badges |
| Invitation message | Messagerie → modal d'acceptation |

### 1.6.4 Mascotte "Scolio"

#### Personnage

| Caractéristique | Description |
|---|---|
| Design | Personnage rond style hibou/hamster, corps indigo, yeux expressifs, petites oreilles |
| Nom | "Scolio" (défaut), personnalisable par l'élève |
| Style | Illustration vectorielle, animations fluides type Lottie |
| Personnalité | Bienveillant, encourageant, jamais condescendant. Messages courts et dynamiques |

#### 3 placements

| Placement | Taille | Description |
|---|---|---|
| Flottant (permanent) | 64×64px | Fixed bottom-right, draggable, click = mini-panel avec message du jour + actions rapides. Animations passives : respiration + clignement |
| Contextuel (event-driven) | 128×128px | Apparaît en haut de page ou à côté d'un élément avec bulle de dialogue. Disparaît après 5s ou au click |
| Plein écran (célébrations) | 256×256px | Overlay avec confettis/étoiles/feux d'artifice, message de félicitation, bouton fermer |

#### 11 états animés

| État | Déclencheur | Animation | Durée |
|---|---|---|---|
| Neutre | Par défaut | Respiration + clignement | Loop |
| Content | Bonne note, objectif atteint | Saute de joie | 2s |
| Encourageant | Note moyenne, effort | Sourire + pouce levé | 2s |
| Inquiet | Baisse de perf, streak perdu | Air préoccupé + petit nuage | 3s |
| Célébration | Record, top ranking | Danse + confettis | 4s |
| Guide | Nouvelle fonctionnalité | Pointe du doigt + bulle | 3s |
| Endormi | Inactivité > 3 jours | Dort avec Zzz | Loop |
| Excité | Devoir à venir, événement | Rebondit rapidement | 2s |
| Triste | Échec, mauvaise note | Regard baissé, console | 3s |
| Lecteur | Document ouvert | Lunettes + livre | Loop |
| Sport | Révision terminée | Essuie la sueur | 2s |

**Transitions** : fondu enchaîné 300ms entre états. Retour au neutre après 5s si pas d'événement.

#### Catalogue de messages

**Salutations temporelles :**
- Matin (7h-12h) : "Bonjour Ahmed ! Prêt pour une nouvelle journée ?"
- Après-midi (12h-18h) : "Bon après-midi ! Tu as des révisions aujourd'hui."
- Soir (18h-22h) : "Bonsoir ! N'oublie pas de réviser un peu ce soir."
- Nuit (22h-7h) : "Il est tard ! Pense à te reposer pour être en forme demain."

**Messages contextuels par page :**
- Statistiques : commentaire sur la moyenne, progression, classement
- Ressources : nouveau document, devoir qui approche, tous rendus
- Emploi du temps : journée chargée, journée libre, weekend
- Messagerie : nouveau message, invitation reçue
- Profil : nouveau badge, streak record

**Encouragements aléatoires :**
- "Tu fais du bon travail ! Continue !"
- "Chaque effort compte. Je suis fier de toi !"
- "N'abandonne jamais, même quand c'est dur !"
- "La régularité est la clé du succès !"

**Rappels :**
- Devoir en retard : "Ton DM est en retard ! Vite !"
- Révision oubliée : "Tu avais prévu de réviser les maths aujourd'hui !"
- Inactivité : "Ça fait 2 jours... Tu me manques !"

#### Personnalisation

**Thèmes de la mascotte :**

| Thème | Apparence |
|---|---|
| Classique | Indigo/violet (défaut) |
| Sport | Bandeau rouge, sifflet |
| Lecteur | Lunettes, béret |
| Fête | Chapeau de fête, confettis |
| Saison | Père Noël, lapin de Pâques, etc. |

**Niveaux de progression visuelle (selon activité) :**

| Niveau | Condition | Déblocage |
|---|---|---|
| 1 | 0-7 jours | Petit, basique |
| 2 | 8-30 jours | Accessoire débloqué |
| 3 | 31-90 jours | Animation spéciale |
| 4 | 90+ jours | Apparence complète |

#### Accessibilité mascotte

| Option | Description |
|---|---|
| Tailles | 48px (petit) / 64px (normal) / 80px (grand) |
| Mode statique | Pas d'animation pour utilisateurs sensibles |
| Contraste élevé | Version haute contraste disponible |
| Alt text | Texte alternatif descriptif pour chaque état (screen reader) |
| Repositionnable | Déplaçable dans les coins de l'écran |
| Désactivable | Option de masquage complet |

---

## 1.7 Synthèse de l'audit — Problèmes identifiés

### Problèmes transversaux

| # | Problème | Pages affectées | Sévérité |
|---|---|---|---|
| P1 | **Données placeholder** — Valeurs "0.00", "--" affichées quand pas de données | Dashboard, Statistiques | 🔴 Haute |
| P2 | **Liste de notes dupliquée** — Même liste affichée sur Dashboard ET Statistiques | Dashboard, Statistiques | 🔴 Haute |
| P3 | **Terminologie mixte FR/EN** — "HomeWork" au lieu de "Devoir", labels inconsistants | Ressources, Emploi du temps | 🟡 Moyenne |
| P4 | **Avatars inconsistants** — Styles d'avatars différents d'une page à l'autre | Messagerie, Profil | 🟡 Moyenne |
| P5 | **Pas d'indicateurs non-lus** — Absence de badges sur la messagerie et les notifications | Messagerie, Notifications | 🔴 Haute |
| P6 | **Navigation incohérente** — Titre "Matières" au lieu de "Emploi du temps" dans la nav | Emploi du temps | 🔴 Haute |
| P7 | **Pas de CTA clairs** — Pages sans actions principales identifiant le prochain pas | Dashboard, Ressources | 🟡 Moyenne |
| P8 | **Carrousel décoratif inutile** — Élément visuel sans fonction sur le Dashboard | Dashboard | 🟢 Basse |
| P9 | **Graphique masqué** — Carte flottante overlay le graphique d'évolution | Statistiques | 🟡 Moyenne |
| P10 | **Deux vues radicalement différentes** — Vues grille/liste sans cohérence visuelle | Ressources | 🟡 Moyenne |
| P11 | **"Sujet non spécifié"** — Affichage brut quand le sujet est vide | Ressources | 🟡 Moyenne |
| P12 | **Jour actuel non highlighté** — Pas de distinction visuelle du jour en cours | Emploi du temps | 🟡 Moyenne |
| P13 | **Scroll horizontal sans affordance** — Pas d'indication que les éléments sont scrollables | Ressources, Emploi du temps | 🟢 Basse |
| P14 | **Bouton "+" sans label** — Actions peu claires sans texte descriptif | Messagerie | 🟢 Basse |
| P15 | **Titre "Annonces" coupé** — Texte tronqué par manque d'espace | Messagerie | 🟢 Basse |

### Problèmes par page

#### Dashboard
- Surcharge d'information — trop de sections visibles simultanément
- KPIs affichant "0.00" au lieu de messages d'état vide élégants
- Liste complète de notes dupliquée avec la page Statistiques
- Carrousel décoratif sans valeur fonctionnelle
- Absence de CTA pour guider l'élève

#### Statistiques
- Graphique d'évolution masqué par une carte flottante en overlay
- Notes dupliquées depuis la page Dashboard
- Données affichant "--" quand indisponibles
- Onglets de matières peu clairs visuellement

#### Messagerie
- Aucun indicateur de messages non lus (ni badge, ni texte gras)
- Pas de timestamps visibles sur les conversations
- Avatars avec styles inconsistants
- Bouton "+" sans label explicite
- Texte "Annonces" tronqué

#### Ressources
- Deux vues (grille/liste) radicalement différentes sans transition visuelle
- "Sujet non spécifié" affiché brutalement
- Pas de filtrage par matière disponible
- Terminologie anglaise "HomeWork"

#### Emploi du temps
- Titre "Matières" au lieu de "Emploi du temps" dans la navigation
- Icônes sans but fonctionnel
- Jour actuel non mis en évidence
- Scroll horizontal sans indication visuelle (affordance)

---

# SECTION 2 : PROPOSITION DE REFONTE UI/UX PAR PAGE

> Pour chaque page : problèmes identifiés, nouvelle architecture de l'information avec wireframe ASCII, et améliorations concrètes.

---

## 2.1 Dashboard

### Problèmes actuels identifiés

| # | Problème | Impact |
|---|---|---|
| D1 | Surcharge informationnelle — trop de sections visibles simultanément | L'élève ne sait pas par où commencer |
| D2 | KPIs affichant "0.00" au lieu de messages d'état vide élégants | Impression de bug, démoralisant |
| D3 | Liste complète de notes dupliquée avec la page Statistiques | Redondance, maintenance difficile |
| D4 | Carrousel décoratif sans valeur fonctionnelle | Perte d'espace, distraction |
| D5 | Pas de CTA clair pour guider l'élève | L'élève est passif, pas dirigé |

### Nouvelle architecture de l'information

```
┌──────────────────────────────────────────────────────────┐
│  ☀️ Bonjour, Ahmed !                    [Avatar 40px]  │
│  Vendredi 11 Septembre 2026                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │ [Scolio] "Tu as 5 cours aujourd'hui. Courage !"  │  │
│  └───────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── KPI GRID (2×2 mobile / 4×1 desktop) ────────────┐  │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │  │
│  │ │ 📊 14.2  │ │ 🏆 5/32  │ │ 🔥 12j   │ │ 📝 3     │ │  │
│  │ │ ↑ +0.5   │ │ ↑ +2     │ │ Record!  │ │ à faire  │ │  │
│  │ │[→ Stats] │ │[→ Stats] │ │[→ Profil]│ │[→ Devoirs]│ │  │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── PROCHAIN COURS (carte large) ────────────────────┐  │
│  │  📐 Mathématiques — M. Dupont                       │  │
│  │  Salle 12 · 8:30 - 9:30          [Dans 45 min 🔥]  │  │
│  │                                    [Y aller →]      │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── DEVOIRS URGENTS (scroll horizontal) ─────────────┐  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │  │
│  │  │ 🔴 DM    │ │ 🟡 Exo   │ │ 🟢 Exo   │ → scroll   │  │
│  │  │ Maths    │ │ Physique │ │ Anglais  │            │  │
│  │  │ 2j       │ │ 5j       │ │ 8j       │            │  │
│  │  │ ████░░   │ │ ░░░░░░   │ │ ░░░░░░   │            │  │
│  │  └──────────┘ └──────────┘ └──────────┘            │  │
│  │                              [Voir tous →]          │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── DERNIÈRES NOTES (top 3 compact) ─────────────────┐  │
│  │  📐 Maths 15/20 ↑   🔬 Physique 13/20 →            │  │
│  │  📚 Français 16/20 ↑                   [Voir stats →]│  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── MESSAGES RÉCENTS (top 3) ────────────────────────┐  │
│  │  💬 Maths (M. Dupont) — "Exercice 5..."   30 min    │  │
│  │  💬 Physique (Mme Benali) — "TP demain"   2h        │  │
│  │                              [Ouvrir messagerie →]   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Améliorations concrètes

| Amélioration | Description |
|---|---|
| ❌ Supprimer la liste complète de notes | Remplacée par le top 3 compact. La liste complète vit dans Statistiques |
| ❌ Supprimer le carrousel décoratif | Aucun intérêt fonctionnel, libère de l'espace |
| ✅ KPIs tous cliquables | Chaque carte redirige vers la page pertinente |
| ✅ États vides élégants | Remplacer "0.00" par "—" avec message contextuel de Scolio |
| ✅ Countdown temps réel | Le prochain cours affiche un countdown live |
| ✅ Scroll horizontal devoirs | Indicateur visuel (dégradé en bordure) pour l'affordance |
| ✅ CTA principaux | Chaque section a un CTA clair : "Y aller", "Voir tous", "Voir stats" |
| ✅ Bulle Scolio contextuelle | Message dynamique selon heure, événements, streak |

---

## 2.2 Statistiques

### Problèmes actuels identifiés

| # | Problème | Impact |
|---|---|---|
| S1 | Graphique masqué par carte flottante en overlay | Données invisibles, graphique illisible |
| S2 | Notes dupliquées depuis le Dashboard | Redondance, confusion |
| S3 | Données affichant "--" quand indisponibles | Impression de bug |
| S4 | Onglets matières peu clairs visuellement | Navigation confuse dans le drill-down |

### Nouvelle architecture de l'information

```
┌──────────────────────────────────────────────────────────┐
│  📊 Statistiques                                         │
│  [● Mensuel]  [○ Trimestriel]  [○ Annuel]               │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── KPI ROW (4 cartes compactes) ────────────────────┐  │
│  │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │  │
│  │ │ 14.2   │ │ 5ᵉ/32  │ │ 24     │ │ 🔥 12j │       │  │
│  │ │ /20    │ │ Top 15%│ │ évalu. │ │ Record │       │  │
│  │ │ ████░░ │ │        │ │ +1.4   │ │ ▢▢▢▢▢▢▢│       │  │
│  │ └────────┘ └────────┘ └────────┘ └────────┘       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── GRAPHIQUE ÉVOLUTION (pleine largeur, SANS overlay) ┐│
│  │  18 ┤                                                  ││
│  │  16 ┤                          ●───●                  ││
│  │  14 ┤        ●───●───●───●───●                        ││
│  │  12 ┤  ●───●                    \                      ││
│  │  10 ┤                              ●                  ││
│  │     └──┬───┬───┬───┬───┬───┬───┬──→                  ││
│  │       Sep Oct Nov Déc Jan Fév Mar                    ││
│  │  ─── Ma moyenne    - - - Moyenne classe              ││
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── PERFORMANCE PAR MATIÈRE (barres horizontales) ─────┐│
│  │  📐 Maths       ████████████░░ 15.2  → click          ││
│  │  🔬 Physique    ██████████░░░░ 13.0  → click          ││
│  │  📚 Français    ██████████████ 16.5  → click          ││
│  │  🌍 Histoire    ████████░░░░░░ 11.0  → click          ││
│  │  🇬🇧 Anglais    ███████████░░░ 14.0  → click          ││
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── CLASSEMENT (repliable) ──────────────────────────┐  │
│  │  🏆 Classement — Septembre 2026        [Anonymat ○] │  │
│  │  🥇 1. Fatima B.        17.8                        │  │
│  │  🥈 2. Karim M.         17.2                        │  │
│  │  🥉 3. Léa P.           16.5                        │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │  ★ 5. TOI (Ahmed K.)   14.2                │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  │  Ta position : 5ᵉ/32 (Top 15%)  ↑ +2               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Améliorations concrètes

| Amélioration | Description |
|---|---|
| ❌ Supprimer la liste de notes | La liste complète des notes vit uniquement dans le drill-down par matière |
| ✅ Graphique pleine largeur | Supprimer toute carte flottante en overlay du graphique |
| ✅ Tooltips interactifs | Hover sur un point = "Janvier — Moy: 14.5 — Rang: 4e" |
| ✅ Barres matières cliquables | Click → drill-down avec liste évaluations + mini courbe + moyenne pondérée |
| ✅ Classement repliable | Section collapsible, position de l'élève toujours visible en surbrillance |
| ✅ Mode anonymat | Toggle optionnel pour masquer les noms des autres élèves |
| ✅ États vides avec mascotte | Remplacer "--" par des messages Scolio contextuels |

---

## 2.3 Messagerie

### Problèmes actuels identifiés

| # | Problème | Impact |
|---|---|---|
| M1 | Pas d'indicateurs de messages non lus | L'élève ne sait pas quelles conversations sont nouvelles |
| M2 | Pas de timestamps visibles | Impossible de savoir quand un message a été envoyé |
| M3 | Avatars inconsistants | Styles différents d'une conversation à l'autre |
| M4 | Bouton "+" sans label | Action peu claire |
| M5 | "Annonces" coupé | Texte tronqué par manque d'espace |

### Nouvelle architecture de l'information

```
┌──────────────────────────────────────────────────────────┐
│  💬 Messagerie                      [+ Nouveau message]  │
├──────────────┬───────────────────────────────────────────┤
│              │                                           │
│  [Tous]      │  ┌─────────────────────────────────────┐  │
│  [Groupes]   │  │ 📐 Mathématiques       📋 👥 📌 ⋮  │  │
│  [1-to-1]    │  │ M. Dupont · 32 membres              │  │
│              │  ├─────────────────────────────────────┤  │
│  🔍 Recher-  │  │                                     │  │
│  cher...     │  │  [Avatar] Ahmed K.          14:30   │  │
│              │  │  ┌─────────────────────────────────┐ │  │
│  ┌────────┐  │  │  │ Quelqu'un a compris l'ex 5 ?   │ │  │
│  │🟢 3│ Maths   │  │  └─────────────────────────────────┘ │  │
│  │  │ M. Dupont    │  │                                     │  │
│  │  │ "Exercice 5…"│  │                        14:32 [Avatar]│
│  │  │      14:32 ●2│  │  ┌─────────────────────────────────┐ │
│  ├────────┤  │  │  │  │ Oui regarde le PDF de M. Dupont│ │  │
│  │🟢 0│ Physique   │  │  └─────────────────────────────────┘ │  │
│  │  │ Mme Benali   │  │  ✓✓ Lu                              │  │
│  │  │ "TP demain…" │  │                                     │  │
│  │  │      11:00   │  ├─────────────────────────────────────┤  │
│  ├────────┤  │  │  📎  Écrire un message...   😊 🎤 [➤]  │  │
│  │  ...   │  │  └─────────────────────────────────────┘  │
│  │        │  │                                           │
├──────────────┴───────────────────────────────────────────┤
└──────────────────────────────────────────────────────────┘
```

### Améliorations concrètes

| Amélioration | Description |
|---|---|
| ✅ Badges non-lus rouges | Cercle rouge avec nombre sur chaque conversation non lue |
| ✅ Timestamps et aperçu | Chaque conversation affiche : dernier message tronqué + heure |
| ✅ Avatars uniformisés | Même style partout : circulaire, initiales gradient indigo-violet si pas de photo |
| ✅ Onglets Tous/Groupes/1-to-1 | 3 onglets au lieu de 2 pour un filtrage plus clair |
| ✅ Bouton "Nouveau message" avec label | Texte explicite au lieu d'un simple "+" |
| ✅ Système d'invitation modal | Recherche d'élève + envoi invitation + acceptation/refus |
| ✅ Texte gras pour non-lus | Les conversations non lues ont le texte en gras dans la sidebar |
| ✅ Séparateur "Nouveaux messages" | Ligne de séparation dans le fil entre lu et non-lu |
| ✅ "Annonces" → texte complet | Réagencer l'espace pour éviter la troncature |

---

## 2.4 Ressources

### Problèmes actuels identifiés

| # | Problème | Impact |
|---|---|---|
| R1 | Deux vues radicalement différentes (grille/liste) | Incohérence visuelle, confusion |
| R2 | "Sujet non spécifié" affiché brutalement | Texte non fini, peu professionnel |
| R3 | Pas de filtrage par matière | L'élève ne peut pas isoler les documents d'un cours |
| R4 | "HomeWork" en anglais | Terminologie incohérente dans une app en français |

### Nouvelle architecture de l'information

```
┌──────────────────────────────────────────────────────────┐
│  📁 Ressources                                           │
├──────────────────────────────────────────────────────────┤
│  [● Devoirs]  [○ Documents]                              │
├──────────────────────────────────────────────────────────┤
│  Filtres :                                               │
│  [Toutes] [📐 Maths] [🔬 Physique] [📚 Français] [...]  │
│  Type: [Tous ▾]  Statut: [Tous ▾]  Tri: [Récent ▾]     │
│  🔍 Rechercher un document...                            │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── VUE GRILLE (2 cols mobile / 4 desktop) ──────────┐│
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐││
│  │  │ 📄           │  │ 📄           │  │ 📄           │││
│  │  │ Cours Ch.3   │  │ Exo Fonctions│  │ DM n°4       │││
│  │  │ ─────────    │  │ ─────────    │  │ ─────────    │││
│  │  │ 📐 Maths     │  │ 📐 Maths     │  │ 📐 Maths     │││
│  │  │ 10 Sep·2.1MB │  │ 9 Sep·850KB  │  │ 8 Sep·1.5MB  │││
│  │  │ [⬇] [⋮]     │  │ [⬇] [⋮]     │  │ [⬇ ⏰2j] [⋮] │││
│  │  └──────────────┘  └──────────────┘  └──────────────┘││
│  │                                                        ││
│  │  ┌──────────────┐  ┌──────────────┐                  ││
│  │  │ 📄      [NEW]│  │ 📄           │                  ││
│  │  │ TP Chimie    │  │ Corrigé DMn°3│                  ││
│  │  │ ─────────    │  │ ─────────    │                  ││
│  │  │ 🔬 Physique  │  │ 🔬 Physique  │                  ││
│  │  │ 11 Sep·3.2MB │  │ 5 Sep·980KB  │                  ││
│  │  │ [⬇] [⋮]     │  │ [✓ Corrigé]  │                  ││
│  │  └──────────────┘  └──────────────┘                  ││
│  └────────────────────────────────────────────────────────┘│
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Améliorations concrètes

| Amélioration | Description |
|---|---|
| ✅ Onglets Devoirs / Documents | Séparation claire en 2 onglets au lieu de tout mélanger |
| ✅ Pills matières obligatoires | Filtrage par matière avec multi-sélection, placé en haut |
| ✅ Vue grille unifiée | 2 colonnes mobile, 4 desktop. Mêmes cards, même style partout |
| ✅ Badges visuels | Deadline ambre "⏰ 2j", Nouveau indigo "NEW", Corrigé vert "✓" |
| ✅ Terminologie 100% française | "Devoir" au lieu de "HomeWork", "Ressources" partout |
| ✅ Sujet vide élégant | Remplacer "Sujet non spécifié" par "—" avec style discret |
| ✅ Transition grille/liste | Animation fluide entre les deux vues, même données |

---

## 2.5 Emploi du temps

### Problèmes actuels identifiés

| # | Problème | Impact |
|---|---|---|
| E1 | Titre "Matières" au lieu de "Emploi du temps" | Confusion majeure, l'élève ne sait pas où il est |
| E2 | Icônes sans but fonctionnel | Éléments décoratifs sans utilité |
| E3 | Jour actuel non highlighté | Impossible de se repérer rapidement |
| E4 | Scroll horizontal sans affordance | L'élève ne découvre pas les jours suivants |

### Nouvelle architecture de l'information

```
┌──────────────────────────────────────────────────────────┐
│  📅 Emploi du temps                                      │
│  [◀ Semaine du 9 Sep ▶]        [Aujourd'hui] [Jour|Sem|Mois]│
├──────────────────────────────────────────────────────────┤
│  [● Planning]  [○ Révisions]  [○ Devoirs]                │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─── Sélecteur jour horizontal ──────────────────────┐  │
│  │  Lun 9  Mar 10  Mer 11  ●Jeu 12  Ven 13  Sam 14   │  │
│  │   (jour actuel highlighté en indigo)                │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── VUE JOUR (timeline verticale) ───────────────────┐  │
│  │  8:00 ─────────────────────────────────────────────  │  │
│  │  8:30 │ 📐 Maths — M. Dupont — Salle 12             │  │
│  │  9:00 │                                              │  │
│  │  9:30 ─────────────────────────────────────────────  │  │
│  │  10:00│ 🔬 Physique — Mme Benali — Salle 4          │  │
│  │  10:30│                                              │  │
│  │  11:00 ────────────────────────────────────────────  │  │
│  │  12:00│ 🍽️ Pause déjeuner                           │  │
│  │  13:00 ────────────────────────────────────────────  │  │
│  │  13:30│ 🧪 SVT — M. Girard — Salle 6                │  │
│  │  14:00│                                              │  │
│  │  ...                                                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── VUE SEMAINE (grille, desktop) ───────────────────┐  │
│  │  Heure │ Lun  │ Mar  │ Mer  │ Jeu  │ Ven  │ S  │ D  │  │
│  │  8:30  │ 📐   │ 🔬   │ 📐   │ 📚   │ 📐   │    │    │  │
│  │        │Maths │Phy   │Maths │Fr    │Maths │    │    │  │
│  │  10:30 │ 📚   │ 📐   │ 🌍   │ 🔬   │ 🇬🇧  │    │    │  │
│  │        │Fr    │Maths │Hist  │Phy   │Angl  │    │    │  │
│  │  12:00 │ Pause│ Pause│ Pause│ Pause│ Pause│    │    │  │
│  │  13:30 │ 🧪   │ 🇬🇧   │ 📚   │ 🧪   │      │    │    │  │
│  │        │SVT   │Angl  │Fr    │SVT   │      │    │    │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─── KANBAN DEVOIRS (onglet Devoirs) ─────────────────┐  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐            │  │
│  │  │ À faire   │ │ En cours  │ │ Terminé   │            │  │
│  │  │ DM Maths  │ │ Exo Phy   │ │ DM Français│            │  │
│  │  │ ⏰ 18 Sep │ │ ⏰ 15 Sep │ │ ✅ 10 Sep │            │  │
│  │  │ 🔴 Urgent │ │ 🟡 Moyen  │ │            │            │  │
│  │  └──────────┘ └──────────┘ └──────────┘            │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                            │
└──────────────────────────────────────────────────────────┘
```

### Améliorations concrètes

| Amélioration | Description |
|---|---|
| ✅ Titre corrigé | "Emploi du temps" au lieu de "Matières" dans la navigation |
| ✅ Jour actuel highlighté | Sélecteur jour horizontal + bloc jour en indigo |
| ✅ 3 onglets clairs | Planning / Révisions / Devoirs avec contenu distinct |
| ✅ Vue jour timeline | Timeline verticale pour mobile, grille semaine pour desktop |
| ✅ Affordance scroll | Flèches ou dégradé en bordure pour indiquer le scroll |
| ✅ Navigation semaine | Flèches prev/next + bouton "Aujourd'hui" + sélecteur Jour/Semaine/Mois |
| ✅ Kanban devoirs | Drag & drop entre colonnes, pièces jointes, notes |
| ✅ Icônes supprimées | Supprimer les icônes décoratives sans but fonctionnel |
| ✅ Export calendrier | Export iCal + Google Calendar |

---

# SECTION 3 : DESIGN SYSTEM COMPLET

> Spécifications techniques précises pour l'implémentation. Chaque composant est défini avec ses propriétés exactes (couleurs, tailles, espacements, états).

---

## 3.1 Palette de couleurs

### Couleurs principales

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Primaire | Indigo | `#4F46E5` | Boutons principaux, liens, éléments actifs, navigation |
| Primaire light | Indigo 50 | `#EEF2FF` | Backgrounds actifs, hover states |
| Secondaire | Violet | `#7C3AED` | Accents, badges spéciaux, gradients |
| Secondaire light | Violet 50 | `#F5F3FF` | Backgrounds secondaires actifs |
| Succès | Émeraude | `#10B981` | Validation, notes ≥ 14, complétion |
| Succès light | Émeraude 100 | `#D1FAE5` | Backgrounds succès |
| Alerte | Ambre | `#F59E0B` | Avertissements, deadlines 2-5j, notes 10-12 |
| Alerte light | Ambre 100 | `#FEF3C7` | Backgrounds alerte |
| Erreur | Rouge | `#EF4444` | Erreurs, notes < 10, deadlines < 2j, destructif |
| Erreur light | Rouge 100 | `#FEE2E2` | Backgrounds erreur |

### Couleurs neutres

| Rôle | Hex | Usage |
|---|---|---|
| Background | `#F9FAFB` | Fond général de l'application |
| Surface | `#FFFFFF` | Cards, modals, panels |
| Texte primaire | `#111827` | Titres, contenu principal |
| Texte secondaire | `#6B7280` | Sous-titres, métadonnées, placeholders |
| Bordure | `#E5E7EB` | Séparateurs, bordures de cards, inputs |

### Dark mode

| Rôle | Hex | Usage |
|---|---|---|
| Background | `#111827` | Fond général |
| Surface | `#1F2937` | Cards, modals, panels |
| Texte primaire | `#F9FAFB` | Titres, contenu principal |
| Texte secondaire | `#9CA3AF` | Sous-titres, métadonnées |
| Bordure | `#374151` | Séparateurs, bordures |

> **Note accessibilité (WCAG 2.2 AA)** : Tous les contrastes texte/fond doivent être ≥ 4.5:1 pour le texte normal, ≥ 3:1 pour le texte large (≥ 18px ou ≥ 14px bold).

### Couleurs par matière

| Matière | Hex | Matière | Hex |
|---|---|---|---|
| Maths | `#6366F1` | Arts | `#F97316` |
| Physique | `#8B5CF6` | Musique | `#06B6D4` |
| Français | `#F43F5E` | EPS | `#EF4444` |
| Histoire-Géo | `#F59E0B` | Espagnol | `#14B8A6` |
| Anglais | `#10B981` | Éducation Civique | `#0EA5E9` |
| SVT | `#22C55E` | Technologie | `#84CC16` |

---

## 3.2 Typographie

### Polices

| Usage | Police | Source | Poids disponibles |
|---|---|---|---|
| Titres + UI | Inter | Google Fonts | Regular 400, Medium 500, SemiBold 600, Bold 700 |
| Données chiffrées | JetBrains Mono | Google Fonts | Regular 400, Medium 500, Bold 700 |

### Échelle typographique

| Nom | Taille | Poids | Interligne | Letter-spacing | Usage |
|---|---|---|---|---|---|
| Display | 40px | Bold 700 | 1.2× | -0.02em | KPIs, valeurs hero |
| H1 | 32px | Bold 700 | 1.2× | -0.02em | Titres de page |
| H2 | 24px | SemiBold 600 | 1.3× | normal | Sous-titres de section |
| H3 | 20px | SemiBold 600 | 1.3× | normal | Titres de card |
| Body Large | 16px | Regular 400 | 1.5× | normal | Corps de texte important |
| Body | 14px | Regular 400 | 1.5× | normal | Corps de texte standard |
| Caption | 12px | Medium 500 | 1.4× | normal | Labels, métadonnées, badges |
| Overline | 10px | SemiBold 600 | 1.4× | 0.05em | Sur-titres, catégories |

### Règles d'usage

- **Titres** : toujours Inter, jamais JetBrains Mono
- **Valeurs numériques** (notes, moyennes, rangs, streaks) : toujours JetBrains Mono pour l'alignement des chiffres
- **Corps de texte** : Inter Regular ou Medium
- **Labels de boutons et onglets** : Inter Medium ou SemiBold
- **Taille minimale** : jamais en-dessous de 12px pour la lisibilité mobile

---

## 3.3 Composants récurrents

### 3.3.1 Boutons

#### Variantes

| Variante | Background | Texte | Bordure | Usage |
|---|---|---|---|---|
| Primary | `#4F46E5` | Blanc `#FFFFFF` | Aucune | Actions principales (CTA) |
| Secondary | `#EEF2FF` | `#4F46E5` | Aucune | Actions secondaires |
| Ghost | Transparent | `#4F46E5` | Aucune | Actions tertiaires, liens |
| Danger | `#EF4444` | Blanc `#FFFFFF` | Aucune | Actions destructives (supprimer) |
| Outline | Transparent | `#111827` | `#E5E7EB` 1px | Actions neutres, annuler |

#### Tailles

| Taille | Padding | Font-size | Height | Border-radius |
|---|---|---|---|---|
| S (petit) | 8px 14px | 12px Medium | 32px | 8px |
| M (moyen) | 10px 20px | 14px Medium | 42px | 8px |
| L (grand) | 14px 28px | 16px SemiBold | 48px | 8px |

#### États et animations

| État | Effet | Durée |
|---|---|---|
| Hover | `scale(1.02)` + `box-shadow: 0 4px 12px rgba(79,70,229,0.15)` | 150ms ease |
| Active (click) | `scale(0.98)` | 100ms ease |
| Focus | Ring 2px `#4F46E5` offset 2px + ring 20% opacité | — |
| Disabled | Opacité 50%, cursor not-allowed | — |

---

### 3.3.2 Cards

#### Spécifications de base

| Propriété | Valeur |
|---|---|
| Border-radius | 12px |
| Box-shadow | `0 1px 3px rgba(0,0,0,0.1)` (shadow-sm) |
| Padding | 16px (compact) ou 24px (confortable) |
| Background | `#FFFFFF` (light) / `#1F2937` (dark) |
| Bordure | Aucune par défaut, ou `1px solid #E5E7EB` si nécessaire |

#### États

| État | Effet |
|---|---|
| Hover | `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` + `translateY(-2px)` |
| Active | `translateY(0)` (retour à la position) |

#### Variantes

| Variante | Spécificité |
|---|---|
| Standard | Card basique pour contenu générique |
| KPI | Icône en haut + valeur en JetBrains Mono 32px Bold + tendance en Caption |
| Matière | Bordure gauche 4px avec couleur de la matière + fond 5% opacité |
| Interactive | `cursor: pointer`, hover avec élévation |

---

### 3.3.3 Badges

#### Spécifications de base

| Propriété | Valeur |
|---|---|
| Border-radius | `full` (pill) |
| Padding | 2px 10px |
| Police | Inter Medium 12px |
| Height | 22px |

#### Variantes

| Variante | Background | Texte | Usage |
|---|---|---|---|
| Success | `#D1FAE5` | `#065F46` | Notes ≥ 14, validations, complétion |
| Warning | `#FEF3C7` | `#92400E` | Deadlines 2-5j, notes 10-12, avertissements |
| Error | `#FEE2E2` | `#991B1B` | Notes < 10, deadlines < 2j, erreurs |
| Info | `#EEF2FF` | `#3730A3` | Information générale, badges matière |
| Matière | 15% couleur matière | Couleur matière 100% | Badge de matière dans les cards |
| Nouveau | `#4F46E5` | Blanc `#FFFFFF` | Documents < 24h, avec animation pulse |

> **Note accessibilité** : Les badges ne doivent jamais être le seul moyen de transmettre une information. Toujours accompagner d'un texte ou d'une icône avec `alt text`.

---

### 3.3.4 Champs de saisie (Inputs)

#### Spécifications de base

| Propriété | Valeur |
|---|---|
| Border-radius | 8px |
| Bordure | `1px solid #E5E7EB` |
| Padding | 10px 14px |
| Police | Inter Regular 14px |
| Placeholder | Couleur `#9CA3AF` |
| Height | 42px |
| Background | `#FFFFFF` (light) / `#1F2937` (dark) |

#### États

| État | Effet |
|---|---|
| Focus | Bordure `#4F46E5` 2px + ring `rgba(79,70,229,0.2)` 2px |
| Error | Bordure `#EF4444` 2px + message d'erreur 12px en dessous en rouge |
| Disabled | Opacité 50%, background `#F3F4F6`, cursor not-allowed |

#### Variantes

| Variante | Spécificité |
|---|---|
| Text | Input standard, height 42px |
| Textarea | Min-height 80px, resize vertical, padding identique |
| Search | Icône loupe à gauche, `padding-left: 40px`, fond `#F9FAFB` |
| Select | Chevron droite, options dans un dropdown |

---

### 3.3.5 Navigation Bottom Bar (mobile)

#### Spécifications

| Propriété | Valeur |
|---|---|
| Height | 64px |
| Background | `#FFFFFF` + `box-shadow: 0 -2px 8px rgba(0,0,0,0.08)` |
| Items | 5 : Accueil, Messagerie, Ressources, Statistiques, Menu |
| Position | Fixed, bottom 0, pleine largeur |
| Z-index | Au-dessus du contenu (1000) |

#### États des items

| État | Style |
|---|---|
| Inactif | Icône `#6B7280`, pas de label visible (icône seule) |
| Actif | Icône + label dans une pill `#4F46E5`, texte blanc |
| Badge compteur | Cercle rouge `#EF4444` en haut à droite de l'icône, nombre blanc, pulse animation |

#### Items de navigation

| Position | Icône | Label (actif) | Page cible |
|---|---|---|---|
| 1 | Home | Accueil | Dashboard |
| 2 | MessageSquare | Messagerie | Messagerie |
| 3 | Folder | Ressources | Ressources |
| 4 | BarChart3 | Statistiques | Statistiques |
| 5 | Menu | Menu | Profil, Emploi du temps, Paramètres |

---

### 3.3.6 Barre de progression

#### Spécifications

| Propriété | Valeur |
|---|---|
| Height | 8px |
| Border-radius | 4px |
| Track | `#E5E7EB` |
| Fill | Couleur selon niveau (voir tableau) |
| Animation | Transition 300ms ease sur changement de largeur |

#### Code couleur du fill

| Plage de valeur | Couleur | Hex |
|---|---|---|
| 0-8 / 20 | Rouge | `#EF4444` |
| 8-10 / 20 | Orange | `#F97316` |
| 10-12 / 20 | Jaune | `#EAB308` |
| 12-14 / 20 | Vert | `#22C55E` |
| 14-16 / 20 | Émeraude | `#10B981` |
| 16-20 / 20 | Indigo | `#4F46E5` |

---

### 3.3.7 Avatars

#### Spécifications

| Propriété | Valeur |
|---|---|
| Forme | Circulaire (`border-radius: 50%`) |
| Fallback | Initiales sur fond gradient indigo-violet (`linear-gradient(135deg, #4F46E5, #7C3AED)`) |

#### Tailles disponibles

| Taille | Usage |
|---|---|
| 24px | Inline dans les bulles de messages, badges |
| 32px | Messages dans la sidebar, liste de membres |
| 40px | Header messagerie, cards de conversation |
| 56px | Profil dans les paramètres |
| 80px | Page Profil, header Dashboard |

#### Bordures contextuelles

| Contexte | Bordure |
|---|---|
| Superposition (chat) | 2px blanc `#FFFFFF` |
| Profil (page profil) | 3px indigo `#4F46E5` |
| Standard | Aucune |

---

### 3.3.8 Composants additionnels

#### Tabs (onglets)

| Propriété | Valeur |
|---|---|
| Style | Underline active en couleur primaire |
| Inactif | Texte `#6B7280`, pas de bordure |
| Actif | Texte `#4F46E5`, bordure basse 2px `#4F46E5` |
| Hover | Texte `#4F46E5`, fond `#EEF2FF` |

#### Tooltips

| Propriété | Valeur |
|---|---|
| Background | `#1F2937` (gray-800) |
| Texte | Blanc `#FFFFFF`, 12px |
| Border-radius | 6px |
| Padding | 6px 10px |
| Position | Au-dessus de l'élément, flèche centrée |

#### Modals

| Propriété | Valeur |
|---|---|
| Overlay | Noir 50% opacité |
| Card | Centrée, max-width 480px, border-radius 16px |
| Animation | Fade-in + scale, 250ms ease-out |
| Padding | 24px |
| Bouton fermer | [X] en haut à droite |

#### Skeleton screens (chargement)

| Propriété | Valeur |
|---|---|
| Forme | Rectangles gris animés (pulse) |
| Couleur | `#E5E7EB` avec animation pulse |
| Usage | Listes, cards, graphiques en chargement |

#### Toggles (switches)

| Propriété | Valeur |
|---|---|
| Width | 44px |
| Height | 24px |
| Track off | `#E5E7EB` |
| Track on | `#4F46E5` |
| Thumb | Blanc, 20px, shadow-sm |
| Animation | 200ms ease |

---

## Annexes

### A. Notes d'accessibilité (WCAG 2.2 AA)

| Exigence | Implémentation |
|---|---|
| Contrastes | Tous les textes doivent avoir un ratio ≥ 4.5:1 avec leur fond |
| Cibles tactiles | Minimum 44×44px pour tout élément cliquable sur mobile |
| Navigation clavier | Tous les éléments interactifs accessibles via Tab, Enter, Escape |
| Focus visible | Ring 2px indigo sur tout élément focusé |
| Alt text | Toutes les icônes et images ont un `alt` ou `aria-label` descriptif |
| Screen reader | Rôles ARIA sur les composants custom (tabs, modals, toggles) |
| Animations | Respect de `prefers-reduced-motion` : désactiver les animations si activé |
| Taille de texte | L'interface doit fonctionner correctement avec un zoom jusqu'à 200% |

### B. Breakpoints responsive

| Breakpoint | Largeur | Adaptation |
|---|---|---|
| Mobile | < 640px | Bottom nav, 1 colonne, sidebar masquée |
| Tablet | 640px – 1024px | Sidebar rétractable, layout adaptable |
| Desktop | > 1024px | Sidebar fixe 240px, layout multi-colonnes |

### C. Transitions et animations globales

| Type | Durée | Easing |
|---|---|---|
| Page transitions | 200ms | ease |
| Hover (boutons, cards) | 150ms | ease |
| Click / Active | 100ms | ease |
| Modal / Drawer | 250ms | ease-out |
| Mascotte (Lottie) | 300-500ms | ease-in-out |
| Thème (light/dark) | 200ms | ease |

---

*Fin du document de spécification UI/UX — EduSchool (Version Élèves)*
