import { Product, CategoryInfo } from '@/lib/types';

export const products: Product[] = [
  // === CADENAS ($200 - $310) ===
  { id: 'cadena-eslabon', name: 'CADENA ESLABÓN', price: 200, category: 'cadenas', image: '/images/products/cadena-eslabon.jpg', inStock: true },
  { id: 'cadena-irregular', name: 'CADENA IRREGULAR', price: 200, category: 'cadenas', image: '/images/products/cadena-irregular.jpg', inStock: true },
  { id: 'cadena-ovo', name: 'CADENA OVO', price: 200, category: 'cadenas', image: '/images/products/cadena-ovo.jpg', inStock: true },
  { id: 'cadena-doble-corazon', name: 'CADENA DOBLE CORAZÓN', price: 200, category: 'cadenas', image: '/images/products/cadena-doble-corazon.jpg', inStock: true },
  { id: 'cadena-doble-punto', name: 'CADENA DOBLE PUNTO', price: 250, category: 'cadenas', image: '/images/products/cadena-doble-punto.jpg', inStock: false },
  { id: 'cadena-corazon', name: 'CADENA CORAZÓN', price: 200, category: 'cadenas', image: '/images/products/cadena-corazon.jpg', inStock: true },
  { id: 'cadena-multi', name: 'CADENA MULTI', price: 290, category: 'cadenas', image: '/images/products/cadena-multi.jpg', inStock: true },
  { id: 'cadena-corazon-chato', name: 'CADENA CORAZÓN CHATO', price: 200, category: 'cadenas', image: '/images/products/cadena-corazon-chato.jpg', inStock: true },
  { id: 'cadena-estrella', name: 'CADENA ESTRELLA', price: 200, category: 'cadenas', image: '/images/products/cadena-estrella.jpg', inStock: true },
  { id: 'cadena-mini-corazon', name: 'CADENA MINI CORAZÓN', price: 200, category: 'cadenas', image: '/images/products/cadena-mini-corazon.jpg', inStock: true },
  { id: 'cadena-nova', name: 'CADENA NOVA', price: 200, category: 'cadenas', image: '/images/products/cadena-nova.jpg', inStock: true },
  { id: 'cadena-vera', name: 'CADENA VERA', price: 200, category: 'cadenas', image: '/images/products/cadena-vera.jpg', inStock: true },
  { id: 'cadena-nube', name: 'CADENA NUBE', price: 250, category: 'cadenas', image: '/images/products/cadena-nube.jpg', inStock: true },
  { id: 'cadena-jade', name: 'CADENA JADE', price: 200, category: 'cadenas', image: '/images/products/cadena-jade.jpg', inStock: true },
  { id: 'cadena-uma', name: 'CADENA UMA', price: 250, category: 'cadenas', image: '/images/products/cadena-uma.jpg', inStock: true },
  { id: 'cadena-flux', name: 'CADENA FLUX', price: 250, category: 'cadenas', image: '/images/products/cadena-flux.jpg', inStock: true },
  { id: 'cadena-sol', name: 'CADENA SOL', price: 250, category: 'cadenas', image: '/images/products/cadena-sol.jpg', inStock: false },
  { id: 'cadena-rayo', name: 'CADENA RAYO', price: 310, category: 'cadenas', image: '/images/products/cadena-rayo.jpg', inStock: true },
  { id: 'cadena-colmillo', name: 'CADENA COLMILLO', price: 270, category: 'cadenas', image: '/images/products/cadena-colmillo.jpg', inStock: true },
  { id: 'cadena-brisa', name: 'CADENA BRISA', price: 310, category: 'cadenas', image: '/images/products/cadena-brisa.jpg', inStock: true },
  { id: 'cadena-elia', name: 'CADENA ELIA', price: 270, category: 'cadenas', image: '/images/products/cadena-elia.jpg', inStock: true },
  { id: 'cadena-lumi', name: 'CADENA LUMI', price: 270, category: 'cadenas', image: '/images/products/cadena-lumi.jpg', inStock: true },
  { id: 'cadena-flora', name: 'CADENA FLORA', price: 270, category: 'cadenas', image: '/images/products/cadena-flora.jpg', inStock: true },
  { id: 'cadena-core', name: 'CADENA CORE', price: 280, category: 'cadenas', image: '/images/products/cadena-core.jpg', inStock: true },
  { id: 'cadena-estrella-grande', name: 'CADENA ESTRELLA', price: 290, category: 'cadenas', image: '/images/products/cadena-estrella-grande.jpg', inStock: true },
  { id: 'cadena-miti', name: 'CADENA MITI', price: 270, category: 'cadenas', image: '/images/products/cadena-miti.jpg', inStock: true },
  { id: 'cadena-loop', name: 'CADENA LOOP', price: 270, category: 'cadenas', image: '/images/products/cadena-loop.jpg', inStock: true },
  { id: 'cadena-lirio', name: 'CADENA LIRIO', price: 220, category: 'cadenas', image: '/images/products/cadena-lirio.jpg', inStock: true },
  { id: 'cadena-lia', name: 'CADENA LIA', price: 250, category: 'cadenas', image: '/images/products/cadena-lia.jpg', inStock: true },
  { id: 'cadena-gaia', name: 'CADENA GAIA', price: 250, category: 'cadenas', image: '/images/products/cadena-gaia.jpg', inStock: true },
  { id: 'cadena-atlas', name: 'CADENA ATLAS', price: 200, category: 'cadenas', image: '/images/products/cadena-atlas.jpg', inStock: true },
  { id: 'cadena-estrillas', name: 'CADENA ESTRILLAS', price: 290, category: 'cadenas', image: '/images/products/cadena-estrillas.jpg', inStock: true },

  // === CHOKERS ($200 - $310) ===
 
  // === COLLARES MOSTACILLAS ($200 - $310) ===
  { id: 'collar-nudo-verde', name: 'COLLAR NUDO (DOBLE USO)', price: 270, category: 'collares-mostacillas', image: '/images/products/collar-nudo-verde.jpg', inStock: true, colors: ['verde', 'verde claro', 'gris'] },
  { id: 'collar-aria-verde', name: 'COLLAR ARIA MOSTACILLAS', price: 200, category: 'collares-mostacillas', image: '/images/products/collar-aria-verde.jpg', inStock: true, colors: ['verde', 'blanco', 'verde oscuro', 'rojo'] },
  { id: 'collar-vira', name: 'COLLAR VIRA MOSTACILLAS', price: 290, category: 'collares-mostacillas', image: '/images/products/collar-vira.jpg', inStock: true, colors: ['azul', 'rojo', 'verde', 'gris', 'blanco', 'amarillo'] },
  { id: 'collar-aurelia', name: 'COLLAR AURELIA MOSTACILLAS', price: 290, category: 'collares-mostacillas', image: '/images/products/collar-aurelia.jpg', inStock: true },
  { id: 'collar-triple', name: 'COLLAR TRIPLE MOSTACILLAS', price: 290, category: 'collares-mostacillas', image: '/images/products/collar-triple.jpg', inStock: true },
  { id: 'collar-cuadruple', name: 'COLLAR CUÁDRUPLE MOSTACILLAS', price: 310, category: 'collares-mostacillas', image: '/images/products/collar-cuadruple.jpg', inStock: true },
  { id: 'collar-doble', name: 'COLLAR DOBLE MOSTACILLAS', price: 250, category: 'collares-mostacillas', image: '/images/products/collar-doble.jpg', inStock: true },
  { id: 'collar-aria-celeste', name: 'COLLAR ARIA MOSTACILLAS', price: 200, category: 'collares-mostacillas', image: '/images/products/collar-aria-celeste.jpg', inStock: true },
  { id: 'collar-aria-transparente', name: 'COLLAR ARIA MOSTACILLAS', price: 200, category: 'collares-mostacillas', image: '/images/products/collar-aria-transparente.jpg', inStock: true },
  { id: 'collar-aria-perla', name: 'COLLAR ARIA MOSTACILLAS', price: 200, category: 'collares-mostacillas', image: '/images/products/collar-aria-perla.jpg', inStock: true },
  { id: 'collar-aria-dije-corazon', name: 'COLLAR ARIA CON DIJE', price: 210, category: 'collares-mostacillas', image: '/images/products/collar-aria-dije-corazon.jpg', inStock: true },
  { id: 'collar-aria-dije-flor', name: 'COLLAR ARIA CON DIJE', price: 210, category: 'collares-mostacillas', image: '/images/products/collar-aria-dije-flor.jpg', inStock: true },
  { id: 'collar-arena-verde', name: 'COLLAR ARENA MOSTACILLAS', price: 210, category: 'collares-mostacillas', image: '/images/products/collar-arena-verde.jpg', inStock: true },
  { id: 'collar-arena-azul', name: 'COLLAR ARENA MOSTACILLAS', price: 210, category: 'collares-mostacillas', image: '/images/products/collar-arena-azul.jpg', inStock: true },

  // === HILOS DE MOSTACILLAS ($270) ===
  { id: 'hilo-mostacillas-verde', name: 'HILO DE MOSTACILLAS', price: 270, category: 'collares-mostacillas', image: '/images/products/hilo-mostacillas-verde.jpg', inStock: true },
  { id: 'hilo-mostacillas-multi', name: 'HILO DE MOSTACILLAS', price: 270, category: 'collares-mostacillas', image: '/images/products/hilo-mostacillas-multi.jpg', inStock: true },
  { id: 'hilo-mostacillas-beige', name: 'HILO DE MOSTACILLAS', price: 270, category: 'collares-mostacillas', image: '/images/products/hilo-mostacillas-beige.jpg', inStock: true },

  // === CUERO ($310) ===
  { id: 'choker-cuero-liso', name: 'CHOKER CUERO', price: 310, category: 'cuero', image: '/images/products/choker-cuero-liso.jpg', inStock: true, colors: ['verde', 'beige'] },
  { id: 'choker-cuero-cosido', name: 'CHOKER CUERO', price: 310, category: 'cuero', image: '/images/products/choker-cuero-cosido.jpg', inStock: true, colors: ['rosa', 'verde', 'beige'] },
  { id: 'choker-cuero-tachas', name: 'CHOKER CUERO', price: 310, category: 'cuero', image: '/images/products/choker-cuero-tachas.jpg', inStock: true },
  { id: 'choker-cuero-estrellas', name: 'CHOKER CUERO', price: 310, category: 'cuero', image: '/images/products/choker-cuero-estrellas.jpg', inStock: true },

  // === PULSERAS ($100) ===
  { id: 'pulsera-canutillo', name: 'PULSERA DE CANUTILLO', price: 100, category: 'pulseras', image: '/images/products/pulsera-canutillo.jpg', inStock: true },
  { id: 'pulsera-perla-ojo', name: 'PULSERA PERLA', price: 100, category: 'pulseras', image: '/images/products/pulsera-perla-ojo.jpg', inStock: true },
  { id: 'pulsera-perla', name: 'PULSERA PERLA', price: 100, category: 'pulseras', image: '/images/products/pulsera-perla.jpg', inStock: true },
  { id: 'esclava', name: 'ESCLAVA', price: 100, category: 'pulseras', image: '/images/products/esclava.jpg', inStock: true },
  { id: 'pulsera-plateada-1', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-1.jpg', inStock: true },
  { id: 'pulsera-plateada-2', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-2.jpg', inStock: true },
  { id: 'pulsera-plateada-3', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-3.jpg', inStock: true },
  { id: 'pulsera-plateada-4', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-4.jpg', inStock: true },
  { id: 'pulsera-plateada-5', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-5.jpg', inStock: true },
  { id: 'pulsera-plateada-6', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-6.jpg', inStock: true },
  { id: 'pulsera-plateada-7', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-7.jpg', inStock: true },
  { id: 'pulsera-plateada-8', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-8.jpg', inStock: true },
  { id: 'pulsera-plateada-9', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-9.jpg', inStock: true },
  { id: 'pulsera-plateada-10', name: 'PULSERA PLATEADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-plateada-10.jpg', inStock: true },
  { id: 'esclava-dorada', name: 'ESCLAVA DORADA', price: 100, category: 'pulseras', image: '/images/products/esclava-dorada.jpg', inStock: true },
  { id: 'pulsera-dorada', name: 'PULSERA DORADA', price: 100, category: 'pulseras', image: '/images/products/pulsera-dorada.jpg', inStock: true },

  // === OTROS ($200) ===
  { id: 'panuelos-brillos', name: 'PAÑUELOS CON BRILLOS', price: 200, category: 'otros', image: '/images/products/panuelos-brillos.jpg', inStock: true, colors: ['plata', 'dorado', 'negro'] },
  { id: 'tientos', name: 'TIENTOS', price: 200, category: 'otros', image: '/images/products/tientos.jpg', inStock: true, colors: ['negro', 'rosa', 'azul', 'verde', 'lila'] },

  // === CARAVANAS ($100-$120) ===
  { id: 'caravanas-argollas', name: 'CARAVANAS ARGOLLAS', price: 100, category: 'otros', image: '/images/products/caravanas-argollas.jpg', inStock: true },
  { id: 'caravanas-gruesas', name: 'CARAVANAS GRUESAS', price: 120, category: 'otros', image: '/images/products/caravanas-gruesas.jpg', inStock: true },
  { id: 'caravanas-dijes', name: 'CARAVANAS CON DIJES', price: 100, category: 'otros', image: '/images/products/caravanas-dijes.jpg', inStock: true },
  { id: 'caravanas-variadas', name: 'CARAVANAS VARIADAS', price: 100, category: 'otros', image: '/images/products/caravanas-variadas.jpg', inStock: true },
];

export const categories: CategoryInfo[] = [
  { slug: 'cadenas', name: 'Cadenas', description: 'Cadenas de acero en diferentes estilos', image: '/images/categories/cadenas.jpg', productCount: 32 },
  { slug: 'collares-mostacillas', name: 'Mostacillas', description: 'Collares artesanales de mostacillas', image: '/images/categories/mostacillas.jpg', productCount: 17 },
  { slug: 'cuero', name: 'Cuero', description: 'Chokers artesanales de cuero', image: '/images/categories/cuero.jpg', productCount: 4 },
  { slug: 'pulseras', name: 'Pulseras', description: 'Pulseras de perla, canutillo y esclavas', image: '/images/categories/pulseras.jpg', productCount: 16 },
  { slug: 'caravanas', name: 'Caravanas', description: 'Caravanas de diferentes estilos', image: '/images/categories/caravanas.jpg', productCount: 4 },
  { slug: 'llavero', name: 'Llaveros', description: 'Llaveros de diferentes estilos', image: '/images/categories/llaveros.jpg', productCount: 4 },
  { slug: 'tientos', name: 'Tientos', description: 'Tientos de diferentes estilos', image: '/images/categories/tientos.jpg', productCount: 4 },
  { slug: 'cintos', name: 'Cintos y Pañuelos', description: 'Cintos y pañuelos de diferentes estilos', image: '/images/categories/cintos.jpg', productCount: 4 },
  { slug: 'combos', name: 'Combos', description: 'Combos de diferentes estilos', image: '/images/categories/combos.jpg', productCount: 4 },
  

];
