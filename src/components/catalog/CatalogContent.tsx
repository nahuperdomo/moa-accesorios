'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Category } from '@/lib/types';
import { products } from '@/data/products';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import ProductGrid from './ProductGrid';

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('categoria') as Category | null;

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 310]);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
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
  }, [selectedCategories, priceRange, onlyInStock, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Editorial header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.25em] uppercase text-ink mb-4">
          Catálogo
        </h1>
        <div className="w-12 h-px bg-border-medium mx-auto mb-4" />
        <p className="text-xs tracking-[0.1em] text-ink-muted">
          {filteredProducts.length} productos
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
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        onlyInStock={onlyInStock}
        onInStockChange={setOnlyInStock}
      />

      {/* Product grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
