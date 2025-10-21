import { useState } from 'react';

export default function PersonalDev() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6  font-sans text-lg text-gray-700 leading-relaxed">
      {/* Always visible part */}
      <p>
        Growth has always been personal for me, not just something to chase, but
        something to embody. I believe transformation starts from within, and
        that&apos;s why personal development isn&apos;t just an interest,
        it&apos;s a calling.
      </p>

      <p>
        Over time, I&apos;ve grown deeply passionate about helping people build
        self-esteem, confidence, and self-awareness. Whether it&apos;s through
        writing, thoughtful conversations, or creating tools that spark
        reflection, my goal is simple: to help people come home to themselves.
      </p>

      {/* Expanded content */}
      {expanded && (
        <>
          <p>
            I read to grow, journal to reflect, and share to uplift. I
            don&apos;t believe in perfect, I believe in progress. And I&apos;m
            building a community and product around that belief, a space where
            growth is intentional, goals are structured, and becoming your best
            self feels possible.
          </p>
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
