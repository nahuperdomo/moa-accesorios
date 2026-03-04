'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xs tracking-[0.1em] text-ink-muted">
            No se encontraron productos con esos filtros.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.03 }}
                layout
              >
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
