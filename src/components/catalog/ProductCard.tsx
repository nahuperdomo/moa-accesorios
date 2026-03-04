'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full"
    >
      {/* Image - no rounded, no shadow */}
      <div className="relative aspect-square overflow-hidden mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>

      {/* Info */}
      <p className="text-[11px] font-normal tracking-[0.15em] uppercase text-ink leading-relaxed">
        {product.name}
        {!product.inStock && (
          <span className="text-sold-out ml-1">(AGOTADO)</span>
        )}
      </p>
      <p className="text-[12px] font-normal tracking-[0.05em] text-ink-secondary mt-0.5">
        ${product.price}
      </p>
      {product.colors && product.colors.length > 0 && (
        <p className="text-[10px] text-ink-muted mt-0.5">
          {product.colors.length} colores
        </p>
      )}
    </button>
  );
}
