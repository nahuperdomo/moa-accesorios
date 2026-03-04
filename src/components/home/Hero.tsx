'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[85vh] bg-bg-sage flex flex-col items-center justify-center relative px-6">
      {/* Stacked text - editorial style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center leading-[0.85] mb-12"
      >
        <span className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.25em] text-ink select-none">
          ACCE
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.25em] text-ink select-none">
          SO
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.25em] text-ink select-none">
          RIOS
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm font-light tracking-[0.2em] uppercase text-ink-secondary mb-10"
      >
        hechos para vos
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link
          href="/catalogo"
          className="border border-ink text-ink text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-ink hover:text-bg-primary transition-all duration-300"
        >
          Ver catálogo
        </Link>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 text-xs tracking-[0.15em] text-ink-muted"
      >
        @moa_accesorios
      </motion.span>
    </section>
  );
}
