import { MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';
import { BRAND } from '@/lib/constants';

interface WhatsAppButtonProps {
  productName?: string;
  price?: number;
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  productName,
  price,
  label,
  className = '',
}: WhatsAppButtonProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
      {BRAND.whatsapp.contacts.map((contact, i) => (
        <a
          key={contact.number}
          href={generateWhatsAppUrl(productName, price, i)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-bg-primary hover:bg-mint text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 w-full sm:w-auto justify-center"
        >
          <MessageCircle size={14} />
          {label || contact.name}
        </a>
      ))}
    </div>
  );
}
