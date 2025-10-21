import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'picsum.photos', // For your random images
      'images.unsplash.com', // Optional example
      'res.cloudinary.com', // Optional example
    ],
  },
};

export default nextConfig;
