'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xyzdooog', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();

      // Remove the message after 4 seconds
      setTimeout(() => setStatus(''), 4000);
    } else {
      setStatus('ERROR');

      // Remove the message after 4 seconds
      setTimeout(() => setStatus(''), 4000);
    }
  }

  return (
    <section className="px-6 py-16 text-center relative">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white dark:bg-foreground/10 p-8 rounded-2xl shadow-md space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
        />
        <textarea
          name="message"
          placeholder="Hey I'm interested in having you join our project team"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-[#FF6B6B] text-white font-semibold rounded-lg hover:bg-[#e55b5b] transition"
        >
          Send Message
        </button>
      </form>

      {/* ✅ Animated Toast */}
      <AnimatePresence>
        {status && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-lg text-white font-medium ${
              status === 'SUCCESS' ? 'bg-green-400' : 'bg-red-400'
            }`}
          >
            {status === 'SUCCESS'
              ? ' Message sent successfully!'
              : ' Something went wrong. Please try again.'}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
