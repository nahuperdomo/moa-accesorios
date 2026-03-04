import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-bg-sage py-20 px-6 text-center">
      <p className="text-3xl tracking-wider text-ink lowercase mb-8">moa</p>
      <p className="text-[10px] tracking-[0.2em] uppercase text-ink-secondary mb-2">
        &middot; accesorios &middot;
      </p>
      <div className="w-8 h-px bg-border-medium mx-auto my-8" />
      <div className="flex items-center justify-center gap-1 text-xs tracking-[0.15em] uppercase text-ink-secondary mb-8">
        <Link href="/catalogo" className="hover:text-ink transition-colors">
          Catálogo
        </Link>
        <span className="mx-3 text-border-medium">&middot;</span>
        <Link href="/nosotros" className="hover:text-ink transition-colors">
          Nosotros
        </Link>
        <span className="mx-3 text-border-medium">&middot;</span>
        <Link href="/catalogo" className="hover:text-ink transition-colors">
          Contacto
        </Link>
      </div>
      <p className="text-[11px] text-ink-muted tracking-wide mb-2">
        San José de Mayo, Uruguay &middot; Envíos a todo el país
      </p>
      <div className="flex items-center justify-center gap-4 my-6">
        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted hover:text-ink transition-colors"
        >
          <Instagram size={16} />
        </a>
      </div>
      <p className="text-[10px] text-ink-muted/60 tracking-wider mt-8">
        &copy; {new Date().getFullYear()} MOA Accesorios
      </p>
    </footer>
  );
}
