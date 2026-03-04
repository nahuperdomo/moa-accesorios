import { Suspense } from 'react';
import { Metadata } from 'next';
import CatalogContent from '@/components/catalog/CatalogContent';

export const metadata: Metadata = {
  title: 'Catálogo',
  description: 'Explorá nuestro catálogo completo de cadenas, collares de mostacillas, chokers, pulseras y más.',
};

export default function CatalogoPage() {
  return (
    <div className="px-6 py-16">
      <Suspense
        fallback={
          <div className="text-center py-16">
            <p className="text-xs tracking-[0.1em] text-ink-muted">Cargando catálogo...</p>
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </div>
  );
}
