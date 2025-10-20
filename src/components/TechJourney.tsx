import { useState } from 'react';

export default function TechJourney() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6  font-sans text-foreground/90 leading-relaxed">
      {/* Always visible part */}
      <p>
        I am <strong>TAWAKALITU OMOLOJA</strong>, and I didn&apos;t stumble into
        tech, I fought my way into it. With my husband&apos;s encouragement, I
        traded fear for curiosity and discovered a passion for design and coding
        that blended perfectly with my creativity.
      </p>

      <p>
        Three months after giving birth, when most people would have taken a
        step back, I strapped my baby to my back and kept learning. Late nights,
        online courses, coding challenges, I made them part of my routine. That
        season of my life taught me grit and resilience. It showed me that
        motherhood and ambition can coexist, and it built the foundation of who
        I am as a developer today.
      </p>

      {/* Expandable content */}
      {expanded && (
        <>
          <p>
            Over time, I completed programs like{' '}
            <span className="font-semibold">Women Techsters Fellowship</span>{' '}
            and <span className="font-semibold">AltSchool Africa</span> (both
            intensive 1-year journeys), as well as{' '}
            <span className="font-semibold">
              FreeCodeCamp&apos;s 300-hour curriculum
            </span>
            . These experiences gave me both technical depth and the confidence
            to take on challenges.
          </p>

          <p>
            Today, I see myself as a lifelong learner, always eager to improve,
            collaborate, and share knowledge. For me, tech isn&apos;t just a
            career; it&apos;s a craft I continue to refine.
          </p>

          {/* Highlight Skills */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Technical Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>HTML, CSS, Tailwind CSS</li>
                <li>JavaScript, TypeScript</li>
                <li>React, Next.js</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Beyond Code
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Project Management</li>
                <li>Collaboration & Mentorship</li>
                <li>Continuous Learning</li>
                <li>Personal Development Advocacy</li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[#FF6B6B] font-semibold hover:underline"
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}
