"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full px-6 md:px-10 py-5 bg-cream border-b border-border flex items-center justify-between"
    >
      <span className="font-heading text-sm font-semibold text-forest tracking-tight">
        Perfect Protein Partners
      </span>
      <nav className="hidden sm:flex gap-8 text-xs tracking-wide text-muted font-sans uppercase">
        <a href="#claims" className="hover:text-forest transition-colors">
          What we do
        </a>
        <a href="#who-we-serve" className="hover:text-forest transition-colors">
          Who we work with
        </a>
        <a href="#contact" className="hover:text-forest transition-colors">
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
