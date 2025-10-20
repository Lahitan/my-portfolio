'use client';

import { Code2, Paintbrush, Terminal, Layout, FileDown } from 'lucide-react';
import Link from 'next/link';

export default function Skills() {
  const skills = [
    { icon: <Code2 className="w-8 h-8 text-[#FF6B6B]" />, name: 'JavaScript' },
    {
      icon: <Layout className="w-8 h-8 text-[#6B5B95]" />,
      name: 'React & Next.js',
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-[#D6C8FF]" />,
      name: 'Tailwind CSS',
    },
    {
      icon: <Terminal className="w-8 h-8 text-[#4A4A4A]" />,
      name: 'TypeScript',
    },
    { icon: <Code2 className="w-8 h-8 text-[#FFB347]" />, name: 'Firebase' },
    {
      icon: <Layout className="w-8 h-8 text-[#6B5B95]" />,
      name: 'Technical SEO',
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-white">
      <h2 className="text-4xl font-heading font-bold text-center mb-12 text-[#4A4A4A]">
        Skills & CV
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 bg-[#FAF9F6] rounded-2xl shadow-md hover:shadow-lg transition"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-sans text-[#4A4A4A]/90">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* CV Button */}
      <div className="text-center">
        <Link
          href="/Frontend Developer Tawakalitu Omoloja.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF6B6B] text-white font-sans font-medium shadow-md hover:shadow-lg transition"
        >
          <FileDown className="w-5 h-5" />
          Download CV
        </Link>
      </div>
    </section>
  );
}
