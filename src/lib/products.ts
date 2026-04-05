import { supabase } from './supabase';
import { Product, CategoryInfo } from './types';

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  console.log('Supabase products count:', data?.length);
  console.log('Raw products from Supabase:', data);
  console.log('First product photoVariants:', data?.[0]?.photo_variants);
  console.log('All product IDs:', data?.map(p => ({ id: p.id, name: p.name, hasVariants: !!p.photo_variants })));
  
  // Log específico del producto actualizado
  const targetProduct = data?.find(p => p.id === 'hilo-mostacillas-multi');
  console.log('Target product (hilo-mostacillas-multi):', targetProduct);
  console.log('Target product photo_variants:', targetProduct?.photo_variants);
  
  return data || [];
}

export async function getCategories(): Promise<CategoryInfo[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}