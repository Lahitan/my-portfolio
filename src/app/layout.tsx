// app/layout.tsx
import type { Metadata } from 'next';
import { Caveat, Poppins } from 'next/font/google';
import '../styles/globals.css';

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // regular → bold
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default:
      'Omoloja Tawakalitu – Frontend Developer | React, Tailwind, Firebase',
    template: '%s | Omoloja Tawakalitu Portfolio',
  },
  description:
    "I'm an SEO expert, and a Frontend Developer with 3+ years of experience building fast, accessible websites using React, Tailwind CSS, and Firebase. Let's collaborate to create amazing digital experiences.",
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Tailwind CSS',
    'Firebase',
    'Web Developer Portfolio',
    'Nigeria Developer',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  authors: [{ name: 'Omoloja Tawakalitu Olaitan' }],
  creator: 'Omoloja Tawakalitu Olaitan',
  openGraph: {
    title: 'Omoloja Tawakalitu – Frontend Developer',
    description:
      'Building modern, fast, and accessible web apps using React, Tailwind CSS, and Firebase.',
    url: 'https://tawakalitu-omoloja-portfolio.vercel.app',
    siteName: 'Omoloja Tawakalitu Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omoloja Tawakalitu Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omoloja Tawakalitu – Frontend Developer',
    description:
      'Frontend Developer crafting beautiful, fast, and user-friendly experiences with React & Tailwind CSS.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://tawakalitu-omoloja-portfolio.vercel.app'),
  alternates: {
    canonical: 'https://tawakalitu-omoloja-portfolio.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema Markup for SEO */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Omoloja Tawakalitu Olaitan',
              url: 'https://tawakalitu-omoloja-portfolio.vercel.app',
              jobTitle: 'Frontend Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              knowsAbout: ['React', 'Tailwind CSS', 'Firebase', 'SEO'],
              sameAs: [
                'https://github.com/Lahitan',
                'https://www.linkedin.com/in/haruna-tawakalitu',
              ],
            }),
          }}
        />
        <link
          rel="canonical"
          href="https://tawakalitu-omoloja-portfolio.vercel.app"
        />
      </head>
      <body
        className={`${caveat.variable} ${poppins.variable} font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
