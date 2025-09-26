
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const image = findImage(product.imageUrls[0]);

  return (
    <Card className="h-full flex flex-col group overflow-hidden transition-shadow hover:shadow-lg bg-card border-border hover:border-primary/30">
      <CardHeader className="p-0">
        <Link href={`/urunler/${product.slug}`} className="block aspect-video relative overflow-hidden bg-secondary/50">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={image.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none dark:from-black/20 dark:to-white/5" />
        </Link>
      </CardHeader>
      <div className="p-4 flex flex-col flex-grow">
        <Badge variant="outline" className="w-fit mb-2 text-xs">{product.category}</Badge>
        <CardTitle className="text-base font-headline flex-grow mt-1 text-card-foreground">
            <Link href={`/urunler/${product.slug}`} className="hover:text-primary transition-colors">
                <span className="absolute inset-0" />
                {product.name}
            </Link>
        </CardTitle>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
      </div>
    </Card>
  );
}
