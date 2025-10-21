export type BlogPost = {
  id: number;
  category: 'tech' | 'personal';
  title: string;
  excerpt: string;
  link: string;
  image?: string;
  date?: string;
  readTime?: string;
  alt?: string;
};

export const blogs: BlogPost[] = [
  {
    id: 1,
    category: 'tech',
    title: 'Understanding Git and Github as a Beginner',
    excerpt:
      'Have you ever wondered what "version" (v3.8.1) means? You’ve probably seen it in apps, promoting you to update to the newest versions...',
    link: 'https://medium.com/@harunatawa111/getting-started-git-and-github-simplified-for-beginners-e57b60758555',
    image: '/blog-images/git-github-blog.png',
    alt: 'Git and Github Blog Image',
    date: 'Dec 21, 2023',
    readTime: '5 min read',
  },
  {
    id: 2,
    category: 'tech',
    title: 'Accessibility for Designers and Developers',
    excerpt:
      'The world is fast becoming global, and the digital era has made it easier for us to connect...',
    link: 'https://lahitan.hashnode.dev/accessibility-for-designers-and-developers',
    image: '/blog-images/accessability.png',
    alt: 'Accessibility Blog Image',
    date: 'Jul 15, 2025',
    readTime: '5 min read',
  },
  {
    id: 3,
    category: 'personal',
    title: 'Managing Imposter Syndrome as a Techie',
    excerpt:
      ' Perhaps you think it is impossible to succeed in the tech community...',
    link: 'https://lahitan.hashnode.dev/managing-imposter-syndrome-as-a-techie',
    image: '/blog-images/managing-imposter-syndrom.png',
    date: 'May 23, 2023',
    readTime: '3 min read',
  },
  {
    id: 4,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=4',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
  {
    id: 5,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=5',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
  {
    id: 6,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=6',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
  {
    id: 7,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=7',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
  {
    id: 8,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=8',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
  {
    id: 9,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=9',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
  {
    id: 10,
    category: 'personal',
    title: 'Balancing Tech and Personal Growth',
    excerpt: 'Why I believe coding + mindset = a more impactful career...',
    link: '#',
    image: 'https://picsum.photos/400/250?random=10',
    date: 'Dec 1, 2025',
    readTime: '7 min read',
  },
];
