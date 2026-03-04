'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';
import { BRAND } from '@/lib/constants';

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Contact options */}
      {open && (
        <div className="flex flex-col gap-2 mb-1">
          {BRAND.whatsapp.contacts.map((contact, i) => (
            <a
              key={contact.number}
              href={generateWhatsAppUrl(undefined, undefined, i)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-bg-primary text-xs tracking-[0.1em] px-4 py-2.5 hover:bg-mint transition-all duration-300 whitespace-nowrap"
            >
              {contact.name}
            </a>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-ink rounded-full flex items-center justify-center text-bg-primary hover:bg-mint hover:scale-105 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        {open ? <X size={18} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
