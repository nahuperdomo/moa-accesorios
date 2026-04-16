'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/types';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product?.photo_variants?.length ? product.photo_variants : product?.image ? [product.image] : [];

  console.log('ProductModal - product:', product);
  console.log('ProductModal - images:', images);
  console.log('ProductModal - activeImageIndex:', activeImageIndex);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      setActiveImageIndex(0); // Reset to first image when product changes
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Overlay - warm */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Content - no rounded, warm bg */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-bg-primary w-full md:max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Close button - text × */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-ink-muted hover:text-ink transition-colors text-2xl leading-none"
            >
              &times;
            </button>

            <div className="md:flex">
              {/* Image */}
              <div className="relative aspect-square md:w-1/2 bg-bg-sage/30 flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    {images.length > 0 && (
                      <Image
                        src={images[activeImageIndex]}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        unoptimized
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((src, index) => (
                      <button
                        key={src}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-8 md:w-1/2 md:flex md:flex-col md:justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-2">
                    {product.category.replace('-', ' ')}
                  </p>
                  <h3 className="text-lg font-light tracking-[0.15em] uppercase text-ink">
                    {product.name}
                  </h3>
                  <p className="text-xl font-normal text-ink mt-3">
                    ${product.price}
                  </p>

                  <div className="w-8 h-px bg-border-soft my-6" />

                  {product.description && (
                    <p className="text-sm font-light text-ink-secondary leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  {product.colors && product.colors.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-ink-muted mb-2">
                        Colores disponibles
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color) => (
                          <span
                            key={color}
                            className="text-[10px] tracking-[0.1em] px-3 py-1 border border-border-soft text-ink-secondary capitalize"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  {product.inStock ? (
                    <WhatsAppButton
                      productName={product.name}
                      price={product.price}
                      className="w-full justify-center"
                    />
                  ) : (
                    <div className="text-center">
                      <p className="text-xs text-ink-muted mb-3">
                        Este producto está agotado
                      </p>
                      <WhatsAppButton
                        productName={product.name}
                        price={product.price}
                        label="Consultá cuándo vuelve"
                        className="w-full justify-center opacity-70"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
