import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { findImage } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const highlightedProject = projects[0];

export function ProjectHighlight() {
  if (!highlightedProject) return null;

  const image = findImage(highlightedProject.coverImage);

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge>Vaka Analizi</Badge>
            <h2 className="mt-4 text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              {highlightedProject.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              <strong className="text-foreground">Zorluk:</strong> {highlightedProject.challenge}
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              <strong className="text-foreground">Çözüm:</strong> {highlightedProject.solution}
            </p>
             <p className="mt-6 text-xl font-semibold text-primary">
              Sonuç: {highlightedProject.result}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                    <Link href={`/projeler/${highlightedProject.slug}`}>Projeyi İncele</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/projeler">Tüm Projeler <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-w-4 aspect-h-3">
            {image && (
                <Image
                  src={image.imageUrl}
                  alt={highlightedProject.title}
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                  data-ai-hint={image.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

