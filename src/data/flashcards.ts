export interface Flashcard {
  id: number;
  english: string;
  french: string;
  example: string;
  category: string;
}

export const flashcards: Flashcard[] = [
  {
    id: 1,
    english: "The house",
    french: "La maison",
    example: "J'habite dans une grande maison.",
    category: "Home"
  },
  {
    id: 2,
    english: "The garden",
    french: "Le jardin",
    example: "Les fleurs dans le jardin sont belles.",
    category: "Home"
  },
  {
    id: 3,
    english: "The cat",
    french: "Le chat",
    example: "Mon chat dort sur le canapé.",
    category: "Animals"
  },
  {
    id: 4,
    english: "The table",
    french: "La table",
    example: "Le livre est sur la table.",
    category: "Furniture"
  },
  {
    id: 5,
    english: "The bread",
    french: "Le pain",
    example: "J'achète du pain frais.",
    category: "Food"
  },
  {
    id: 6,
    english: "The car",
    french: "La voiture",
    example: "Ma voiture est rouge.",
    category: "Transport"
  },
  {
    id: 7,
    english: "The book",
    french: "Le livre",
    example: "J'aime lire un bon livre.",
    category: "Education"
  },
  {
    id: 8,
    english: "The tree",
    french: "L'arbre",
    example: "Les oiseaux sont dans l'arbre.",
    category: "Nature"
  },
  {
    id: 9,
    english: "The sun",
    french: "Le soleil",
    example: "Le soleil brille aujourd'hui.",
    category: "Nature"
  },
  {
    id: 10,
    english: "The moon",
    french: "La lune",
    example: "La lune est belle ce soir.",
    category: "Nature"
  },
  {
    id: 11,
    english: "The coffee",
    french: "Le café",
    example: "Je bois du café le matin.",
    category: "Food"
  },
  {
    id: 12,
    english: "The school",
    french: "L'école",
    example: "Les enfants vont à l'école.",
    category: "Education"
  },
  {
    id: 13,
    english: "The phone",
    french: "Le téléphone",
    example: "Mon téléphone est nouveau.",
    category: "Technology"
  },
  {
    id: 14,
    english: "The music",
    french: "La musique",
    example: "J'écoute de la musique.",
    category: "Arts"
  },
  {
    id: 15,
    english: "The restaurant",
    french: "Le restaurant",
    example: "Nous dînons au restaurant.",
    category: "Food"
  },
  {
    id: 16,
    english: "The beach",
    french: "La plage",
    example: "J'aime nager à la plage.",
    category: "Nature"
  },
  {
    id: 17,
    english: "The bicycle",
    french: "Le vélo",
    example: "Je fais du vélo le weekend.",
    category: "Transport"
  },
  {
    id: 18,
    english: "The flower",
    french: "La fleur",
    example: "Cette fleur sent bon.",
    category: "Nature"
  },
  {
    id: 19,
    english: "The cinema",
    french: "Le cinéma",
    example: "Allons au cinéma ce soir.",
    category: "Entertainment"
  },
  {
    id: 20,
    english: "The watch",
    french: "La montre",
    example: "Ma montre est en or.",
    category: "Accessories"
  }
];