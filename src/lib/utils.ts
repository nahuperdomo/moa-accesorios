import { BRAND } from './constants';

export function formatPrice(price: number): string {
  return `$${price}`;
}

export function generateWhatsAppUrl(productName?: string, price?: number, contactIndex = 0): string {
  const message = productName && price
    ? BRAND.whatsapp.productMessage(productName, price)
    : BRAND.whatsapp.defaultMessage;
  const contact = BRAND.whatsapp.contacts[contactIndex] || BRAND.whatsapp.contacts[0];
  return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`;
}

export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
