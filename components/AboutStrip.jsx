"use client";

import { motion } from "framer-motion";

export default function AboutStrip() {
  return (
    <section className="px-6 md:px-10 py-24 bg-forest">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-2xl md:text-3xl text-cream mb-8">
          About Perfect Protein Partners
        </h2>
        <p className="font-sans text-base md:text-lg text-cream-faint leading-relaxed">
          Perfect Protein Partners (PPP) had it&apos;s inspired start with the miraculous amino acid
          combinations eating multiple foods can provide. The famed combination of rice and beans is
          an ideal match that yields an amino acid profile that can reliably sustain life. PPP is
          about providing the protein-focused enterprise with that magical &ldquo;rice and beans&rdquo; answer.
          We are founded in purposefully finding the perfect protein partner for the protein-focused
          enterprise&apos;s product!
        </p>
      </motion.div>
    </section>
  );
}
