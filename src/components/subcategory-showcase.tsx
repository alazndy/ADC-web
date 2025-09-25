
"use client";

import Image from "next/image";
import Link from "next/link";
import { findImage } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SubCategoryShowcaseProps {
    title: string;
    slug: string;
    description: string;
    features?: string[];
    image: string;
    imageHint?: string;
    direction?: 'normal' | 'reverse';
}

export function SubCategoryShowcase({ title, slug, description, features, image: imageId, imageHint, direction = 'normal' }: SubCategoryShowcaseProps) {
    const image = findImage(imageId);

    return (
        <div className={cn("grid md:grid-cols-2 gap-8 md:gap-12 items-center", direction === 'reverse' && 'md:[&>*:last-child]:order-first')}>
            <div className="aspect-square relative rounded-lg overflow-hidden group border bg-card">
                 {image && (
                    <Image
                        src={image.imageUrl}
                        alt={title}
                        fill
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={imageHint}
                    />
                )}
            </div>
            <div>
                <h2 className="text-3xl font-bold font-headline">{title}</h2>
                <p className="mt-4 text-muted-foreground text-base">{description}</p>
                {features && features.length > 0 && (
                    <ul className="mt-6 space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-foreground/90">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <Button asChild className="mt-8">
                    {/* This link should eventually go to a more specific sub-category or product list */}
                    <Link href={`/urunler/kategori/kamera-monitor-sistemleri`}>Daha Fazla Bilgi Edin</Link>
                </Button>
            </div>
        </div>
    );
}

