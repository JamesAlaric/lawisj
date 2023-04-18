import {
  StarIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "teal",
    title: "Code Pénal",
    icon: StarIcon,
    description:
      "C'est un ensemble de lois qui définissent les comportements considérés comme des infractions pénales et les sanctions qui y sont associées.",
  },
  {
    color: "red",
    title: "Code de procedures pénales",
    icon: ArrowPathIcon,
    description:
      "Il établit les règles et les procédures à suivre pour enquêter sur une infraction présumée, poursuivre l'auteur présumé en justice, organiser un procès équitable et appliquer les sanctions appropriées.",
  },
  {
    color: "amber",
    title: "Constitution",
    icon: FingerPrintIcon,
    description:
      " Elle définit la structure du gouvernement, les droits et les libertés individuels, les pouvoirs et les responsabilités des différents organes gouvernementaux et les règles de base pour l'élaboration des lois.",
  },
];

export default featuresData;
