import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos
        'bg-primary': '#E8E6DF',
        'bg-sage': '#D5D9C7',
        'bg-paper': '#DDD9D0',
        'bg-card': '#EDEBE5',
        // Textos
        'ink': '#1A1A1A',
        'ink-secondary': '#4A4A4A',
        'ink-muted': '#8A8A82',
        // Acentos
        'mint': '#7BA18C',
        'mint-light': '#9FBFAC',
        'mint-pale': '#D5D9C7',
        'gold': '#C4A265',
        'terracotta': '#C17F5E',
        // Funcionales
        'sold-out': '#B5715A',
        'whatsapp': '#25D366',
        'whatsapp-hover': '#1FAD53',
        // Bordes
        'border-soft': '#D0CEC6',
        'border-medium': '#C8C4BA',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      letterSpacing: {
        catalog: '0.15em',
      },
    },
  },
  plugins: [],
};
export default config;
