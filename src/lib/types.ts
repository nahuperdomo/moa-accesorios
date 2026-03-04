export type Category =
  | 'cadenas'
  | 'collares-mostacillas'
  | 'chokers'
  | 'pulseras'
  | 'cuero'
  | 'otros';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  inStock: boolean;
  isNew?: boolean;
  description?: string;
  colors?: string[];
}

export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  image: string;
  productCount: number;
}
