
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { productCategoryDetails } from '@/lib/data/categories';
import { Breadcrumbs } from '@/components/breadcrumbs';

interface KategorilerSlugContentProps {
  slug: string;
}

export default function KategorilerSlugContent({ slug }: KategorilerSlugContentProps) {
  const category = productCategoryDetails.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  const filteredProducts = products.filter(
    product => product.category === category.name
  );

  const breadcrumbLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Ürünler', href: '/urunler' },
    { name: category.name, href: `/kategoriler/${category.slug}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs links={breadcrumbLinks} />
      <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-4">{category.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{category.description}</p>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">Bu kategoriye ait ürün bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
