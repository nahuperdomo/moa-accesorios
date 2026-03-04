'use client';

import Image from 'next/image';
import { products } from '@/data/products';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.inStock).slice(0, 8);
  // Duplicate for seamless infinite loop
  const items = [...featured, ...featured];

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

      <div className="relative">
        <div className="flex gap-6 px-6 animate-marquee hover:[animation-play-state:paused]">
          {items.map((product, i) => (
            <div
              key={`${product.id}-${i}`}
              className="flex-shrink-0 w-44 md:w-56"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
