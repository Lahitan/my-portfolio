import Link from 'next/link';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden ">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xs opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xs opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-40 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xs opacity-60 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground/90">
          Building Thoughtful Experiences <br /> Through Code & Content
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto font-sans text-foreground/80">
          A frontend developer & personal development advocate, on a mission to
          create meaningful digital experiences.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#D6C8FF] text-foreground font-sans font-medium shadow-md hover:bg-[#9e80fb] hover:text-white transition"
          >
            Hire Me
          </Link>
          <Link
            href="#products"
            className="px-6 py-3 rounded-xl bg-transperent border-2 border-[#D6C8FF] text-foreground font-sans font-medium shadow-md hover:bg-[#9e80fb] hover:text-white transition"
          >
            Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
