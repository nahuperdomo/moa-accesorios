'use client';

import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
      <input
        type="text"
        placeholder="Buscar productos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-3 bg-transparent border-b border-border-soft text-sm font-light tracking-[0.05em] text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-ink transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
