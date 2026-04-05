'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Category, Product } from '@/lib/types';
import { getProducts } from '@/lib/products';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ProductGrid from './ProductGrid';

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('categoria') as Category | null;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange] = useState<[number, number]>([0, 1000]);
  const [onlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      console.log('CatalogContent fetched products:', data.length);
      if (data.length > 0) {
        console.log('Primer producto:', data[0]);
      }
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (loading) return [];
    const filtered = products.filter((p) => {
      if (selectedCategories.length && !selectedCategories.includes(p.category))
        return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (onlyInStock && !p.inStock) return false;
      if (
        searchQuery &&
        !p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });

    return [...filtered].sort((a, b) => {
      if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
      return a.price - b.price;
    });
  }, [products, selectedCategories, priceRange, onlyInStock, searchQuery, loading]);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Editorial header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.25em] uppercase text-ink mb-4">
          Catálogo
        </h1>
        <div className="w-12 h-px bg-border-medium mx-auto mb-4" />
        <p className="text-xs tracking-[0.1em] text-ink-muted">
          {loading ? 'Cargando productos...' : `${filteredProducts.length} productos`}
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Filters - horizontal */}
      <FilterBar
        selectedCategories={selectedCategories}
        onCategoriesChange={setSelectedCategories}
      />

      {/* Product grid */}
      {loading ? (
        <p className="text-center text-sm text-ink-muted mt-8">Cargando...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-sm text-ink-muted mt-8">No se encontró ningún producto con los filtros.</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
}
