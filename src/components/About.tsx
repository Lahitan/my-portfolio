'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechJourney from './TechJourney';
import PersonalDev from './PersonalDev';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('tech');

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 flex flex-col items-center bg-white"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
        About Me
      </h2>

      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Picture */}
        <div className="flex justify-center">
          <Image
            src="/avatar.jpg"
            alt="Tawakalitu Omoloja Avatar"
            width={500}
            height={300}
            className="rounded-2xl shadow-lg object-cover w-72 h-90  border-b-5 border-t-5 border-t-[#D6C8FF]  border-b-[#D6C8FF]"
          />
        </div>

        {/* Right: Tabs + Content */}
        <div>
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === 'tech'
                  ? 'bg-[#FF6B6B] text-white'
                  : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20'
              }`}
            >
              Tech Journey
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === 'personal'
                  ? 'bg-[#FF6B6B] text-white'
                  : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20'
              }`}
            >
              Personal Development
            </button>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'tech' ? (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-lg font-sans text-foreground/90 leading-relaxed"
              >
                <TechJourney />
              </motion.div>
            ) : (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-foreground/80 leading-relaxed"
              >
                <PersonalDev />
              </motion.div>
            )}
          </AnimatePresence>
          {/* CV Button */}
          <Link
            href="/Frontend Developer Tawakalitu Omoloja.pdf"
            download
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-[#D6C8FF] text-foreground font-sans font-medium shadow-md hover:shadow-lg transition"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
