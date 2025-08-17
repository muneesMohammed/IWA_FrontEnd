// src/app/data/programs-data.ts
export interface ProgramItem {
  id: string;
  title: string;
  image: string;
  categories: string[];
  category: string; 
  author: string;
  raised: number;
  goal: number;


}

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'p1',
    title: 'Our donation is hope for poor children',
    image: 'assets/img/home1/cause1.jpg',
    categories: ['water', 'community'],
    category: "Medicine",
    author: "Miranda H.",
    raised: 70,
    goal: 3000,
  },
  {
  id: 'p2',
  title: 'Because Everyone Deserves Clean Water',
  image: 'assets/img/home1/cause2.jpg',
  categories: ['water', 'community'],
  category: "water",
  author: "Miranda H.",
  raised: 50,
  goal: 5000
  },
  {
  id: 'p3',
  title: 'Raise Fund for Clean & Healthy Water',
  image: 'assets/img/home1/cause3.jpg',
  categories: ['healthy', 'community'],
  category: "Healthy",
  author: "Miranda H.",
  raised: 14,
  goal: 7000
  },
  {
  id: 'p4',
  title: 'Education for All',
  image: 'assets/img/home1/cause4.jpg',
  categories: ['education', 'community'],
  category: "food",
  author: "Miranda H.",
  raised: 70,
  goal: 80000
  },
  {
  id: 'p5',
  title: 'Education for All',
  image: 'assets/img/home1/cause5.jpg',
  categories: ['education', 'community'],
  category: "Medicine",
  author: "Miranda H.",
  raised: 70,
  goal: 80000
  },
  {
  id: 'p6',
  title: 'Education for All',
  image: 'assets/img/home1/cause6.jpg',
  categories: ['education', 'community'],
  category: "Medicine",
  author: "Miranda H.",
  raised: 20,
  goal: 80000
  },
  {
  id: 'p7',
  title: 'Education for All',
  image: 'assets/img/home1/cause7.jpg',
  categories: ['education', 'community'],
  category: "Medicine",
  author: "Miranda H.",
  raised: 5,
  goal: 80000
  },
  {
  id: 'p8',
  title: 'Education for All',
  image: 'assets/img/home1/cause8.jpg',
  categories: ['education', 'community'],
  category: "Medicine",
  author: "Miranda H.",
  raised: 10,
  goal: 80000
  },
    {
  id: 'p9',
  title: 'Education for All',
  image: 'assets/img/home1/cause9.jpg',
  categories: ['education', 'community'],
  category: "Medicine",
  author: "Miranda H.",
  raised: 0,
  goal: 80000
  },
]