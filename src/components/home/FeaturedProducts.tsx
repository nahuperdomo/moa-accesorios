'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.inStock).slice(0, 8);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-2">
          Lo más nuevo
        </h2>
        <h3 className="text-center text-2xl md:text-3xl font-extralight tracking-[0.15em] uppercase text-ink mb-10">
          Productos destacados
        </h3>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
        {featured.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 w-44 md:w-56 snap-start"
          >
            <div className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <p className="text-[11px] font-normal tracking-[0.15em] uppercase text-ink truncate">
                {product.name}
              </p>
              <p className="text-[12px] font-normal tracking-[0.05em] text-ink-secondary mt-0.5">
                ${product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
