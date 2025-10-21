'use client';

import { useState } from 'react';
import { products, Product } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

export default function Products() {
  const [category, setCategory] = useState<string>('All');

  const categories: string[] = [
    'All',
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts: Product[] =
    category === 'All'
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section id="products" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-heading font-bold text-center mb-10 text-foreground">
        My Products
      </h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-lg text-sm font-sans transition ${
              category === cat
                ? 'bg-[#E85C5C] text-white shadow-md'
                : 'bg-[#666666]/12 text-[#666666] hover:bg-[#666666]/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product: Product) => (
          <div
            key={product.id}
            className="p-6 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={800}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-foreground">
              {product.title}
            </h3>
            <p className="text-foreground/80 text-sm mt-2 flex-grow">
              {product.description}
            </p>
            <p className="mt-3 text-lg font-bold text-[#E85C5C]">
              {product.price}
            </p>
            <Link
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-1/2 mt-4 px-4 py-2 text-center rounded-lg bg-[#D6C8FF] text-foreground font-semibold shadow-md hover:shadow-lg transition"
            >
              Get Now
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="https://selar.com/m/Prints_By_Tawakalt"
          target="_blank"
          className="px-6 py-3 rounded-xl bg-[#E85C5C] text-white font-sans font-medium shadow-md hover:shadow-lg transition"
        >
          See More Products
        </Link>
      </div>
    </section>
  );
}
