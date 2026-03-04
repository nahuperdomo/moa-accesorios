'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled ? 'bg-bg-primary/90 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl tracking-wider text-ink lowercase">
          moa
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 text-ink-secondary">
          <Link
            href="/catalogo"
            className="text-[0.8rem] font-light tracking-[0.18em] uppercase hover:text-mint transition-colors"
          >
            Catálogo
          </Link>
          <span className="text-border-medium mx-3">&middot;</span>
          <Link
            href="/nosotros"
            className="text-[0.8rem] font-light tracking-[0.18em] uppercase hover:text-mint transition-colors"
          >
            Nosotras
          </Link>
          <span className="text-border-medium mx-3">&middot;</span>
          <Link
            href="/catalogo"
            className="text-[0.8rem] font-light tracking-[0.18em] uppercase hover:text-mint transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Mobile hamburger - 3 thin lines */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
          aria-label="Menu"
        >
          <span className={cn(
            'block h-px bg-ink transition-all duration-300 origin-center',
            isOpen ? 'rotate-45 translate-y-[6px]' : ''
          )} />
          <span className={cn(
            'block h-px bg-ink transition-all duration-300',
            isOpen ? 'opacity-0' : ''
          )} />
          <span className={cn(
            'block h-px bg-ink transition-all duration-300 origin-center',
            isOpen ? '-rotate-45 -translate-y-[6px]' : ''
          )} />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={cn(
        'md:hidden fixed inset-0 top-14 bg-bg-primary/98 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center gap-8',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <Link
          href="/catalogo"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-extralight tracking-[0.25em] uppercase text-ink hover:text-mint transition-colors"
        >
          Catálogo
        </Link>
        <Link
          href="/nosotros"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-extralight tracking-[0.25em] uppercase text-ink hover:text-mint transition-colors"
        >
          Nosotras
        </Link>
        <Link
          href="/catalogo"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-extralight tracking-[0.25em] uppercase text-ink hover:text-mint transition-colors"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
