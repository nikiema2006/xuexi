# PROMPT UNIFIÉ — Application Scolaire de Tracking de Performance (Version Élèves)

Génère l'interface complète d'une application web de tracking de performance scolaire pour élèves. L'app est responsive (mobile-first, adaptable tablet/desktop), moderne, gamifiée via une mascotte interactive. Voici le design system et chaque page en détail.

---

## DESIGN SYSTEM

**Palette** : Primaire Indigo (#4F46E5), Secondaire Violet (#7C3AED), Succès Emerald (#10B981), Alerte Amber (#F59E0B), Erreur Red (#EF4444), Background Gray-50 (#F9FAFB), Surface blanc (#FFFFFF), Texte principal Gray-900 (#111827), Texte secondaire Gray-500 (#6B7280).

**Thèmes** : Light (défaut) et Dark (fond #111827, surfaces #1F2937, texte #F9FAFB). Transition 200ms.

**Typographie** : Inter (Bold/SemiBold pour titres, Regular/Medium pour corps), JetBrains Mono pour les chiffres/stats. Échelle : 12/14/16/20/24/32/40px.

**Composants** : Cards (radius 12px, shadow-sm, padding 16-24px), Boutons (radius 8px, padding 10px 20px), Badges (radius full, padding 2px 10px, 12px), Inputs (radius 8px, border gray-300, focus ring indigo), Avatars (circulaires 24/32/40/56px), Tabs (underline active primaire).

**Animations** : Hover scale 1.02 + shadow 150ms, Click scale 0.98 100ms, Page transitions fade 200ms, Modals slide+fade 250ms.

**Breakpoints** : Mobile <640px (bottom nav, 1 colonne), Tablet 640-1024px (sidebar rétractable), Desktop >1024px (sidebar fixe 240px).

---

## STRUCTURE DE NAVIGATION

**Layout** : TopBar fixe en haut + Sidebar gauche (desktop) ou Bottom Nav (mobile) + Zone de contenu centrale + Mascotte flottante en bas à droite.

**TopBar** : Gauche = Logo + nom de l'app. Centre = Barre de recherche globale. Droite = Cloche notifications (badge compteur rouge) + Avatar élève (dropdown : profil, paramètres, déconnexion).

**Sidebar (desktop)** : 6 items avec icônes Lucide : Accueil, Messagerie, Ressources, Statistiques, Emploi du temps, Profil.

**Bottom Nav (mobile)** : 5 items : Accueil | Messagerie | Ressources | Statistiques | Menu (→ profil, emploi du temps, paramètres).

---

## MASCOTTE "SCOLIO"

Personnage rond style hibou/hamster, corps indigo, yeux expressifs, petites oreilles. Illustration vectorielle avec animations fluides (style Lottie). Nom personnalisable par l'élève (défaut : "Scolio").

**Emplacements** : (1) Flottant permanent en bas à droite (64x64px, fixed, draggable, animations passives : respiration + clignement). Click = mini-panel avec message du jour + actions rapides. (2) Contextuel : apparaît en haut d'une page ou à côté d'un élément avec bulle de dialogue, disparaît après 5s. (3) Plein écran (256px) pour les célébrations avec confettis/étoiles.

**États** : Neutre (respiration, loop), Content (saute de joie, 2s), Encourageant (pouce levé), Inquiet (air préoccupé + nuage), Célébration (danse + confettis, 4s), Guide (pointe du doigt + bulle), Endormi (Zzz, inactivité >3j), Excité (rebondit), Triste (regard baissé), Lecteur (lunettes + livre), Sport (essuie sueur). Transitions : fade 300ms, retour au neutre après 5s.

**Messages contextuels** : Scolio commente selon la page visitée, l'heure, les événements (bonne note, devoir proche, streak, inactivité). Ton bienveillant, messages courts.

**Personnalisation future** : thèmes (Sport, Lecteur, Fête, Saison), 4 niveaux de progression visuelle selon l'activité. Accessible : tailles 48/64/80px, mode statique, repositionnable, désactivable.

---

## PAGE 1 — ACCUEIL / DASHBOARD

Page de résumé après connexion.

**Header** : "Bonjour, [Prénom] !" (selon l'heure) + date du jour + message de Scolio contextuel ("Tu as 5 cours aujourd'hui" / "Journée libre, profite-en pour réviser").

**4 Cards KPI** : Moyenne générale (ex: 14.2/20, tendance ↑+0.5) | Rang (5/32, ↑+2) | Streak (12 jours 🔥, record 21j) | Devoirs à faire (3). Click = navigation page liée.

**Sections en grille (2 colonnes desktop)** :
- **Prochain cours** : matière, prof, salle, horaires + bouton "Y aller". Si pas de cours : message + suggestion de réviser.
- **Devoirs urgents** : top 3 avec code couleur urgence (rouge <2j, amber 2-5j, vert >5j) + barre de progression + bouton "Voir tous".
- **Dernières notes** : 3 dernières notes avec tendance (↑↓→) + lien vers stats.
- **Révisions du jour** : révisions planifiées avec bouton "Commencer". Si vide : "Pas de révision prévue" + lien pour planifier.
- **Messages récents** : 3 derniers messages (groupes/perso) avec aperçu + lien vers messagerie.

**Responsive** : Mobile = sections empilées, cards 2x2. Tablet = 2 colonnes. Desktop = 2-3 colonnes.

---

## PAGE 2 — MESSAGERIE

Interface type messagerie moderne (inspirée Discord/Teams). Groupes de classe par matière + messages personnels par invitation.

**Sidebar gauche (320px desktop)** :
- **Onglets** : "Groupes" | "Messages"
- **Barre de recherche** : "Rechercher une conversation..."
- **Section Groupes** : chaque groupe = une matière. Card avec : icône matière colorée (📐🔬📚🌍🇬🇧🧪), nom de la matière, nom du prof + nb membres, badge non lus (cercle indigo), aperçu dernier message (50 chars tronqué), horodatage, bordure gauche indigo si non lu.
- **Section Messages** : conversations 1-to-1. Card avec : avatar (photo/initiales), nom, pastille statut (vert=en ligne, gris=offline), aperçu dernier message, horodatage, badge non lus.

**Zone de conversation (centre)** :
- **Header** : icône matière + nom groupe + sous-titre (prof + nb membres) + actions (📋 ressources, 👥 membres, 📌 épinglés, ⋮ menu).
- **Bulles** : autres = alignées gauche, fond gray-100, avec avatar 32px + nom. Moi = alignées droite, fond indigo-100. Horodatage + indicateur lecture (✓ envoyé, ✓✓ lu) pour les messages perso.
- **Messages spéciaux** : message épinglé (bordure amber, badge 📌), fichier PDF (card avec icône + nom + taille + bouton télécharger), image (thumbnail cliquable), message système (centré, italic gris).
- **Input** : 📎 joindre fichier | zone texte auto-resize | 😊 emojis | 🎤 message vocal | bouton envoyer indigo.

**Modal "Nouveau message"** : recherche d'élève + sélection. Fonctionne par invitation : l'envoi crée une invitation, le destinataire doit accepter. Flow : envoi → notif → acceptation/refus → conversation créée ou notif de refus.

**États vides** : Mascotte Scolio + "Pas encore de messages ! Rejoins un groupe ou envoie une invitation." + boutons d'action.

**Responsive** : Mobile = sidebar plein écran, click conversation = navigation avec bouton retour. Tablet = sidebar 72px icônes, hover = preview. Desktop = sidebar 320px fixe.

---

## PAGE 3 — RESSOURCES

Page de tous les documents PDF partagés par les profs (cours, exercices, devoirs, corrigés, TP).

**Barre de filtres** :
- **Pills matières** scrollables horizontalement : "Toutes" + chaque matière avec icône. Multi-sélection possible (chips avec X).
- **Dropdowns** : Type (Tous/Cours/Exercice/Devoir/Corrigé/TP) | Statut (Tous/Non rendu/À venir/Archivé) | Tri (Plus récent/Plus ancien/Nom A-Z/Taille).
- **Barre de recherche** : "Rechercher un document..." avec autocomplete.

**Vue Grille (défaut)** : Documents groupés par matière. Chaque card : icône type colorée (PDF=rouge, Image=vert, Doc=bleu) + nom (max 2 lignes) + badge matière coloré + date + taille + boutons (⬇ télécharger, ⋮ menu). Indicateurs spéciaux : badge amber "À rendre le X" pour devoirs, badge indigo "Nouveau" si <24h, coche verte "Corrigé" si disponible.

**Vue Liste (toggle)** : Table avec colonnes Nom | Matière | Taille | Date | Actions. Tri par colonne.

**Modal aperçu** : PDF viewer intégré + actions (Télécharger, Partager lien, Marquer lu/favori) + info (uploadé par, date, taille).

**Section "Devoirs en cours"** (sous-section spéciale) : Cards avec nom du devoir, matière, prof, échéance avec compte à rebours, barre de progression (l'élève marque manuellement), code couleur (vert >5j, amber 2-5j, rouge <2j), statuts (À faire/En cours/Rendu/Corrigé), boutons (voir énoncé, marquer fait).

**États vides** : Mascotte + "Aucune ressource pour l'instant. Tes profs vont bientôt en ajouter !"

**Responsive** : Mobile = grille 2 colonnes, filtres en drawer scrollable. Tablet = 3 colonnes. Desktop = 4-5 colonnes.

---

## PAGE 4 — STATISTIQUES

Page de tracking de performance : notes, moyennes, évolution, classements. Data-visualization avec graphiques interactifs.

**Header** : "Statistiques" + sélecteur de période (Ce mois / Trimestre 1 / Annuel).

**4 Cards KPI** :
- **Moyenne Générale** : grande valeur en gras (police mono), tendance (flèche verte ↑ ou rouge ↓ + delta), barre de progression fill 0-20 avec code couleur (rouge <8, orange 8-10, jaune 10-12, vert 12-14, emerald 14-16, indigo 16-20).
- **Rang** : position + suffixe ordinal (5ᵉ/32), variation (+2 places), percentile "Top 15%".
- **Notes Total** : nb évaluations + moyenne classe en référence + écart.
- **Streak** : jours consécutifs d'activité + record personnel + mini calendrier 7 jours (cases vertes=actif, grises=inactif).

**Graphique évolution (Line Chart)** : Moyenne générale au fil du temps (ligne indigo épaisseur 2px, points interactifs) + moyenne classe en pointillés gris. Tooltip au hover (mois, moyenne, rang). Zoom sur période. Légende toggle.

**Performance par matière** : Barres horizontales avec matière + barre colorée (code couleur niveau) + marqueur moyenne classe (ligne pointillée verticale). Click = drill-down. Alternative : Radar chart avec surface élève (colorée) + surface classe (grise).

**Drill-down par matière** : Header avec retour + matière + prof. KPIs (moyenne, rang, variation). Liste des évaluations (type, note, coefficient, date) avec code couleur (vert ≥14, jaune 10-14, rouge <10). Mini line chart évolution des notes. Moyenne calculée avec coefficients.

**Section Classement (Ranking)** : Toggle période (Mensuel/Trimestriel/Annuel). Liste avec top 3 (médailles 🥇🥈🥉, mise en valeur) + autres élèves. Position de l'élève TOUJOURS visible en surbrillance (card indigo). Barre de performance proportionnelle. Info évolution vs période précédente. Option anonymat (masquer noms des autres).

**États vides** : Mascotte + "Pas encore de notes ! C'est le moment de briller !"

**Responsive** : Mobile = cards 2x2, graphiques pleine largeur. Tablet = cards 2x2 ou 4, graphiques adaptatifs. Desktop = cards 4, graphiques côte à côte.

---

## PAGE 5 — EMPLOI DU TEMPS

3 onglets : Planning | Révisions | Devoirs.

### Onglet "Planning"
**Vue hebdomadaire (défaut)** : Grille 7 colonnes (Lun-Dim) x créneaux horaires (8h-17h). Navigation : flèches semaine ±, bouton "Aujourd'hui", sélecteur Jour/Semaine/Mois.

**Blocs de cours** : fond coloré matière à 15% opacité + bordure gauche colorée. Anatomie : icône matière + nom + prof + salle + horaires + lien ressources. Code couleur par matière : Maths=Indigo, Physique=Violet, Français=Rose, Histoire=Amber, Anglais=Emerald, SVT=Green, Arts=Orange, Musique=Cyan.

**Blocs spéciaux** : Pause (fond gris, icône repas), Devoir/Interro (fond rouge, badge), Révision perso (fond indigo clair, bordure pointillée), Cours annulé (fond gris, texte barré, badge "Annulé").

**Vue Jour** : timeline verticale détaillée.

### Onglet "Révisions"
**Vue par sections temporelles** : "Aujourd'hui" | "Demain" | "Cette semaine". Chaque révision : matière + sujet + barre de progression + boutons (Terminé, Modifier).

**Modal "Planifier une révision"** : Matière (select) + Sujet (input) + Date + Heure début/fin + Priorité (Haute/Moyenne/Basse) + Rappels (checkboxes : 30min avant, 1j avant, 1sem avant) + Notes (textarea).

**Fonctionnalités** : Drag & drop pour déplacer, répétition hebdomadaire, progression manuelle, lien vers ressources de la matière. Conflit de planning = alerte visuelle bordure rouge.

### Onglet "Devoirs"
**Vue Kanban (défaut)** : 3 colonnes (À faire | En cours | Terminé). Cards avec : titre + matière (badge) + échéance + priorité (rouge/amber/vert) + nb fichiers liés + actions (changer statut, voir énoncé, ajouter fichier). Drag entre colonnes.

**Vue Liste (toggle)** : Table avec colonnes Statut | Matière | Titre | Échéance | Priorité.

**Vue Timeline** : axe temporal avec points par devoir.

**Responsive** : Mobile = vue jour, swipe navigation, Kanban scroll horizontal. Tablet = semaine 3 jours. Desktop = semaine complète.

---

## PAGE 6 — PROFIL

**Header centré** : Photo de profil (circulaire 80px, bordure indigo 3px, avatar initiales par défaut) + Nom complet (Inter Bold 24px) + Email scolaire + Badge classe (indigo "3ème A") + N° élève (mono) + Bouton "Modifier le profil".

**4 mini-cards stats** : identiques au dashboard, click = navigation vers page liée.

**Section Badges** : Grille de badges obtenus (couleur, avec nom et condition) + grille de badges à débloquer (grisés + cadenas, condition au hover). 12 badges : Première note (🌟), Lecteur (📚, 10 ressources), Streak 7j (🔥), Streak 30j (🔥💎), Top 5 (🏆), Top 1 (🏆👑), Perfection (💎, 20/20), Social (💬, 5 groupes), Organisé (📋, 10 révisions), Ponctuel (⏰, 10 devoirs à temps), Polyvalent (🎯, >14 partout), Comeback (📈, +5 rangs/mois). Click badge = modal détail + date + stats. Barre de progression pour badges en cours.

**Section Matières** : Barres de performance condensées (identiques aux stats), click = drill-down.

**Section Activité récente** : Timeline verticale des 10 dernières actions (notes, devoirs rendus, révisions, downloads, badges) avec icône + description + timestamp relatif.

**Modal "Modifier le profil"** : Photo (upload) + champs verrouillés (🔒 prénom, nom, email, classe) + Bio (160 chars max) + Nom de la mascotte.

**Responsive** : Mobile = centré, stats 2x2, badges scroll horizontal. Desktop = header horizontal, stats 4, badges grille 5 colonnes.

---

## PAGE 7 — PARAMÈTRES

Layout : sidebar gauche (sections) + contenu à droite (desktop). Mobile = liste verticale, chaque section = sous-page.

**Sections** :
1. **Apparence** : Thème (3 cards avec preview : Clair/Sombre/Système), Couleur d'accentuation (6 swatches : Indigo/Violet/Rouge/Vert/Orange/Noir, preview temps réel), Taille de police (slider 4 niveaux), Densité (Compact/Confortable/Spacieux).
2. **Notifications** : Toggles individuels (messages, documents, rappels devoirs, rappels révisions, résultats notes, changements emploi du temps, messages mascotte) + toggles in-app (badge compteur, son, vibrations) + config rappels devoirs (délai, horaires) + Heures de silence (toggle + plage horaire).
3. **Langue & Région** : Langue (select), Fuseau horaire, Format date (3 options), Premier jour semaine (Lundi/Dimanche).
4. **Accessibilité** : Contraste élevé, Réduire animations, Mode daltonien (select), Lecteur d'écran, Taille mascotte (select).
5. **Confidentialité** : Toggles (profil visible, classement, messages perso, statut en ligne) + Exporter données + Supprimer compte.
6. **Appareils & Session** : Appareil actuel + liste autres appareils avec bouton déconnecter + "Déconnecter tous".
7. **À propos** : Version, liens (CGU, confidentialité, aide, support).
8. **Déconnexion** : Bouton rouge + confirmation modal.

---

## SYSTÈME DE NOTIFICATIONS

**Multi-canal** :
- **Drawer in-app** : panneau latéral droit, notifications groupées par jour (Aujourd'hui/Hier/Cette semaine). Anatomie : icône catégorie colorée + source + horodatage + titre + corps (2 lignes tronqué) + indicateur non-lu (pastille indigo). Actions : click = navigation + marquer lue, swipe = supprimer, long press = menu. Bouton "Tout marquer comme lu".
- **Toasts** : haut à droite, stack max 3, auto-dismiss 5s, slide-in + fade. Code couleur : Info (indigo), Succès (emerald), Warning (amber), Erreur (red). Bouton action optionnel + fermer.
- **Badge compteur** : cloche TopBar (cercle rouge, max "99+"), icônes navigation (messagerie, ressources). Pulse quand nouveau.
- **Push navigateur/mobile** : format standard avec titre + corps + boutons action. Permission demandée au premier accès. Regroupement par groupe. Respecte heures de silence.

**Catégories** : Message (💬 Indigo), Ressource (📄 Emerald), Note (📊 Violet), Rappel (⏰ Amber), Classement (🏆 Amber), Système (⚙️ Gray), Mascotte (🐾 Secondaire).

**Priorités** : Haute (son+vibration+badge+toast), Normale (badge+toast), Basse (badge seulement).

**Deep links** : chaque notification mène à la page concernée (message→conversation, document→ressources matière, note→stats détail, rappel devoir→onglet devoirs, etc.).

**États vides** : Mascotte Scolio qui dort + "Aucune notification, tout est à jour !"

---

## ÉTATS TRANSVERSAUX

**États de chargement** : Skeleton screens (formes grises animées pulse) pour les listes, Spinner (cercle indigo) pour les actions, Progress bar pour uploads.

**États vides** : Toujours une illustration de la mascotte + message contextuel + bouton d'action principal.

**Modals** : Overlay black/50, card centrée max-width 480px, animation fade-in + scale.

**Responsive global** : Mobile-first, bottom nav, sidebar masquée, layout 1 colonne. Tablet : sidebar rétractable. Desktop : sidebar fixe 240px, multi-colonnes.
