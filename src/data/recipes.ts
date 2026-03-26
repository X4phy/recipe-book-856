export type Recipe = {
  id: number;
  title: string;
  category: "breakfast" | "lunch" | "dinner" | "dessert";
  duration: number;
};

export const recipes: Recipe[] = [
  { id: 1, title: "Scrambled Eggs", category: "breakfast", duration: 10 },
  { id: 2, title: "Caesar Salad", category: "lunch", duration: 15 },
  { id: 3, title: "Spaghetti Bolognese", category: "dinner", duration: 45 },
  { id: 4, title: "Chocolate Lava Cake", category: "dessert", duration: 25 },
  { id: 5, title: "Avocado Toast", category: "breakfast", duration: 8 },
  { id: 6, title: "Grilled Chicken", category: "dinner", duration: 35 },
];