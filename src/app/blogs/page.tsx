'use client';

import { useState } from 'react';
import { blogs } from '@/data/blog';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const ITEMS_PER_PAGE = 4;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <Navbar />
      <h1 className="text-4xl font-heading font-bold text-center mt-20 mb-10 text-foreground">
        All Blogs
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {currentBlogs.map((post) => (
          <div
            key={post.id}
            className="p-6 border-gray-300 border rounded-xl shadow-sm hover:shadow-md transition bg-white"
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-2xl font-sans font-semibold mb-2 text-foreground">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              📅 {post.date} • ⏱ {post.readTime}
            </p>
            <p className="text-foreground/80 font-sans mb-4">{post.excerpt}</p>
            <Link
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B6B] font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? 'bg-[#FF6B6B] text-white'
                : 'bg-gray-100 text-foreground hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-20">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-[#D6C8FF] text-foreground font-sans font-medium shadow-md hover:shadow-lg transition "
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
