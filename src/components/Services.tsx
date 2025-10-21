'use client';

import { Code2, Palette, Rocket, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'Frontend Development',
    description:
      'Building fast, responsive, and accessible websites using React, Next.js, and Tailwind CSS.',
  },
  {
    icon: <Palette className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'UI/UX Implementation',
    description:
      'Transforming design ideas into clean, interactive, and user-friendly digital experiences.',
  },
  {
    icon: <Rocket className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'SEO Optimization',
    description:
      'Improving site visibility with SEO best practices and performance-focused coding.',
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#FF6B6B]" />,
    title: 'Project Collaboration',
    description:
      'Working effectively with teams to deliver meaningful, scalable digital products.',
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-foreground/5 text-center">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-12">
        My Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {service.title}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
