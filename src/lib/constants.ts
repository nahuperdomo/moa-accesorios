export const BRAND = {
  whatsapp: {
    contacts: [
      { name: 'Agustina', number: '59891787351' },
      { name: 'Marti', number: '59894744862' },
    ],
    defaultMessage: 'Hola! Vi su catálogo en la web',
    productMessage: (name: string, price: number) =>
      `Hola! Me interesa ${name} ($${price}). ¿Está disponible?`,
  },
  instagram: 'https://www.instagram.com/moa_accesorios.uy/',
  location: 'San José de Mayo, Uruguay',
} as const;
