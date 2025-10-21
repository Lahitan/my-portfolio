export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  link: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Love, Me Coloring Book',
    description: 'A self-love affirmation coloring book for women.',
    price: 'N2,500',
    image: '/product-images/love-me-cover.jpg',
    category: 'Books',
    link: 'https://selar.com/e3t0w19231',
  },
  {
    id: 2,
    title: 'Self Care Journal',
    description: 'A beautiful journal for self-reflection and personal growth.',
    price: 'FREE',
    image: '/product-images/self-care-cover.jpg',
    category: 'Books',
    link: 'https://selar.com/p2sh37',
  },
  {
    id: 3,
    title: 'Love Note Book',
    description:
      'A beautiful notebook for writing love notes and affirmations.',
    price: 'N700',
    image: '/product-images/love-note-cover.jpg',
    category: 'Books',
    link: 'https://selar.com/k235k75355',
  },
  {
    id: 5,
    title: "The Ultimate Mother's Productivity Journal",
    description:
      'A comprehensive planner to boost your productivity, and help you keep track of your tasks and goals.',
    price: 'N2,500',
    image: '/product-images/mothers-journal.jpg',
    category: 'Books',
    link: 'https://selar.com/f31741',
  },
  {
    id: 6,
    title: 'Ramadan Journal',
    description:
      'A journal for self-reflection and personal growth during Ramadan, comes with meal planner.',
    price: 'FREE',
    image: '/product-images/ramadan.PNG',
    category: 'Books',
    link: 'https://selar.com/382121',
  },
  {
    id: 7,
    title: 'One-Page Goal Tracker Sheet',
    description:
      'A simple and effective one-page sheet to help you track your goals and stay focused.',
    price: 'N500',
    image: '/product-images/goal-tracker.png',
    category: 'Books',
    link: 'https://selar.com/4004977c9r',
  },
];
