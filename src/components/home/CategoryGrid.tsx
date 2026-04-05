'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CategoryInfo } from '@/lib/types';
import { getCategories, getProducts } from '@/lib/products';

export default function CategoryGrid() {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [cats, products] = await Promise.all([getCategories(), getProducts()]);
      const countsMap = new Map<string, number>();
      products.forEach((p) => {
        countsMap.set(p.category, (countsMap.get(p.category) || 0) + 1);
      });
      setCategories(
        cats
          .filter((c) => c.slug !== 'otros' && c.slug !== 'chokers')
          .map((c) => ({ ...c, productCount: countsMap.get(c.slug) || 0 }))
      );
    };
    fetchData();
  }, []);
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-center text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-2">
        Explorá nuestras
      </h2>
      <h3 className="text-center text-2xl md:text-3xl font-extralight tracking-[0.15em] uppercase text-ink mb-10">
        Categorías
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
          >
            <Link
              href={`/catalogo?categoria=${cat.slug}`}
              className="group block bg-bg-sage/40 py-12 px-6 text-center hover:bg-bg-sage/70 transition-all duration-300"
            >
              <h4 className="text-sm md:text-xl font-extralight tracking-[0.15em] md:tracking-[0.2em] uppercase text-ink group-hover:tracking-[0.25em] transition-all duration-300 break-words">
                {cat.name}
              </h4>
              <p className="text-[10px] tracking-[0.15em] text-ink-muted mt-2">
                ({cat.productCount} piezas)
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
