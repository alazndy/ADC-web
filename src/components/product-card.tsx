import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const image = findImage(product.imageUrls[0]);

  return (
    <Card className="h-full flex flex-col group overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/urunler/${product.slug}`} className="block aspect-video relative overflow-hidden bg-card">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={image.imageHint}
            />
          )}
        </Link>
      </CardHeader>
      <div className="p-4 flex flex-col flex-grow">
        <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
        <CardTitle className="text-base font-headline flex-grow mt-1">
            <Link href={`/urunler/${product.slug}`} className="hover:text-primary transition-colors">
                <span className="absolute inset-0" />
                {product.name}
            </Link>
        </CardTitle>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{product.shortDescription}</p>
      </div>
    </Card>
  );
}
