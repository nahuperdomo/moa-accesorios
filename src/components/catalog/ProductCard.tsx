'use client';

import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const imageSrc =
    typeof product.image === 'string' && product.image.trim().length > 0
      ? product.image
      : '';

  return (
    <button
      onClick={onClick}
      className="group text-left w-full"
    >
      {/* Image - no rounded, no shadow */}
      <div className="relative aspect-square overflow-hidden mb-3 bg-bg-sage/30">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:opacity-90 transition-opacity duration-300"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] tracking-[0.15em] uppercase text-ink-muted">
            Sin imagen
          </div>
        )}
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
