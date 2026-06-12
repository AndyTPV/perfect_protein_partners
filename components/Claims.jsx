"use client";

import { motion } from "framer-motion";

const claims = [
  {
    title: "Step 1: Analysis",
    body: "Highest standard third party testing of your product that is run through our patented system for protein analysis",
  },
  {
    title: "Step 2: Reporting",
    body: "Executive summary, protein function dossier, potential outcome methods, & operational implementation method",
  },
  {
    title: "Step 3: Integration",
    body: "Based on a range of serviceability, an emphasis on interdisciplinary communication to ensure functional excellence",
  },
];

export default function Claims() {
  return (
    <section id="claims" className="px-6 md:px-10 py-24 bg-parchment">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-ink mb-16">How we work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {claims.map((claim, i) => (
            <motion.div
              key={claim.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface border border-border rounded p-8"
            >
              <div className="w-8 h-px bg-gold mb-6" />
              <h3 className="font-sans text-sm font-semibold text-ink mb-3 leading-snug">
                {claim.title}
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{claim.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
