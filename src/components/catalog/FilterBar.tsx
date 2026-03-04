'use client';

import { categories } from '@/data/products';
import { Category } from '@/lib/types';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  selectedCategories: Category[];
  onCategoriesChange: (categories: Category[]) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onlyInStock: boolean;
  onInStockChange: (value: boolean) => void;
}

export default function FilterBar({
  selectedCategories,
  onCategoriesChange,
  onlyInStock,
  onInStockChange,
}: FilterBarProps) {
  const toggleCategory = (slug: Category) => {
    if (selectedCategories.includes(slug)) {
      onCategoriesChange(selectedCategories.filter((c) => c !== slug));
    } else {
      onCategoriesChange([slug]);
    }
  };

  const allSelected = selectedCategories.length === 0;

  return (
    <div className="mb-12">
      {/* Category chips - horizontal scroll */}
      <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => onCategoriesChange([])}
          className={cn(
            'text-xs tracking-[0.15em] uppercase whitespace-nowrap pb-1 border-b-2 transition-colors',
            allSelected
              ? 'border-ink text-ink'
              : 'border-transparent text-ink-muted hover:text-ink'
          )}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => toggleCategory(cat.slug)}
            className={cn(
              'text-xs tracking-[0.15em] uppercase whitespace-nowrap pb-1 border-b-2 transition-colors',
              selectedCategories.includes(cat.slug)
                ? 'border-ink text-ink'
                : 'border-transparent text-ink-muted hover:text-ink'
            )}
          >
            {cat.name}
          </button>
        ))}

        {/* Divider */}
        <span className="text-border-medium">|</span>

        {/* In stock toggle */}
        <button
          onClick={() => onInStockChange(!onlyInStock)}
          className={cn(
            'text-xs tracking-[0.15em] uppercase whitespace-nowrap pb-1 border-b-2 transition-colors',
            onlyInStock
              ? 'border-ink text-ink'
              : 'border-transparent text-ink-muted hover:text-ink'
          )}
        >
          Disponibles
        </button>
      </div>
    </div>
  );
}
