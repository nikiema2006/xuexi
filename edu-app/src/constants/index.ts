import type { ExpandedMenuItem } from "@/typings";
import { Dimensions } from "react-native";

const WIDTH: number = Dimensions.get("window").width;
const ANIMATION_DURATION = 400;
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 190,
  mass: 0.8,
};

const EXPANDED_MENU_ITEMS: ExpandedMenuItem[] = [
  { iconName: "home", label: "Accueil", route: "index" },
  { iconName: "library", label: "Ressources", route: "resource" },
  { iconName: "chatbubble", label: "Messagerie", route: "messagerie" },
  { iconName: "bar-chart", label: "Statistiques", route: "statistique" },
  { iconName: "person", label: "Profil", route: "profile" },
  { iconName: "settings", label: "Paramètres", route: "parametres" },
  { iconName: "help-circle", label: "Aide", route: "aide" },
  { iconName: "information-circle", label: "À propos", route: "a-propos" },
  { iconName: "bookmark", label: "Favoris", route: "favoris" },
];

export { ANIMATION_DURATION, EXPANDED_MENU_ITEMS, SPRING_CONFIG, WIDTH };
