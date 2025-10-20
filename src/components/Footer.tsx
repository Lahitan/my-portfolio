// src/components/Footer.tsx
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Tawakalitu Omoloja. All rights reserved.
        </p>

        {/* Right: Social links */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/lahitan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#FF6B6B] transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/tawakalitu-haruna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#FF6B6B] transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com/Olahitan14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#FF6B6B] transition"
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
