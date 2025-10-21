'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // helper to close mobile menu when a link is clicked
  const handleClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="#hero"
          className="text-3xl font-heading font-bold text-[#E85C5C]"
        >
          <h1>
            Tawakalitu<span className="text-foreground">.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-sans text-foreground">
          <Link
            href="#about"
            className=" md:text-[1.3rem] hover:text-[#E85C5C] transform duration-300"
          >
            About
          </Link>
          <Link
            href="#skills"
            className=" md:text-[1.3rem] hover:text-[#E85C5C] transform duration-300"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className=" md:text-[1.3rem] hover:text-[#E85C5C] transform duration-300"
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className=" md:text-[1.3rem] hover:text-[#E85C5C] transform duration-300"
          >
            Blogs
          </Link>
          <Link
            href="#products"
            className=" md:text-[1.3rem] hover:text-[#E85C5C] transform duration-300"
          >
            Products
          </Link>
          <Link
            href="#contact"
            className=" md:text-[1.3rem] hover:text-[#E85C5C] transform duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white shadow-lg  font-sans text-foreground">
          <Link href="#about" className="" onClick={handleClick}>
            About
          </Link>
          <Link
            href="#skills"
            className="hover:text-[#E85C5C]"
            onClick={handleClick}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#E85C5C] "
            onClick={handleClick}
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className="hover:text-[#E85C5C] "
            onClick={handleClick}
          >
            Blogs
          </Link>
          <Link
            href="/products"
            className="hover:text-[#E85C5C]"
            onClick={handleClick}
          >
            Products
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#E85C5C] "
            onClick={handleClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
