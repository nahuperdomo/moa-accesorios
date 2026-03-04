'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/types';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
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
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
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
