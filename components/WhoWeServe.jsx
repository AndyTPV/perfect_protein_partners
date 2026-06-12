"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ROTATION_MS = 3200;
const MANUAL_HOLD_MS = 20_000;

const categories = [
  {
    name: "Animals & Agriculture",
    descriptor:
      "commercially standard dog, cat, & horse feed; private ranches; private farms; supplemental & companion feed",
  },
  {
    name: "Protein Focused Nutraceuticals",
    descriptor:
      "protein bars, foods, & RTD's; single source & blended protein powders; sports nutraceuticals; meal replacements",
  },
  {
    name: "Products for Sensitive Food Populations",
    descriptor:
      "plant based; protein malabsorption; compromised nutrition; combating muscle wasting; emergency food storage; rationed food",
  },
  {
    name: "Scaled CPG & Mass Food Distribution",
    descriptor:
      "Nut butters; granola bars; pre-packaged food; boxed food; in-house lunch programs; catered food providers",
  },
];

export default function WhoWeServe() {
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  // paused is set to true on manual click and cleared by a timeout after MANUAL_HOLD_MS
  const paused = useRef(false);
  const pauseTimer = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      if (paused.current) return;
      setActive((prev) => (prev + 1) % categories.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  function handleClick(i) {
    setActive(i);
    paused.current = true;
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => {
      paused.current = false;
    }, MANUAL_HOLD_MS);
  }

  return (
    <section id="who-we-serve" className="px-6 md:px-10 py-24 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-ink mb-4">
            We work best with
          </h2>
          <p className="font-sans text-muted max-w-md leading-relaxed">
            We source across the protein supply chain — from commodity feed to clinical nutrition.
          </p>
        </div>

        <div className="border-t border-border divide-y divide-border">
          {categories.map((cat, i) => {
            const isActive = i === active;
            return (
              <button
                key={cat.name}
                type="button"
                aria-expanded={isActive}
                onClick={() => handleClick(i)}
                className="w-full text-left cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <div
                  className={`pl-4 border-l-2 transition-colors duration-300 ${
                    isActive ? "border-gold" : "border-transparent"
                  }`}
                >
                  <div className="py-4">
                    <span
                      className={`font-sans text-base font-medium transition-colors duration-300 ${
                        isActive ? "text-forest" : "text-muted hover:text-ink"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="font-sans text-sm text-muted leading-relaxed pb-5 overflow-hidden"
                      >
                        {cat.descriptor}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
