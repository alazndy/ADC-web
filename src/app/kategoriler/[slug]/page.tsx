
import { productCategoryDetails } from '@/lib/data/categories';
import KategorilerSlugContent from "@/components/kategoriler/kategoriler-slug-content";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Helper function to generate metadata
export async function generateMetadata({ params }: CategoryPageProps) {
  const category = productCategoryDetails.find(cat => cat.slug === params.slug);

  if (!category) {
    return {
      title: 'Kategori Bulunamadı',
    };
  }

  return {
    title: `${category.name} | ADC Tasarım`,
    description: `ADC Tasarım tarafından sunulan ${category.name} ürünlerini keşfedin.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <KategorilerSlugContent slug={params.slug} />;
}

// Generate static paths for all categories
export async function generateStaticParams() {
    return productCategoryDetails.map(category => ({
      slug: category.slug,
    }));
}
