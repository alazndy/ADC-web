
import { products } from '@/lib/data';

export const allCategories = [...new Set(products.map(p => p.category))].sort();

export const categoryToSlug = (categoryName: string) => {
  if (!categoryName) return '';
  return categoryName.toLowerCase()
    .replace(/ /g, '-')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^\w-]+/g, '');
};

export const slugToCategory = (slug: string) => {
    return allCategories.find(cat => categoryToSlug(cat) === slug);
};

