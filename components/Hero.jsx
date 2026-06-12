"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 md:px-10 pt-20 pb-28 md:pt-32 md:pb-40 bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-gold mb-10"
        >
          Protein Ingredient Sourcing
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl text-ink leading-[1.08] tracking-tight max-w-3xl"
        >
          Every protein is its own puzzle piece.{" "}
          <span className="text-forest">
            We design the perfect complement.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-base md:text-lg text-muted font-sans max-w-md leading-relaxed"
        >
          Ground breaking analysis combined with interdisciplinary integration services - A match that can&apos;t be beat
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-forest text-cream text-sm font-sans font-medium rounded-sm hover:bg-forest-dark transition-colors"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
