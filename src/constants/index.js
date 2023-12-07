import {
  planet,
  ghost,
  invader,
  atarii,
  game,
  mario,
  pacman,
  coin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "slider",
    title: "Examples",
  }
];

const services = [
  {
    title: "Origins",
    icon: coin,
  },
  {
    title: "The discoverers",
    icon: atarii,
  },
  {
    title: "Nintendo",
    icon: pacman,
  },
  {
    title: "Is it real?",
    icon: mario,
  },
];


const experiences = [
  {
    title: "Origins",
    company_name: "Sunday afternoon on the island of Grand Jatt",
    icon: invader,
    iconBg: "#E6DED6",
    date: "1884 in Paris",
    points: [
      "Pixels are like atoms, or bricks, from which something more is assembled. This method of plotting graphics was dictated by the technical limitations of the hardware of those years.",
      "In the 70s, no one could have imagined that one day it would be possible to build the entire scene in games, so it remained painstaking, like building a house or creating a mosaic, to assemble a picture from small pixel tiles.",
      "However, it was not the developers of the past who came up with this technique, but the painters of the past, namely representatives of French neo-Impressionism."
    ],
  },
  {
    title: "Atari 2600",
    company_name: "First games",
    icon: game,
    iconBg: "white",
    date: "1972 - 1980",
    points: [
      "The progenitor of pixel art, as well as modern video games in general, is the legendary Pong — arcade table tennis.",
      "The game was released back in 1972 for slot machines, and 5 years later, in 1977, for Atari 2600 home consoles. And although Atari actually borrowed the idea of Pong from its competitor, the Magnavox console, it was the Atari version that went down in history."
    ],
  },
  {
    title: "The legend",
    company_name: "Nintendo",
    icon: ghost,
    iconBg: "#383E56",
    date: "1980...",
    points: [
      "The beginning of the 80s was marked by the arrival of the legendary Nintendo Entertainment System, aka NES, aka Dandy.",
      "It is NES video games that are obliged to widespread popularization.",
      "Well, we remember the first Nintendo as a console with the most correct pixel art, because the era of the 80s gave the industry many epoch-making games that changed history. It was during this period that PacMan, Mario, Donkey Kong, Galaga, MegaMan, Metroid, Legend of Zelda and many others appeared."
    ],
  },
  {
    title: "The end?",
    company_name: "3D",
    icon: planet,
    iconBg: "black",
    date: "1994 - Present",
    points: [
      "So, pixel art began to lose popularity in 1994 with the release of the fifth generation of consoles that supported fully three-dimensional graphics. Despite the general unsightliness of the first 3d games, the technology itself was very impressive."
    ],
  },
];


export { services, experiences };