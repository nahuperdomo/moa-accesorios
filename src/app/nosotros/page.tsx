import { Metadata } from 'next';
import { Instagram } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conocé la historia de MOA Accesorios. Bijouterie artesanal desde San José de Mayo, Uruguay.',
};

export default function NosotrosPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.25em] uppercase text-ink mb-4">
          Nosotros
        </h1>
        <div className="w-12 h-px bg-border-medium mx-auto" />
      </div>

      {/* Story */}
      <div className="space-y-6 text-ink-secondary text-[0.95rem] font-light leading-[1.7] tracking-[0.02em] mb-16">
        <p>
          <span className="text-ink font-normal">MOA Accesorios</span> nació con una idea simple:
          que cada persona pueda encontrar accesorios que la representen, a un precio accesible
          y con atención personalizada.
        </p>
        <p>
          Desde <span className="text-ink font-normal">San José de Mayo, Uruguay</span>, seleccionamos
          y diseñamos cada pieza de nuestro catálogo: cadenas de acero, collares de mostacillas
          artesanales, chokers de cuero cosidos a mano, pulseras y más.
        </p>
        <p>
          Creemos que los accesorios son una forma de expresión. Por eso trabajamos con
          variedad de estilos, materiales y colores para que encuentres lo que va con vos.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="text-center py-10 px-6 bg-bg-sage/40">
          <h3 className="text-xs tracking-[0.2em] uppercase text-ink mb-2">Hecho con amor</h3>
          <p className="text-[11px] text-ink-muted leading-relaxed">
            Cada pieza es seleccionada y preparada con dedicación
          </p>
        </div>
        <div className="text-center py-10 px-6 bg-bg-sage/40">
          <h3 className="text-xs tracking-[0.2em] uppercase text-ink mb-2">Calidad accesible</h3>
          <p className="text-[11px] text-ink-muted leading-relaxed">
            Materiales duraderos a precios pensados para vos
          </p>
        </div>
        <div className="text-center py-10 px-6 bg-bg-sage/40">
          <h3 className="text-xs tracking-[0.2em] uppercase text-ink mb-2">Envíos a todo el país</h3>
          <p className="text-[11px] text-ink-muted leading-relaxed">
            Desde San José de Mayo a donde estés
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-6">
        <p className="text-xs tracking-[0.1em] text-ink-muted">
          ¿Tenés alguna consulta? Escribinos
        </p>
        <WhatsAppButton />
        <div className="pt-4">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.1em] text-ink-muted hover:text-ink transition-colors"
          >
            <Instagram size={14} />
            Seguinos en Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
