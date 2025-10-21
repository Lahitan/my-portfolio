// src/components/Projects.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  const projects = [
    {
      title: 'Web Fleet Website',
      description:
        'A sleek personal portfolio built with Next.js, Tailwind, and TypeScript.',
      link: 'https://web-fleet-app.netlify.app/',
      image: '/project-images/web-fleet.PNG',
    },
    {
      title: 'Interactive Credit Card',
      description:
        'An interactive credit card form that updates in real-time as you type.',
      link: 'https://interactive-assignment.netlify.app/',
      image: '/project-images/interactive card.PNG',
    },
    {
      title: 'Pleasure Park',
      description:
        'A fun amusement park website with vibrant design and engaging content.',
      link: 'https://pleasure-park.netlify.app',
      image: '/project-images/plesure park.PNG',
    },
    {
      title: 'Insta Spot',
      description:
        'A social media app that allows users to share and discover new places.',
      link: 'https://insta-spot-assignment.netlify.app/',
      image: '/project-images/insta-spot.PNG',
    },
    {
      title: 'Draft.dev Clone',
      description:
        'A clone of the Draft.dev website built with HTML, CSS, and JavaScript.',
      link: 'https://draftdev-clone.netlify.app/',
      image: '/project-images/draft-dev.PNG',
    },
    {
      title: 'Deezer Clone',
      description:
        'A clone of the deezer clone website built with HTML, CSS, and JavaScript.',
      link: 'https://deezer-clone-by-pixel-pioneers.netlify.app/',
      image: '/project-images/deezer.PNG',
    },
  ];

  return (
    <section className="min-h-screen px-6 py-16 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-foreground">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-foreground/10 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={800}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-[#FF6B6B] font-medium hover:underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
